
const mongoose = require("mongoose");
const ExamAttempt = require("../models/ExamAttempt");
const Exam = require("../models/Exam");
const User = require("../models/User");
const ExamResult = require("../models/ExamResult");
const { updateExamAnalytics } = require("./examController");

// Get all pending subjective answers for a teacher to evaluate
const getPendingEvaluations = async (req, res) => {
  try {
    const teacherId = req.user.id;

    // Find exams created by this teacher
    const teacherExams = await Exam.find({ createdBy: teacherId });

    if (!teacherExams || teacherExams.length === 0) {
      return res.status(200).json({
        message: "No exams found for evaluation",
        submissions: [],
      });
    }

    const examIds = teacherExams.map((exam) => exam._id);

    // Find all attempts for these exams that have at least one pending review
    const attempts = await ExamAttempt.find({
      examId: { $in: examIds },
      status: "completed",
      "answers.reviewStatus": "pending",
    })
      .populate({
        path: "examId",
        model: "Exam",
      })
      .populate({
        path: "userId",
        model: "User",
        select: "name email",
      });

    if (!attempts || attempts.length === 0) {
      return res.status(200).json({
        message: "No pending subjective answers for evaluation",
        submissions: [],
      });
    }

    // Extract all subjective questions that need review
    const pendingSubmissions = [];

    for (const attempt of attempts) {
      // Skip if examId or userId population failed
      if (!attempt.examId || !attempt.userId) continue;

      const exam = attempt.examId;
      const student = attempt.userId;
      console.log("Processing attempt:", attempt._id);
      console.log("Has examId?", !!attempt.examId);
      console.log("Has userId?", !!attempt.userId);
      console.log("Answers count:", attempt.answers.length);

      // Find all pending subjective answers in this attempt
      for (const answer of attempt.answers) {
        if (answer.reviewStatus === "pending") {
          // Find the question details from the exam
          const question = exam.questions.find(
            (q) => q._id.toString() === answer.questionId.toString()
          );

          if (question && question.type === "Subjective") {
            pendingSubmissions.push({
              attemptId: attempt._id,
              examId: exam._id,
              examTitle: exam.title,
              studentId: student._id,
              studentName:student.name,
              
              submittedAt: attempt.endedAt || attempt.updatedAt,
              question: question,
              answerText: answer.answerText || "",
            });
          }
        }
      }
    }
    console.log("Teacher ID:", teacherId);
    console.log("Teacher exams:", teacherExams.length);
    console.log("Exam IDs:", examIds);
    console.log("Attempts found:", attempts.length);
    console.log("Pending submissions:", pendingSubmissions.length);

    res.status(200).json({
      message:
        pendingSubmissions.length > 0
          ? "Pending evaluations retrieved successfully"
          : "No pending subjective answers for evaluation",
      submissions: pendingSubmissions,
    });
  } catch (error) {
    console.error("Error fetching pending evaluations:", error);
    res.status(500).json({
      message: "Error fetching pending evaluations",
      error: error.message,
      submissions: [], // Always include the submissions array even in error cases
    });
  }
};

