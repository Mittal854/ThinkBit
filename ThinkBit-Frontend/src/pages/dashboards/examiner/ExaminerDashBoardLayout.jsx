import React from "react";
import { Outlet } from "react-router-dom";

const ExaminerDashBoardLayout = () => {
  return (
    <div className="flex mt-20">
      <Outlet />
    </div>
  );
};

export default ExaminerDashBoardLayout;
