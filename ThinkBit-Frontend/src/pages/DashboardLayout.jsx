import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-900 text-white p-6 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
