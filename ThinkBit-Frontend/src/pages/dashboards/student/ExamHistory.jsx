// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEye } from "react-icons/fa";

// const ExamHistory = () => {
//   const [examHistory, setExamHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchExamHistory = async () => {
//       try {
//         const response = await axios.get(
//           "https://thinkbit.onrender.comapi/exam/my-history",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setExamHistory(response.data.results || []);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching exam history:", err);
//         setError("Failed to fetch exam history.");
//         setLoading(false);
//       }
//     };

//     fetchExamHistory();
//   }, []);

//   const getGradeColor = (grade) => {
//     switch (grade) {
//       case "O":
//         return "text-emerald-400";
//       case "A+":
//       case "A":
//         return "text-green-400";
//       case "B+":
//       case "B":
//         return "text-blue-400";
//       case "C":
//         return "text-yellow-400";
//       case "P":
//         return "text-gray-400";
//       default:
//         return "text-red-400";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
//         <p>Loading exam history...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
//         <p className="text-red-400">{error}</p>
//       </div>
//     );
//   }

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
//               <th className="p-4 border text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {examHistory.length > 0 ? (
//               examHistory.map((exam) => (
//                 <tr
//                   key={exam.id}
//                   className="border-b border-gray-600 hover:bg-gray-700 transition-all">
//                   <td className="p-4 border">{exam.name}</td>
//                   <td className="p-4 border">{exam.date}</td>
//                   <td className="p-4 border font-semibold text-white">
//                     {exam.score}%
//                   </td>
//                   <td className="p-4 border font-semibold">
//                     <span className={getGradeColor(exam.grade)}>
//                       {exam.grade}
//                     </span>
//                   </td>

//                   <td className="p-4 border text-center">
//                     <button className="bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-500 transition-all">
//                       <FaEye /> View Certificate
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="p-4 text-center text-gray-400">
//                   No exam history available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExamHistory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEye } from "react-icons/fa";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// const ExamHistory = () => {
//   const [examHistory, setExamHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchExamHistory = async () => {
//       try {
//         const response = await axios.get(
//           "https://thinkbit.onrender.comapi/exam/my-history",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setExamHistory(response.data.results || []);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching exam history:", err);
//         setError("Failed to fetch exam history.");
//         setLoading(false);
//       }
//     };

//     fetchExamHistory();
//   }, []);

//   const getGradeColor = (grade) => {
//     switch (grade) {
//       case "O":
//         return "text-emerald-400";
//       case "A+":
//       case "A":
//         return "text-green-400";
//       case "B+":
//       case "B":
//         return "text-blue-400";
//       case "C":
//         return "text-yellow-400";
//       case "P":
//         return "text-gray-400";
//       default:
//         return "text-red-400";
//     }
//   };

//   const generateCertificate = (exam) => {
//     const doc = new jsPDF({ orientation: "landscape" });
//     doc.setFontSize(30);
//     doc.setTextColor("#333333");
//     doc.text("Certificate of Achievement", 105, 40, { align: "center" });

//     doc.setFontSize(16);
//     doc.setTextColor("#555555");
//     doc.text(`This is to certify that`, 105, 70, { align: "center" });

//     doc.setFontSize(22);
//     doc.setTextColor("#000000");
//     doc.text(localStorage.getItem("username") || "Student Name", 105, 90, {
//       align: "center",
//     });

//     doc.setFontSize(16);
//     doc.text(`has successfully completed the exam`, 105, 110, {
//       align: "center",
//     });

//     doc.setFontSize(20);
//     doc.text(`${exam.name}`, 105, 130, { align: "center" });

//     doc.setFontSize(16);
//     doc.text(
//       `with a score of ${exam.score}% and grade ${exam.grade}`,
//       105,
//       150,
//       { align: "center" }
//     );

//     doc.setFontSize(12);
//     doc.text(`Date: ${exam.date}`, 20, 180);
//     doc.text("Authorized By: ThinkBit Examinations", 170, 180, {
//       align: "right",
//     });

