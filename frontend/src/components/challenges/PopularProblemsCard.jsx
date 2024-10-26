// src/components/PopularProblemsCard.jsx
import React from "react";
import ColoredIcons from "../ColoredIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopularProblemsCard = ({ data }) => {
  return (
    <div className="w-96 rounded-lg border p-4 flex flex-col gap-2 card-box transition-transform duration-400 ease-in-out transform hover:-translate-y-1">
      <h4>{data.title}</h4>
      <p className="line-clamp-2 overflow-hidden text-ellipsis whitespace-normal text-sm">
        {data.description}{" "}
        <FontAwesomeIcon icon={"house-flood-water-circle-arrow-right"} />
      </p>
      <span className="flex gap-2">
        <ColoredIcons icons={data.icons} />
      </span>
    </div>
  );
};

export default PopularProblemsCard;
