import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

const containerColor = "#010606";
const firstColor = "#F23558";

export const FooterContainer = styled.footer`
  background: ${containerColor};
`;

export const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
    margin-bottom: 0;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  //👇🏽 Or flex-start:
  align-items: center;
  margin: 1rem;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 0.62rem;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    color: ${firstColor};
    transform: all 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SMwrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(LinkScroll)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const Copy = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    color: ${firstColor};
  }
`;