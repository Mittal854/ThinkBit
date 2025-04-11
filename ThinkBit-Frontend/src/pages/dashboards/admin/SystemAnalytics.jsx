
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
