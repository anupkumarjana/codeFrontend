import React, { useState, useEffect } from "react";
import Heading from "../../../components/challenges/Heading";
// import PopularProblems from "../../../components/challenges/PopularProblems";
import Problems from "../../../components/challenges/Problems";
import ShimmerUI from "../../../components/challenges/ShimmerUI";

const ReactChallanges = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show shimmer for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-7 font-poppins flex flex-col gap-10">
      {loading ? (
        // Display shimmer while loading
        <ShimmerUI />
      ) : (
        // Display actual content once loading is done
        <>
          <Heading />
          {/* <PopularProblems /> */}
          <Problems />
        </>
      )}
    </div>
  );
};

export default ReactChallanges;
