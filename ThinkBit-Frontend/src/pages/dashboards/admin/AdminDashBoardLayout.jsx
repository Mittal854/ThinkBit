import React from "react";
import { Outlet } from "react-router-dom";

const AdminDashBoardLayout = () => {
  return (
    <div className="flex mt-20">
      <Outlet />
    </div>
  );
};

export default AdminDashBoardLayout;
