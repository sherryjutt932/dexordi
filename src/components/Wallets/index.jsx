import React from "react";
import "./style.css";
import TextEffect from "../TextEffect";

import twitter from "../../assets/logos/twitter.png";
import telegram from "../../assets/logos/telegram.png";
import discord from "../../assets/logos/discord.png";
import gitbook from "../../assets/logos/book.png";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Button";
import ultralogo from "../../assets/UltrashieldLogo.png";

export default function Wallets() {
  const cardData = [
    {
      img: ultralogo,
      src: "https://ultrashieldanticheat.tebex.io/",
    },
  ];
  return (
    <div className="wallets">
      <div className="bg"></div>

      <div className="content mountAnimBelow">
        <h1>
          Immerse yourself in <span>UltraShield</span>
        </h1>
        <p>Get it now, up to 50% off.</p>
        {/* <small>
        Special thanks to the Okx wallet team for their help!
        </small> */}
      </div>

      <div className="cardContainer">
        {cardData.map((item, index) => {
          return (
            <div key={index} className="WalletCard mountAnimBelow">
              <div className="imgCon">
                <a href={item.src} target="_blank" rel="noreferrer">
                  <img src={item.img} alt={item.title + "image"} />
                </a>
              </div>
              <a href="https://ultrashieldanticheat.tebex.io/">
                <Button>
                  <span>Shop Now</span>
                  <span className="icon">
                    <FaCartShopping/>
                  </span>
                </Button>
              </a>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
