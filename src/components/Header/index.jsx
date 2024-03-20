import React from "react";
import "./style.css";
import headerBg from "../../assets/headerBg.png";
import headerImage from "../../assets/headerImage.png";
import logo1 from "../../assets/digitalJournal.png";
import logo2 from "../../assets/Yahoo.png";
import logo3 from "../../assets/accesswire.png";
import TextEffect from "../TextEffect";
import Lottie from "react-lottie-player";
import headerBlock from "../../assets/animation/header-block.json";
import Button from "../Button";
import qrcode from "../../assets/qr.svg";

import shield from "../../assets/ULTRA_shield_transparent.png";

export default function Header() {
  return (
    <header className="header">
      <img src={headerBg} alt="headerBg" className="bg" />

      <div className="content">
        <div className="detailcon">
          <h1>
            FiveM <br />
            <span>
              <TextEffect>UltraShield</TextEffect>
            </span>
          </h1>
          <p>
            <span>
              Overview <br />
            </span>
            Elevate and safeguard your FiveM experience with UltraShield, the
            cutting-edge anti-cheat that sets new standards in the market for
            over 3 years.
          </p>

          <a href="https://ultrashieldanticheat.tebex.io/">
            <Button>
              <span className="icon">
                <img src={qrcode} alt="" />
              </span>
              <span>Buy Now $15</span>
            </Button>
          </a>
        </div>

        {/* <div className="headerAnim">
          <Lottie loop animationData={headerBlock} play />
        </div> */}

        {/* <img src={headerImage} alt="headerImage" className="headerImage" /> */}

       
      </div>
    </header>
  );
}
