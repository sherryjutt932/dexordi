import React, { useState } from 'react';
import "./style.css";
import Logo from "../../assets/Logo-Dexordi.png";

import twitter from "../../assets/logos/twitter.png";
import telegram from "../../assets/logos/telegram.png";
import discord from "../../assets/logos/discord.png";
import medium from "../../assets/logos/m.png";
import gitbook from "../../assets/logos/book.png";
import CoomingSoon from '../CoomingSoon';
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
    <footer className='footer'>
        <div className='content'>
        <p className='copyright'>
        Copyright © 2024 DexOrdi

        </p>

        <div className='navitems'>
        <a href="/">
                Home
                </a>
            <span>●</span>
            <a onClick={handlePopup}>
                Exchange
                </a>
            <span className='nomob'>●</span>
            <a onClick={handlePopup}>
                Launchpad
                </a>
            <span>●</span>
            <a onClick={handlePopup}>
                Cybord Pool
                </a>
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

    </footer>
  )
}
