import React from 'react'
import { RxCross1 } from "react-icons/rx";
import laptopCartoon from "../../assets/animation/laptopCartoon.json";
import Lottie from "react-lottie-player";
import "./style.css";
export default function CoomingSoon({closePopup}) {
  return (
    <div className="popupCS">
          <button onClick={closePopup} className="popupBtnClose">
            <RxCross1 />
          </button>

          <h1>
            I am the lead dev and we are working hard to go live in a few weeks,
            come back soon
          </h1>
          <Lottie loop animationData={laptopCartoon} play className="csAnim" />
        </div>
  )
}
