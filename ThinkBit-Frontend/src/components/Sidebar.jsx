import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const userRole = localStorage.getItem("role") || "";

  // Define menu items for different roles
  const menuItems = {
    student: [
      { name: "📚 My Exams", path: "/dashboard/student/myexams" },
      { name: "📈 Progress", path: "/dashboard/student/progress" },
      { name: "🕒 Exam History", path: "/dashboard/student/examhistory" },
    ],
    examiner: [
      { name: "📝 Create Exam", path: "/dashboard/examiner/createexam" },
      { name: "📊 Exam Analytics", path: "/dashboard/examiner/examanalytics" },
      {
        name: "🗂 Manage Questions",
        path: "/dashboard/examiner/managequestions",
      },
      {
        name: "✍️ Evaluate Answers",
        path: "/dashboard/examiner/evaluateanswers",
      },
    ],
    admin: [
      { name: "👤 User Management", path: "/dashboard/admin/usermanagement" },
      { name: "📊 System Analytics", path: "/dashboard/admin/systemanalytics" },
      { name: "📡 Exam Monitoring", path: "/dashboard/admin/exammonitoring" },
      { name: "📜 User Logs & Activity", path: "/dashboard/admin/userlogs" },
      { name: "🚨 Reports & Feedback", path: "/dashboard/admin/reports" },
      { name: "⚙️ System Settings", path: "/dashboard/admin/settings" },
      { name: "🔔 Notifications", path: "/dashboard/admin/notifications" },
    ],
  };

  if (!userRole) {
    return null; // Hide sidebar if no role is found
  }

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-19 left-0 shadow-lg">
      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems[userRole]?.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block p-3 rounded-lg mx-3 ${
                  location.pathname === item.path
                    ? "bg-purple-600"
                    : "hover:bg-gray-700"
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
