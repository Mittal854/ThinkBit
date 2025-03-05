// import React, { useState } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";

// const ManageQuestions = () => {
//   const exams = [
//     { id: 1, name: "Data Structures Test" },
//     { id: 2, name: "Algorithm Quiz" },
//     { id: 3, name: "Operating Systems Exam" },
//   ];

//   const initialQuestions = {
//     1: [],
//     2: [],
//     3: [],
//   };

//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     text: "",
//     difficulty: "Easy",
//     options: ["", "", "", ""],
//     correctOption: 0,
//   });

//   const handleExamChange = (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     setQuestions(initialQuestions[examId] || []);
//   };

//   const handleAddQuestion = () => {
//     if (!newQuestion.text.trim()) return;

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       alert("All options must be filled for MCQ!");
//       return;
//     }

//     const updatedQuestions = [...questions, { id: Date.now(), ...newQuestion }];
//     setQuestions(updatedQuestions);
//     setShowModal(false);
//     setNewQuestion({
//       type: "MCQ",
//       text: "",
//       difficulty: "Easy",
//       options: ["", "", "", ""],
//       correctOption: 0,
//     });
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newQuestion.options];
//     updatedOptions[index] = value;
//     setNewQuestion({ ...newQuestion, options: updatedOptions });
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       {/* Exam Selection */}
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam.id} value={exam.id}>
//               {exam.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Questions Section */}
//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e.id == selectedExam)?.name}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-green-600 transition-all"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           {/* Questions List */}
//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q.id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">{q.text}</p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Difficulty: {q.difficulty}
//                     </p>
//                   </div>
//                   <div className="flex gap-4">
//                     <button className="text-blue-400 hover:text-blue-500 transition-all">
//                       <FaEdit size={18} />
//                     </button>
//                     <button className="text-red-400 hover:text-red-500 transition-all">
//                       <FaTrash size={18} />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Add Question Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg relative">
//             <button
//               className="absolute top-4 right-4 text-red-400 hover:text-red-500"
//               onClick={() => setShowModal(false)}>
//               <FaTimes size={22} />
//             </button>

//             <h3 className="text-xl font-semibold text-gray-100 mb-4">
//               ➕ Add New Question
//             </h3>

//             <label className="block text-gray-300 mb-2">Question Type:</label>
//             <select
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//               value={newQuestion.type}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, type: e.target.value })
//               }>
//               <option value="MCQ">MCQ</option>
//               <option value="Subjective">Subjective</option>
//             </select>

//             <textarea
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//               placeholder="Enter question text"
//               value={newQuestion.text}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, text: e.target.value })
//               }
//               rows={3}
//             />

//             {newQuestion.type === "MCQ" && (
//               <>
//                 <label className="block text-gray-300 mb-2">Options:</label>
//                 {newQuestion.options.map((option, index) => (
//                   <input
//                     key={index}
//                     type="text"
//                     className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-white mb-2"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                   />
//                 ))}
//                 <label className="block text-gray-300 mb-2">
//                   Correct Answer:
//                 </label>
//                 <select
//                   className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//                   value={newQuestion.correctOption}
//                   onChange={(e) =>
//                     setNewQuestion({
//                       ...newQuestion,
//                       correctOption: parseInt(e.target.value),
//                     })
//                   }>
//                   {newQuestion.options.map((option, index) => (
//                     <option key={index} value={index}>
//                       {option || `Option ${index + 1}`}
//                     </option>
//                   ))}
//                 </select>
//               </>
//             )}

//             <button
//               className="bg-blue-500 px-4 py-3 w-full rounded-lg text-white hover:bg-blue-600 transition-all"
//               onClick={handleAddQuestion}>
//               Add Question
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;


// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";

// const ManageQuestions = ({ userId }) => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   useEffect(() => {
//     axios.get("/api/exams").then((res) => setExams(res.data));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (examId) {
//       const response = await axios.get(`/api/exams/${examId}/questions`);
//       setQuestions(response.data);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!newQuestion.questionText.trim()) return;
//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       alert("All options must be filled for MCQ!");
//       return;
//     }

