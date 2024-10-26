// src/pages/Dashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideMenu from "../../components/dashboardSideMenu/DashboardSideMenu";

const DashboardPage = () => {
  return (
    <div
      className="grid relative h-screen transition-all duration-300 
      grid-cols-[70px_1fr] 
      sm:grid-cols-[150px_1fr] 
      md:grid-cols-[180px_1fr] 
      lg:grid-cols-[190px_1fr]"
    >
      <aside className=" text-white">
        <DashboardSideMenu />
      </aside>

      <main className="p-5 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
