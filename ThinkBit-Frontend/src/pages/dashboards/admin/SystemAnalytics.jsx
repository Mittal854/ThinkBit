// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const systemPerformanceData = [
//   { name: "CPU", usage: 45 },
//   { name: "Memory", usage: 70 },
//   { name: "Disk", usage: 55 },
// ];

// const userActivityData = [
//   { name: "Mon", activeUsers: 200 },
//   { name: "Tue", activeUsers: 250 },
//   { name: "Wed", activeUsers: 220 },
//   { name: "Thu", activeUsers: 280 },
//   { name: "Fri", activeUsers: 300 },
// ];

// function SystemAnalytics() {
//   return (
//     <div className="p-6 max-w-6xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//         📊 System Analytics
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* System Performance Section */}
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-4">System Performance</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={systemPerformanceData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="usage" fill="#4CAF50" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* User Activity Section */}
//         <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-4">User Activity</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={userActivityData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="activeUsers"
//                 stroke="#2196F3"
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SystemAnalytics;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const systemPerformanceData = [
//   { name: "CPU", usage: 45 },
//   { name: "Memory", usage: 70 },
//   { name: "Disk", usage: 55 },
// ];

// const userActivityData = [
//   { name: "Mon", activeUsers: 200 },
//   { name: "Tue", activeUsers: 250 },
//   { name: "Wed", activeUsers: 220 },
//   { name: "Thu", activeUsers: 280 },
//   { name: "Fri", activeUsers: 300 },
// ];

// function SystemAnalytics() {
//   return (
//     <div className="p-8 max-w-6xl mx-auto text-white">
//       <h2 className="text-5xl font-extrabold mb-8 text-center text-blue-500 drop-shadow-md">
//         📊 System Analytics
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* System Performance Section */}
//         <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
//           <h3 className="text-2xl font-semibold mb-5 text-green-400">
//             System Performance
//           </h3>
//           <ResponsiveContainer width="100%" height={280}>
//             <BarChart data={systemPerformanceData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="rgba(255,255,255,0.2)"
//               />
//               <XAxis dataKey="name" stroke="#ffffff" />
//               <YAxis stroke="#ffffff" />
//               <Tooltip wrapperClassName="bg-gray-800 p-3 rounded-lg shadow-lg text-white" />
//               <Bar dataKey="usage" fill="#4CAF50" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* User Activity Section */}
//         <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
//           <h3 className="text-2xl font-semibold mb-5 text-blue-400">
//             User Activity
//           </h3>
//           <ResponsiveContainer width="100%" height={280}>
//             <LineChart data={userActivityData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="rgba(255,255,255,0.2)"
//               />
//               <XAxis dataKey="name" stroke="#ffffff" />
//               <YAxis stroke="#ffffff" />
//               <Tooltip wrapperClassName="bg-gray-800 p-3 rounded-lg shadow-lg text-white" />
//               <Line
//                 type="monotone"
//                 dataKey="activeUsers"
//                 stroke="#2196F3"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "#ffffff" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SystemAnalytics;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";
// import { motion } from "framer-motion";

// const systemPerformanceData = [
//   { name: "CPU", usage: 45 },
//   { name: "Memory", usage: 70 },
//   { name: "Disk", usage: 55 },
// ];

// const userActivityData = [
//   { name: "Mon", activeUsers: 200 },
//   { name: "Tue", activeUsers: 250 },
//   { name: "Wed", activeUsers: 220 },
//   { name: "Thu", activeUsers: 280 },
//   { name: "Fri", activeUsers: 300 },
// ];

// function SystemAnalytics() {
//   return (
//     <div className="p-6 max-w-6xl mx-auto text-white">
//       <motion.h2
//         className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}>
//         📊 System Analytics
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* System Performance Section */}
//         <motion.div
//           className="bg-gray-900 p-6 rounded-2xl shadow-xl glass-effect hover:scale-105 transition-transform"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}>
//           <h3 className="text-xl font-semibold mb-4 text-green-400">
//             System Performance
//           </h3>
//           <ResponsiveContainer width="100%" height={280}>
//             <BarChart data={systemPerformanceData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="rgba(255, 255, 255, 0.2)"
//               />
//               <XAxis dataKey="name" stroke="#ddd" />
//               <YAxis stroke="#ddd" />
//               <Tooltip
//                 wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
//               />
//               <Bar dataKey="usage" fill="#4CAF50" radius={[10, 10, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* User Activity Section */}
//         <motion.div
//           className="bg-gray-900 p-6 rounded-2xl shadow-xl glass-effect hover:scale-105 transition-transform"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}>
//           <h3 className="text-xl font-semibold mb-4 text-blue-400">
//             User Activity
//           </h3>
//           <ResponsiveContainer width="100%" height={280}>
//             <LineChart data={userActivityData}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="rgba(255, 255, 255, 0.2)"
//               />
//               <XAxis dataKey="name" stroke="#ddd" />
//               <YAxis stroke="#ddd" />
//               <Tooltip
//                 wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="activeUsers"
//                 stroke="#2196F3"
//                 strokeWidth={3}
//                 dot={{ r: 5, strokeWidth: 2 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default SystemAnalytics;


import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const generateRandomUsage = () => Math.floor(Math.random() * 100);

function SystemAnalytics() {
  const [systemPerformanceData, setSystemPerformanceData] = useState([
    { name: "CPU", usage: generateRandomUsage() },
    { name: "Memory", usage: generateRandomUsage() },
    { name: "Disk", usage: generateRandomUsage() },
  ]);

  const [userActivityData, setUserActivityData] = useState([
    { name: "Mon", activeUsers: 200 },
    { name: "Tue", activeUsers: 250 },
    { name: "Wed", activeUsers: 220 },
    { name: "Thu", activeUsers: 280 },
    { name: "Fri", activeUsers: 300 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemPerformanceData([
        { name: "CPU", usage: generateRandomUsage() },
        { name: "Memory", usage: generateRandomUsage() },
        { name: "Disk", usage: generateRandomUsage() },
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg animate-pulse">
        📊 System Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* System Performance Section */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">System Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={systemPerformanceData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="name" stroke="#bbb" />
              <YAxis stroke="#bbb" />
              <Tooltip
                wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
              />
              <Bar dataKey="usage" fill="#4CAF50" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Activity Section */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">User Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userActivityData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="name" stroke="#bbb" />
              <YAxis stroke="#bbb" />
              <Tooltip
                wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#2196F3"
                strokeWidth={3}
                dot={{ fill: "#2196F3", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default SystemAnalytics;
