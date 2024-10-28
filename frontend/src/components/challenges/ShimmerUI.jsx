// src/components/Shimmer.js
import React from "react";
// import "./Shimmer.css";

const ShimmerUI = () => {
  return (
    <div className="shimmer-wrapper">
      {/* heading shimmer */}
      <div className="flex justify-start items-center gap-4">
        <div className="w-20 h-20 rounded-full shimmer-color"></div>
        <div>
          <div className="shimmer-color w-80 h-10 mb-2 rounded-md"></div>
          <div className="shimmer-color w-96 h-4 rounded-md"></div>
        </div>
      </div>
      {/* popular problems */}
      <div className="shimmer-content flex gap-4 items-center flex-wrap">
        {/* Simulate multiple content blocks with shimmer effect */}
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
      {/* search bar shimmer */}
      <div className="shimmer-color w-[80%] h-10 rounded-md"></div>
      <div className="flex flex-col gap-6">
        <div className="shimmer-color w-40 h-10 rounded-md"></div>
        <div className="shimmer-content flex gap-4 items-center flex-wrap">
          {/* Simulate multiple content blocks with shimmer effect */}
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
