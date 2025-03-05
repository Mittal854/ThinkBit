// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ExamPage = () => {
//   const { attemptId } = useParams(); // Get attempt ID from URL
//   const navigate = useNavigate();
//   const [examData, setExamData] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchExamData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("User not authenticated. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:5000/api/exam/attempt/${attemptId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setExamData(data);

//         // Initialize selected answers as empty
//         const initialAnswers = {};
//         data.questions.forEach((q) => {
//           initialAnswers[q._id] = null;
//         });
//         setSelectedAnswers(initialAnswers);

//         // Set the timer
//         const endTime = new Date(data.endTime).getTime();
//         const currentTime = new Date().getTime();
//         const timeRemaining = Math.max(
//           0,
//           Math.floor((endTime - currentTime) / 1000)
//         );
//         setTimeLeft(timeRemaining);

//         if (timeRemaining === 0) {
//           handleSubmit(); // Auto-submit if time is over
//         }
//       } catch (error) {
//         setError("Failed to load exam data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExamData();
//   }, [attemptId]);

//   // Timer logic
//   useEffect(() => {
//     if (timeLeft === null) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   // Handle answer selection
//   const handleAnswerSelect = (questionId, option) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [questionId]: option,
//     }));
//   };

//   // Handle exam submission
//   const handleSubmit = async () => {
//     if (submitted) return;
//     setSubmitted(true);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("User not authenticated. Please log in.");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/exam/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ attemptId, answers: selectedAnswers }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to submit exam.");
//       }

//       alert("Exam submitted successfully!");
//       navigate("/my-exams"); // Redirect to exams page
//     } catch (error) {
//       console.error("Error submitting exam:", error);
//       alert("Failed to submit the exam. Please try again.");
//     }
//   };

//   if (loading) return <p className="text-white">Loading exam...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-4xl font-bold">{examData.name}</h2>
//       <p className="text-gray-300">Duration: {examData.duration} mins</p>
//       <p className="text-gray-300">Total Marks: {examData.totalMarks}</p>
//       <p className="text-gray-300">Instructions: {examData.instructions}</p>

//       {/* Timer */}
//       <div className="mt-4 bg-gray-800 p-3 rounded-lg inline-block">
//         ⏳ Time Left: {Math.floor(timeLeft / 60)}:
//         {(timeLeft % 60).toString().padStart(2, "0")}
//       </div>

