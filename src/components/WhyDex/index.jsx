import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import privatesvg from "../../assets/private.png";
import intelligent from "../../assets/intelligent.png";
import selfcustody from "../../assets/self custody.png";
import anonymous from "../../assets/anonymous.png";
import decentralized from "../../assets/decentralized.png";
import "./style.css";
import Lottie from 'react-lottie-player';

import intelligentAnim from "../../assets/animation/Bulb-1.json";
import selfcustodyAnim from "../../assets/animation/Magnifier-1.json";
import privateAnim from "../../assets/animation/Star-1.json";
import anonymousAnim from "../../assets/animation/Msg-1.json";
import decentralizedAnim from "../../assets/animation/Card-1.json";

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
      image: privatesvg,
      title: "PRIVATE",
      detail: "No data collected or stored.",
      anim: privateAnim,
    },
    {
      image: intelligent,
      title: "intelligent",
      detail: "DL API + Oracle Powered",
      anim: intelligentAnim,
    },
    {
      image: selfcustody,
      title: "self custody",
      detail: "Your keys. Your coins.",
      anim: selfcustodyAnim,
    },
    {
      image: anonymous,
      title: "anonymous",
      detail: "No KYC.",
      anim: anonymousAnim,
    },
    {
      image: decentralized,
      title: "decentralized",
      detail: "No humans.",
      anim: decentralizedAnim,
    },
  ];
  return (
    <div className="WhyDex">
      <div className="bg"></div>
      <div className="content">
        <div className="group card mountAnimBelow">
          <div className="detailCon">
            <h1>why dexordi</h1>
            <p>
            Dexordi recognizes the challenges faced by decentralized trading on the Bitcoin network and has
            positioned itself as a pioneer in addressing these issues. By leveraging advanced Automated Market Maker (AMM) technology, Deep Lake API, Oracle and the BRC-20/CBRC-20 token standard, Dexordi aims to revolutionize decentralized trading and unlock the full potential of the Bitcoin network.
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
                  <Lottie
                    loop
                    animationData={item.anim}
                    play
                    className="anim"
                  />

                  {/* <img src={item.image} alt={item.title} /> */}
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              );
            })}
          </div>
          <div ref={second} className="WhyDexMarqueeDiv2 slider">
            {cardData.concat(cardData).map((item, index) => {
              return (
                <div key={index} className="card">
                  <Lottie
                    loop
                    animationData={item.anim}
                    play
                    className="anim"
                  />
                  {/* <img src={item.image} alt={item.title} /> */}
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
