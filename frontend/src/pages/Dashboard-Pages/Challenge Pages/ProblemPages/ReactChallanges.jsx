import React, { useState, useEffect } from "react";
import Heading from "../../../../components/challenges/Heading.jsx";
// import PopularProblems from "../../../components/challenges/PopularProblems";
import Problems from "../../../../components/challenges/Problems.jsx";
import ShimmerUI from "../../../../components/challenges/ShimmerUI.jsx";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {ReactChallengesData} from "../../../../api/ReactChallengesData.js"

const ReactChallanges = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Show shimmer for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const headingData = {
    title: "React Coding Problems",
    description:
      "Top React coding interview questions to build the most commonly-asked front end UI components and applications.",
    icon: faReact,
    iconColor: "#61DAFB",
  };


  return (
    <div className="p-7 font-poppins flex flex-col gap-10">
      {loading ? (
        // Display shimmer while loading
        <ShimmerUI />
      ) : (
        // Display actual content once loading is done
        <>
          <Heading data={headingData} />
          {/* <PopularProblems /> */}
          <Problems data={ReactChallengesData} type="react"/>
        </>
      )}
    </div>
  );
};

export default ReactChallanges;
