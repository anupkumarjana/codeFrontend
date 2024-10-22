// Hero.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const headingRef = useRef(null); // Reference for the heading

  // Split text into individual lines
  useEffect(() => {
    const heading = headingRef.current;
    const lines = heading.innerHTML.split("<br>"); // Split by <br> to separate lines

    heading.innerHTML = ""; // Clear the original content

    lines.forEach((line, index) => {
      const lineWrapper = document.createElement("div");
      lineWrapper.className = `line line-${index}`; // Add a class to each line
      lineWrapper.innerHTML = `<span class="line-inner">${line}</span>`;
      heading.appendChild(lineWrapper);
    });
  }, []);

  return (
    <main className="flex flex-col justify-center items-center w-full h-full pt-20 relative">
      <div className="text-[4rem] leading-[1.2em] text-center">
        <h1 ref={headingRef} className="text-white">
          Ultimate Playground for <br />
          <span className="text-[#32de84] text-[5rem]">
            Frontend Developers.
          </span>
        </h1>
      </div>
      <div className="flex justify-start items-center absolute bottom-0 right-20">
        <h2 style={{ color: "#e4bb68" }}>
          console
          <span style={{ color: "white" }}>
            .<span style={{ color: "#e06c75" }}>log</span>
          </span>
          ("
        </h2>
        <h2 className="text-[#32de84]">
          Solve challenges, <br />
          gain confidence, and <br />
          get industry-ready.
        </h2>
        <h2 class="closure" style={{ color: "#e4bb68" }}>
          ");
        </h2>
      </div>

      <Link to="/challenges">
        <button className="button-69">Solve a Challenge</button>
      </Link>
    </main>
  );
};

export default Hero;
