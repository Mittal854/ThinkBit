// import React from "react";

// const MyExams = () => {
//   // Placeholder exam data (Replace with API call later)
//   const exams = [
//     {
//       id: 1,
//       name: "Data Structures Test",
//       date: "March 5, 2025",
//       status: "Upcoming",
//     },
//     {
//       id: 2,
//       name: "Algorithm Quiz",
//       date: "Feb 20, 2025",
//       status: "Completed",
//     },
//     {
//       id: 3,
//       name: "Operating Systems Exam",
//       date: "Feb 25, 2025",
//       status: "Ongoing",
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">📚 My Exams</h2>
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b border-gray-600">
//               <th className="p-2">Exam Name</th>
//               <th className="p-2">Date</th>
//               <th className="p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {exams.map((exam) => (
//               <tr
//                 key={exam.id}
//                 className="border-b border-gray-700 hover:bg-gray-700">
//                 <td className="p-2">{exam.name}</td>
//                 <td className="p-2">{exam.date}</td>
//                 <td className="p-2 font-semibold">
//                   <span
//                     className={`px-2 py-1 rounded-full ${
//                       exam.status === "Upcoming"
//                         ? "bg-blue-500"
//                         : exam.status === "Completed"
//                         ? "bg-green-500"
//                         : "bg-yellow-500"
//                     }`}>
//                     {exam.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyExams;

// import React from "react";
// import { Link } from "react-router-dom";

// const MyExams = () => {
//   // Placeholder exam data (Replace with API call later)
//   const exams = [
//     {
//       id: 1,
//       name: "Data Structures Test",
//       date: "March 5, 2025",
//       duration: "60 mins",
//       totalMarks: 100,
//       status: "Upcoming",
//       attemptsLeft: 1,
//     },
//     {
//       id: 2,
//       name: "Algorithm Quiz",
//       date: "Feb 20, 2025",
//       duration: "45 mins",
//       totalMarks: 50,
//       status: "Completed",
//       attemptsLeft: 0,
//     },
//     {
//       id: 3,
//       name: "Operating Systems Exam",
//       date: "Feb 25, 2025",
//       duration: "90 mins",
//       totalMarks: 75,
//       status: "Ongoing",
//       attemptsLeft: 1,
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-4">📚 My Exams</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {exams.map((exam) => (
//           <div
//             key={exam.id}
//             className="bg-gray-800 p-4 rounded-lg shadow-lg text-white border border-gray-700 hover:shadow-xl transition-all">
//             <h3 className="text-xl font-semibold">{exam.name}</h3>
//             <p className="text-sm text-gray-400">📅 {exam.date}</p>
//             <p className="mt-2">⏳ Duration: {exam.duration}</p>
//             <p>📊 Total Marks: {exam.totalMarks}</p>
//             <p className="font-semibold mt-1">
//               Attempts Left:{" "}
//               <span
//                 className={`${
//                   exam.attemptsLeft > 0 ? "text-green-400" : "text-red-400"
//                 }`}>
//                 {exam.attemptsLeft}
//               </span>
//             </p>

//             {/* Status Indicator */}
//             <div
//               className={`inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
//                 exam.status === "Upcoming"
//                   ? "bg-blue-500"
//                   : exam.status === "Completed"
//                   ? "bg-green-500"
//                   : "bg-yellow-500"
//               }`}>
//               {exam.status}
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-4 flex justify-between">
//               {exam.status === "Upcoming" && (
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
//                   Start Exam
//                 </button>
//               )}
//               {exam.status === "Ongoing" && (
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
//                   Resume Exam
//                 </button>
//               )}
//               {exam.status === "Completed" && (
//                 <Link
//                   to={`/results/${exam.id}`}
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
//                   View Results
//                 </Link>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyExams;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaCalendarAlt, FaClock, FaChartBar, FaRedo } from "react-icons/fa";

// const MyExams = () => {
//   // Placeholder exam data (Replace with API call later)
//   const exams = [
//     {
//       id: 1,
//       name: "Data Structures Test",
//       date: "March 5, 2025",
//       duration: "60 mins",
//       totalMarks: 100,
//       status: "Upcoming",
//       attemptsLeft: 1,
//     },
//     {
//       id: 2,
//       name: "Algorithm Quiz",
//       date: "Feb 20, 2025",
//       duration: "45 mins",
//       totalMarks: 50,
//       status: "Completed",
//       attemptsLeft: 0,
//     },
//     {
//       id: 3,
//       name: "Operating Systems Exam",
//       date: "Feb 25, 2025",
//       duration: "90 mins",
//       totalMarks: 75,
//       status: "Ongoing",
//       attemptsLeft: 1,
//     },
//   ];

