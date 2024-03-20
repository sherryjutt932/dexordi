import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/Logo-Dexordi.png";
import CoomingSoon from "../CoomingSoon";
import twitter from "../../assets/logos/twitter.png";
import telegram from "../../assets/logos/telegram.png";
import discord from "../../assets/logos/discord.png";
import medium from "../../assets/logos/m.png";
import gitbook from "../../assets/logos/book.png";
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
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="navitems">
          <a href="/">Home</a>
          <span>●</span>
          <a onClick={handlePopup}>Exchange</a>
          <span>●</span>
          <a onClick={handlePopup}>Launchpad</a>
          <span>●</span>
          <a onClick={handlePopup}>Cybord Pool</a>
        </div>
        <div className="icons">
          <a target="_blank" href={socials.twitter}>
            <img src={twitter} alt="twitter" />
          </a>
          <a target="_blank" href={socials.telegram}>
            <img src={telegram} alt="telegram" />
          </a>
          <a target="_blank" href={socials.discord}>
            <img src={discord} alt="discord" />
          </a>
          <a target="_blank" href={socials.gitbook}>
            <img src={gitbook} alt="gitbook" />
          </a>
          <a target="_blank" href={socials.medium}>
            <img src={medium} alt="medium" />
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
          <a onClick={handlePopup}>Exchange</a>
          <a onClick={handlePopup}>Launchpad</a>
          <a onClick={handlePopup}>Cybord Pool</a>
        </div>
        <div className="icons">
          <a target="_blank" href={socials.twitter}>
            <img src={twitter} alt="twitter" />
          </a>
          <a target="_blank" href={socials.telegram}>
            <img src={telegram} alt="telegram" />
          </a>
          <a target="_blank" href={socials.discord}>
            <img src={discord} alt="discord" />
          </a>
          <a target="_blank" href={socials.gitbook}>
            <img src={gitbook} alt="gitbook" />
          </a>
          <a target="_blank" href={socials.medium}>
            <img src={medium} alt="medium" />
          </a>
        </div>
      </div>

      {isPopup && <CoomingSoon closePopup={closePopup} />}
    </nav>
  );
}