//     doc.save(`${exam.name}-Certificate.pdf`);
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
//         <p>Loading exam history...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
//         <p className="text-red-400">{error}</p>
//       </div>
//     );
//   }

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
//               <th className="p-4 border text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {examHistory.length > 0 ? (
//               examHistory.map((exam) => (
//                 <tr
//                   key={exam.id}
//                   className="border-b border-gray-600 hover:bg-gray-700 transition-all">
//                   <td className="p-4 border">{exam.name}</td>
//                   <td className="p-4 border">{exam.date}</td>
//                   <td className="p-4 border font-semibold text-white">
//                     {exam.score}%
//                   </td>
//                   <td className="p-4 border font-semibold">
//                     <span className={getGradeColor(exam.grade)}>
//                       {exam.grade}
//                     </span>
//                   </td>
//                   <td className="p-4 border text-center">
//                     <button
//                       className="bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
//                       onClick={() => generateCertificate(exam)}>
//                       <FaEye /> View Certificate
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="p-4 text-center text-gray-400">
//                   No exam history available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExamHistory;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ExamHistory = () => {
  const [examHistory, setExamHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const response = await axios.get(
          "https://thinkbit.onrender.comapi/exam/my-history",
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

  const getGradeColor = (grade) => {
    switch (grade) {
      case "O":
        return "text-emerald-400";
      case "A+":
      case "A":
        return "text-green-400";
      case "B+":
      case "B":
        return "text-blue-400";
      case "C":
        return "text-yellow-400";
      case "P":
        return "text-gray-400";
      default:
        return "text-red-400";
    }
  };

  const generateCertificate = (exam) => {
    const doc = new jsPDF({ orientation: "landscape" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Background
    doc.setFillColor("#f3f3f3");
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20, "F");

    // Border
    doc.setDrawColor("#cccccc");
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

    // Title
    doc.setFontSize(30);
    doc.setTextColor("#333333");
    doc.setFont("helvetica", "bold");
    doc.text("Certificate of Achievement", pageWidth / 2, 50, {
      align: "center",
    });

    // Logo
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("ThinkBit Examinations", 30, 70);

    // Content
    doc.setFontSize(16);
    doc.setTextColor("#555555");
    doc.text(`This certifies that`, pageWidth / 2, 90, { align: "center" });

    doc.setFontSize(22);
    doc.setTextColor("#000000");
    doc.setFont("helvetica", "bold");
    doc.text(
      localStorage.getItem("username") || "Student Name",
      pageWidth / 2,
      110,
      { align: "center" }
    );

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(`has successfully completed the exam`, pageWidth / 2, 130, {
      align: "center",
    });

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(`${exam.name}`, pageWidth / 2, 150, { align: "center" });

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(
      `with a score of ${exam.score}% and grade ${exam.grade}`,
      pageWidth / 2,
      170,
      { align: "center" }
    );

    // Date and Signature
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text(`Date: ${exam.date}`, 30, pageHeight - 30);
    doc.text(
      "Authorized By: ThinkBit Examinations",
      pageWidth - 50,
      pageHeight - 30,
      { align: "right" }
    );

    // Save PDF
    doc.save(`${exam.name}-Certificate.pdf`);
  };

  if (loading) {
    return (
      <div className="p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">📜 Exam History</h2>
        <p>Loading exam history...</p>
      </div>
    );
  }

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
                  <td className="p-4 border font-semibold text-white">
                    {exam.score}%
                  </td>
                  <td className="p-4 border font-semibold">
                    <span className={getGradeColor(exam.grade)}>
                      {exam.grade}
                    </span>
                  </td>
                  <td className="p-4 border text-center">
                    <button
                      className="bg-blue-600 flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
                      onClick={() => generateCertificate(exam)}>
                      <FaEye /> View Certificate
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-400">
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
