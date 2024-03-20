import React from "react";
import "./style.css";
import dashboard1 from "../../assets/dashboard1.png";
import dashboard2 from "../../assets/dashboard2.png";
import arrowleft from "../../assets/arrowleft.svg";
import TextEffect from "../TextEffect";

export default function DashboardImage() {
  return (
    <section className="content DashboardImage">
      <div className="Wrapper">
        <div className="bg"></div>
        <div className="imgCon mountAnimBelow">
          <img src={dashboard1} alt="dashboard1" className="dashboard1" />
          <img src={dashboard2} alt="dashboard2" className="dashboard2" />
        </div>
        <div className="detailCon mountAnimBelow">
          <p style={{opacity:"0"}}>Take</p>
            <p className="effect">
            <span>
                <img src={arrowleft} alt="arrowleft" />
            </span> the <TextEffect><span>DexOrdi</span></TextEffect>
            </p>
        </div>
      </div>
    </section>
  );
}
