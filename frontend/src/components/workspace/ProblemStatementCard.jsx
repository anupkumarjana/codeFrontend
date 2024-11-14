import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

const ProblemStatementCard = ({ problem }) => {
  const difficultyStyles = {
    Easy: { color: "#50C878", text: "Easy" },
    Medium: { color: "#FFD700", text: "Medium" },
    Hard: { color: "#FF4500", text: "Hard" },
  };

  return (
    <div className="resize-x max-w-[600px] overflow-y-auto h-[87vh] rounded-md bg-[#191919] border border-[#292929] p-6 font-poppins flex flex-col gap-6">
      {/* Title */}
      <h4 className="text-2xl font-semibold text-white">{problem.title}</h4>

      {/* Author and Difficulty */}
      <div className="flex justify-between items-center">
        <a
          href={problem.authorLinkedin}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <div className="flex gap-4 items-center">
            <div className="h-12 w-12 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h5 className="text-lg font-medium text-white">Anup K Jana</h5>
                <FontAwesomeIcon icon={faLinkedinIn} color="#0077B5" />
              </div>
              <span className="text-sm text-gray-400">Frontend Developer</span>
            </div>
          </div>
        </a>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faFire}
            color={difficultyStyles[problem.difficulty].color}
          />
          <span
            className="text-base font-medium"
            style={{
              color: difficultyStyles[problem.difficulty].color,
            }}
          >
            {difficultyStyles[problem.difficulty].text}
          </span>
        </div>
      </div>

      {/* Topic */}
      <div className="flex gap-3 items-center">
        <span className="text-white font-medium">Topic: </span>
        <span className="text-sm text-gray-300">
          {problem.description.topic}
        </span>
      </div>

      {/* Summary and Requirements */}
      <div className="text-[14px] text-gray-300">
        <p className="mb-2">{problem.description.summary}</p>
        <ul className="list-disc ml-5">
          {problem.description.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {problem.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#282828] text-white px-3 py-1 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Icons */}
      <div className="flex gap-4 mt-4">
        <FontAwesomeIcon icon={faReact} size="2x" color="#61DBFB" />
        <FontAwesomeIcon icon={faJsSquare} size="2x" color="#F7DF1E" />
        <FontAwesomeIcon icon={faHtml5} size="2x" color="#E34F26" />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" color="#1572B6" />
      </div>

      {/* Demo Output */}
      {problem.demoLink && (
        <div className="flex flex-col gap-2 mt-4">
          <span className="text-white font-medium">Sample Output</span>
          <img
            src={problem.demoLink}
            alt="Demo Output"
            className="w-full rounded-md border border-gray-600"
          />
        </div>
      )}
    </div>
  );
};

export default ProblemStatementCard;
