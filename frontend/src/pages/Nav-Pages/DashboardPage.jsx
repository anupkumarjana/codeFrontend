// src/pages/Dashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideMenu from "../../components/dashboardSideMenu/DashboardSideMenu";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-[260px,_1fr] relative">
      <div className="">
        <DashboardSideMenu />
      </div>

      {/* Renders child routes like /dashboard/challenges */}
      {/* <ChallengesPage/> */}
      {/* <InterviewPrepPage/> */}
      <div className="p-5">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