//       {/* Questions */}
//       <div className="mt-6">
//         {examData.questions.map((question, index) => (
//           <div key={question._id} className="bg-gray-900 p-4 rounded-lg mb-4">
//             <h3 className="text-xl font-semibold mb-2">
//               {index + 1}. {question.text}
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {question.options.map((option, idx) => (
//                 <label
//                   key={idx}
//                   className="flex items-center space-x-3 cursor-pointer">
//                   <input
//                     type="radio"
//                     name={`question-${question._id}`}
//                     value={option}
//                     checked={selectedAnswers[question._id] === option}
//                     onChange={() => handleAnswerSelect(question._id, option)}
//                     className="hidden"
//                   />
//                   <div
//                     className={`w-full p-3 border rounded-lg ${
//                       selectedAnswers[question._id] === option
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-700 text-gray-200"
//                     }`}>
//                     {option}
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Submit Button */}
//       <button
//         className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all"
//         onClick={handleSubmit}
//         disabled={submitted}>
//         {submitted ? "Submitting..." : "Submit Exam"}
//       </button>
//     </div>
//   );
// };

// export default ExamPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ExamPage = () => {
//   const { attemptId } = useParams(); // Get attempt ID from URL
//   const navigate = useNavigate();
//   const [examData, setExamData] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchExamData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("User not authenticated. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:5000/api/exam/attempt/${attemptId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setExamData(data);

//         // Initialize selected answers (empty for subjective)
//         const initialAnswers = {};
//         data.questions.forEach((q) => {
//           initialAnswers[q._id] = q.type === "mcq" ? null : "";
//         });
//         setSelectedAnswers(initialAnswers);

//         // Set the timer
//         const endTime = new Date(data.endTime).getTime();
//         const currentTime = new Date().getTime();
//         const timeRemaining = Math.max(
//           0,
//           Math.floor((endTime - currentTime) / 1000)
//         );
//         setTimeLeft(timeRemaining);

//         if (timeRemaining === 0) {
//           handleSubmit(); // Auto-submit if time is over
//         }
//       } catch (error) {
//         setError("Failed to load exam data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExamData();
//   }, [attemptId]);

//   // Timer logic
//   useEffect(() => {
//     if (timeLeft === null) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   // Handle MCQ answer selection
//   const handleMcqSelect = (questionId, option) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [questionId]: option,
//     }));
//   };

//   // Handle Subjective answer input
//   const handleSubjectiveInput = (questionId, text) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [questionId]: text,
//     }));
//   };

//   // Handle exam submission
//   const handleSubmit = async () => {
//     if (submitted) return;
//     setSubmitted(true);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("User not authenticated. Please log in.");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/exam/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ attemptId, answers: selectedAnswers }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to submit exam.");
//       }

//       alert("Exam submitted successfully!");
//       navigate("/my-exams"); // Redirect to exams page
//     } catch (error) {
//       console.error("Error submitting exam:", error);
//       alert("Failed to submit the exam. Please try again.");
//     }
//   };

//   if (loading) return <p className="text-white">Loading exam...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6 text-white mt-18">
//       <h2 className="text-4xl font-bold">{examData.name}</h2>
//       <p className="text-gray-300">Duration: {examData.duration} mins</p>
//       <p className="text-gray-300">Total Marks: {examData.totalMarks}</p>
//       <p className="text-gray-300">Instructions: {examData.instructions}</p>

//       {/* Timer */}
//       <div className="mt-4 bg-gray-800 p-3 rounded-lg inline-block">
//         ⏳ Time Left: {Math.floor(timeLeft / 60)}:
//         {(timeLeft % 60).toString().padStart(2, "0")}
//       </div>

//       {/* Questions */}
//       <div className="mt-6">
//         {examData.questions.map((question, index) => (
//           <div key={question._id} className="bg-gray-900 p-4 rounded-lg mb-4">
//             <h3 className="text-xl font-semibold mb-2">
//               {index + 1}. {question.text}
//             </h3>

//             {question.type === "mcq" ? (
//               // MCQ Questions
//               <div className="grid grid-cols-2 gap-4">
//                 {question.options.map((option, idx) => (
//                   <label
//                     key={idx}
//                     className="flex items-center space-x-3 cursor-pointer">
//                     <input
//                       type="radio"
//                       name={`question-${question._id}`}
//                       value={option}
//                       checked={selectedAnswers[question._id] === option}
//                       onChange={() => handleMcqSelect(question._id, option)}
//                       className="hidden"
//                     />
//                     <div
//                       className={`w-full p-3 border rounded-lg ${
//                         selectedAnswers[question._id] === option
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-700 text-gray-200"
//                       }`}>
//                       {option}
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             ) : (
//               // Subjective Questions
//               <textarea
//                 className="w-full p-3 border rounded-lg bg-gray-700 text-white"
//                 placeholder="Type your answer here..."
//                 value={selectedAnswers[question._id] || ""}
//                 onChange={(e) =>
//                   handleSubjectiveInput(question._id, e.target.value)
//                 }
//                 rows={4}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Submit Button */}
//       <button
//         className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all"
//         onClick={handleSubmit}
//         disabled={submitted}>
//         {submitted ? "Submitting..." : "Submit Exam"}
//       </button>
//     </div>
//   );
// };

// export default ExamPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ExamPage = () => {
//   const { attemptId } = useParams();
//   const navigate = useNavigate();
//   const [examData, setExamData] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchExamData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("User not authenticated. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:5000/api/exam/attempt/${attemptId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP Error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Fetched Exam Data:", data); // Debugging log
//         setExamData(data);

//         // Initialize selected answers
//         const initialAnswers = {};
//         data.questions.forEach((q) => {
//           initialAnswers[q._id] = q.type === "MCQ" ? null : "";
//         });
//         setSelectedAnswers(initialAnswers);

//         // Set timer
//         if (data.endTime) {
//           const endTime = new Date(data.endTime).getTime();
//           const currentTime = new Date().getTime();
//           const timeRemaining = Math.max(
//             0,
//             Math.floor((endTime - currentTime) / 1000)
//           );
//           setTimeLeft(timeRemaining);
//         } else {
//           setError("Invalid exam timing data.");
//         }
//       } catch (error) {
//         console.error("Error fetching exam:", error);
//         setError("Failed to load exam data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExamData();
//   }, [attemptId]);

//   // Timer logic
//   useEffect(() => {
//     if (timeLeft === null) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleMcqSelect = (questionId, option) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [questionId]: option,
//     }));
//   };

//   const handleSubjectiveInput = (questionId, text) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [questionId]: text,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (submitted) return;
//     setSubmitted(true);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("User not authenticated. Please log in.");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/exam/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ attemptId, answers: selectedAnswers }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to submit exam.");
//       }

//       alert("Exam submitted successfully!");
//       navigate("/my-exams");
//     } catch (error) {
//       console.error("Error submitting exam:", error);
//       alert("Failed to submit the exam. Please try again.");
//     }
//   };

//   if (loading) return <p className="text-white">Loading exam...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6 text-white mt-18">
//       <h2 className="text-4xl font-bold">{examData.name}</h2>
//       <p className="text-gray-300">Duration: {examData.duration} mins</p>
//       <p className="text-gray-300">Total Marks: {examData.totalMarks}</p>
//       <p className="text-gray-300">Instructions: {examData.instructions}</p>

//       {/* Timer */}
//       <div className="mt-4 bg-gray-800 p-3 rounded-lg inline-block">
//         ⏳ Time Left: {Math.floor(timeLeft / 60)}:
//         {(timeLeft % 60).toString().padStart(2, "0")}
//       </div>

//       {/* Questions */}
//       <div className="mt-6">
//         {examData.questions.map((question, index) => (
//           <div key={question._id} className="bg-gray-900 p-4 rounded-lg mb-4">
//             <h3 className="text-xl font-semibold mb-2">
//               {index + 1}. {question.questionText}
//             </h3>

//             {question.type === "MCQ" ? (
//               <div className="grid grid-cols-2 gap-4">
//                 {question.options.map((option, idx) => (
//                   <label
//                     key={idx}
//                     className="flex items-center space-x-3 cursor-pointer">
//                     <input
//                       type="radio"
//                       name={`question-${question._id}`}
//                       value={option}
//                       checked={selectedAnswers[question._id] === option}
//                       onChange={() => handleMcqSelect(question._id, option)}
//                       className="hidden"
//                     />
//                     <div
//                       className={`w-full p-3 border rounded-lg ${
//                         selectedAnswers[question._id] === option
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-700 text-gray-200"
//                       }`}>
//                       {option}
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             ) : (
//               <textarea
//                 className="w-full p-3 border rounded-lg bg-gray-700 text-white"
//                 placeholder="Type your answer here..."
//                 value={selectedAnswers[question._id] || ""}
//                 onChange={(e) =>
//                   handleSubjectiveInput(question._id, e.target.value)
//                 }
//                 rows={4}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <button
//         className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all"
//         onClick={handleSubmit}
//         disabled={submitted}>
//         {submitted ? "Submitting..." : "Submit Exam"}
//       </button>
//     </div>
//   );
// };

// export default ExamPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExamPage = () => {
  const { attemptId } = useParams(); // Get attempt ID from URL
  const navigate = useNavigate();
  const [examData, setExamData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User not authenticated. Please log in.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:5000/api/exam/attempt/${attemptId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Exam Data:", data); // Debugging

        setExamData(data);

        // Initialize selected answers
        const initialAnswers = {};
        data.questions.forEach((q) => {
          initialAnswers[q._id] = q.type === "MCQ" ? null : "";
        });
        setSelectedAnswers(initialAnswers);

        // Set the timer
        const endTime = new Date(data.endTime).getTime();
        const currentTime = new Date().getTime();
        const timeRemaining = Math.max(
          0,
          Math.floor((endTime - currentTime) / 1000)
        );
        setTimeLeft(timeRemaining);
      } catch (error) {
        setError("Failed to load exam data.");
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, [attemptId]);

  // Timer logic
  //  useEffect(() => {
  //    if (!examData?.startTime || !examData?.duration) return;

  //    // Convert start time to Date object
  //    const startTime = new Date(examData.startTime).getTime();
  //    const examDuration = examData.duration * 60 * 1000; // Convert minutes to milliseconds
  //    const endTime = startTime + examDuration;

  //    const updateTimer = () => {
  //      const currentTime = new Date().getTime();
  //      const timeRemaining = Math.max(
  //        0,
  //        Math.floor((endTime - currentTime) / 1000)
  //      );
  //      setTimeLeft(timeRemaining);

  //      if (timeRemaining === 0) {
  //        clearInterval(timer);
  //        handleSubmit();
  //      }
  //    };

  //    updateTimer(); // Initial call
  //    const timer = setInterval(updateTimer, 1000);

  //    return () => clearInterval(timer); // Cleanup on unmount
  //  }, [examData]);
  // Timer logic
//   useEffect(() => {
//     if (!examData?.startTime || !examData?.duration) return;

//     console.log("Exam Start Time:", examData.startTime); // Debugging

//     const startTime = new Date(examData.startTime).getTime();
//     if (isNaN(startTime)) {
//       console.error("Invalid startTime format:", examData.startTime);
//       return;
//     }

//     const examDuration = examData.duration * 60 * 1000; // Convert minutes to milliseconds
//     const endTime = startTime + examDuration;

//     const updateTimer = () => {
//       const currentTime = new Date().getTime();
//       const timeRemaining = Math.max(
//         0,
//         Math.floor((endTime - currentTime) / 1000)
//       );
//       setTimeLeft(timeRemaining);

//       if (timeRemaining === 0) {
//         clearInterval(timer);
//         handleSubmit();
//       }
//     };

//     updateTimer(); // Initial call
//     const timer = setInterval(updateTimer, 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, [examData]);
useEffect(() => {
  if (!examData?.startTime || !examData?.duration) return;

  console.log("Exam Start Time:", examData.startTime); // Debugging

  const startTime = new Date(examData.startTime).getTime();
  if (isNaN(startTime)) {
    console.error("Invalid startTime format:", examData.startTime);
    return;
  }

  const examDuration = examData.duration * 60 * 1000; // Convert minutes to milliseconds
  const endTime = startTime + examDuration;

  const updateTimer = () => {
    const currentTime = new Date().getTime();
    const timeRemaining = Math.max(
      0,
      Math.floor((endTime - currentTime) / 1000)
    );
    setTimeLeft(timeRemaining);

    if (timeRemaining === 0) {
      clearInterval(timer);
      handleSubmit();
    }
  };

  updateTimer(); // Initial call
  const timer = setInterval(updateTimer, 1000);

  return () => clearInterval(timer); // Cleanup on unmount
}, [examData]);


  // Handle MCQ answer selection
  const handleMcqSelect = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  // Handle Subjective answer input
  const handleSubjectiveInput = (questionId, text) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: text,
    }));
  };

  // Handle exam submission
  const handleSubmit = async () => {
    if (submitted) return;
    setSubmitted(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("User not authenticated. Please log in.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/exam/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ attemptId, answers: selectedAnswers }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit exam.");
      }

      alert("Exam submitted successfully!");
      navigate("/my-exams");
    } catch (error) {
      console.error("Error submitting exam:", error);
      alert("Failed to submit the exam. Please try again.");
    }
  };

  if (loading) return <p className="text-white">Loading exam...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 text-white mt-18">
      <h3 className="text-3xl font-bold mt-3 mb-3">{examData?.name}</h3>
      <p className="text-gray-300">Duration: {examData?.duration} mins</p>
      <p className="text-gray-300">Total Marks: {examData?.totalScore}</p>
      {/* <p className="text-gray-300">Instructions: {examData?.instructions}</p> */}

      {/* Debugging - Show Fetched Questions */}

      {/* Timer */}
      <div className="mt-4 bg-gray-800 p-3 rounded-lg inline-block">
        ⏳ Time Left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </div>

      {/* Questions */}
      <div className="mt-6">
        {examData?.questions?.length > 0 ? (
          examData.questions.map((question, index) => (
            <div key={question._id} className="bg-gray-900 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">
                {index + 1}. {question.questionText}
              </h3>

              {question.type === "MCQ" ? (
                // MCQ Questions
                <div className="grid grid-cols-2 gap-4">
                  {question.options.map((option, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${question._id}`}
                        value={option}
                        checked={selectedAnswers[question._id] === option}
                        onChange={() => handleMcqSelect(question._id, option)}
                        className="hidden"
                      />
                      <div
                        className={`w-full p-3 border rounded-lg ${
                          selectedAnswers[question._id] === option
                            ? "bg-blue-500 text-white"
                            : "bg-gray-700 text-gray-200"
                        }`}>
                        {option}
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                // Subjective Questions
                <textarea
                  className="w-full p-3 border rounded-lg bg-gray-700 text-white"
                  placeholder="Type your answer here..."
                  value={selectedAnswers[question._id] || ""}
                  onChange={(e) =>
                    handleSubjectiveInput(question._id, e.target.value)
                  }
                  rows={4}
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-red-500">No questions found.</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all"
        onClick={handleSubmit}
        disabled={submitted}>
        {submitted ? "Submitting..." : "Submit Exam"}
      </button>
    </div>
  );
};

export default ExamPage;
