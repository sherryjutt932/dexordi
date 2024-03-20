import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/UltrashieldLogo.png";
import CoomingSoon from "../CoomingSoon";

import tebex from "../../assets/logos/tebex.png";
import youtube from "../../assets/logos/youtube.png";
import discord from "../../assets/logos/discord.png";

import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import socials from "../../constants/socials";
export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const handleCloseMenuClick = () => {
    setSideMenu(false);
  };

  const handleOpenMenuClick = () => {
    setSideMenu(true);
  };

  const handlePopup = () => {
    setIsPopup(true);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  return (
    <nav className="abs">
      <div className="content">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo mainlogo" />
        </a>
        <div className="navitems">
          <a href="/">Home</a>
          <span>●</span>
          <a href="#Features">Features</a>
          <span>●</span>
          <a href="#Support">Support</a>
          <span>●</span>
          <a href="#Prices">Prices</a>
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

        <button onClick={handleOpenMenuClick} className="menuBtn">
          <IoMdMenu />
        </button>
      </div>

      <div
        className="Sidebar"
        style={sideMenu ? { transform: "translateX(100%)" } : {}}
      >
        <div className="head">
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
          <button onClick={handleCloseMenuClick} className="menuBtnClose">
            <RxCross1 />
          </button>
        </div>
        <div className="navitems">
          <a href="/">Home</a>
          <a href="#Features">Features</a>
          <a href="#Support">Support</a>
          <a href="#Prices">Prices</a>
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
    </nav>
  );
}
