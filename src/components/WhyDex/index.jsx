import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import privatesvg from "../../assets/private.png";
import intelligent from "../../assets/intelligent.png";
import selfcustody from "../../assets/self custody.png";
import anonymous from "../../assets/anonymous.png";
import decentralized from "../../assets/decentralized.png";

import ultralogo from "../../assets/UltrashieldLogo.png";

import "./style.css";
import Lottie from 'react-lottie-player';

import intelligentAnim from "../../assets/animation/Bulb-1.json";
import selfcustodyAnim from "../../assets/animation/Magnifier-1.json";
import privateAnim from "../../assets/animation/Star-1.json";
import anonymousAnim from "../../assets/animation/Msg-1.json";
import decentralizedAnim from "../../assets/animation/Card-1.json";
import { FaCartShopping } from "react-icons/fa6";

export default function CardsSection({direction, speed}) {
  const WhyDexMarquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], {
      xPercent: xPercent,
      duration: 0,
    });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], {
      xPercent: xPercent,
      duration: 0,
    });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  const cardData = [
    {
      image: ultralogo,
      title: "Monthly",
      detail: "$15",
      anim: privateAnim,
    },
    {
      image: ultralogo,
      title: "Quarterly",
      detail: "$35",
      anim: intelligentAnim,
    },
    {
      image: ultralogo,
      title: "Yearly",
      detail: "$50",
      anim: selfcustodyAnim,
    },
    {
      image: ultralogo,
      title: "LifeTime",
      detail: "$80",
      anim: anonymousAnim,
    },
   
  ];
  return (
    <div className="WhyDex" id="Prices">
      <div className="bg"></div>
      <div className="content">
        <div className="group mountAnimBelow">
          <div className="detailCon">
            <h1>Choose</h1>
            <p>
            Your Duration
            </p>
          </div>
        </div>
      </div>

      <div className="WhyDexMarqueeWrapper">
        <div ref={WhyDexMarquee} className="WhyDexMarqueeCon">
          <div className="WhyDexMarqueeDiv slider" ref={first}>
            {cardData.concat(cardData).map((item, index) => {
              return (
                <div key={index} className="card">
                  {/* <Lottie
                    loop
                    animationData={item.anim}
                    play
                    className="anim"
                  /> */}

                  <img src={item.image} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>
                    <span>{item.detail}</span>
                     <a href="https://ultrashieldanticheat.tebex.io/" target="_blank" className="cart">
                  <FaCartShopping />
                    </a></p>
                </div>
              );
            })}
          </div>
          <div ref={second} className="WhyDexMarqueeDiv2 slider">
            {cardData.concat(cardData).map((item, index) => {
              return (
                <div key={index} className="card">
                  {/* <Lottie
                    loop
                    animationData={item.anim}
                    play
                    className="anim"
                  /> */}
                  <img src={item.image} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p>
                  <span>{item.detail}</span>
                  <a href="https://ultrashieldanticheat.tebex.io/" target="_blank" className="cart">
                  <FaCartShopping />
                    </a></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
