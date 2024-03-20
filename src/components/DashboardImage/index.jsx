import React from "react";
import "./style.css";
import dashboard1 from "../../assets/dashboard1.png";
import dashboard2 from "../../assets/dashboard2.png";
import arrowleft from "../../assets/arrowleft.svg";
import TextEffect from "../TextEffect";

import YouTube from "react-youtube";

export default function DashboardImage() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="content DashboardImage">
      <div className="Wrapper">
        <div className="bg"></div>
        <div className="imgCon mountAnimBelow">
          <YouTube videoId="uH402ysNEGI" opts={opts} />
        </div>
        <div className="detailCon mountAnimBelow">
          <p className="effect">
            <span>
              <img src={arrowleft} alt="arrowleft" />
            </span>{" "}
            Ultra{" "}
            <TextEffect>
              <span>Shield</span>
            </TextEffect>
          </p>
        </div>
      </div>
    </section>
  );
}
