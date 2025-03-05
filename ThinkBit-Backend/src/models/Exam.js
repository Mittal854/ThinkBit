// const mongoose = require("mongoose");

// const questionSchema = new mongoose.Schema({
//   _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
//   questionText: { type: String, required: true },
//   options: [String],
//   correctOption: { type: String, required: true },
// });

// const examSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     questions: [questionSchema], // ✅ Embed question schema
//     duration: { type: Number, required: true }, // ✅ Total duration of the exam
//     timeAllotted: { type: Number, required: true }, // ✅ Per-student time limit (in minutes)
//     startTime: { type: Date, required: true }, // ✅ When the exam starts
//     endTime: { type: Date }, // ✅ Auto-calculated field
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// // ✅ Automatically set endTime based on startTime + duration
// examSchema.pre("save", function (next) {
//   if (this.startTime && this.duration) {
//     this.endTime = new Date(this.startTime.getTime() + this.duration * 60000);
//   }
//   next();
// });

// const Exam = mongoose.model("Exam", examSchema);
// module.exports = Exam;


// const mongoose = require("mongoose");

// const questionSchema = new mongoose.Schema({
//   _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
//   questionText: { type: String, required: true },
//   type: { type: String, enum: ["MCQ", "Subjective"], required: true },
//   options: { type: [String], default: undefined }, // Optional for MCQ
//   correctOption: { type: String, default: undefined }, // Only required for MCQ
// });

// // ✅ Exam Schema
// const examSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     questions: [questionSchema], // Supports both MCQ & Subjective
//     duration: { type: Number, required: true },
//     timeAllotted: { type: Number, required: true },
//     startTime: { type: Date, required: true },
//     endTime: { type: Date },
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// // ✅ Automatically set `endTime` before saving
// examSchema.pre("save", function (next) {
//   if (this.startTime && this.duration) {
//     this.endTime = new Date(this.startTime.getTime() + this.duration * 60000);
//   }
//   next();
// });

// const Exam = mongoose.model("Exam", examSchema);
// module.exports = Exam;

// const mongoose = require("mongoose");

// const questionSchema = new mongoose.Schema({
//   _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
//   questionText: { type: String, required: true },
//   type: { type: String, enum: ["MCQ", "Subjective"], required: true },
//   options: { type: [String], default: undefined }, // Optional for MCQ
//   correctOption: { type: String, default: undefined }, // Only required for MCQ
//   marks: { type: Number, required: true }, // ✅ Added marks for the question
// });

// const examSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     questions: [questionSchema], // Supports both MCQ & Subjective
//     duration: { type: Number, required: true },
//     timeAllotted: { type: Number, required: true },
//     startTime: { type: Date, required: true },
//     endTime: { type: Date },
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// const Exam = mongoose.model("Exam", examSchema);
// module.exports = Exam;


const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  questionText: { type: String, required: true },
  type: { type: String, enum: ["MCQ", "Subjective"], required: true },
  options: { type: [String], default: undefined }, // Optional for MCQ
  correctOption: { type: String, default: undefined }, // Only required for MCQ
  marks: { type: Number, required: true }, // ✅ Marks per question
});

const examSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    questions: [questionSchema], // Supports both MCQ & Subjective
    duration: { type: Number, required: true },
    timeAllotted: { type: Number, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // ✅ Tracks enrolled students
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;
