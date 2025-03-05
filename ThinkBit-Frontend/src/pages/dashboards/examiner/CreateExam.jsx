// import React, { useState } from "react";
// import { FaPlus, FaTrash, FaClock, FaCalendarAlt } from "react-icons/fa";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       alert("Please enter a question!");
//       return;
//     }
//     if (
//       questionType === "MCQ" &&
//       newQuestion.options.some((opt) => !opt.trim())
//     ) {
//       alert("Please fill in all MCQ options!");
//       return;
//     }
//     setQuestions([...questions, { ...newQuestion, type: questionType }]);
//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   const handleStartTimeChange = (event) => {
//     const start = new Date(event.target.value);
//     setStartTime(event.target.value);
//     if (duration) {
//       const calculatedEndTime = new Date(start.getTime() + duration * 60000)
//         .toISOString()
//         .slice(0, 16);
//       setEndTime(calculatedEndTime);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300">
//           Exam Title:
//         </label>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div className="mb-6 grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-lg font-semibold text-gray-300">
//             Duration (mins):
//           </label>
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Enter duration"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-semibold text-gray-300">
//             Per Student Time (mins):
//           </label>
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Enter time limit"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="mb-6 grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-lg font-semibold text-gray-300">
//             Start Time:
//           </label>
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={handleStartTimeChange}
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-semibold text-gray-300">
//             End Time:
//           </label>
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       <div className="mb-6 bg-gray-900 p-6 rounded-lg">
//         <h3 className="text-xl font-semibold text-gray-200">
//           ➕ Add Questions
//         </h3>
//         <label className="block text-gray-300">Question Type:</label>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         {questionType === "MCQ" && (
//           <>
//             <label className="block text-gray-300 mt-2">Correct Answer:</label>
//             <select
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//               value={newQuestion.correctOption}
//               onChange={(e) =>
//                 setNewQuestion({
//                   ...newQuestion,
//                   correctOption: e.target.value,
//                 })
//               }>
//               <option value="">Select Correct Option</option>
//               {newQuestion.options.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option || `Option ${index + 1}`}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}
//         <button
//           className="bg-green-500 px-4 py-2 mt-4 rounded-lg text-white hover:bg-green-600 transition-all"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateExam;


// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       alert("Please enter a question!");
//       return;
//     }
//     if (
//       questionType === "MCQ" &&
//       newQuestion.options.some((opt) => !opt.trim())
//     ) {
//       alert("Please fill in all MCQ options!");
//       return;
//     }
//     setQuestions([...questions, { ...newQuestion, type: questionType }]);
//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   const handleStartTimeChange = (event) => {
//     const start = new Date(event.target.value);
//     setStartTime(event.target.value);
//     if (duration) {
//       const calculatedEndTime = new Date(start.getTime() + duration * 60000)
//         .toISOString()
//         .slice(0, 16);
//       setEndTime(calculatedEndTime);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={handleStartTimeChange}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-gray-400"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         {questionType === "MCQ" && (
//           <select
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//             value={newQuestion.correctOption}
//             onChange={(e) =>
//               setNewQuestion({
//                 ...newQuestion,
//                 correctOption: e.target.value,
//               })
//             }>
//             <option value="">Select Correct Option</option>
//             {newQuestion.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option || `Option ${index + 1}`}
//               </option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-blue-500 hover:bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white transition-all flex items-center justify-center gap-2 w-full shadow-lg"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateExam;

// import React, { useState } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       alert("Please enter a question!");
//       return;
//     }
//     if (
//       questionType === "MCQ" &&
//       newQuestion.options.some((opt) => !opt.trim())
//     ) {
//       alert("Please fill in all MCQ options!");
//       return;
//     }
//     setQuestions([...questions, { ...newQuestion, type: questionType }]);
//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   const handleStartTimeChange = (event) => {
//     const start = new Date(event.target.value);
//     setStartTime(event.target.value);
//     if (duration) {
//       const calculatedEndTime = new Date(start.getTime() + duration * 60000)
//         .toISOString()
//         .slice(0, 16);
//       setEndTime(calculatedEndTime);
//     }
//   };

//   const handleSaveExam = () => {
//     if (!title.trim() || !duration || !startTime || questions.length === 0) {
//       alert(
//         "Please fill in all required fields and add at least one question."
//       );
//       return;
//     }

