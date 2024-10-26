import React from "react";
import PopularProblemsCard from "./PopularProblemsCard";

const data = [
  {
    title: "Contact Form",
    description:
      "Build a contact form which submits user feedback and content details to the backend.",
    icons: ["faReact", "faJsSquare", "faHtml5", "faCss3Alt"],
  },
  {
    title: "Pagination",
    description:
      "Build a Pagination which fetches products and arranges them in an order such that.",
    icons: ["faReact", "faJsSquare", "faHtml5", "faCss3Alt"],
  },
  {
    title: "Custom Cursor",
    description:
      "Build a cistom cursor which will be circular and that will follow the mouse movement.",
    icons: ["faReact", "faJsSquare", "faHtml5", "faCss3Alt"],
  },
];

const PopularProblems = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-medium">Try Popular Problems</h4>
      <div className="flex gap-4 flex-wrap">
        {data.map((item, index) => (
          <PopularProblemsCard key={index} data={item} /> // Corrected here
        ))}
      </div>
    </div>
  );
};

export default PopularProblems;