//     const response = await axios.post(
//       `/api/exams/${selectedExam}/questions`,
//       { ...newQuestion },
//       { headers: { Authorization: userId } }
//     );
//     setQuestions([...questions, response.data]);
//     setShowModal(false);
//   };

//   const handleDeleteQuestion = async (id) => {
//     await axios.delete(`/api/exams/${selectedExam}/questions/${id}`, {
//       headers: { Authorization: userId },
//     });
//     setQuestions(questions.filter((q) => q._id !== id));
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-green-600 transition-all"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>
//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <div className="flex gap-4">
//                     <button className="text-blue-400 hover:text-blue-500 transition-all">
//                       <FaEdit size={18} />
//                     </button>
//                     <button
//                       className="text-red-400 hover:text-red-500 transition-all"
//                       onClick={() => handleDeleteQuestion(q._id)}>
//                       <FaTrash size={18} />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg relative">
//             <button
//               className="absolute top-4 right-4 text-red-400 hover:text-red-500"
//               onClick={() => setShowModal(false)}>
//               <FaTimes size={22} />
//             </button>
//             <h3 className="text-xl font-semibold text-gray-100 mb-4">
//               ➕ Add New Question
//             </h3>
//             <textarea
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//               placeholder="Enter question text"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               rows={3}
//             />
//             <button
//               className="bg-blue-500 px-4 py-3 w-full rounded-lg text-white hover:bg-blue-600 transition-all"
//               onClick={handleAddQuestion}>
//               Add Question
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/exams", { headers: { Authorization: `Bearer ${token}` } })
//       .then((res) => {
//         if (Array.isArray(res.data)) {
//           setExams(res.data);
//         } else {
//           console.error("Unexpected API response:", res.data);
//           setExams([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching exams:", error);
//         setExams([]);
//       });
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (examId) {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/exams/${examId}/questions`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//         setQuestions([]);
//       }
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!newQuestion.questionText.trim()) return;
//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       alert("All options must be filled for MCQ!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/exams/${selectedExam}/questions`,
//         { ...newQuestion },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions([...questions, response.data]);
//       setShowModal(false);
//     } catch (error) {
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (id) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/exams/${selectedExam}/questions/${id}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setQuestions(questions.filter((q) => q._id !== id));
//     } catch (error) {
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-green-600 transition-all"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>
//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <div className="flex gap-4">
//                     <button className="text-blue-400 hover:text-blue-500 transition-all">
//                       <FaEdit size={18} />
//                     </button>
//                     <button
//                       className="text-red-400 hover:text-red-500 transition-all"
//                       onClick={() => handleDeleteQuestion(q._id)}>
//                       <FaTrash size={18} />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg relative">
//             <button
//               className="absolute top-4 right-4 text-red-400 hover:text-red-500"
//               onClick={() => setShowModal(false)}>
//               <FaTimes size={22} />
//             </button>
//             <h3 className="text-xl font-semibold text-gray-100 mb-4">
//               ➕ Add New Question
//             </h3>
//             <textarea
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//               placeholder="Enter question text"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               rows={3}
//             />
//             <button
//               className="bg-blue-500 px-4 py-3 w-full rounded-lg text-white hover:bg-blue-600 transition-all"
//               onClick={handleAddQuestion}>
//               Add Question
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;


// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const token = localStorage.getItem("token");

//   // Fetch only exams created by this teacher
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/exams", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         if (Array.isArray(res.data)) {
//           setExams(res.data);
//         } else {
//           console.error("Unexpected API response:", res.data);
//           setExams([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching exams:", error);
//         setExams([]);
//       });
//   }, []);

//   // Fetch questions when an exam is selected
//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (examId) {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/exams/${examId}/questions`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         console.log("Fetched questions:", response.data);
//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//         setQuestions([]);
//       }
//     }
//   };

//   // Add question (MCQ/Subjective)
//   const handleAddQuestion = async () => {
//     if (!newQuestion.questionText.trim()) {
//       alert("Question text cannot be empty!");
//       return;
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       alert("All options must be filled for MCQ!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/exams/${selectedExam}/questions`,
//         { ...newQuestion },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions([...questions, response.data]);
//       setShowModal(false);
//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (id) => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/exams/${selectedExam}/questions/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions(questions.filter((q) => q._id !== id));
//     } catch (error) {
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-green-600 transition-all"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>
//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <div className="flex gap-4">
//                     <button className="text-blue-400 hover:text-blue-500 transition-all">
//                       <FaEdit size={18} />
//                     </button>
//                     <button
//                       className="text-red-400 hover:text-red-500 transition-all"
//                       onClick={() => handleDeleteQuestion(q._id)}>
//                       <FaTrash size={18} />
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg relative">
//             <button
//               className="absolute top-4 right-4 text-red-400 hover:text-red-500"
//               onClick={() => setShowModal(false)}>
//               <FaTimes size={22} />
//             </button>
//             <h3 className="text-xl font-semibold text-gray-100 mb-4">
//               ➕ Add New Question
//             </h3>
//             <select
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//               value={newQuestion.type}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, type: e.target.value })
//               }>
//               <option value="MCQ">MCQ</option>
//               <option value="Subjective">Subjective</option>
//             </select>
//             <textarea
//               className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4"
//               placeholder="Enter question text"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               rows={3}
//             />
//             <button
//               className="bg-blue-500 px-4 py-3 w-full rounded-lg text-white hover:bg-blue-600 transition-all"
//               onClick={handleAddQuestion}>
//               Add Question
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const token = localStorage.getItem("token");

//   // ✅ Fetch exams created by the logged-in teacher
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/exams", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   // ✅ Fetch questions when an exam is selected
//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (examId) {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/exams/${examId}/questions`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     }
//   };

//   // ✅ Add a new question
//   const handleAddQuestion = async () => {
//     if (!newQuestion.questionText.trim()) {
//       alert("Question text cannot be empty!");
//       return;
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       alert("All options must be filled for MCQ!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       console.error("Error adding question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       {/* ✅ Select Exam Dropdown */}
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* ✅ Show Questions */}
//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const token = localStorage.getItem("token");

//   // ✅ Fetch exams created by the logged-in teacher
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/exams", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   // ✅ Fetch questions when an exam is selected
//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (examId) {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/exams/${examId}/questions`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     }
//   };

//   // ✅ Add a new question
//   const handleAddQuestion = async () => {
//     if (!selectedExam) {
//       alert("Please select an exam first!");
//       return;
//     }

//     if (!newQuestion.questionText.trim()) {
//       alert("Question text cannot be empty!");
//       return;
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       alert("All options must be filled for MCQ!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:5000/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       console.error("Error adding question:", error);
//     }
//   };

//   // ✅ Delete a question
//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) {
//       alert("Please select an exam first!");
//       return;
//     }

//     try {
//       await axios.delete(
//         `http://localhost:5000/api/exams/${selectedExam}/delete-question/${questionId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//     } catch (error) {
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       {/* ✅ Select Exam Dropdown */}
//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* ✅ Show Questions */}
//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return alert("Please select an exam first!");

//     if (!newQuestion.questionText.trim()) {
//       return alert("Question text cannot be empty!");
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       return alert("All options must be filled for MCQ!");
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return alert("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//     } catch (error) {
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => {
//         console.error("Error fetching exams:", error);
//         toast.error("Failed to fetch exams.");
//       });
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//       toast.error("Failed to load questions.");
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) {
//       toast.error("Please select an exam first!");
//       return;
//     }

//     if (!newQuestion.questionText.trim()) {
//       toast.error("Question text cannot be empty!");
//       return;
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       toast.error("All options must be filled for MCQ!");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.question]); // Fix: Use response.data.question
//       toast.success("Question added successfully!");
//       setShowModal(false);

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       console.error("Error adding question:", error);
//       toast.error("Failed to add question. Please try again.");
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) {
//       toast.error("Please select an exam first!");
//       return;
//     }

//     const token = localStorage.getItem("token");

//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );

//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting question:", error);
//       toast.error("Failed to delete question. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
    
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return toast.error("Please select an exam first!");
//     if (!newQuestion.questionText.trim()) {
//       return toast.error("Question text cannot be empty!");
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       return toast.error("All options must be filled for MCQ!");
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       toast.success("Question added successfully!");

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       toast.error("Error adding question!");
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return toast.error("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting question!");
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Modal for Adding Questions */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold mb-4">Add New Question</h3>
//             <input
//               type="text"
//               placeholder="Enter Question"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               className="w-full border p-2 rounded-md mb-2"
//             />
//             <button
//               onClick={handleAddQuestion}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save Question
//             </button>
//             <button
//               onClick={() => setShowModal(false)}
//               className="text-red-500 ml-2">
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return toast.error("Please select an exam first!");
//     if (!newQuestion.questionText.trim()) {
//       return toast.error("Question text cannot be empty!");
//     }

//     if (
//       newQuestion.type === "MCQ" &&
//       newQuestion.options.some((opt) => opt.trim() === "")
//     ) {
//       return toast.error("All options must be filled for MCQ!");
//     }

//     if (newQuestion.type === "MCQ" && newQuestion.correctOption === "") {
//       return toast.error("Please select the correct option!");
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       toast.success("Question added successfully!");

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       toast.error("Error adding question!");
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return toast.error("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting question!");
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
//         >
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}
//             >
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center"
//                 >
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}
//                   >
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Modal for Adding Questions */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-black-500 p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold mb-4">Add New Question</h3>
//             <input
//               type="text"
//               placeholder="Enter Question"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               className="w-full border p-2 rounded-md mb-2"
//             />

//             {newQuestion.type === "MCQ" &&
//               newQuestion.options.map((opt, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   placeholder={`Option ${index + 1}`}
//                   value={opt}
//                   onChange={(e) => {
//                     const updatedOptions = [...newQuestion.options];
//                     updatedOptions[index] = e.target.value;
//                     setNewQuestion({ ...newQuestion, options: updatedOptions });
//                   }}
//                   className="w-full border p-2 rounded-md mb-2"
//                 />
//               ))}

//             <button
//               onClick={handleAddQuestion}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Save Question
//             </button>
//             <button
//               onClick={() => setShowModal(false)}
//               className="text-red-500 ml-2"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;


// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: "",
//     marks: 1,
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return toast.error("Please select an exam first!");
//     if (!newQuestion.questionText.trim()) {
//       return toast.error("Question text cannot be empty!");
//     }
//     if (newQuestion.type === "MCQ") {
//       if (newQuestion.options.some((opt) => opt.trim() === "")) {
//         return toast.error("All options must be filled for MCQ!");
//       }
//       if (newQuestion.correctOption === "") {
//         return toast.error("Please select the correct option for MCQ!");
//       }
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       toast.success("Question added successfully!");

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: "",
//         marks: 1,
//       });
//     } catch (error) {
//       toast.error("Error adding question!");
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return toast.error("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting question!");
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Modal for Adding Questions */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Add New Question
//             </h3>
//             <select
//               className="w-full p-2 rounded-md mb-2 bg-gray-700 text-white"
//               value={newQuestion.type}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, type: e.target.value })
//               }>
//               <option value="MCQ">MCQ</option>
//               <option value="Subjective">Subjective</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Enter Question"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//             />
//             {newQuestion.type === "MCQ" && (
//               <>
//                 {newQuestion.options.map((opt, index) => (
//                   <input
//                     key={index}
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={opt}
//                     onChange={(e) => {
//                       const newOptions = [...newQuestion.options];
//                       newOptions[index] = e.target.value;
//                       setNewQuestion({ ...newQuestion, options: newOptions });
//                     }}
//                     className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//                   />
//                 ))}
//               </>
//             )}
//             <button
//               onClick={handleAddQuestion}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save
//             </button>
//             <button
//               onClick={() => setShowModal(false)}
//               className="text-red-500 ml-2">
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""],
//     correctOption: null,
//     marks: 1, // Added marks field
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return toast.error("Please select an exam first!");
//     if (!newQuestion.questionText.trim()) {
//       return toast.error("Question text cannot be empty!");
//     }
//     if (newQuestion.type === "MCQ") {
//       if (newQuestion.options.some((opt) => opt.trim() === "")) {
//         return toast.error("All options must be filled for MCQ!");
//       }
//       if (newQuestion.correctOption === null) {
//         return toast.error("Please select the correct option for MCQ!");
//       }
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       toast.success("Question added successfully!");

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: null,
//         marks: 1,
//       });
//     } catch (error) {
//       toast.error("Error adding question!");
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return toast.error("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting question!");
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Add New Question
//             </h3>
//             <select
//               className="w-full p-2 rounded-md mb-2 bg-gray-700 text-white"
//               value={newQuestion.type}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, type: e.target.value })
//               }>
//               <option value="MCQ">MCQ</option>
//               <option value="Subjective">Subjective</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Enter Question"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//             />
//             <input
//               type="number"
//               placeholder="Marks"
//               value={newQuestion.marks}
//               onChange={(e) =>
//                 setNewQuestion({
//                   ...newQuestion,
//                   marks: Number(e.target.value),
//                 })
//               }
//               className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//             />
//             <button
//               onClick={handleAddQuestion}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save
//             </button>
//             <button
//               onClick={() => setShowModal(false)}
//               className="text-red-500 ml-2">
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;


// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""], // Default 4 options for MCQs
//     correctOption: null,
//     marks: 1,
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return toast.error("Please select an exam first!");
//     if (!newQuestion.questionText.trim()) {
//       return toast.error("Question text cannot be empty!");
//     }
//     if (newQuestion.type === "MCQ") {
//       if (newQuestion.options.some((opt) => opt.trim() === "")) {
//         return toast.error("All options must be filled for MCQ!");
//       }
//       if (newQuestion.correctOption === null) {
//         return toast.error("Please select the correct option for MCQ!");
//       }
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       toast.success("Question added successfully!");

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: null,
//         marks: 1,
//       });
//     } catch (error) {
//       toast.error("Error adding question!");
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return toast.error("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting question!");
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Add New Question
//             </h3>
//             <select
//               className="w-full p-2 rounded-md mb-2 bg-gray-700 text-white"
//               value={newQuestion.type}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, type: e.target.value })
//               }>
//               <option value="MCQ">MCQ</option>
//               <option value="Subjective">Subjective</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Enter Question"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//             />
//             {newQuestion.type === "MCQ" &&
//               newQuestion.options.map((option, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <input
//                     type="radio"
//                     name="correctOption"
//                     checked={newQuestion.correctOption === index}
//                     onChange={() =>
//                       setNewQuestion({ ...newQuestion, correctOption: index })
//                     }
//                     className="mr-2"
//                   />
//                   <input
//                     type="text"
//                     value={option}
//                     onChange={(e) =>
//                       setNewQuestion((prev) => {
//                         const updatedOptions = [...prev.options];
//                         updatedOptions[index] = e.target.value;
//                         return { ...prev, options: updatedOptions };
//                       })
//                     }
//                     className="w-full p-2 rounded-md bg-gray-700 text-white"
//                   />
//                 </div>
//               ))}
//             <button
//               onClick={handleAddQuestion}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save
//             </button>
//             <button
//               onClick={() => setShowModal(false)}
//               className="text-red-500 ml-2">
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;


// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ManageQuestions = () => {
//   const [exams, setExams] = useState([]);
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     type: "MCQ",
//     questionText: "",
//     options: ["", "", "", ""], // Default 4 options for MCQs
//     correctOption: null,
//     marks: 1, // Added Marks Field
//   });

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get(`${API_URL}/api/exams`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setExams(res.data))
//       .catch((error) => console.error("Error fetching exams:", error));
//   }, []);

//   const handleExamChange = async (event) => {
//     const examId = event.target.value;
//     setSelectedExam(examId);
//     if (!examId) return;

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/exams/${examId}/questions`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setQuestions(response.data);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//     }
//   };

//   const handleAddQuestion = async () => {
//     if (!selectedExam) return toast.error("Please select an exam first!");
//     if (!newQuestion.questionText.trim()) {
//       return toast.error("Question text cannot be empty!");
//     }
//     if (newQuestion.marks <= 0) {
//       return toast.error("Marks must be greater than 0!");
//     }
//     if (newQuestion.type === "MCQ") {
//       if (newQuestion.options.some((opt) => opt.trim() === "")) {
//         return toast.error("All options must be filled for MCQ!");
//       }
//       if (newQuestion.correctOption === null) {
//         return toast.error("Please select the correct option for MCQ!");
//       }
//     }

//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/exams/${selectedExam}/add-question`,
//         newQuestion,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions([...questions, response.data.newQuestion]);
//       setShowModal(false);
//       toast.success("Question added successfully!");

