import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactChallengesData } from "../../api/ReactChallengesData";

const Workspace = () => {
  const { id } = useParams(); // Get the problem ID from the URL
  const navigate = useNavigate();
  const problem = ReactChallengesData[id]; // Find the corresponding problem

  if (!problem) {
    return <div className="text-center">Problem not found!</div>;
  }

  return (
    <div className="min-h-screen  text-white flex overflow-y-hidden">
      {/* Left: Problem Statement */}
      <div className="w-1/3 p-8">
        <h4 className="text-2xl font-bold mb-4">{problem.title}</h4>
        <p className="mb-4">{problem.description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
          onClick={() => navigate("/dashboard/challenges/react")}
        >
          Back to Problems
        </button>
      </div>

      {/* Right: CodeSandbox Embed */}
      <div className="w-full">
        <iframe
          src="https://codesandbox.io/embed/new?codemirror=1"
          title="CodeSandbox"
          style={{
            width: "100%",
            height: "90vh",
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
