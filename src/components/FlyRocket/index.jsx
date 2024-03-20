import React from 'react'
import "./style.css";
import Rocket from "../../assets/Rocket.svg";
import Lottie from "react-lottie-player";
import RocketAnim from "../../assets/animation/Rocket-1.json";

export default function FlyRocket() {
  return (
    <div className='FlyRocket mountAnimBelow'>
        <div className='firstLine'>with DexOrdi</div>
        <div className='secondLine'>you can 
            <span>
            <img src={Rocket} alt="Rocket" />
            </span>
        </div>

{/* <Lottie loop animationData={RocketAnim} play className="anim" /> */}

    </div>
  )
}
