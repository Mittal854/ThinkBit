const mongoose = require("mongoose");
const Exam = require("../models/Exam");
const ExamAttempt = require("../models/ExamAttempt");
const ExamAnalytics = require("../models/ExamAnalytics");
const ExamResult = require("../models/ExamResult");
const TopPerformer = require("../models/TopPerformers");

// 🏁 Student: Start an Exam
const startExam = async (req, res) => {
  try {
    const { examId } = req.body;
    const studentId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(examId)) {
      return res.status(400).json({ message: "Invalid Exam ID format" });
    }

    const exam = await Exam.findById(examId).lean(); // Converts Mongoose document to plain JS object
    console.log("Fetched Exam Data:", exam);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const currentTime = new Date();
    if (currentTime < exam.startTime) {
      return res.status(403).json({ message: "Exam has not started yet." });
    }
    if (currentTime > exam.endTime) {
      return res.status(403).json({ message: "Exam has ended." });
    }

    const existingAttempt = await ExamAttempt.findOne({
      userId: studentId,
      examId,
    });
    if (existingAttempt) {
      return res
        .status(400)
        .json({ message: "You have already started this exam." });
    }
    const totalMarks = exam.questions.reduce((sum, question) => {
      return sum + (question.marks || 0); // ✅ Default to 0 if marks field is missing
    }, 0);
    console.log("Total Marks Calculated:", totalMarks);
    const newAttempt = new ExamAttempt({
      userId: studentId,
      examId,
      startedAt: currentTime,
      totalScore: totalMarks,
      status: "ongoing",
      endTime: new Date(currentTime.getTime() + exam.timeAllotted * 60000),
    });

    await newAttempt.save();
    res.status(200).json({
      message: "Exam started successfully",
      attemptId: newAttempt._id,
      endTime: newAttempt.endTime,
    });
  } catch (error) {
    console.error("Error starting exam:", error);
    res
      .status(500)
      .json({ message: "Error starting exam", error: error.message });
  }
};


const submitExam = async (req, res) => {
  try {
    const { attemptId, answers } = req.body;
    const studentId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(attemptId)) {
      return res.status(400).json({ message: "Invalid Attempt ID format" });
    }

    // Find the attempt
    const attempt = await ExamAttempt.findById(attemptId);
    if (!attempt) {
      return res.status(404).json({ message: "Exam attempt not found" });
    }

    // Verify the attempt belongs to this student
    if (attempt.userId.toString() !== studentId) {
      return res
        .status(403)
        .json({ message: "Unauthorized access to this attempt" });
    }

    // Check if attempt is already completed
    if (attempt.status === "completed") {
      return res
        .status(400)
        .json({ message: "This exam has already been submitted" });
    }

    // Get the exam details
    const exam = await Exam.findById(attempt.examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Check if time is up
    const currentTime = new Date();
    const endTime = new Date(attempt.startedAt);
    endTime.setMinutes(endTime.getMinutes() + exam.duration);

    if (currentTime > endTime) {
      attempt.status = "completed";
      attempt.endedAt = currentTime;
      await attempt.save();
      return res.status(400).json({ message: "Time is up! Auto-submitted." });
    }

    // Process answers
    const processedAnswers = [];
    let autoGradedScore = 0;
    let totalReviewedScore = 0;

    for (const question of exam.questions) {
      const questionId = question._id.toString();
      const answer = answers[questionId];

      // Process based on question type
      if (question.type === "MCQ") {
        // Auto-grade MCQs
        const isCorrect = answer === question.correctOption;
        const marksObtained = isCorrect ? question.marks : 0;
        autoGradedScore += marksObtained;

        processedAnswers.push({
          questionId: question._id,
          selectedOption: answer,
          isCorrect,
          marksObtained,
          reviewStatus: "reviewed", // MCQs are auto-reviewed
        });
      } else if (question.type === "Subjective") {
        // Store subjective answers for teacher review
        processedAnswers.push({
          questionId: question._id,
          answerText: answer,
          marksObtained: 0, // Initially 0 until reviewed
          reviewStatus: "pending",
        });
      }
    }

    // Update the attempt
    attempt.answers = processedAnswers;
    attempt.totalScore = autoGradedScore; // Initial score is just from MCQs
    attempt.status = "completed";
    attempt.endedAt = currentTime;
    await attempt.save();

    // Create a result record with initial score
    const result = new ExamResult({
      studentId: studentId,
      examinerId: exam.createdBy,
      examId: exam._id,
      score: autoGradedScore,
      totalMarks: exam.questions.reduce((total, q) => total + q.marks, 0),
      passed:
        autoGradedScore /
          exam.questions.reduce((total, q) => total + q.marks, 0) >=
        0.4, // Assuming passing score is 40%
      createdAt: currentTime,
    });
    await result.save();

    res.status(200).json({
      message: "Exam submitted successfully",
      autoGradedScore,
      totalQuestions: exam.questions.length,
      status: "Subjective questions pending review",
    });
  } catch (error) {
    console.error("Error submitting exam:", error);
    res
      .status(500)
      .json({ message: "Error submitting exam", error: error.message });
  }
};

