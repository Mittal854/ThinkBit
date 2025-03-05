const mongoose = require("mongoose");

const ExamAnalyticsSchema = new mongoose.Schema({
  examinerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Linking to Examiner
  name: String,
  avgScore: Number,
  passRate: Number,
  totalAttempts: Number,
});

module.exports = mongoose.model("ExamAnalytics", ExamAnalyticsSchema);
