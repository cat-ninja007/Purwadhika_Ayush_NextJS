"use client";
import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "../Navigation";
import GreetingButton from "./GreetingButton";
import JumbotronImg from "../../public/images/jumbotron-img.png";
import About from "./About";
import HiddenMenu from "./HiddenMenu";
import HamburgerButton from "./HamburgerButton";
import SlidingText from "./SlidingText";

const Jumbotron: FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [showGreetingButton, setShowGreetingButton] = useState<boolean>(true);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const greetingButtonPosition = document
        .querySelector(".greeting-button")
        ?.getBoundingClientRect().top;
      const aboutSectionPosition =
        aboutSectionRef.current?.getBoundingClientRect().top;

      if (greetingButtonPosition && greetingButtonPosition < -500) {
        setShowGreetingButton(false);
      } else {
        setShowGreetingButton(true);
      }

      if (aboutSectionPosition && aboutSectionPosition <= 20) {
        setShowGreetingButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-screen relative h-[700px] bg-light-gray flex items-end justify-center">
        <div className="navigation absolute top-[26px] left-0 right-0">
          <Navigation />
        </div>

        <div className="bg-transparent">
          <Image
            src={JumbotronImg}
            alt="jumbotron-image"
            className="w-[501px] h-[654.37px]"
          />
        </div>

        {showGreetingButton ? (
          <GreetingButton toggleMenu={toggleMenu} />
        ) : (
          <HamburgerButton toggleMenu={toggleMenu} />
        )}

        <HiddenMenu isVisible={menuVisible} toggleMenu={toggleMenu} />
        <SlidingText />
      </div>

      <div ref={aboutSectionRef} className="about-section">
        <About />
      </div>
    </>
  );
};

export default Jumbotron;