const createExam = async (req, res) => {
  try {
    const { title, questions, duration, startTime, timeAllotted } = req.body;
    const teacherId = req.user.id;

    if (
      !title ||
      !Array.isArray(questions) ||
      questions.length === 0 ||
      !duration ||
      !startTime ||
      !timeAllotted
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Validate questions before saving
    for (const question of questions) {
      if (!question.questionText.trim()) {
        return res
          .status(400)
          .json({ message: "Each question must have text." });
      }

      if (question.type === "MCQ") {
        if (!question.options || question.options.length < 2) {
          return res
            .status(400)
            .json({ message: "MCQs must have at least two options." });
        }
        if (!question.correctOption || question.correctOption.trim() === "") {
          return res
            .status(400)
            .json({ message: "MCQs must have a correct answer." });
        }
      }

      if (!question.marks || question.marks <= 0) {
        return res
          .status(400)
          .json({ message: "Each question must have a valid marks value." });
      }
    }

    const newExam = new Exam({
      title,
      questions,
      duration,
      timeAllotted,
      startTime: new Date(startTime),
      endTime: new Date(new Date(startTime).getTime() + duration * 60000),
      createdBy: teacherId,
    });

    await newExam.save();
    res.status(201).json({
      message: "Exam created successfully",
      examId: newExam._id,
    });
  } catch (error) {
    console.error("Error creating exam:", error);
    res
      .status(500)
      .json({ message: "Error creating exam", error: error.message });
  }
};


// 🎯 Student: Get Exam Result
const getExamResult = async (req, res) => {
  try {
    const { attemptId } = req.params;
    const studentId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(attemptId)) {
      return res.status(400).json({ message: "Invalid Attempt ID format" });
    }

    const attempt = await ExamAttempt.findOne({
      _id: attemptId,
      userId: studentId,
    }).populate("examId");

    if (!attempt) {
      return res.status(404).json({ message: "Exam attempt not found" });
    }

    const exam = attempt.examId;
    const result = {
      examTitle: exam.title,
      score: attempt.score,
      totalQuestions: exam.questions.length,
      correctAnswers: exam.questions.map((q) => ({
        questionText: q.questionText,
        correctOption: q.correctOption,
      })),
      submittedAt: attempt.endedAt,
    };

    res
      .status(200)
      .json({ message: "Exam result retrieved successfully", result });
  } catch (error) {
    console.error("Error fetching exam result:", error);
    res
      .status(500)
      .json({ message: "Error fetching exam result", error: error.message });
  }
};
const getMyExams = async (req, res) => {
  try {
    const userId = req.user.id;

    // ✅ Fetch only exams where the student is enrolled
    const exams = await Exam.find({ enrolledStudents: userId }).lean();

    // Get attempts by this user
    const attempts = await ExamAttempt.find({ userId }).lean();

    // Map exams with attempt details
    const userExams = exams.map((exam) => {
      const attempt = attempts.find(
        (a) => a.examId.toString() === exam._id.toString()
      );

      return {
        id: exam._id,
        name: exam.title,
        date: new Date(exam.startTime).toDateString(),
        duration: `${exam.timeAllotted} mins`,
        totalMarks: exam.questions.reduce(
          (sum, question) => sum + question.marks,
          0
        ), // ✅ Sums up individual question marks

        startTime: exam.startTime, // ✅ Include startTime
        endTime: exam.endTime, // ✅ Include endTime
        status: attempt
          ? attempt.status === "completed"
            ? "Completed"
            : "Ongoing"
          : "Upcoming",
        attemptsLeft: attempt ? (attempt.status === "completed" ? 0 : 1) : 1,
      };
    });

    res.json({
      message: "User's enrolled exams retrieved successfully",
      exams: userExams,
    });
  } catch (error) {
    console.error("Error fetching enrolled exams:", error);
    res
      .status(500)
      .json({ message: "Error fetching enrolled exams", error: error.message });
  }
};

