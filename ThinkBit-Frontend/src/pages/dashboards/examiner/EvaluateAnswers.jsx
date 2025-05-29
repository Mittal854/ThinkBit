// import React, { useState, useEffect, useRef } from "react";
// import { FaCheckCircle, FaSpinner } from "react-icons/fa";
// import axios from "axios";

// const EvaluateAnswers = () => {
//   const [submissions, setSubmissions] = useState([]);
//   const [evaluations, setEvaluations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submittingIndex, setSubmittingIndex] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");

//   const token = localStorage.getItem("token");
//   const questionRefs = useRef([]);

//   questionRefs.current = submissions.map(
//     (_, i) => questionRefs.current[i] ?? React.createRef()
//   );

//   useEffect(() => {
//     const fetchPendingSubmissions = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/evaluations/pending",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         const subs = response.data?.submissions || [];
//         setSubmissions(subs);
//         setEvaluations(subs.map(() => ({ score: "" })));
//       } catch (err) {
//         setError(
//           "Failed to load submissions: " +
//             (err.response?.data?.message || err.message)
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPendingSubmissions();
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight" && currentIndex < submissions.length - 1) {
//         scrollToIndex(currentIndex + 1);
//       } else if (e.key === "ArrowLeft" && currentIndex > 0) {
//         scrollToIndex(currentIndex - 1);
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentIndex, submissions.length]);

//   const handleInputChange = (index, value) => {
//     const updated = [...evaluations];
//     const maxMarks = submissions[index]?.question?.marks || 0;
//     const score = Math.min(Math.max(Number(value) || 0, 0), maxMarks);

//     if (Number(value) > maxMarks) {
//       alert(`Score cannot exceed maximum marks (${maxMarks})!`);
//     }

//     updated[index].score = score;
//     setEvaluations(updated);
//   };

//   const handleSubmit = async (index) => {
//     if (!evaluations[index].score && evaluations[index].score !== 0) {
//       alert("Please enter a score.");
//       return;
//     }

//     try {
//       setSubmittingIndex(index);
//       const submission = submissions[index];
//       await axios.post(
//         "http://localhost:5000/api/evaluations/submit",
//         {
//           attemptId: submission.attemptId,
//           questionId: submission.question._id,
//           score: evaluations[index].score,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const updatedSubs = [...submissions];
//       const updatedEvals = [...evaluations];
//       updatedSubs.splice(index, 1);
//       updatedEvals.splice(index, 1);

//       setSubmissions(updatedSubs);
//       setEvaluations(updatedEvals);
//       setSuccessMessage("Evaluation submitted successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000);
//       setCurrentIndex((prev) => Math.max(0, prev - 1));
//     } catch (err) {
//       setError(
//         "Failed to submit evaluation: " +
//           (err.response?.data?.message || err.message)
//       );
//     } finally {
//       setSubmittingIndex(null);
//     }
//   };

//   const scrollToIndex = (index) => {
//     if (index >= 0 && index < submissions.length) {
//       questionRefs.current[index]?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setCurrentIndex(index);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64 text-white">
//         <FaSpinner className="animate-spin text-4xl text-blue-500" />
//         <span className="ml-3 text-xl">Loading submissions...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-800 text-white p-6 rounded-lg max-w-xl mx-auto text-center">
//         <h3 className="text-xl font-semibold mb-2">Error</h3>
//         <p>{error}</p>
//         <button
//           onClick={() => setError(null)}
//           className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded">
//           Dismiss
//         </button>
//       </div>
//     );
//   }

//   if (submissions.length === 0) {
//     return (
//       <div className="text-center text-white mt-12">
//         <h2 className="text-4xl font-bold mb-4">📊 Evaluate Answers</h2>
//         <p className="text-lg text-gray-400">
//           All submissions are already evaluated.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto text-white">
//       <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
//         📊 Evaluate Answers
//       </h2>

