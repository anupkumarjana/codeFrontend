// src/routes.js

import HomePage from "../pages/Nav-Pages/HomePage";
import BlogPage from "../pages/Nav-Pages/BlogPage";
import ContributePage from "../pages/Nav-Pages/ContributePage";
// Dashboard Challenge Pages
import DashboardPage from "../pages/Nav-Pages/DashboardPage";
import ReactChallanges from "../pages/Dashboard-Pages/Challenge Pages/ReactChallanges";
import JavaScriptChallenges from "../pages/Dashboard-Pages/Challenge Pages/JavaScriptChallenges";
import HTMLChallenges from "../pages/Dashboard-Pages/Challenge Pages/HTMLChallenges";
import CSSChallenges from "../pages/Dashboard-Pages/Challenge Pages/CSSChallenges";

// Dashboard Technical Pages
import ReactInterviewPrep from "../pages/Dashboard-Pages/Interview-prep/Technical-Pages/ReactInterviewPrep";
import JavaScriptInterviewPrep from "../pages/Dashboard-Pages/Interview-prep/Technical-Pages/JavaScriptInterviewPrep";
import HTMLInterviewPrep from "../pages/Dashboard-Pages/Interview-prep/Technical-Pages/HTMLInterviewPrep";
import CSSInterviewPrep from "../pages/Dashboard-Pages/Interview-prep/Technical-Pages/CSSInterviewPrep";
import BehavioralInterviewPrepPages from "../pages/Dashboard-Pages/Interview-prep/Behavioral-Pages/BehavioralInterviewPrepPages";
import Workspace from "../components/workspace/Workspace";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      // Dashboard -> Challenges pages
      {
        path: "challenges/react",
        element: <ReactChallanges />,
      },
      {
        path: "challenges/react/workspace/:id", // Workspace page with problem ID
        element: <Workspace />,
      },
      {
        path: "challenges/javascript",
        element: <JavaScriptChallenges />,
      },
      {
        path: "challenges/html",
        element: <HTMLChallenges />,
      },
      {
        path: "challenges/css",
        element: <CSSChallenges />,
      },
      // Dashboard -> Interview Prep -> Behavioral Pages
      {
        path: "interview-prep/behavioral/conflict-resolution",
        element: <BehavioralInterviewPrepPages />,
      },
      {
        path: "interview-prep/behavioral/leadership",
        element: <BehavioralInterviewPrepPages />,
      },
      {
        path: "interview-prep/behavioral/teamwork",
        element: <BehavioralInterviewPrepPages />,
      },
      // Dashboard -> Interview Prep -> Technical Pages
      {
        path: "interview-prep/technical/react",
        element: <ReactInterviewPrep />,
      },
      {
        path: "interview-prep/technical/JavaScript",
        element: <JavaScriptInterviewPrep />,
      },
      {
        path: "interview-prep/technical/html",
        element: <HTMLInterviewPrep />,
      },
      {
        path: "interview-prep/technical/css",
        element: <CSSInterviewPrep />,
      },
    ],
  },

  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/contribute",
    element: <ContributePage />,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];

export default routes;
