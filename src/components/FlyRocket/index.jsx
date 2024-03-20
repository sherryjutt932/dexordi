import React from "react";
import "./style.css";
import shield from "../../assets/ULTRA_shield_transparent.png";

export default function FlyRocket() {
  return (
    <div className="FlyRocket mountAnimBelow" id="Features">
      <div className="firstLine">ULTRA SHIELD</div>
      <div className="secondLine">
        Features
        <span>
          <img src={shield} alt="shield" />
        </span>
      </div>
    </div>
  );
}
