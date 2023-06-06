import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksS,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const toggleName = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/" onClick={toggleName}>
            zoomie
          </Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
            </style>
            <NavItem>
              <NavLinks
                to="matches"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Restaurants
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contribute"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contribute
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksS to="login">Sign Up</NavLinksS>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="login">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
