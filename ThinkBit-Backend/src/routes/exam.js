// const express = require("express");
// const mongoose = require("mongoose");
// const Exam = require("../models/Exam");
// const { verifyToken } = require("../middleware/authMiddleware");
// const router = express.Router();

// // Add Question to Exam
// router.get("/", verifyToken, async (req, res) => {
//   try {
//     const exams = await Exam.find({ createdBy: req.user.id }); // Assuming req.user.id is the teacher's ID
//     res.json(exams);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.post("/:examId/add-question", async (req, res) => {
//   try {
//     const { examId } = req.params;
//     const { questionText, type, options, correctOption, marks } = req.body;

//     const exam = await Exam.findById(examId);
//     if (!exam) return res.status(404).json({ message: "Exam not found" });

//     const newQuestion = {
//       _id: new mongoose.Types.ObjectId(),
//       questionText,
//       type,
//       options: type === "MCQ" ? options : undefined,
//       correctOption: type === "MCQ" ? correctOption : undefined,
//       marks,
//     };

//     exam.questions.push(newQuestion);
//     await exam.save();

//     res
//       .status(201)
//       .json({ message: "Question added successfully", newQuestion });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Edit Question in Exam
// router.put("/:examId/edit-question/:questionId", async (req, res) => {
//   try {
//     const { examId, questionId } = req.params;
//     const { questionText, type, options, correctOption, marks } = req.body;

//     const exam = await Exam.findById(examId);
//     if (!exam) return res.status(404).json({ message: "Exam not found" });

//     const question = exam.questions.id(questionId);
//     if (!question)
//       return res.status(404).json({ message: "Question not found" });

//     // Update fields
//     question.questionText = questionText;
//     question.type = type;
//     question.options = type === "MCQ" ? options : undefined;
//     question.correctOption = type === "MCQ" ? correctOption : undefined;
//     question.marks = marks;

//     await exam.save();
//     res
//       .status(200)
//       .json({ message: "Question updated successfully", question });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Delete Question from Exam
// router.delete("/:examId/delete-question/:questionId", async (req, res) => {
//   try {
//     const { examId, questionId } = req.params;
//     const exam = await Exam.findById(examId);
//     if (!exam) return res.status(404).json({ message: "Exam not found" });

//     exam.questions = exam.questions.filter(
//       (q) => q._id.toString() !== questionId
//     );
//     await exam.save();

//     res.status(200).json({ message: "Question deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;

// const express = require("express");
// const mongoose = require("mongoose");
// const Exam = require("../models/Exam");
// const { verifyToken } = require("../middleware/authMiddleware");
// const router = express.Router();


// router.get("/", verifyToken, async (req, res) => {
//   try {
//     console.log("User from token:", req.user); // Check user info

//     if (!req.user || !req.user.id) {
//       console.error("User ID is missing in request");
//       return res.status(400).json({ error: "User ID not found in token" });
//     }

//     const exams = await Exam.find({ createdBy: req.user.id });
//     console.log("Fetched Exams:", exams);

//     res.json(exams);
//   } catch (error) {
//     console.error("Error fetching exams:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ Get questions for a specific exam
// router.get("/:examId/questions", verifyToken, async (req, res) => {
//   try {
//     const { examId } = req.params;
//     const exam = await Exam.findById(examId);
//     if (!exam) return res.status(404).json({ message: "Exam not found" });

//     res.json(exam.questions); // Return questions
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // ✅ Add a question to an exam
// router.post("/:examId/add-question", verifyToken, async (req, res) => {
//   try {
//     const { examId } = req.params;
//     const { questionText, type, options, correctOption, marks } = req.body;

//     const exam = await Exam.findById(examId);
//     if (!exam) return res.status(404).json({ message: "Exam not found" });

//     const newQuestion = {
//       _id: new mongoose.Types.ObjectId(),
//       questionText,
//       type,
//       options: type === "MCQ" ? options : [], // Store options for MCQ
//       correctOption: type === "MCQ" ? correctOption : null, // Store correct option for MCQ
//       marks,
//     };

//     exam.questions.push(newQuestion);
//     await exam.save();