//       {/* Floating Navigator */}
//       <div className="sticky top-0 z-50 backdrop-blur-sm bg-gray-900/90 py-4 px-6 mb-8 rounded-xl border border-gray-700 shadow-xl flex flex-wrap items-center justify-between">
//         <div className="flex flex-wrap gap-2">
//           {submissions.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => scrollToIndex(idx)}
//               className={`w-8 h-8 rounded-full text-sm font-semibold border transition ${
//                 idx === currentIndex
//                   ? "bg-blue-500 text-white border-blue-400 shadow-md"
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:border-gray-500"
//               }`}>
//               {idx + 1}
//             </button>
//           ))}
//         </div>
//         <span className="text-sm text-gray-300 font-medium">
//           Showing <span className="text-blue-400">{currentIndex + 1}</span> of{" "}
//           {submissions.length}
//         </span>
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="bg-green-700/90 text-white p-4 mb-6 rounded-lg flex items-center justify-center shadow-md">
//           <FaCheckCircle className="mr-2" />
//           {successMessage}
//         </div>
//       )}

//       {/* Submission Cards */}
//       {submissions.map((submission, index) => (
//         <div
//           key={`${submission.attemptId}-${submission.question._id}`}
//           ref={(el) => (questionRefs.current[index] = el)}
//           className="bg-gray-800/60 backdrop-blur rounded-2xl p-6 mb-10 shadow-xl border border-gray-700 transition-all duration-300">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <h3 className="text-2xl font-bold text-blue-400">
//                 {submission.studentName}
//               </h3>
//               <p className="text-sm text-gray-400 mt-1">
//                 {submission.examTitle} •{" "}
//                 {new Date(submission.submittedAt).toLocaleString()}
//               </p>
//             </div>
//             <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
//               Subjective
//             </span>
//           </div>

//           <div className="mb-4">
//             <p className="text-lg font-semibold text-gray-300 mb-1">
//               Question:
//             </p>
//             <p className="text-gray-200">{submission.question.questionText}</p>
//           </div>

//           <div className="bg-gray-900 p-4 rounded-lg mb-4 border border-gray-700 shadow-inner">
//             <p className="text-sm font-semibold text-gray-400 mb-2">
//               Student's Answer
//             </p>
//             <p className="text-gray-100 whitespace-pre-wrap">
//               {submission.answerText}
//             </p>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-300 mb-1">
//               Score (Max: {submission.question.marks})
//             </label>
//             <input
//               type="number"
//               min={0}
//               max={submission.question.marks}
//               value={evaluations[index]?.score}
//               onChange={(e) => handleInputChange(index, e.target.value)}
//               className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder={`Enter score`}
//             />
//           </div>

//           <button
//             className={`w-full mt-4 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition ${
//               submittingIndex === index
//                 ? "bg-gray-600 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//             onClick={() => handleSubmit(index)}
//             disabled={submittingIndex === index}>
//             {submittingIndex === index ? (
//               <>
//                 <FaSpinner className="animate-spin" />
//                 Submitting...
//               </>
//             ) : (
//               <>
//                 <FaCheckCircle />
//                 Submit Evaluation
//               </>
//             )}
//           </button>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={() => scrollToIndex(index - 1)}
//               disabled={index === 0}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 index === 0
//                   ? "bg-gray-700 cursor-not-allowed text-gray-400"
//                   : "bg-blue-500 hover:bg-blue-600 text-white"
//               }`}>
//               ⬅ Previous
//             </button>
//             <button
//               onClick={() => scrollToIndex(index + 1)}
//               disabled={index === submissions.length - 1}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 index === submissions.length - 1
//                   ? "bg-gray-700 cursor-not-allowed text-gray-400"
//                   : "bg-blue-500 hover:bg-blue-600 text-white"
//               }`}>
//               Next ➡
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EvaluateAnswers;

import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import axios from "axios";