const attempt = async (req, res) => {
  try {
    const { attemptId } = req.params;
    const attempt = await ExamAttempt.findById(attemptId).populate("examId");

    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    res.json({
      attemptId: attempt._id,
      examId: attempt.examId._id,
      name: attempt.examId.title,
      duration: attempt.examId.timeAllotted,
      totalScore:attempt.totalScore, // ✅ Sums up individual question marks

      questions: attempt.examId.questions,
      startTime: attempt.startedAt, // ✅ Ensure this is sent
      endTime: attempt.endedAt || null,
      status: attempt.status,
    });
  } catch (error) {
    console.error("Error fetching attempt:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserExamResults = async (req, res) => {
  try {
    const userId = req.user.id;
    const attempts = await ExamAttempt.find({
      userId,
      status: "completed",
    }).populate("examId");

    if (!attempts.length) {
      return res.json({ message: "No completed exams yet.", results: [] });
    }

    const results = attempts.map((attempt) => ({
      examName: attempt.examId.title,
      score: attempt.score,
    }));

    res.json({ results });
  } catch (error) {
    console.error("Error fetching exam results:", error);
    res.status(500).json({ message: "Error fetching results" });
  }
};

const getUserExamHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const attempts = await ExamAttempt.find({
      userId,
      status: "completed",
    }).populate("examId");

    if (!attempts.length) {
      return res.json({ message: "No completed exams yet.", results: [] });
    }

    const results = attempts.map((attempt) => ({
      id: attempt._id,
      name: attempt.examId.title,
      date: attempt.createdAt.toISOString().split("T")[0], // Format date
      score: attempt.score,
      grade: attempt.grade || "N/A",
      canReattempt: attempt.examId.canReattempt || false,
    }));

    res.json({ results });
  } catch (error) {
    console.error("Error fetching exam history:", error);
    res.status(500).json({ message: "Error fetching exam history" });
  }
};

const getExamAnalytics = async (req, res) => {
  const { examinerId } = req.params; // Get examiner ID from request

  try {
    const exams = await ExamAnalytics.find({ examinerId });

    const results = await ExamResult.find({ examinerId });
    const topPerformers = await TopPerformer.find({ examinerId })
      .sort({ score: -1 })
      .limit(5);

    // Calculate updated analytics
    const updatedExams = exams.map((exam) => {
      const examResults = results.filter(
        (r) => r.examId.toString() === exam._id.toString()
      );
      const totalAttempts = examResults.length;
      const avgScore = totalAttempts
        ? examResults.reduce((sum, r) => sum + r.score, 0) / totalAttempts
        : 0;
      const passRate = totalAttempts
        ? (examResults.filter((r) => r.passed).length / totalAttempts) * 100
        : 0;

      return {
        ...exam._doc,
        avgScore: avgScore.toFixed(1),
        passRate: passRate.toFixed(1),
        totalAttempts,
      };
    });

    res.json({ examData: updatedExams, topPerformers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const allexams = async (req, res) => {
  try {
    const exams = await Exam.find().populate("enrolledStudents", "_id");

    const now = new Date();

    const updatedExams = exams.map((exam) => {
      let status;
      if (now < exam.startTime) {
        status = "Upcoming";
      } else if (exam.endTime && now > exam.endTime) {
        status = "Completed"; // ✅ Fix: Mark as "Completed" if endTime has passed
      } else {
        status = "Ongoing";
      }

      return { ...exam.toObject(), status };
    });

    res.json(updatedExams);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching exams", error: error.message });
  }
};

const enroll = async (req, res) => {
  try {
    const { examId } = req.body;
    const studentId = req.user?.id;

    if (!studentId) return res.status(401).json({ message: "Unauthorized" });

    if (!examId)
      return res.status(400).json({ message: "Exam ID is required" });

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    if (exam.enrolledStudents.includes(studentId))
      return res.status(400).json({ message: "Already enrolled" });

    exam.enrolledStudents.push(studentId);
    await exam.save();

    res.status(200).json({ message: "Successfully enrolled in exam" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error enrolling in exam", error: error.message });
  }
};

module.exports = {
  startExam,
  createExam,
  submitExam,
  getExamResult,
  getMyExams,
  getUserExamResults,
  getUserExamHistory,
  getExamAnalytics,
  allexams,
  enroll,
  attempt
};
