// src/components/Layout.jsx

import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom"; // Import Outlet to render child components

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet /> {/* Render matching route component here */}
      </div>
    </>
  );
};

export default Layout;
