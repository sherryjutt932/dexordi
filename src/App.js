import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DashboardImage from "./components/DashboardImage";
import FlyRocket from "./components/FlyRocket";
import Marquee from "./components/Marquee";
import CardsSection from "./components/CardsSection";
import WhyDex from "./components/WhyDex";
import Wallets from "./components/Wallets";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const mountAnimBelow = document.getElementsByClassName("mountAnimBelow");

    Array.from(mountAnimBelow).forEach((element) => {
      gsap.fromTo(
        element,
        { yPercent: 10, opacity: 0 },
        {
          duration: 1,
          yPercent: 0,
          opacity: 1,
          ease: "sine",
          delay: 0.2,
          scrollTrigger: {
            trigger: element,
            toggleActions: "restart none none reverse",
            // toggleActions: "play none none none",
          },
        }
      );
    });


  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <DashboardImage />
      <FlyRocket />
      <Marquee direction={"left"} speed={0.1} />
      <CardsSection />
      <WhyDex direction={"left"} speed={0.1} />
      <Wallets />
      <Footer />
    </>
  );
}

export default App;