const EvaluateAnswers = () => {
  const [submissions, setSubmissions] = useState([]);
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submittingIndex, setSubmittingIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const token = localStorage.getItem("token");
  const questionRefs = useRef([]);

  questionRefs.current = submissions.map(
    (_, i) => questionRefs.current[i] ?? React.createRef()
  );

  useEffect(() => {
    const fetchPendingSubmissions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/evaluations/pending",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const subs = response.data?.submissions || [];
        setSubmissions(subs);
        setEvaluations(subs.map(() => ({ score: "" })));
      } catch (err) {
        setError(
          "Failed to load submissions: " +
            (err.response?.data?.message || err.message)
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPendingSubmissions();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && currentIndex < submissions.length - 1) {
        scrollToIndex(currentIndex + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        scrollToIndex(currentIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, submissions.length]);

  const handleInputChange = (index, value) => {
    const updated = [...evaluations];
    const maxMarks = submissions[index]?.question?.marks || 0;
    const score = Math.min(Math.max(Number(value) || 0, 0), maxMarks);

    if (Number(value) > maxMarks) {
      alert(`Score cannot exceed maximum marks (${maxMarks})!`);
    }

    updated[index].score = score;
    setEvaluations(updated);
  };

  const handleSubmit = async (index) => {
    if (!evaluations[index].score && evaluations[index].score !== 0) {
      alert("Please enter a score.");
      return;
    }

    try {
      setSubmittingIndex(index);
      const submission = submissions[index];
      await axios.post(
        "http://localhost:5000/api/evaluations/submit",
        {
          attemptId: submission.attemptId,
          questionId: submission.question._id,
          score: evaluations[index].score,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedSubs = [...submissions];
      const updatedEvals = [...evaluations];
      updatedSubs.splice(index, 1);
      updatedEvals.splice(index, 1);

      setSubmissions(updatedSubs);
      setEvaluations(updatedEvals);
      setSuccessMessage("Evaluation submitted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } catch (err) {
      setError(
        "Failed to submit evaluation: " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setSubmittingIndex(null);
    }
  };

  const scrollToIndex = (index) => {
    if (index >= 0 && index < submissions.length) {
      setCurrentIndex(index);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-white">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-3 text-xl">Loading submissions...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-800 text-white p-6 rounded-lg max-w-xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">Error</h3>
        <p>{error}</p>
        <button
          onClick={() => setError(null)}
          className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded">
          Dismiss
        </button>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="text-center text-white mt-12">
        <h2 className="text-4xl font-bold mb-4">📊 Evaluate Answers</h2>
        <p className="text-lg text-gray-400">
          All submissions are already evaluated.
        </p>
      </div>
    );
  }

  const submission = submissions[currentIndex];

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
        📊 Evaluate Answers
      </h2>

      {/* Floating Navigator */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-gray-900/90 py-4 px-6 mb-8 rounded-xl border border-gray-700 shadow-xl flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {submissions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-8 h-8 rounded-full text-sm font-semibold border transition ${
                idx === currentIndex
                  ? "bg-blue-500 text-white border-blue-400 shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:border-gray-500"
              }`}>
              {idx + 1}
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-300 font-medium">
          Showing <span className="text-blue-400">{currentIndex + 1}</span> of{" "}
          {submissions.length}
        </span>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-700/90 text-white p-4 mb-6 rounded-lg flex items-center justify-center shadow-md">
          <FaCheckCircle className="mr-2" />
          {successMessage}
        </div>
      )}

      {/* Only One Submission Visible */}
      <div
        key={`${submission.attemptId}-${submission.question._id}`}
        ref={(el) => (questionRefs.current[currentIndex] = el)}
        className="bg-gray-800/60 backdrop-blur rounded-2xl p-6 mb-10 shadow-xl border border-gray-700 transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">
              {submission.studentName}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {submission.examTitle} •{" "}
              {new Date(submission.submittedAt).toLocaleString()}
            </p>
          </div>
          <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            Subjective
          </span>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-300 mb-1">Question:</p>
          <p className="text-gray-200">{submission.question.questionText}</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg mb-4 border border-gray-700 shadow-inner">
          <p className="text-sm font-semibold text-gray-400 mb-2">
            Student's Answer
          </p>
          <p className="text-gray-100 whitespace-pre-wrap">
            {submission.answerText}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Score (Max: {submission.question.marks})
          </label>
          <input
            type="number"
            min={0}
            max={submission.question.marks}
            value={evaluations[currentIndex]?.score}
            onChange={(e) => handleInputChange(currentIndex, e.target.value)}
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter score`}
          />
        </div>

        <button
          className={`w-full mt-4 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition ${
            submittingIndex === currentIndex
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={() => handleSubmit(currentIndex)}
          disabled={submittingIndex === currentIndex}>
          {submittingIndex === currentIndex ? (
            <>
              <FaSpinner className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <FaCheckCircle />
              Submit Evaluation
            </>
          )}
        </button>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentIndex === 0
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}>
            ⬅ Previous
          </button>
          <button
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex === submissions.length - 1}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentIndex === submissions.length - 1
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}>
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvaluateAnswers;
