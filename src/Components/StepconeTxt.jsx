import React from "react";
import "./StepconeTxt.css";

const Stepcone = () => {
  return (
    <div className="patterns">
      <svg className="st-svg-text ">
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>
        </defs>

        {/* <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect> */}

        <text x="50%" y="40%" textAnchor="middle">
          STEPCONE 
        </text>
        <text x="50%" y="98%" textAnchor="middle">
          2025 
        </text>
      </svg>
    </div>
  );
};

export default Stepcone;
