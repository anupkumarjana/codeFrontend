// src/routes.js

import HomePage from "../"
import Challenges from "./pages/Challenges";
import InterviewPrep from "./pages/InterviewPrep";
import Blog from "./pages/Blog";
import Contribute from "./pages/Contribute";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/challenges", name: "Challenges", Component: Challenges },
  { path: "/interview-prep", name: "Interview Prep", Component: InterviewPrep },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/contribute", name: "Contribute", Component: Contribute },
];

export default routes;
