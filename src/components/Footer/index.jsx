import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/UltrashieldLogo.png";

import tebex from "../../assets/logos/tebex.png";
import youtube from "../../assets/logos/youtube.png";
import discord from "../../assets/logos/discord.png";

import CoomingSoon from "../CoomingSoon";
import socials from "../../constants/socials";
export default function Footer() {
  const [isPopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    setIsPopup(true);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  return (
    <footer className="footer">
      <div className="content">
        <p className="copyright">© UltraShield. All right reserved</p>

        <div className="navitems">
          <a><b>Licenses</b></a>
          <span>●</span>
          <a href="https://ultrashieldanticheat.tebex.io/" target="_blank">LifeTime</a>
          <span className="nomob">●</span>
          <a href="https://ultrashieldanticheat.tebex.io/" target="_blank">Yearly</a>
          <span>●</span>
          <a href="https://ultrashieldanticheat.tebex.io/" target="_blank">Monthly</a>
        </div>
        
        <div className="icons">
          <a target="_blank" href={socials.discord}>
            <img src={discord} alt="discord" />
          </a>
          <a target="_blank" href={socials.tebex}>
            <img src={tebex} alt="gitbook" />
          </a>
          <a target="_blank" href={socials.youtube}>
            <img src={youtube} alt="medium" />
          </a>
        </div>
      </div>

      {isPopup && <CoomingSoon closePopup={closePopup} />}
    </footer>
  );
}
