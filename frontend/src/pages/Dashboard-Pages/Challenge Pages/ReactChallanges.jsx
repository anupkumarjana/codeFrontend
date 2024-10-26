import React from "react";
import Heading from "../../../components/challenges/Heading";
import PopularProblems from "../../../components/challenges/PopularProblems";
import Problems from "../../../components/challenges/Problems";

const ReactChallanges = () => {
  return (
    <div className="p-7 font-poppins flex flex-col gap-10">
      <Heading />
      <PopularProblems />

      <Problems />
    </div>
  );
};

export default ReactChallanges;
