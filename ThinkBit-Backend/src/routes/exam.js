
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
