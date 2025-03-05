// import React from "react";

// const ExamHistory = () => {
//   // Mock data (Replace with API data)
//   const pastExams = [
//     {
//       id: 1,
//       name: "Data Structures & Algorithms",
//       date: "2024-02-15",
//       score: "85%",
//       grade: "A",
//       canReattempt: true,
//     },
//     {
//       id: 2,
//       name: "Operating Systems",
//       date: "2024-02-10",
//       score: "78%",
//       grade: "B+",
//       canReattempt: false,
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Exam History</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-700">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="p-3 border">Exam Name</th>
//               <th className="p-3 border">Date</th>
//               <th className="p-3 border">Score</th>
//               <th className="p-3 border">Grade</th>
//               <th className="p-3 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pastExams.map((exam) => (
//               <tr
//                 key={exam.id}
//                 className="text-center border-b border-gray-600">
//                 <td className="p-3 border">{exam.name}</td>
//                 <td className="p-3 border">{exam.date}</td>
//                 <td className="p-3 border">{exam.score}</td>
//                 <td className="p-3 border">{exam.grade}</td>
//                 <td className="p-3 border flex justify-center gap-2">
//                   <button className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-500">
//                     View Results
//                   </button>
//                   {exam.canReattempt && (
//                     <button className="bg-green-600 px-3 py-1 rounded-md hover:bg-green-500">
//                       Reattempt
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExamHistory;

// import React from "react";
// import { FaRedo, FaEye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// const ExamHistory = () => {
//   // Mock data (Replace with API data)
//   const pastExams = [
//     {
//       id: 1,
//       name: "Data Structures & Algorithms",
//       date: "2024-02-15",
//       score: "85%",
//       grade: "A",
//       canReattempt: true,
//     },
//     {
//       id: 2,
//       name: "Operating Systems",
//       date: "2024-02-10",
//       score: "78%",
//       grade: "B+",
//       canReattempt: false,
//     },
//     {
//       id: 3,
//       name: "Computer Networks",
//       date: "2024-01-25",
//       score: "92%",
//       grade: "A+",
//       canReattempt: true,
//     },
//     {
//       id: 4,
//       name: "Database Management",
//       date: "2024-01-10",
//       score: "67%",
//       grade: "C",
//       canReattempt: false,
//     },
//   ];

//   // Function to get grade color
//   const getGradeColor = (grade) => {
//     switch (grade) {
//       case "A+":
//       case "A":
//         return "text-green-400";
//       case "B+":
//       case "B":
//         return "text-blue-400";
//       case "C":
//         return "text-yellow-400";
//       default:
//         return "text-red-400";
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-6 flex items-center">
//         📜 Exam History
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left border border-gray-700">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="p-4 border">Exam Name</th>
//               <th className="p-4 border">Date</th>
//               <th className="p-4 border">Score</th>
//               <th className="p-4 border">Grade</th>
//               <th className="p-4 border text-center">Reattempt</th>
//               <th className="p-4 border text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pastExams.map((exam) => (
//               <tr
//                 key={exam.id}
//                 className="border-b border-gray-600 hover:bg-gray-700 transition-all">
//                 <td className="p-4 border">{exam.name}</td>
//                 <td className="p-4 border">{exam.date}</td>
//                 <td className="p-4 border font-semibold">{exam.score}</td>
//                 <td
//                   className={`p-4 border font-semibold ${getGradeColor(
//                     exam.grade
//                   )}`}>
//                   {exam.grade}
//                 </td>
//                 <td className="p-4 border text-center">
//                   {exam.canReattempt ? (
//                     <FaCheckCircle className="text-green-400 text-lg mx-auto" />
//                   ) : (
//                     <FaTimesCircle className="text-red-400 text-lg mx-auto" />
//                   )}
//                 </td>
//                 <td className="p-4 border flex justify-center gap-3">
//                   <button className="bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-500 transition-all">
//                     <FaEye /> View Results
//                   </button>
//                   {exam.canReattempt && (
//                     <button className="bg-green-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-500 transition-all">
//                       <FaRedo /> Reattempt
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExamHistory;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRedo, FaEye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ExamHistory = () => {
  const [examHistory, setExamHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch exam history from API
  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/exam/my-history",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setExamHistory(response.data.results || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching exam history:", err);
        setError("Failed to fetch exam history.");
        setLoading(false);
      }
    };

    fetchExamHistory();
  }, []);

  // Function to get grade color
  const getGradeColor = (grade) => {
    switch (grade) {
      case "A+":
      case "A":
        return "text-green-400";
      case "B+":
      case "B":
        return "text-blue-400";
      case "C":
        return "text-yellow-400";
      default:
        return "text-red-400";
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
        <p>Loading exam history...</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        📜 Exam History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 border">Exam Name</th>
              <th className="p-4 border">Date</th>
              <th className="p-4 border">Score</th>
              <th className="p-4 border">Grade</th>
              <th className="p-4 border text-center">Reattempt</th>
              <th className="p-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {examHistory.length > 0 ? (
              examHistory.map((exam) => (
                <tr
                  key={exam.id}
                  className="border-b border-gray-600 hover:bg-gray-700 transition-all">
                  <td className="p-4 border">{exam.name}</td>
                  <td className="p-4 border">{exam.date}</td>
                  <td className="p-4 border font-semibold">{exam.score}%</td>
                  <td
                    className={`p-4 border font-semibold ${getGradeColor(
                      exam.grade
                    )}`}>
                    {exam.grade}
                  </td>
                  <td className="p-4 border text-center">
                    {exam.canReattempt ? (
                      <FaCheckCircle className="text-green-400 text-lg mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-red-400 text-lg mx-auto" />
                    )}
                  </td>
                  <td className="p-4 border flex justify-center gap-3">
                    <button className="bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-500 transition-all">
                      <FaEye /> View Results
                    </button>
                    {exam.canReattempt && (
                      <button className="bg-green-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-green-500 transition-all">
                        <FaRedo /> Reattempt
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-400">
                  No exam history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamHistory;