//     const examData = {
//       title,
//       duration,
//       timeAllotted,
//       startTime,
//       endTime,
//       questions,
//     };

//     console.log("Exam Saved:", examData);
//     alert("Exam saved successfully!");
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>
//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={handleStartTimeChange}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//           readOnly
//           />
//         </div>
//       </div>
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         {questionType === "MCQ" && (
//           <select
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//             value={newQuestion.correctOption}
//             onChange={(e) =>
//               setNewQuestion({
//                 ...newQuestion,
//                 correctOption: e.target.value,
//               })
//             }>
//             <option value="">Select Correct Option</option>
//             {newQuestion.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option || `Option ${index + 1}`}
//               </option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-blue-500 hover:bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white transition-all flex items-center justify-center gap-2 w-full shadow-lg"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>
//       <button
//         className="bg-green-500 hover:bg-green-600 px-6 py-3 mt-6 rounded-lg text-white transition-all w-full flex items-center justify-center gap-2 shadow-lg"
//         onClick={handleSaveExam}>
//         <FaSave /> Save Exam
//       </button>
//     </div>
//   );
// };

// export default CreateExam;


// import React, { useState } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";
// import axios from "axios";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   // 🕒 Auto-calculate End Time
//   const handleStartTimeChange = (event) => {
//     const start = new Date(event.target.value);
//     setStartTime(event.target.value);
//     if (duration) {
//       const calculatedEndTime = new Date(start.getTime() + duration * 60000)
//         .toISOString()
//         .slice(0, 16);
//       setEndTime(calculatedEndTime);
//     }
//   };

//   // ➕ Add Question
//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       alert("Please enter a question!");
//       return;
//     }
//     if (
//       questionType === "MCQ" &&
//       newQuestion.options.some((opt) => !opt.trim())
//     ) {
//       alert("Please fill in all MCQ options!");
//       return;
//     }

//     setQuestions([...questions, { ...newQuestion, type: questionType }]);
//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });
//   };

//   // 📌 Handle Option Change
//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   // ✅ Submit Exam to Backend
//   const handleSaveExam = async () => {
//     if (!title.trim() || !duration || !startTime || questions.length === 0) {
//       alert(
//         "Please fill in all required fields and add at least one question."
//       );
//       return;
//     }

//     const examData = {
//       title,
//       duration: Number(duration),
//       timeAllotted: Number(timeAllotted),
//       startTime,
//       questions,
//     };

//     setLoading(true);
//     setMessage("");

//     try {
//       const token = localStorage.getItem("token"); // Assuming auth token is stored in localStorage
//       const response = await axios.post(
//         "http://localhost:5000/api/exam/create",
//         examData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setMessage("✅ Exam created successfully!");
//       setTitle("");
//       setDuration("");
//       setTimeAllotted("");
//       setStartTime("");
//       setEndTime("");
//       setQuestions([]);
//     } catch (error) {
//       console.error("Error creating exam:", error);
//       setMessage("❌ Failed to create exam!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>

//       {message && (
//         <p
//           className={`text-center p-3 mb-4 rounded ${
//             message.includes("✅") ? "bg-green-500" : "bg-red-500"
//           }`}>
//           {message}
//         </p>
//       )}

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={handleStartTimeChange}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         {questionType === "MCQ" && (
//           <select
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//             value={newQuestion.correctOption}
//             onChange={(e) =>
//               setNewQuestion({ ...newQuestion, correctOption: e.target.value })
//             }>
//             <option value="">Select Correct Option</option>
//             {newQuestion.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option || `Option ${index + 1}`}
//               </option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-blue-500 px-6 py-2 mt-4 rounded-lg text-white w-full"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>

//       <button
//         className="bg-green-500 px-6 py-3 mt-6 rounded-lg text-white w-full"
//         onClick={handleSaveExam}
//         disabled={loading}>
//         {loading ? (
//           "Saving..."
//         ) : (
//           <>
//             <FaSave /> Save Exam
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default CreateExam;


// import React, { useState, useEffect } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   // 🕒 Auto-calculate End Time
//   useEffect(() => {
//     if (startTime && duration) {
//       const start = new Date(startTime);
//       const calculatedEndTime = new Date(start.getTime() + duration * 60000)
//         .toISOString()
//         .slice(0, 16);
//       setEndTime(calculatedEndTime);
//     }
//   }, [startTime, duration]);

//   // ➕ Add Question
//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       toast.error("⚠️ Please enter a question!");
//       return;
//     }
//     if (
//       questionType === "MCQ" &&
//       newQuestion.options.some((opt) => !opt.trim())
//     ) {
//       toast.error("⚠️ Please fill in all MCQ options!");
//       return;
//     }

//     setQuestions([...questions, { ...newQuestion, type: questionType }]);
//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });
//     toast.success("✅ Question added successfully!");
//   };

//   // 📌 Handle Option Change
//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   // ✅ Submit Exam to Backend
//   const handleSaveExam = async () => {
//     if (!title.trim() || !duration || !startTime || questions.length === 0) {
//       toast.error(
//         "⚠️ Please fill all required fields and add at least one question."
//       );
//       return;
//     }

//     const examData = {
//       title,
//       duration: Number(duration),
//       timeAllotted: Number(timeAllotted),
//       startTime,
//       questions,
//     };

//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/exam/create", examData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("✅ Exam created successfully!");
//       setTitle("");
//       setDuration("");
//       setTimeAllotted("");
//       setStartTime("");
//       setEndTime("");
//       setQuestions([]);
//     } catch (error) {
//       console.error("Error creating exam:", error);
//       toast.error("❌ Failed to create exam!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <ToastContainer />
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         {questionType === "MCQ" && (
//           <select
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//             value={newQuestion.correctOption}
//             onChange={(e) =>
//               setNewQuestion({ ...newQuestion, correctOption: e.target.value })
//             }>
//             <option value="">Select Correct Option</option>
//             {newQuestion.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option || `Option ${index + 1}`}
//               </option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-blue-500 px-6 py-2 mt-4 rounded-lg text-white w-full"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>

//       <button
//         className="bg-green-500 px-6 py-3 mt-6 rounded-lg text-white w-full"
//         onClick={handleSaveExam}
//         disabled={loading}>
//         {loading ? (
//           "Saving..."
//         ) : (
//           <>
//             <FaSave /> Save Exam
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default CreateExam;


// import React, { useState, useEffect } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   // 🕒 Auto-calculate End Time
//   // 🕒 Auto-calculate End Time
//   useEffect(() => {
//     if (startTime && duration) {
//       const start = new Date(startTime);
//       start.setMinutes(start.getMinutes() + Number(duration));

//       // Convert to local timezone
//       const localEndTime = new Date(
//         start.getTime() - start.getTimezoneOffset() * 60000
//       )
//         .toISOString()
//         .slice(0, 16);

//       setEndTime(localEndTime);
//     }
//   }, [startTime, duration]);

//   // ➕ Add Question
//  const handleAddQuestion = () => {
//    if (!newQuestion.questionText.trim()) {
//      alert("Please enter a question!");
//      return;
//    }

//    if (questionType === "MCQ") {
//      if (newQuestion.options.some((opt) => !opt.trim())) {
//        alert("Please fill in all MCQ options!");
//        return;
//      }
//      if (!newQuestion.correctOption.trim()) {
//        alert("Please select the correct answer!");
//        return;
//      }
//    }

//    setQuestions([...questions, { ...newQuestion, type: questionType }]);

//    setNewQuestion({
//      questionText: "",
//      options: ["", "", "", ""],
//      correctOption: "",
//    });
//  };


//   // 📌 Handle Option Change
//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   // ✅ Submit Exam to Backend
//  const handleSaveExam = async () => {
//    if (!title.trim() || !duration || !startTime || questions.length === 0) {
//      alert("Please fill in all required fields and add at least one question.");
//      return;
//    }

//    const examData = {
//      title,
//      duration: Number(duration),
//      timeAllotted: Number(timeAllotted),
//      startTime,
//      questions,
//    };

//    setLoading(true);
//    setMessage("");

//    try {
//      const token = localStorage.getItem("token");
//      const response = await axios.post(
//        "http://localhost:5000/api/exam/create",
//        examData,
//        {
//          headers: { Authorization: `Bearer ${token}` },
//        }
//      );
//      setMessage("✅ Exam created successfully!");
//      setTitle("");
//      setDuration("");
//      setTimeAllotted("");
//      setStartTime("");
//      setEndTime("");
//      setQuestions([]);
//    } catch (error) {
//      console.error("Error creating exam:", error);
//      setMessage("❌ Failed to create exam!");
//    } finally {
//      setLoading(false);
//    }
//  };


//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <ToastContainer />
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         {questionType === "MCQ" && (
//           <select
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//             value={newQuestion.correctOption}
//             onChange={(e) =>
//               setNewQuestion({ ...newQuestion, correctOption: e.target.value })
//             }>
//             <option value="">Select Correct Option</option>
//             {newQuestion.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option || `Option ${index + 1}`}
//               </option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white w-full hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>

//       <button
//         className="bg-green-600 px-6 py-3 mt-6 rounded-lg text-white w-full hover:bg-green-700 transition duration-200 flex items-center justify-center gap-2"
//         onClick={handleSaveExam}
//         disabled={loading}>
//         {loading ? (
//           "Saving..."
//         ) : (
//           <>
//             <FaSave /> Save Exam
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default CreateExam;



// import React, { useState, useEffect } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   // 🕒 Auto-calculate End Time
//   useEffect(() => {
//     if (startTime && duration) {
//       const start = new Date(startTime);
//       start.setMinutes(start.getMinutes() + Number(duration));

//       // Convert to local timezone
//       const localEndTime = new Date(
//         start.getTime() - start.getTimezoneOffset() * 60000
//       )
//         .toISOString()
//         .slice(0, 16);

//       setEndTime(localEndTime);
//     }
//   }, [startTime, duration]);

//   // ➕ Add Question
//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       toast.error("Please enter a question!");
//       return;
//     }

//     if (questionType === "MCQ") {
//       if (newQuestion.options.some((opt) => !opt.trim())) {
//         toast.error("Please fill in all MCQ options!");
//         return;
//       }
//       if (!newQuestion.correctOption.trim()) {
//         toast.error("Please select the correct answer!");
//         return;
//       }
//     }

//     setQuestions([...questions, { ...newQuestion, type: questionType }]);

//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });

//     toast.success("Question added successfully!");
//   };

//   // 📌 Handle Option Change
//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   // ✅ Submit Exam to Backend
//   const handleSaveExam = async () => {
//     if (!title.trim() || !duration || !startTime || questions.length === 0) {
//       toast.error(
//         "Please fill in all required fields and add at least one question."
//       );
//       return;
//     }

//     const examData = {
//       title,
//       duration: Number(duration),
//       timeAllotted: Number(timeAllotted),
//       startTime,
//       questions,
//     };

//     setLoading(true);
//     toast.info("Saving exam...");

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:5000/api/exam/create",
//         examData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       toast.success("✅ Exam created successfully!");

//       // Reset Form
//       setTitle("");
//       setDuration("");
//       setTimeAllotted("");
//       setStartTime("");
//       setEndTime("");
//       setQuestions([]);
//     } catch (error) {
//       console.error("Error creating exam:", error);
//       toast.error("❌ Failed to create exam! Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <ToastContainer />
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}
//         <button
//           className="bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white w-full hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>

//       <button
//         className="bg-green-600 px-6 py-3 mt-6 rounded-lg text-white w-full hover:bg-green-700 transition duration-200 flex items-center justify-center gap-2"
//         onClick={handleSaveExam}
//         disabled={loading}>
//         {loading ? (
//           "Saving..."
//         ) : (
//           <>
//             <FaSave /> Save Exam
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default CreateExam;


// import React, { useState, useEffect } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//   });

//   // 🕒 Auto-calculate End Time
//   useEffect(() => {
//     if (startTime && duration) {
//       const start = new Date(startTime);
//       start.setMinutes(start.getMinutes() + Number(duration));

//       // Convert to local timezone
//       const localEndTime = new Date(
//         start.getTime() - start.getTimezoneOffset() * 60000
//       )
//         .toISOString()
//         .slice(0, 16);

//       setEndTime(localEndTime);
//     }
//   }, [startTime, duration]);

//   // ➕ Add Question
//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       toast.error("Please enter a question!");
//       return;
//     }

//     let formattedQuestion = {
//       questionText: newQuestion.questionText,
//       type: questionType,
//     };

//     if (questionType === "MCQ") {
//       if (newQuestion.options.some((opt) => !opt.trim())) {
//         toast.error("Please fill in all MCQ options!");
//         return;
//       }
//       if (!newQuestion.correctOption.trim()) {
//         toast.error("Please select the correct answer!");
//         return;
//       }
//       formattedQuestion.options = newQuestion.options;
//       formattedQuestion.correctOption = newQuestion.correctOption;
//     }

//     setQuestions([...questions, formattedQuestion]);

//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//     });

//     toast.success("Question added successfully!");
//   };

//   // 📌 Handle Option Change
//   // 📌 Handle Option Change (Fixed)
//   const handleOptionChange = (index, value) => {
//     setNewQuestion((prevState) => {
//       const updatedOptions = [...prevState.options];
//       updatedOptions[index] = value;

//       // Reset correctOption only if it was modified
//       const updatedCorrectOption =
//         prevState.correctOption === prevState.options[index]
//           ? ""
//           : prevState.correctOption;

//       return {
//         ...prevState,
//         options: updatedOptions,
//         correctOption: updatedCorrectOption,
//       };
//     });
//   };

//   // ✅ Submit Exam to Backend
//   const handleSaveExam = async () => {
//     if (!title.trim() || !duration || !startTime || questions.length === 0) {
//       toast.error(
//         "Please fill in all required fields and add at least one question."
//       );
//       return;
//     }

//     const examData = {
//       title,
//       duration: Number(duration),
//       timeAllotted: Number(timeAllotted),
//       startTime,
//       questions,
//     };

//     setLoading(true);
//     toast.info("Saving exam...");

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/exam/create", examData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("✅ Exam created successfully!");
//       setTitle("");
//       setDuration("");
//       setTimeAllotted("");
//       setStartTime("");
//       setEndTime("");
//       setQuestions([]);
//     } catch (error) {
//       console.error("Error creating exam:", error);
//       toast.error("❌ Failed to create exam! Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <ToastContainer />
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>

//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />

//         {/* Show options only if MCQ is selected */}
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}

//         {/* Dropdown to select correct option */}
//         {questionType === "MCQ" && (
//           <select
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//             value={newQuestion.correctOption}
//             onChange={(e) =>
//               setNewQuestion({ ...newQuestion, correctOption: e.target.value })
//             }>
//             <option value="">Select Correct Option</option>
//             {newQuestion.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option || `Option ${index + 1}`}
//               </option>
//             ))}
//           </select>
//         )}

//         <button
//           className="bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white w-full hover:bg-blue-700 flex items-center justify-center gap-2"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>

//       <button
//         className="bg-green-600 px-6 py-3 mt-6 rounded-lg text-white w-full hover:bg-green-700 flex items-center justify-center gap-2"
//         onClick={handleSaveExam}
//         disabled={loading}>
//         {loading ? (
//           "Saving..."
//         ) : (
//           <>
//             <FaSave /> Save Exam
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default CreateExam;


// import React, { useState, useEffect } from "react";
// import { FaPlus, FaSave } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateExam = () => {
//   const [title, setTitle] = useState("");
//   const [duration, setDuration] = useState("");
//   const [timeAllotted, setTimeAllotted] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [questionType, setQuestionType] = useState("MCQ");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [newQuestion, setNewQuestion] = useState({
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: "",
//   });

//   // 🕒 Auto-calculate End Time
//   useEffect(() => {
//     if (startTime && duration) {
//       const start = new Date(startTime);
//       start.setMinutes(start.getMinutes() + Number(duration));

//       // Convert to local timezone
//       const localEndTime = new Date(
//         start.getTime() - start.getTimezoneOffset() * 60000
//       )
//         .toISOString()
//         .slice(0, 16);

//       setEndTime(localEndTime);
//     }
//   }, [startTime, duration]);

//   // ➕ Add Question
//   const handleAddQuestion = () => {
//     if (!newQuestion.questionText.trim()) {
//       toast.error("Please enter a question!");
//       return;
//     }

//     if (
//       !newQuestion.marks.trim() ||
//       isNaN(newQuestion.marks) ||
//       newQuestion.marks <= 0
//     ) {
//       toast.error("Please enter valid marks!");
//       return;
//     }

//     let formattedQuestion = {
//       questionText: newQuestion.questionText,
//       type: questionType,
//       marks: Number(newQuestion.marks),
//     };

//     if (questionType === "MCQ") {
//       if (newQuestion.options.some((opt) => !opt.trim())) {
//         toast.error("Please fill in all MCQ options!");
//         return;
//       }
//       if (!newQuestion.correctOption.trim()) {
//         toast.error("Please select the correct answer!");
//         return;
//       }
//       formattedQuestion.options = newQuestion.options;
//       formattedQuestion.correctOption = newQuestion.correctOption;
//     }

//     setQuestions([...questions, formattedQuestion]);

//     setNewQuestion({
//       questionText: "",
//       options: ["", "", "", ""],
//       correctOption: "",
//       marks: "",
//     });

//     toast.success("Question added successfully!");
//   };

//   // 📌 Handle Option Change (Fixed)
//   const handleOptionChange = (index, value) => {
//     setNewQuestion((prevState) => {
//       const updatedOptions = [...prevState.options];
//       updatedOptions[index] = value;

//       // Reset correctOption only if it was modified
//       const updatedCorrectOption =
//         prevState.correctOption === prevState.options[index]
//           ? ""
//           : prevState.correctOption;

//       return {
//         ...prevState,
//         options: updatedOptions,
//         correctOption: updatedCorrectOption,
//       };
//     });
//   };

//   // ✅ Submit Exam to Backend
//   const handleSaveExam = async () => {
//     if (!title.trim() || !duration || !startTime || questions.length === 0) {
//       toast.error(
//         "Please fill in all required fields and add at least one question."
//       );
//       return;
//     }

//     const examData = {
//       title,
//       duration: Number(duration),
//       timeAllotted: Number(timeAllotted),
//       startTime,
//       questions,
//     };

//     setLoading(true);
//     toast.info("Saving exam...");

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/exam/create", examData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("✅ Exam created successfully!");
//       setTitle("");
//       setDuration("");
//       setTimeAllotted("");
//       setStartTime("");
//       setEndTime("");
//       setQuestions([]);
//     } catch (error) {
//       console.error("Error creating exam:", error);
//       toast.error("❌ Failed to create exam! Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-white">
//       <ToastContainer />
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         📚 Create Exam
//       </h2>

//       <div className="space-y-4">
//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//           placeholder="Enter Exam Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Duration (mins)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//           <input
//             type="number"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             placeholder="Per Student Time (mins)"
//             value={timeAllotted}
//             onChange={(e) => setTimeAllotted(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={startTime}
//             onChange={(e) => setStartTime(e.target.value)}
//           />
//           <input
//             type="datetime-local"
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//             value={endTime}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Question Section */}
//       <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-gray-300">
//           ➕ Add Questions
//         </h3>
//         <select
//           className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
//           value={questionType}
//           onChange={(e) => setQuestionType(e.target.value)}>
//           <option value="MCQ">MCQ</option>
//           <option value="Subjective">Subjective</option>
//         </select>

//         <input
//           type="text"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Question Text"
//           value={newQuestion.questionText}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, questionText: e.target.value })
//           }
//         />

//         {/* Input for Marks */}
//         <input
//           type="number"
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
//           placeholder="Enter Marks"
//           value={newQuestion.marks}
//           onChange={(e) =>
//             setNewQuestion({ ...newQuestion, marks: e.target.value })
//           }
//         />

//         {/* Show options only if MCQ is selected */}
//         {questionType === "MCQ" &&
//           newQuestion.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//           ))}

//         <button
//           className="bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white w-full hover:bg-blue-700 flex items-center justify-center gap-2"
//           onClick={handleAddQuestion}>
//           <FaPlus /> Add Question
//         </button>
//       </div>

//       <button
//         className="bg-green-600 px-6 py-3 mt-6 rounded-lg text-white w-full hover:bg-green-700 flex items-center justify-center gap-2"
//         onClick={handleSaveExam}
//         disabled={loading}>
//         <FaSave /> Save Exam
//       </button>
//     </div>
//   );
// };

// export default CreateExam;

import React, { useState, useEffect } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateExam = () => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [timeAllotted, setTimeAllotted] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [questionType, setQuestionType] = useState("MCQ");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    options: ["", "", "", ""],
    correctOption: "",
    marks: "",
  });

  // 🕒 Auto-calculate End Time
  useEffect(() => {
    if (startTime && duration) {
      const start = new Date(startTime);
      start.setMinutes(start.getMinutes() + Number(duration));

      // Convert to local timezone
      const localEndTime = new Date(
        start.getTime() - start.getTimezoneOffset() * 60000
      )
        .toISOString()
        .slice(0, 16);

      setEndTime(localEndTime);
    }
  }, [startTime, duration]);

  // ➕ Add Question
  const handleAddQuestion = () => {
    if (!newQuestion.questionText.trim()) {
      toast.error("Please enter a question!");
      return;
    }

    if (
      !newQuestion.marks.trim() ||
      isNaN(newQuestion.marks) ||
      newQuestion.marks <= 0
    ) {
      toast.error("Please enter valid marks!");
      return;
    }

    let formattedQuestion = {
      questionText: newQuestion.questionText,
      type: questionType,
      marks: Number(newQuestion.marks),
    };

    if (questionType === "MCQ") {
      if (newQuestion.options.some((opt) => !opt.trim())) {
        toast.error("Please fill in all MCQ options!");
        return;
      }
      if (!newQuestion.correctOption.trim()) {
        toast.error("Please select the correct answer!");
        return;
      }
      formattedQuestion.options = newQuestion.options;
      formattedQuestion.correctOption = newQuestion.correctOption;
    }

    setQuestions([...questions, formattedQuestion]);

    setNewQuestion({
      questionText: "",
      options: ["", "", "", ""],
      correctOption: "",
      marks: "",
    });

    toast.success("Question added successfully!");
  };

  // 📌 Handle Option Change (Fixed)
  const handleOptionChange = (index, value) => {
    setNewQuestion((prevState) => {
      const updatedOptions = [...prevState.options];
      updatedOptions[index] = value;

      return {
        ...prevState,
        options: updatedOptions,
      };
    });
  };

  // ✅ Submit Exam to Backend
  const handleSaveExam = async () => {
    if (!title.trim() || !duration || !startTime || questions.length === 0) {
      toast.error(
        "Please fill in all required fields and add at least one question."
      );
      return;
    }

    const examData = {
      title,
      duration: Number(duration),
      timeAllotted: Number(timeAllotted),
      startTime,
      questions,
    };

    setLoading(true);
    toast.info("Saving exam...");

    try {
      const token = localStorage.getItem("token");
       await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios.post("http://localhost:5000/api/exam/create", examData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTimeout(() => {
        toast.success(" Exam created successfully!");
      }, 1000); 
      setTitle("");
      setDuration("");
      setTimeAllotted("");
      setStartTime("");
      setEndTime("");
      setQuestions([]);
      setQuestionType("MCQ");
    } catch (error) {
      console.error("Error creating exam:", error);
      toast.error("❌ Failed to create exam! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <ToastContainer />
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
        📚 Create Exam
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
          placeholder="Enter Exam Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            placeholder="Duration (mins)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            type="number"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            placeholder="Per Student Time (mins)"
            value={timeAllotted}
            onChange={(e) => setTimeAllotted(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="datetime-local"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <input
            type="datetime-local"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            value={endTime}
            readOnly
          />
        </div>
      </div>

      {/* Question Section */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-300">
          ➕ Add Questions
        </h3>
        <select
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 text-white mt-3"
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}>
          <option value="MCQ">MCQ</option>
          <option value="Subjective">Subjective</option>
        </select>

        <input
          type="text"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
          placeholder="Enter Question Text"
          value={newQuestion.questionText}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, questionText: e.target.value })
          }
        />

        {/* Input for Marks */}
        <input
          type="number"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
          placeholder="Enter Marks"
          value={newQuestion.marks}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, marks: e.target.value })
          }
        />

        {/* MCQ Options */}
        {questionType === "MCQ" &&
          newQuestion.options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mt-2"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}

        {/* Correct Option Selection */}
        {questionType === "MCQ" && (
          <select
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mt-3"
            value={newQuestion.correctOption}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, correctOption: e.target.value })
            }>
            <option value="">Select Correct Option</option>
            {newQuestion.options.map((option, index) => (
              <option key={index} value={option}>
                {option || `Option ${index + 1}`}
              </option>
            ))}
          </select>
        )}

        <button
          className="bg-blue-600 px-6 py-2 mt-4 rounded-lg text-white w-full hover:bg-blue-700 flex items-center justify-center gap-2"
          onClick={handleAddQuestion}>
          <FaPlus /> Add Question
        </button>
      </div>

      <button
        className="bg-green-600 px-6 py-3 mt-6 rounded-lg text-white w-full hover:bg-green-700 flex items-center justify-center gap-2"
        onClick={handleSaveExam}
        disabled={loading}>
        <FaSave /> Save Exam
      </button>
    </div>
  );
};

export default CreateExam;
