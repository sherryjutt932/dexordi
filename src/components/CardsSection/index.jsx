import React from "react";
import dashboard1 from "../../assets/dashboard/Dashboard 3.png";
import TextEffect from "../TextEffect";
import "./style.css";

export default function CardsSection() {
  const data = [
    {
      title: {
        line2: "Support",
      },
      detail:
        "Join our Discord community to connect with like-minded individuals and stay updated on the latest discussions and events!",
      src: "https://discord.com/widget?id=916436448671047720&theme=dark",
    },
   
  ];
  return (
    <div className="CardsSection" id="Support">
      <div className="bg"></div>
      <div className="bg"></div>
      <div className="bg"></div>
      {data.map((item, index) => {
        return (
          <div className="content">
            <div key={index} className={`group mountAnimBelow ${index == 0 && 'card'}`}>
            <div className="detailCon">
              <h1>
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
              <iframe src={item.src} />
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