//       setNewQuestion({
//         type: "MCQ",
//         questionText: "",
//         options: ["", "", "", ""],
//         correctOption: null,
//         marks: 1,
//       });
//     } catch (error) {
//       toast.error("Error adding question!");
//       console.error("Error adding question:", error);
//     }
//   };

//   const handleDeleteQuestion = async (questionId) => {
//     if (!selectedExam) return toast.error("Please select an exam first!");

//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(
//         `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setQuestions((prevQuestions) =>
//         prevQuestions.filter((q) => q._id !== questionId)
//       );
//       toast.success("Question deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting question!");
//       console.error("Error deleting question:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
//         🗂 Manage Questions
//       </h2>

//       <div className="mb-6">
//         <label className="block text-lg font-semibold text-gray-300 mb-2">
//           Select an Exam:
//         </label>
//         <select
//           onChange={handleExamChange}
//           className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
//           <option value="">-- Choose an Exam --</option>
//           {exams.map((exam) => (
//             <option key={exam._id} value={exam._id}>
//               {exam.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedExam && (
//         <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-200">
//               Questions for {exams.find((e) => e._id === selectedExam)?.title}
//             </h3>
//             <button
//               className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center gap-2"
//               onClick={() => setShowModal(true)}>
//               <FaPlus /> Add Question
//             </button>
//           </div>

