const mongoose = require("mongoose");

const TopPerformerSchema = new mongoose.Schema({
  examinerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Linking to Examiner
  name: String,
  score: Number,
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" }, // Linking to specific exam
});

module.exports = mongoose.model("TopPerformer", TopPerformerSchema);