//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-3xl font-bold mb-6">📚 My Exams</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {exams.map((exam) => (
//           <div
//             key={exam.id}
//             className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-all">
//             <h3 className="text-xl font-semibold">{exam.name}</h3>
//             <p className="text-sm text-gray-400 flex items-center gap-2 mt-2">
//               <FaCalendarAlt /> {exam.date}
//             </p>
//             <p className="mt-2 flex items-center gap-2">
//               <FaClock /> Duration: {exam.duration}
//             </p>
//             <p className="flex items-center gap-2">
//               <FaChartBar /> Total Marks: {exam.totalMarks}
//             </p>
//             <p className="font-semibold mt-2">
//               Attempts Left:{" "}
//               <span
//                 className={`${
//                   exam.attemptsLeft > 0 ? "text-green-400" : "text-red-400"
//                 }`}>
//                 {exam.attemptsLeft}
//               </span>
//             </p>

//             {/* Status Indicator */}
//             <div
//               className={`inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
//                 exam.status === "Upcoming"
//                   ? "bg-blue-500"
//                   : exam.status === "Completed"
//                   ? "bg-green-500"
//                   : "bg-yellow-500"
//               }`}>
//               {exam.status}
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-4 flex justify-between">
//               {exam.status === "Upcoming" && (
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full">
//                   Start Exam
//                 </button>
//               )}
//               {exam.status === "Ongoing" && (
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md w-full">
//                   Resume Exam
//                 </button>
//               )}
//               {exam.status === "Completed" && (
//                 <Link
//                   to={`/results/${exam.id}`}
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2">
//                   <FaRedo /> View Results
//                 </Link>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyExams;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaCalendarAlt, FaClock, FaChartBar, FaRedo } from "react-icons/fa";

// const MyExams = () => {
//   const exams = [
//     {
//       id: 1,
//       name: "Data Structures Test",
//       date: "March 5, 2025",
//       duration: "60 mins",
//       totalMarks: 100,
//       status: "Upcoming",
//       attemptsLeft: 1,
//     },
//     {
//       id: 2,
//       name: "Algorithm Quiz",
//       date: "Feb 20, 2025",
//       duration: "45 mins",
//       totalMarks: 50,
//       status: "Completed",
//       attemptsLeft: 0,
//     },
//     {
//       id: 3,
//       name: "Operating Systems Exam",
//       date: "Feb 25, 2025",
//       duration: "90 mins",
//       totalMarks: 75,
//       status: "Ongoing",
//       attemptsLeft: 1,
//     },
//   ];

//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-4xl font-extrabold mb-6 text-gradient">
//         📚 My Exams
//       </h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {exams.map((exam) => (
//           <div
//             key={exam.id}
//             className="relative bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-all group overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-75 rounded-xl group-hover:opacity-100 transition-all"></div>

//             <h3 className="relative text-xl font-semibold">{exam.name}</h3>
//             <p className="relative text-sm text-gray-400 flex items-center gap-2 mt-2">
//               <FaCalendarAlt className="text-blue-400" /> {exam.date}
//             </p>
//             <p className="relative mt-2 flex items-center gap-2">
//               <FaClock className="text-yellow-400" /> Duration: {exam.duration}
//             </p>
//             <p className="relative flex items-center gap-2">
//               <FaChartBar className="text-green-400" /> Total Marks:{" "}
//               {exam.totalMarks}
//             </p>
//             <p className="relative font-semibold mt-2">
//               Attempts Left:{" "}
//               <span
//                 className={`${
//                   exam.attemptsLeft > 0 ? "text-green-400" : "text-red-400"
//                 }`}>
//                 {exam.attemptsLeft}
//               </span>
//             </p>

//             {/* Status Indicator */}
//             <div
//               className={`relative inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
//                 exam.status === "Upcoming"
//                   ? "bg-blue-500 text-white"
//                   : exam.status === "Completed"
//                   ? "bg-green-500 text-white"
//                   : "bg-yellow-500 text-black"
//               }`}>
//               {exam.status}
//             </div>

//             {/* Action Buttons */}
//             <div className="relative mt-6 flex justify-between">
//               {exam.status === "Upcoming" && (
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all">
//                   Start Exam
//                 </button>
//               )}
//               {exam.status === "Ongoing" && (
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all">
//                   Resume Exam
//                 </button>
//               )}
//               {exam.status === "Completed" && (
//                 <Link
//                   to={`/results/${exam.id}`}
//                   className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all flex items-center justify-center gap-2">
//                   <FaRedo /> View Results
//                 </Link>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyExams;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaCalendarAlt, FaClock, FaChartBar, FaRedo } from "react-icons/fa";

