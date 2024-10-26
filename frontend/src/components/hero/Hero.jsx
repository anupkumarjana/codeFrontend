// Hero.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const headingRef = useRef(null); // Reference for the heading
   const cursorRef = useRef(null); // Reference for the custom-cursor

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

   useEffect(() => {
     const moveCursor = (event) => {
       if (cursorRef.current) {
         const { clientX: x, clientY: y } = event;
         cursorRef.current.style.left = `${x}px`;
         cursorRef.current.style.top = `${y}px`;
       }
     };

     const main = document.getElementById("main");
     if (main) {
       main.addEventListener("mousemove", moveCursor);
     }

     return () => {
       if (main) {
         main.removeEventListener("mousemove", moveCursor);
       }
     };
   }, []);
 
   

  return (
    <main
      id="main"
      className="flex flex-col justify-center items-center w-full h-[calc(100vh-54px)] relative overflow-hidden hero-bg px-4"
    >
      {/* cursor */}
      <div className="custom-cursor md:block hidden" ref={cursorRef}></div>
      <div className="text-center">
        <h1
          ref={headingRef}
          className="text-white text-2xl md:text-5xl lg:text-6xl leading-tight"
        >
          Ultimate Playground for <br />
          <span className="text-[#32de84] text-2xl md:text-6xl lg:text-7xl">
            Frontend Developers.
          </span>
        </h1>
      </div>

      <button className="button-69 mt-8" >
        <Link to="/dashboard/challenges/react">Solve a Challenge</Link>
      </button>

      {/* <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-2 absolute bottom-10 sm:bottom-20 right-5 sm:right-20 text-center sm:text-left">
        <h2 style={{ color: "#e4bb68" }}>
          console
          <span style={{ color: "white" }}>
            .<span style={{ color: "#e06c75" }}>log</span>
          </span>
          ("
        </h2>
        <h2 className="text-[#32de84] text-lg md:text-xl leading-snug">
          Solve challenges, <br />
          gain confidence, and <br />
          get industry-ready.
        </h2>
        <h2 className="closure" style={{ color: "#e4bb68" }}>
          ");
        </h2>
      </div> */}
    </main>
  );
};

export default Hero;
