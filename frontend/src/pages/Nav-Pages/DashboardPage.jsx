// src/pages/Dashboard.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSideMenu from "../../components/dashboardSideMenu/DashboardSideMenu";

const DashboardPage = () => {
  const location = useLocation(); // Get the current route
  const isWorkspaceRoute = location.pathname.includes("/workspace/");

  return (
    <div
      className="grid relative h-screen transition-all duration-300 
      grid-cols-[70px_1fr] 
      sm:grid-cols-[150px_1fr] 
      md:grid-cols-[180px_1fr] 
      lg:grid-cols-[190px_1fr]"
    >
      {/* Render Side Menu only if not on Workspace route */}
      {!isWorkspaceRoute && (
        <aside className="text-white">
          <DashboardSideMenu />
        </aside>
      )}

      <main
        className={`p-5 overflow-auto ${isWorkspaceRoute ? "col-span-2" : ""}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
