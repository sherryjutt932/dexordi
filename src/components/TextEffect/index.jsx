import React from "react";
import "./style.css";

export default function TextEffect({children}) {
    return (
      <div className="TextEffect">
        <div className="firstText">{children}</div>
        <div className="secondText">{children}</div>
      </div>
    )
  }