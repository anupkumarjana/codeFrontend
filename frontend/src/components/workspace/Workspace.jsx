import React from "react";
import { useParams } from "react-router-dom";
import { ReactChallengesData } from "../../api/ReactChallengesData";
import ProblemStatementCard from "./ProblemStatementCard";

const Workspace = () => {
  const { id } = useParams(); // Get the problem ID from the URL
  const problem = ReactChallengesData[id]; // Find the corresponding problem

  if (!problem) {
    return <div className="text-center">Problem not found!</div>;
  }

  return (
    <div className="h-[calc(100vh-60px)]  text-white flex gap-3">
      {/* Left: Problem Statement */}
      <div className="w-2/4">
        <ProblemStatementCard problem={problem}/>
       
      </div>

      {/* Right: CodeSandbox Embed */}
      <div className="w-full">
        <iframe
          src="https://codesandbox.io/embed/new?codemirror=1"
          title="CodeSandbox"
          style={{
            width: "100%",
            height: "87vh",
            border: "0",
            borderRadius: "8px",
          }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking; fullscreen"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default Workspace;
