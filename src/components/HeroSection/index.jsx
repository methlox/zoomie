import React, { useState } from "react";
import image from "../../Media/hero.jpg";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ImageBg,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={image}/>
      </HeroBg>
      <HeroContent>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
        </style>

        <HeroH1>Deliver to - Chinatown</HeroH1>
        <HeroP>
          Select your favourite restaurants and grab a quick bite!
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
