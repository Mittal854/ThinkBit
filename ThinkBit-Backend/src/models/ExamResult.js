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
  createdAt: {
    type: Date,
    default: () => {
      const offsetMs = new Date().getTimezoneOffset() * 60000;
      return new Date(Date.now() - offsetMs); // manually adjust to local timezone
    },
  },
});

module.exports = mongoose.model("ExamResult", ExamResultSchema);