//     res
//       .status(201)
//       .json({ message: "Question added successfully", newQuestion });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // ✅ Delete a question
// router.delete(
//   "/:examId/delete-question/:questionId",
//   verifyToken,
//   async (req, res) => {
//     try {
//       const { examId, questionId } = req.params;
//       const exam = await Exam.findById(examId);
//       if (!exam) return res.status(404).json({ message: "Exam not found" });

//       exam.questions = exam.questions.filter(
//         (q) => q._id.toString() !== questionId
//       );
//       await exam.save();

//       res.status(200).json({ message: "Question deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error });
//     }
//   }
// );

// module.exports = router;

// const express = require("express");
// const mongoose = require("mongoose");
// const Exam = require("../models/Exam");
// const { verifyToken } = require("../middleware/authMiddleware");
// const router = express.Router();

// // ✅ Get all exams created by the logged-in user
// router.get("/", verifyToken, async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) {
//       return res.status(400).json({ error: "User ID not found in token" });
//     }
//     const exams = await Exam.find({ createdBy: req.user.id });
//     res.json(exams);
//   } catch (error) {
//     console.error("Error fetching exams:", error); // Add this line
//     res.status(500).json({ error: error.message });
//   }
// });


// // ✅ Get questions for a specific exam
// router.get("/:examId/questions", verifyToken, async (req, res) => {
//   try {
//     const exam = await Exam.findById(req.params.examId);
//     if (!exam) return res.status(404).json({ message: "Exam not found" });

//     res.json(exam.questions);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ Add a question
// router.post("/:examId/add-question", verifyToken, async (req, res) => {
//   try {
//     const exam = await Exam.findById(req.params.examId);
//     const newQuestion = { _id: new mongoose.Types.ObjectId(), ...req.body };
//     exam.questions.push(newQuestion);
//     await exam.save();
//     res.json({ message: "Question added", newQuestion });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ Delete a question
// // router.delete(
// //   "/:examId/delete-question/:questionId",
// //   verifyToken,
// //   async (req, res) => {
// //     try {
// //       const exam = await Exam.findById(req.params.examId);
// //       exam.questions = exam.questions.filter(
// //         (q) => q._id.toString() !== req.params.questionId
// //       );
// //       await exam.save();
// //       res.json({ message: "Question deleted" });
// //     } catch (error) {
// //       res.status(500).json({ error: error.message });
// //     }
// //   }
// // );
// router.delete(
//   "/:examId/delete-question/:questionId",
//   verifyToken,
//   async (req, res) => {
//     try {
//       const exam = await Exam.findById(req.params.examId);
//       if (!exam) return res.status(404).json({ error: "Exam not found" });

//       exam.questions = exam.questions.filter(
//         (q) => q._id.toString() !== req.params.questionId
//       );
//       await exam.save();

//       res.json({ message: "Question deleted" });
//     } catch (error) {
//       console.error("Error deleting question:", error);
//       res.status(500).json({ error: error.message });
//     }
//   }
// );

// module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const Exam = require("../models/Exam");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

// Get all exams
router.get("/", verifyToken, async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({ error: "User ID not found in token" });
    }
    const exams = await Exam.find({ createdBy: req.user.id });
    res.json(exams);
  } catch (error) {
    console.error("Error fetching exams:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get questions for a specific exam
router.get("/:examId/questions", verifyToken, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    res.json(exam.questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a question
router.post("/:examId/add-question", verifyToken, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examId);
    if (!exam) return res.status(404).json({ error: "Exam not found" });

    const newQuestion = { _id: new mongoose.Types.ObjectId(), ...req.body };
    exam.questions.push(newQuestion);
    await exam.save();

    res.json({ message: "Question added", newQuestion });
  } catch (error) {
    console.error("Error adding question:", error);
    res.status(500).json({ error: error.message });
  }
});


// Delete a question
router.delete(
  "/:examId/delete-question/:questionId",
  verifyToken,
  async (req, res) => {
    try {
      const exam = await Exam.findById(req.params.examId);
      exam.questions = exam.questions.filter(
        (q) => q._id.toString() !== req.params.questionId
      );
      await exam.save();
      res.json({ message: "Question deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