// const MyExams = () => {
//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExams = async () => {
//       try {
//         const token = localStorage.getItem("token"); // ✅ Get user token
//         const response = await fetch(
//           "http://localhost:5000/api/exam/my-exams",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         const data = await response.json();
//         setExams(data);
//       } catch (error) {
//         console.error("Error fetching exams:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExams();
//   }, []);

//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-4xl font-extrabold mb-6 text-gradient">
//         📚 My Exams
//       </h2>

//       {loading ? (
//         <p className="text-center text-gray-400">Loading exams...</p>
//       ) : exams.length === 0 ? (
//         <p className="text-center text-gray-400">No exams available.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {exams.map((exam) => (
//             <div
//               key={exam.id}
//               className="relative bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-all group overflow-hidden">
//               <h3 className="relative text-xl font-semibold">{exam.name}</h3>
//               <p className="relative text-sm text-gray-400 flex items-center gap-2 mt-2">
//                 <FaCalendarAlt className="text-blue-400" /> {exam.date}
//               </p>
//               <p className="relative mt-2 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> Duration:{" "}
//                 {exam.duration}
//               </p>
//               <p className="relative flex items-center gap-2">
//                 <FaChartBar className="text-green-400" /> Total Marks:{" "}
//                 {exam.totalMarks}
//               </p>
//               <p className="relative font-semibold mt-2">
//                 Attempts Left:{" "}
//                 <span
//                   className={
//                     exam.attemptsLeft > 0 ? "text-green-400" : "text-red-400"
//                   }>
//                   {exam.attemptsLeft}
//                 </span>
//               </p>

//               {/* Status Indicator */}
//               <div
//                 className={`relative inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
//                   exam.status === "Upcoming"
//                     ? "bg-blue-500 text-white"
//                     : exam.status === "Completed"
//                     ? "bg-green-500 text-white"
//                     : "bg-yellow-500 text-black"
//                 }`}>
//                 {exam.status}
//               </div>

//               {/* Action Buttons */}
//               <div className="relative mt-6 flex justify-between">
//                 {exam.status === "Upcoming" && (
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all">
//                     Start Exam
//                   </button>
//                 )}
//                 {exam.status === "Ongoing" && (
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all">
//                     Resume Exam
//                   </button>
//                 )}
//                 {exam.status === "Completed" && (
//                   <Link
//                     to={`/results/${exam.id}`}
//                     className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all flex items-center justify-center gap-2">
//                     <FaRedo /> View Results
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyExams;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaCalendarAlt, FaClock, FaChartBar, FaRedo } from "react-icons/fa";

// const MyExams = () => {
//   const [exams, setExams] = useState([]); // ✅ Always an array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchExams = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("User not authenticated. Please log in.");
//         setLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "http://localhost:5000/api/exam/my-exams", // ✅ This now returns enrolled exams only
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setExams(Array.isArray(data.exams) ? data.exams : []);
//     } catch (error) {
//       setError("Failed to fetch exams. Please try again.");
//       setExams([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchExams();
// }, []);
// 3
//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-4xl font-extrabold mb-6 text-gradient">
//         📚 My Exams
//       </h2>

//       {loading ? (
//         <p className="text-center text-gray-400">Loading exams...</p>
//       ) : error ? (
//         <p className="text-center text-red-400">{error}</p>
//       ) : exams.length === 0 ? (
//         <p className="text-center text-gray-400">No exams available.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {exams.map((exam) => (
//             <div
//               key={exam.id}
//               className="relative bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-all group overflow-hidden">
//               <h3 className="relative text-xl font-semibold">{exam.name}</h3>
//               <p className="relative text-sm text-gray-400 flex items-center gap-2 mt-2">
//                 <FaCalendarAlt className="text-blue-400" /> {exam.date}
//               </p>
//               <p className="relative mt-2 flex items-center gap-2">
//                 <FaClock className="text-yellow-400" /> Duration:{" "}
//                 {exam.duration}
//               </p>
//               <p className="relative flex items-center gap-2">
//                 <FaChartBar className="text-green-400" /> Total Marks:{" "}
//                 {exam.totalMarks}
//               </p>
//               <p className="relative font-semibold mt-2">
//                 Attempts Left:{" "}
//                 <span
//                   className={
//                     exam.attemptsLeft > 0 ? "text-green-400" : "text-red-400"
//                   }>
//                   {exam.attemptsLeft}
//                 </span>
//               </p>

