const mongoose = require("mongoose");

const ExamResultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  examinerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // To filter analytics by examiner
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  score: Number,
  totalMarks: Number,
  passed: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ExamResult", ExamResultSchema);
