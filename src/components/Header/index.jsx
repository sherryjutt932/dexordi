import React from "react";
import "./style.css";
import headerBg from "../../assets/headerBg.png";
import headerImage from "../../assets/headerImage.png";
import logo1 from "../../assets/digitalJournal.png";
import logo2 from "../../assets/Yahoo.png";
import logo3 from "../../assets/accesswire.png";
import TextEffect from "../TextEffect";
import Lottie from 'react-lottie-player';
import headerBlock from '../../assets/animation/header-block.json';
import Button from "../Button";
import qrcode from "../../assets/qr.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={headerBg} alt="headerBg" className="bg" />

      <div className="content">
        <div className="detailcon">
          <h1>
            AMM & DA0 <br />
            BASED ON <br />
            <span><TextEffect>
            brc20 and cbrc20 token standard
            </TextEffect></span>
          </h1>
          <p>
          DexOrdi provides a seamless and intuitive trading environment that empowers users to explore the world of decentralized trading on the Bitcoin network.

          </p>

          <a href="https://unisat.io/market/brc20?tick=%24ODI" >
          <Button>
            <span className="icon">
              <img src={qrcode} alt="" />
            </span>
            <span>
              Buy $ODI
            </span>
          </Button>
          </a>
        </div>

       <div className="headerAnim">
       <Lottie
      loop
      animationData={headerBlock}
      play
    />
       </div>

        {/* <img src={headerImage} alt="headerImage" className="headerImage" /> */}

        <div className="logo">
          <a href="https://digitaljournal.com/pr/news/accesswire/dexordi-revolutionizing-decentralized-trading-on-the-bitcoin-network-with-advanced-amm-technology" target="_blank">
            <img src={logo1} alt="logo1" />
          </a>
          <a target="_blank" href="https://finance.yahoo.com/news/dexordi-revolutionizing-decentralized-trading-bitcoin-121500654.html">
            <img src={logo2} alt="logo2" />
          </a>

          <a target="_blank" href="https://www.accesswire.com/761443/DexOrdi-Revolutionizing-Decentralized-Trading-on-the-Bitcoin-Network-with-Advanced-AMM-Technology">
            <img src={logo3} alt="logo3" />
          </a>
            
        </div>
      </div>
    </header>
  );
}