//           <div className="space-y-4">
//             {questions.length > 0 ? (
//               questions.map((q) => (
//                 <div
//                   key={q._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-200 font-medium">
//                       {q.questionText}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Type: {q.type} | Marks: {q.marks}
//                     </p>
//                   </div>
//                   <button
//                     className="text-red-400 hover:text-red-500 transition-all"
//                     onClick={() => handleDeleteQuestion(q._id)}>
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400 text-center">
//                 No questions available for this exam.
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Add New Question
//             </h3>
//             <select
//               className="w-full p-2 rounded-md mb-2 bg-gray-700 text-white"
//               value={newQuestion.type}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, type: e.target.value })
//               }>
//               <option value="MCQ">MCQ</option>
//               <option value="Subjective">Subjective</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Enter Question"
//               value={newQuestion.questionText}
//               onChange={(e) =>
//                 setNewQuestion({ ...newQuestion, questionText: e.target.value })
//               }
//               className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//             />
//             <input
//               type="number"
//               placeholder="Marks"
//               value={newQuestion.marks}
//               onChange={(e) =>
//                 setNewQuestion({
//                   ...newQuestion,
//                   marks: Number(e.target.value),
//                 })
//               }
//               className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
//             />
//             <button
//               onClick={handleAddQuestion}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save
//             </button>
//             <button
//               onClick={() => setShowModal(false)}
//               className="text-red-500 ml-2">
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageQuestions;

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageQuestions = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    type: "MCQ",
    questionText: "",
    options: ["", "", "", ""], // Default 4 options for MCQs
    correctOption: null,
    marks: 1,
  });

  const API_URL = "http://localhost:5000";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${API_URL}/api/exams`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setExams(res.data))
      .catch((error) => console.error("Error fetching exams:", error));
  }, []);

  const handleExamChange = async (event) => {
    const examId = event.target.value;
    setSelectedExam(examId);
    if (!examId) return;

    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${API_URL}/api/exams/${examId}/questions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAddQuestion = async () => {
    if (!selectedExam) return toast.error("Please select an exam first!");
    if (!newQuestion.questionText.trim()) {
      return toast.error("Question text cannot be empty!");
    }
    if (newQuestion.marks <= 0) {
      return toast.error("Marks must be greater than 0!");
    }
    if (newQuestion.type === "MCQ") {
      if (newQuestion.options.some((opt) => opt.trim() === "")) {
        return toast.error("All options must be filled for MCQ!");
      }
      if (newQuestion.correctOption === null) {
        return toast.error("Please select the correct option for MCQ!");
      }
    }

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${API_URL}/api/exams/${selectedExam}/add-question`,
        newQuestion,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setQuestions([...questions, response.data.newQuestion]);
      setShowModal(false);
      toast.success("Question added successfully!");

      setNewQuestion({
        type: "MCQ",
        questionText: "",
        options: ["", "", "", ""],
        correctOption: null,
        marks: 1,
      });
    } catch (error) {
      toast.error("Error adding question!");
      console.error("Error adding question:", error);
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    if (!selectedExam) return toast.error("Please select an exam first!");

    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `${API_URL}/api/exams/${selectedExam}/delete-question/${questionId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setQuestions((prevQuestions) =>
        prevQuestions.filter((q) => q._id !== questionId)
      );
      toast.success("Question deleted successfully!");
    } catch (error) {
      toast.error("Error deleting question!");
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ToastContainer />
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">
        🗂 Manage Questions
      </h2>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-300 mb-2">
          Select an Exam:
        </label>
        <select
          onChange={handleExamChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white">
          <option value="">-- Choose an Exam --</option>
          {exams.map((exam) => (
            <option key={exam._id} value={exam._id}>
              {exam.title}
            </option>
          ))}
        </select>
      </div>

      {selectedExam && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-200">
              Questions for {exams.find((e) => e._id === selectedExam)?.title}
            </h3>
            <button
              className="bg-green-500 px-4 py-2 ml-3 rounded-lg text-white flex items-center gap-2"
              onClick={() => setShowModal(true)}>
              <FaPlus /> Add Question
            </button>
          </div>

          <div className="space-y-4">
            {questions.length > 0 ? (
              questions.map((q) => (
                <div
                  key={q._id}
                  className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <p className="text-gray-200 font-medium">
                      {q.questionText}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Type: {q.type} | Marks: {q.marks}
                    </p>
                  </div>
                  <button
                    className="text-red-400 hover:text-red-500 transition-all"
                    onClick={() => handleDeleteQuestion(q._id)}>
                    <FaTrash size={18} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">
                No questions available for this exam.
              </p>
            )}
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-white mb-4">
              Add New Question
            </h3>
            <select
              className="w-full p-2 rounded-md mb-2 bg-gray-700 text-white"
              value={newQuestion.type}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, type: e.target.value })
              }>
              <option value="MCQ">MCQ</option>
              <option value="Subjective">Subjective</option>
            </select>
            <input
              type="text"
              placeholder="Enter Question"
              value={newQuestion.questionText}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, questionText: e.target.value })
              }
              className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
            />
            <input
              type="number"
              placeholder="Enter Marks"
              value={newQuestion.marks}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, marks: e.target.value })
              }
              className="w-full border p-2 rounded-md mb-2 bg-gray-700 text-white"
            />
            {newQuestion.type === "MCQ" && (
              <>
                {newQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...newQuestion.options];
                        newOptions[index] = e.target.value;
                        setNewQuestion({
                          ...newQuestion,
                          options: newOptions,
                          // If the correct option was this, update it to new value
                          correctOption:
                            newQuestion.correctOption === option
                              ? e.target.value
                              : newQuestion.correctOption,
                        });
                      }}
                      className="w-full border p-2 rounded-md bg-gray-700 text-white"
                    />
                  </div>
                ))}

                {/* Dropdown to select correct option */}
                <select
                  className="flex items-center gap-2 mb-2 bg-gray-700"
                  value={newQuestion.correctOption}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      correctOption: e.target.value,
                    })
                  }>
                  <option value="">Select Correct Option</option>
                  {newQuestion.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option || `Option ${index + 1}`}
                    </option>
                  ))}
                </select>
              </>
            )}

            <button
              onClick={handleAddQuestion}
              className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageQuestions;
