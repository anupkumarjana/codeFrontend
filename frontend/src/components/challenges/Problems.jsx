import React, { useState } from "react";
import SearchAndSort from "./SearchAndSort";
import ColoredIcons from "../ColoredIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Contact Form",
    description:
      "Build a contact form which submits user feedback and content details to the backend.",
    icons: ["faReact", "faJsSquare", "faHtml5", "faCss3Alt"],
    difficulty: "Easy",
  },
  {
    title: "Pagination",
    description:
      "Build a Pagination which fetches products and arranges them in an order such that.",
    icons: ["faReact", "faJsSquare", "faHtml5", "faCss3Alt"],
    difficulty: "Medium",
  },
  {
    title: "Custom Cursor",
    description:
      "Build a custom cursor which will be circular and follow the mouse movement.",
    icons: ["faReact", "faJsSquare", "faHtml5", "faCss3Alt"],
    difficulty: "Hard",
  },
  {
    title: "Todo List",
    description:
      "Create a todo list with add, edit, delete functionality and local storage support.",
    icons: ["faJsSquare", "faHtml5", "faCss3Alt"],
    difficulty: "Easy",
  },
  {
    title: "Weather App",
    description:
      "Build a weather app that fetches live data from an API and displays it beautifully.",
    icons: ["faReact", "faJsSquare"],
    difficulty: "Medium",
  },
  {
    title: "Responsive Navbar",
    description:
      "Create a responsive navbar that adjusts based on screen size with a hamburger menu.",
    icons: ["faHtml5", "faCss3Alt", "faJsSquare"],
    difficulty: "Easy",
  },
  {
    title: "E-commerce Product Filter",
    description:
      "Build a product filter where users can filter by price, category, and ratings.",
    icons: ["faReact", "faJsSquare", "faCss3Alt"],
    difficulty: "Medium",
  },
  {
    title: "Dark Mode Toggle",
    description:
      "Implement a dark mode toggle that remembers the user's preference using local storage.",
    icons: ["faReact", "faJsSquare", "faCss3Alt"],
    difficulty: "Easy",
  },
  {
    title: "Chat App UI",
    description:
      "Design a real-time chat UI with a message list and input field for new messages.",
    icons: ["faReact", "faCss3Alt"],
    difficulty: "Hard",
  },
  {
    title: "Stopwatch",
    description:
      "Build a stopwatch with start, stop, reset functionality and lap time recording.",
    icons: ["faJsSquare", "faHtml5"],
    difficulty: "Medium",
  },
];

const difficultyStyles = {
  Easy: { color: "#50C878", text: "Easy" }, // Green
  Medium: { color: "#FFD700", text: "Medium" }, // Yellow
  Hard: { color: "#FF4500", text: "Hard" }, // Red
};


const Problems = () => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Problems</h2>
      <SearchAndSort data={data} setFilteredData={setFilteredData} />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg shadow-md card-box hover:-translate-y-1 transition-transform duration-300"
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
