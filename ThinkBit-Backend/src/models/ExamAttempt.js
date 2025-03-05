// const mongoose = require("mongoose");

// const examAttemptSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   examId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Exam",
//     required: true,
//   },
//   startedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   endedAt: {
//     type: Date,
//   },
//   answers: [
//     {
//       questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
//       selectedOption: { type: String, required: true },
//     },
//   ],
//   score: {
//     type: Number,
//     default: 0,
//   },
//   status: {
//     type: String,
//     enum: ["ongoing", "completed"],
//     default: "ongoing",
//   },
// });

// const ExamAttempt = mongoose.model("ExamAttempt", examAttemptSchema);

// module.exports = ExamAttempt;


const mongoose = require("mongoose");

const examAttemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  startedAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
      selectedOption: { type: String }, // ✅ Only for MCQ answers
      answerText: { type: String }, // ✅ Only for Subjective answers
      isCorrect: { type: Boolean, default: null }, // ✅ For MCQ auto-grading
      marksObtained: { type: Number, default: null }, // ✅ Examiner updates this for subjective answers
      reviewStatus: {
        type: String,
        enum: ["pending", "reviewed"],
        default: "pending",
      }, // ✅ Tracks grading status
    },
  ],
  totalScore: { type: Number, default: 0 }, // ✅ Stores final marks
  status: { type: String, enum: ["ongoing", "completed"], default: "ongoing" },
});

const ExamAttempt = mongoose.model("ExamAttempt", examAttemptSchema);

module.exports = ExamAttempt;