//               {/* Status Indicator */}
//               <div
//                 className={`relative inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
//                   exam.status === "Upcoming"
//                     ? "bg-blue-500 text-white"
//                     : exam.status === "Completed"
//                     ? "bg-green-500 text-white"
//                     : "bg-yellow-500 text-black"
//                 }`}>
//                 {exam.status}
//               </div>

//               {/* Action Buttons */}
//               <div className="relative mt-6 flex justify-between">
//                 {exam.status === "Upcoming" && (
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all">
//                     Start Exam
//                   </button>
//                 )}
//                 {exam.status === "Ongoing" && (
//                   <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all">
//                     Resume Exam
//                   </button>
//                 )}
//                 {exam.status === "Completed" && (
//                   <Link
//                     to={`/results/${exam.id}`}
//                     className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all flex items-center justify-center gap-2">
//                     <FaRedo /> View Results
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyExams;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaChartBar, FaRedo } from "react-icons/fa";

const MyExams = () => {
  const [exams, setExams] = useState([]); // ✅ Always an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User not authenticated. Please log in.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "http://localhost:5000/api/exam/my-exams",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // 🚀 Debugging step

        setExams(Array.isArray(data.exams) ? data.exams : []);
      } catch (error) {
        setError("Failed to fetch exams. Please try again.");
        setExams([]);
      } finally {
        setLoading(false);
      }
    };


    fetchExams();
  }, []);

  // ✅ Function to start an exam
  const startExam = async (examId, startTime, endTime) => {
    const currentTime = new Date();
    if (currentTime < new Date(startTime)) {
      alert("Exam has not started yet!");
      return;
    }
    if (currentTime > new Date(endTime)) {
      alert("Exam has already ended!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("User not authenticated. Please log in.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/exam/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ examId }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to start exam");
      }

      // Redirect user to exam-taking page
      navigate(`/exam/${data.attemptId}`);
    } catch (error) {
      console.error("Error starting exam:", error);
      alert(error.message);
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-gradient">
        📚 My Exams
      </h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading exams...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : exams.length === 0 ? (
        <p className="text-center text-gray-400">No exams available.</p>
      ) : (
        // <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="flex flex-row gap-6">
          {exams.map((exam) => {
            const startTime = new Date(exam.startTime).getTime();
            const endTime = new Date(exam.endTime).getTime();
            const currentTime = new Date().getTime();
            console.log(`Current Time: ${new Date().toISOString()}`);
            console.log(
              `Exam Start: ${exam.startTime}, Parsed: ${new Date(startTime)}`
            );
            console.log(
              `Exam End: ${exam.endTime}, Parsed: ${new Date(endTime)}`
            );

            const isOngoing =
              currentTime >= startTime && currentTime <= endTime;
            console.log(`Is Ongoing: ${isOngoing}`);


            return (
              <div
                key={exam.id}
                className="relative bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-all group overflow-hidden">
                <h3 className="relative text-xl font-semibold">{exam.name}</h3>
                <p className="relative text-sm text-gray-400 flex items-center gap-2 mt-2">
                  <FaCalendarAlt className="text-blue-400" /> {exam.date}
                </p>
                <p className="relative mt-2 flex items-center gap-2">
                  <FaClock className="text-yellow-400" /> Duration:{" "}
                  {exam.duration}
                </p>
                <p className="relative flex items-center gap-2">
                  <FaChartBar className="text-green-400" /> Total Marks:{" "}
                  {exam.totalMarks}
                </p>
                <p className="relative font-semibold mt-2">
                  Attempts Left:{" "}
                  <span
                    className={
                      exam.attemptsLeft > 0 ? "text-green-400" : "text-red-400"
                    }>
                    {exam.attemptsLeft}
                  </span>
                </p>

                {/* Status Indicator */}
                <div
                  className={`relative inline-block px-3 py-1 mt-3 text-sm font-semibold rounded-full ${
                    isOngoing
                      ? "bg-yellow-500 text-black"
                      : exam.status === "Completed"
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}>
                  {isOngoing ? "Ongoing" : exam.status}
                </div>

                {/* Action Buttons */}
                <div className="relative mt-6 flex justify-between">
                  {/* {isOngoing && exam.attemptsLeft > 0 && (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all"
                      onClick={() =>
                        startExam(exam.id, exam.startTime, exam.endTime)
                      }>
                      Start Exam
                    </button>
                  )} */}
                  {isOngoing && (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all"
                      onClick={() =>
                        startExam(exam.id, exam.startTime, exam.endTime)
                      }>
                      Start Exam
                    </button>
                  )}

                  {exam.status === "Completed" && (
                    <Link
                      to={`/results/${exam.id}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg w-full font-semibold transition-all flex items-center justify-center gap-2">
                      <FaRedo /> View Results
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyExams;

