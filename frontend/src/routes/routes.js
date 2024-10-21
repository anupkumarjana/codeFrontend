// src/routes.js

import HomePage from "../pages/HomePage";
import ChallengesPage from "../pages/ChallengesPage";
import InterviewPrepPage from "../pages/InterviewPrepPage";
import BlogPage from "../pages/BlogPage";
import ContributePage from "../pages/ContributePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/challenges",
    element: <ChallengesPage />,
  },
  {
    path: "/interview-prep",
    element: <InterviewPrepPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/contribute",
    element: <ContributePage />,
  },
];

export default routes;
