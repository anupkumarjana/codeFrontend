import React, { useState } from "react";
import SearchAndSort from "./SearchAndSort";
import ColoredIcons from "../ColoredIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ReactChallengesData } from "../../api/ReactChallengesData";

const difficultyStyles = {
  Easy: { color: "#50C878", text: "Easy" }, // Green
  Medium: { color: "#FFD700", text: "Medium" }, // Yellow
  Hard: { color: "#FF4500", text: "Hard" }, // Red
};

const Problems = () => {
  const [filteredData, setFilteredData] = useState(ReactChallengesData);
  const navigate = useNavigate();

  return (
    <div className="">
      {/* <h4 className="text-xl font-medium mb-4">Problems</h4> */}
      <SearchAndSort
        data={ReactChallengesData}
        setFilteredData={setFilteredData}
      />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg shadow-md card-box hover:-translate-y-1 transition-transform duration-300"
            onClick={() => navigate(`/dashboard/challenges/react/workspace/${idx}`)}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm description mb-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {/* <span className="text-xs font-semibold">Difficulty:</span> */}
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faFire}
                    color={difficultyStyles[item.difficulty].color}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: difficultyStyles[item.difficulty].color,
                    }}
                  >
                    {difficultyStyles[item.difficulty].text}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <ColoredIcons icons={item.icons} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