// Submit evaluation for a subjective answer
const submitEvaluation = async (req, res) => {
  try {
    const { attemptId, questionId, score, feedback } = req.body;
    const teacherId = req.user.id;

    if (!attemptId || !questionId) {
      return res
        .status(400)
        .json({ message: "Missing required fields: attemptId and questionId" });
    }

    if (
      !mongoose.Types.ObjectId.isValid(attemptId) ||
      !mongoose.Types.ObjectId.isValid(questionId)
    ) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Validate the score
    const numericScore = Number(score);
    if (isNaN(numericScore) || numericScore < 0) {
      return res
        .status(400)
        .json({ message: "Score must be a non-negative number" });
    }

    // Find the attempt
    const attempt = await ExamAttempt.findById(attemptId);

    if (!attempt) {
      return res.status(404).json({ message: "Exam attempt not found" });
    }

    // Populate exam data if not already populated
    if (
      !attempt.examId ||
      typeof attempt.examId === "string" ||
      attempt.examId instanceof mongoose.Types.ObjectId
    ) {
      await attempt.populate("examId");
    }

    // Verify the teacher is the creator of this exam
    if (attempt.examId.createdBy.toString() !== teacherId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to evaluate this exam" });
    }

    // Find the specific answer in the attempt
    const answerIndex = attempt.answers.findIndex(
      (a) => a.questionId.toString() === questionId
    );

    if (answerIndex === -1) {
      return res
        .status(404)
        .json({ message: "Answer not found in this attempt" });
    }

    // Find the question to verify the score is within range
    const question = attempt.examId.questions.find(
      (q) => q._id.toString() === questionId
    );

    if (!question) {
      return res
        .status(404)
        .json({ message: "Question not found in this exam" });
    }

    if (numericScore > question.marks) {
      return res.status(400).json({
        message: `Score cannot exceed maximum marks (${question.marks})`,
      });
    }

    // Update the answer with evaluation
    attempt.answers[answerIndex].marksObtained = numericScore;
    attempt.answers[answerIndex].feedback = feedback;
    attempt.answers[answerIndex].reviewStatus = "reviewed";

    // Update the total score of the attempt
    const newTotalScore = attempt.answers.reduce((sum, answer) => {
      return sum + (answer.marksObtained || 0);
    }, 0);

    attempt.score = newTotalScore;

    await attempt.save();
    await updateExamAnalytics(attempt.examId._id, attempt.examId.createdBy);

    // Update the exam result record if it exists
    const totalMarks = attempt.examId.questions.reduce(
      (sum, q) => sum + q.marks,
      0
    );

    const passPercentage = 40; // Assuming 40% is passing score
    const passed = (newTotalScore / totalMarks) * 100 >= passPercentage;

    try {
      await ExamResult.findOneAndUpdate(
        {
          studentId: attempt.userId,
          examId: attempt.examId._id,
        },
        {
          score: newTotalScore,
          totalMarks,
          passed,
        },
        { upsert: true }
      );
    } catch (resultError) {
      console.error("Warning: Could not update exam result", resultError);
      // Continue execution even if this fails
    }

    res.status(200).json({
      message: "Evaluation submitted successfully",
      updatedScore: newTotalScore,
      totalMarks,
    });
  } catch (error) {
    console.error("Error submitting evaluation:", error);
    res.status(500).json({
      message: "Error submitting evaluation",
      error: error.message,
    });
  }
};

// Get evaluation statistics for a teacher
const getEvaluationStats = async (req, res) => {
  try {
    const teacherId = req.user.id;

    const exams = await Exam.find({ createdBy: teacherId });

    if (!exams || exams.length === 0) {
      return res.status(200).json({
        totalPending: 0,
        recentlyCompleted: 0,
        examStats: [],
      });
    }

    const examIds = exams.map((exam) => exam._id);

    // Count total pending evaluations
    const pendingCount = await ExamAttempt.countDocuments({
      examId: { $in: examIds },
      status: "completed",
      "answers.reviewStatus": "pending",
    });

    // Count completed evaluations in the last 7 days
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const recentlyCompleted = await ExamAttempt.countDocuments({
      examId: { $in: examIds },
      status: "completed",
      "answers.reviewStatus": "reviewed",
      updatedAt: { $gte: oneWeekAgo },
    });

    // Count by exam
    const examStats = [];
    for (const exam of exams) {
      const pending = await ExamAttempt.countDocuments({
        examId: exam._id,
        status: "completed",
        "answers.reviewStatus": "pending",
      });

      const completed = await ExamAttempt.countDocuments({
        examId: exam._id,
        status: "completed",
        "answers.reviewStatus": "reviewed",
      });

      examStats.push({
        examId: exam._id,
        examTitle: exam.title,
        pending,
        completed,
        total: pending + completed,
      });
    }

    res.status(200).json({
      totalPending: pendingCount,
      recentlyCompleted,
      examStats,
    });
  } catch (error) {
    console.error("Error fetching evaluation stats:", error);
    res.status(500).json({
      message: "Error fetching evaluation statistics",
      error: error.message,
      totalPending: 0,
      recentlyCompleted: 0,
      examStats: [],
    });
  }
};

module.exports = {
  getPendingEvaluations,
  submitEvaluation,
  getEvaluationStats,
};