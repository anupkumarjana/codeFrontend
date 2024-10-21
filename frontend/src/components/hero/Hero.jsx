import React, { useEffect, useState } from "react";

const phrases = [
  { text: "Frontend Developers", color: "#32de84" },
  { text: "Développeur Frontend", color: "#fa8231" }, // French
  { text: "Frontend-Entwickler", color: "#c678dd" }, // German
  { text: "Sviluppatori Frontend", color: "#a9b0bd" }, // Italian
];

const typingSpeed = 100; // Speed of typing in milliseconds
const erasingSpeed = 50; // Speed of erasing in milliseconds
const pauseBetween = 1500; // Pause before typing the next phrase
const cursorBlinkSpeed = 500; // Speed of cursor blinking in milliseconds

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;
    let cursorTimeout;

    const currentPhrase = phrases[currentPhraseIndex].text;

    const type = (index) => {
      if (index < currentPhrase.length) {
        setDisplayedText((prev) => prev + currentPhrase.charAt(index));
        typingTimeout = setTimeout(() => type(index + 1), typingSpeed);
      } else {
        // Pause after typing
        typingTimeout = setTimeout(
          () => erase(currentPhrase.length),
          pauseBetween
        );
      }
    };

    const erase = (index) => {
      if (index >= 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        erasingTimeout = setTimeout(() => erase(index - 1), erasingSpeed);
      } else {
        // Move to the next phrase
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        // Start typing the next phrase
        typingTimeout = setTimeout(() => type(0), pauseBetween);
      }
    };

    // Start typing with a slight delay to avoid double rendering on load
    const startTyping = () => {
      // Delay before typing starts to avoid double rendering
      typingTimeout = setTimeout(() => type(0), 100); // Adjust this delay if needed
    };

    // Start the typing effect
    startTyping();

    // Cursor blinking effect
    cursorTimeout = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    // Cleanup on unmount
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearInterval(cursorTimeout);
    };
  }, [currentPhraseIndex]);

  return (
    <main className="flex flex-col justify-center items-center w-full h-full pt-20 ">
      <div className="text-[4rem] leading-tight text-center">
        <h1 className="text-white">
          Ultimate <br />
          <span className="text-[#DE3163] font-handjet">
            Playground
          </span> for <br />
          <span className="text-2xl flex items-center pt-10">
            <span className="text-[#e4bb68]">console</span>
            <span className="text-[#e06c75]">.log</span>
            <span className="text-[#e4bb68]"> ("</span>
            <span
              className="greeting"
              style={{ color: phrases[currentPhraseIndex].color }}
            >
              {displayedText}
            </span>
            {showCursor && <span className="text-[#e4bb68]">|</span>}{" "}
            {/* Cursor */}
            <span className="text-[#e4bb68]"> ")</span>
          </span>
        </h1>
      </div>
    </main>
  );
};

export default Hero;
