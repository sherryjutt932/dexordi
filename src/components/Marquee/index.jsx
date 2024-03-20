import React, { useEffect, useRef } from "react";
import ArrayData from "./Data";
import "./Marquee.css";
import { gsap } from "gsap";

export default function Marquee({ direction, speed, ...props }) {
  const marquee = useRef();
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

  return (
    <section className="marqueeSec">
      <div ref={marquee} className="marqueeCon">
        <div className="marqueeDiv" ref={first}>
          {ArrayData.map((item, index) => (
            <div key={index}>
              {item.title}<br />
              <small>{item.detail}</small>
            </div>
          ))}
        </div>
        <div ref={second} className="marqueeDiv2">
          {ArrayData.map((item, index) => (
            <div key={index}>
              {item.title} <br />
              <small>{item.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
