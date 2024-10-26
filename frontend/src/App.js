// src/App.js

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import routes from "./routes/routes";
import "./App.css";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout component with Outlet
    children: routes, // Child routes defined in routes.js
  },
]);

const App = () => {
  return (
    <div className="App bg-primary">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
