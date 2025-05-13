const mongoose = require("mongoose");

const ExamAnalyticsSchema = new mongoose.Schema({
  examinerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  examId: {
    // Add this field to properly identify each exam
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  name: String,
  avgScore: Number,
  passRate: Number,
  totalAttempts: Number,
});

// Compound index to ensure uniqueness of examiner+exam combination
ExamAnalyticsSchema.index({ examinerId: 1, examId: 1 }, { unique: true });

module.exports = mongoose.model("ExamAnalytics", ExamAnalyticsSchema);
