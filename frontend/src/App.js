// src/App.js

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import routes from "./routes/routes";
import "./App.css";
import useGsapSmoothScroll from "./smoothscroll/useGsapSmoothScroll";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout component with Outlet
    children: routes, // Child routes defined in routes.js
  },
]);

const App = () => {

  const containerRef = useGsapSmoothScroll()
  return (
    <div
      className="App bg-primary"
      ref={containerRef}
      style={{
        overflow: "hidden",
        height: "100vh",
        position: "fixed",
        width: "100%",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
