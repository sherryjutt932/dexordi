import React from "react";
import dashboard1 from "../../assets/dashboard/Dashboard 3.png";
import dashboard2 from "../../assets/dashboard/Dashboard 4.png";
import dashboard3 from "../../assets/dashboard/Dashboard 6.png";
import TextEffect from "../TextEffect";
import "./style.css";

export default function CardsSection() {
  const data = [
    {
      title: {
        line1: "self custody",
        line2: "escrow system",
      },
      detail:
        "Your tokens are securely stored in the escrow system, only you have access to it when your staking period ends.",
      img: dashboard1,
    },
    {
      title: {
        line1: "DIGITAL ART",
        line2: "ON ordinals",
      },
      detail:
        "Explore array of Bitcoin NFTs on Dexordi, such as images, videos, and many more. Ordinal NFTs are completely Bitcoin-native",
      img: dashboard3,
    },
    {
      title: {
        line1: "exchange",
        line2: "Both",
        small: "brc20/cbrc20 tokens",
      },
      detail:
        "AMM & DAO on the bitcoin network based on brc20 & cbrc20 token standard",
      img: dashboard2,
    },
  ];
  return (
    <div className="CardsSection">
      <div className="bg"></div>
      <div className="bg"></div>
      <div className="bg"></div>
      {data.map((item, index) => {
        return (
          <div className="content">
            <div key={index} className={`group mountAnimBelow ${index == 0 && 'card'}`}>
            <div className="detailCon">
              <h1>
                {item.title.line1} <br />
                <TextEffect>
                  <span>
                    {item.title.line2}{item.title.small && <small>{" "}{item.title.small}</small>}
                  </span>
                </TextEffect>
              </h1>
              <p>
                {item.detail}
              </p>
            </div>
            <div className="imgCon">
              <img src={item.img} alt="dashboard image" />
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
