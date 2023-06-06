// import React from "react";
// import { Button } from "../ButtonElement";

// import {
//   InfoContainer,
//   Wrapper,
//   Row,
//   Column1,
//   TxtWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   BtnWrap,
//   Column2,
//   ImgWrap,
//   Img,
// } from "./PremiumElements";

// const Premium = ({
//   lightBg,
//   id,
//   imgStart,
//   topLine,
//   lightTxt,
//   lightTxtSub,
//   heading,
//   subtitle,
//   buttonTxt,
//   img,
//   alt,
//   btnPrimary,
//   btnDarkTxt,
//   btnDarkTxtHover,
// }) => {
//   return (
//     <>
//       <InfoContainer lightBg={lightBg} id={id}>
//         <Wrapper>
//           <Row imgStart={imgStart}>
//             <Column1>
//               <TxtWrapper>
//                 <TopLine>{topLine}</TopLine>
//                 <Heading lightTxt={lightTxt}>{heading}</Heading>
//                 <Subtitle lightTxtSub={lightTxtSub}>{subtitle}</Subtitle>
//                 <BtnWrap>
//                   <Button
//                     href="https://github.com/methlox/zoomie"
//                     target="_blank"
//                     btnPrimary={btnPrimary ? 1 : 0}
//                     btnDarkTxt={btnDarkTxt ? 1 : 0}
//                     btnDarkTxtHover={btnDarkTxtHover ? 1 : 0}
//                   >
//                     {buttonTxt}
//                   </Button>
//                 </BtnWrap>
//               </TxtWrapper>
//             </Column1>

//             <Column2>
//               <ImgWrap>
//                 <Img src={img} alt={alt} />
//               </ImgWrap>
//             </Column2>
//           </Row>
//         </Wrapper>
//       </InfoContainer>
//     </>
//   );
// };

// export default Premium;

import React, { useState } from "react";
import image from "../../Media/heroo.jpg";
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
} from "./PremiumElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={image} />
      </HeroBg>
      <HeroContent>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
        </style>

        <HeroH1>Grab a Free Premium!</HeroH1>
        <HeroP>Earn personalized rewards from your favourite restaurants and much more!</HeroP>
        <HeroBtnWrapper>
          <Button to="login" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
