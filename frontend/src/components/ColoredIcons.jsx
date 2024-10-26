// src/components/ColoredIcons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

// Icon-Color Mapping
const iconColorMap = {
  faReact: { icon: faReact, color: "#61DAFB" },
  faJsSquare: { icon: faJsSquare, color: "#F7DF1E" },
  faHtml5: { icon: faHtml5, color: "#E34F26" },
  faCss3Alt: { icon: faCss3Alt, color: "#264de4" },
};

// Reusable Colored Icon Component
const ColoredIcons = ({ icons, size = "x" }) => {
  return (
    <div className="flex space-x-2">
      {icons.map((icon, idx) => (
        <FontAwesomeIcon
          key={idx}
          icon={iconColorMap[icon].icon}
          color={iconColorMap[icon].color}
          size={size}
        />
      ))}
    </div>
  );
};

export default ColoredIcons;
