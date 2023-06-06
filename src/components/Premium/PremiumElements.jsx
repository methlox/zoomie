// import styled from "styled-components";

// const firstColor = "#F23558";

// export const InfoContainer = styled.div`
//   color: #fff;
//   background: ${({ lightBg }) => (lightBg ? "#f3f3f3" : "#010606")};

//   @media screen and (max-width: 768px) {
//     padding: 6.25rem 0;
//   }
// `;

// export const Wrapper = styled.div`
//   display: grid;
//   z-index: 1;
//   height: 650px;
//   width: 100%;
//   max-width: 1100px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 24px;
//   justify-content: center;
// `;

// export const Row = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};

//   @media screen and (max-width: 768px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`};
//   }
// `;

// export const Column1 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col1;
// `;

// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col2;
// `;

// export const TxtWrapper = styled.div`
//   max-width: 540px;
//   padding-top: 0;
//   grid-area: col2;
// `;

// export const TopLine = styled.p`
//   color: ${firstColor};
//   font-size: 1rem;
//   line-height: 1rem;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
//   margin-bottom: 1rem;
// `;

// export const Heading = styled.h1`
//   margin-bottom: 1.5rem;
//   font-size: 2.2rem;
//   line-height: 1.1;
//   font-weight: 600;
//   color: ${({ lightTxt }) => (lightTxt ? "#f7f8f8" : "#010606")};

//   @media screen and (max-width: 768px) {
//     font-size: 2rem;
//   }
//   @media screen and (max-width: 580px) {
//     font-size: 1.8rem;
//   }
// `;

// export const Subtitle = styled.p`
//   max-width: 440px;
//   margin-bottom: 2.2rem;
//   font-size: 1.125rem;
//   line-height: 24px;
//   color: ${({ lightTxtSub }) => (lightTxtSub ? "#cccccc" : "#010606")};

//   @media screen and (max-width: 768px) {
//     font-size: 1.12rem;
//   }
//   @media screen and (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// export const BtnWrap = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `;

// export const ImgWrap = styled.div`
//   max-width: 500px;
//   height: 100%;

//   @media screen and (max-width: 768px) {
//     //Center the img:
//     text-align: center;
//   }
// `;

// export const Img = styled.img`
//   width: 90%;
//   margin-bottom: 10px;
//   margin-top: 10px;
//   //top right bottom left
//   padding-right: 0;

//   @media screen and (max-width: 768px) {
//     width: 80%;
//   }
//   @media screen and (max-width: 480px) {
//     width: 90%;
//   }
// `;

import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #F23558;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '',
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }

`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 23%;
  -o-object-fit: cover;
  object-fit: cover;
  // background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  // padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 300px;
`;

export const HeroH1 = styled.div`
  color: #fff;
  font-size: 64px;
  text-align: center;
  font-family: "Baskerville";

  @media screen and (max-width: 768px) {
    font:size: 40px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const HeroP = styled.div`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
