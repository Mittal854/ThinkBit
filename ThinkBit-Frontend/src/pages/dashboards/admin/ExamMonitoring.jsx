// import React from "react";
// import { FaEye, FaExclamationTriangle, FaClock, FaUsers } from "react-icons/fa";

// const ExamMonitoring = () => {
//   return (
//     <div className="p-6 max-w-6xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-red-400 drop-shadow-lg">
//         🛡️ Exam Monitoring
//       </h2>

//       {/* Exam Status Overview */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
//           <FaClock className="text-yellow-400 text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Ongoing Exams</h3>
//             <p className="text-gray-400 text-lg">5 Exams in progress</p>
//           </div>
//         </div>
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
//           <FaUsers className="text-blue-400 text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Active Participants</h3>
//             <p className="text-gray-400 text-lg">120 Students</p>
//           </div>
//         </div>
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
//           <FaExclamationTriangle className="text-red-500 text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Flagged Activities</h3>
//             <p className="text-gray-400 text-lg">3 Suspicious Cases</p>
//           </div>
//         </div>
//       </div>

//       {/* Monitoring Dashboard */}
//       <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//         <h3 className="text-2xl font-semibold mb-4">Live Monitoring</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[1, 2, 3, 4, 5, 6].map((exam) => (
//             <div key={exam} className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-gray-300">
//                 Exam {exam}
//               </h4>
//               <p className="text-gray-400">Subject: Mathematics</p>
//               <p className="text-gray-400">Duration: 2 hours</p>
//               <p className="text-gray-400">Students: 30</p>
//               <button className="mt-2 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 flex items-center gap-2">
//                 <FaEye /> View Live
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExamMonitoring;

// import React from "react";
// import {
//   FaUserGraduate,
//   FaClock,
//   FaExclamationTriangle,
//   FaEye,
// } from "react-icons/fa";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const liveExamData = [
//   { name: "10:00 AM", activeStudents: 150 },
//   { name: "10:15 AM", activeStudents: 140 },
//   { name: "10:30 AM", activeStudents: 130 },
//   { name: "10:45 AM", activeStudents: 120 },
// ];

// const ExamMonitoring = () => {
//   return (
//     <div className="p-6 max-w-6xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-red-400 drop-shadow-lg">
//         🎯 Exam Monitoring
//       </h2>

//       {/* Overview Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
//           <FaUserGraduate className="text-blue-400 text-3xl" />
//           <div>
//             <h3 className="text-lg font-semibold">Active Students</h3>
//             <p className="text-2xl font-bold">120</p>
//           </div>
//         </div>
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
//           <FaClock className="text-yellow-400 text-3xl" />
//           <div>
//             <h3 className="text-lg font-semibold">Ongoing Exams</h3>
//             <p className="text-2xl font-bold">5</p>
//           </div>
//         </div>
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
//           <FaExclamationTriangle className="text-red-500 text-3xl" />
//           <div>
//             <h3 className="text-lg font-semibold">Flagged Activities</h3>
//             <p className="text-2xl font-bold">3</p>
//           </div>
//         </div>
//       </div>

//       {/* Live Monitoring Section */}
//       <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//         <h3 className="text-xl font-semibold mb-4">Live Student Activity</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={liveExamData}>
//             <XAxis dataKey="name" stroke="#ffffff" />
//             <YAxis stroke="#ffffff" />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="activeStudents"
//               stroke="#4CAF50"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Flagged Activities */}
//       <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
//         <h3 className="text-xl font-semibold mb-4 text-red-400">
//           Flagged Activities
//         </h3>
//         <ul className="space-y-3">
//           <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
//             <FaEye className="text-red-400 text-xl" />
//             <p>Student ID: 102 | Suspicious Browser Activity</p>
//           </li>
//           <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
//             <FaEye className="text-red-400 text-xl" />
//             <p>Student ID: 215 | Multiple Window Switching</p>
//           </li>
//           <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
//             <FaEye className="text-red-400 text-xl" />
//             <p>Student ID: 178 | Unusual Idle Time</p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ExamMonitoring;


import React from "react";
import {
  FaUserGraduate,
  FaClock,
  FaExclamationTriangle,
  FaEye,
  FaVideo,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const liveExamData = [
  { name: "10:00 AM", activeStudents: 150 },
  { name: "10:15 AM", activeStudents: 140 },
  { name: "10:30 AM", activeStudents: 130 },
  { name: "10:45 AM", activeStudents: 150 },
];

const ExamMonitoring = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-red-400 drop-shadow-lg">
        🎯 Exam Monitoring Dashboard
      </h2>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaUserGraduate className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Active Students</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaClock className="text-yellow-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Ongoing Exams</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaExclamationTriangle className="text-red-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Flagged Activities</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FaVideo className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Live Proctoring</h3>
            <p className="text-2xl font-bold">Enabled</p>
          </div>
        </div>
      </div>

      {/* Live Monitoring Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Live Student Activity</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={liveExamData}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="activeStudents"
              stroke="#4CAF50"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Flagged Activities */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-red-400">
          Flagged Activities 🚨
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
            <FaEye className="text-red-400 text-xl" />
            <p>
              <strong>10:05 AM:</strong> Student ID: 102 | Suspicious Browser
              Activity
            </p>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
            <FaEye className="text-red-400 text-xl" />
            <p>
              <strong>10:20 AM:</strong> Student ID: 215 | Multiple Window
              Switching
            </p>
          </li>
          <li className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
            <FaEye className="text-red-400 text-xl" />
            <p>
              <strong>10:35 AM:</strong> Student ID: 178 | Unusual Idle Time
            </p>
          </li>
        </ul>
      </div>

      {/* Live Proctoring Section */}
      <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-400">
          Live Proctoring Feeds 🎥
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 1
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 2
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 3
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-center items-center text-gray-400 text-lg">
            Camera Feed 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMonitoring;
