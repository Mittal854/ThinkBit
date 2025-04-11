
const mongoose = require("mongoose");

const examAttemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
    answers: [
      {
        questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
        selectedOption: { type: String },
        answerText: { type: String },
        isCorrect: { type: Boolean, default: null },
        marksObtained: { type: Number, default: null },
        reviewStatus: {
          type: String,
          enum: ["pending", "reviewed"],
          default: "pending",
        },
      },
    ],
    totalScore: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
  },
  {
    timestamps: true, // ✅ Enables createdAt and updatedAt fields
  }
);

const ExamAttempt = mongoose.model("ExamAttempt", examAttemptSchema);

module.exports = ExamAttempt;
