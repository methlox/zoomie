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
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import styles from "../../App.css?inline";
import { lazy } from "react";

// const WalletMultiButtonDynamic = lazy(
// 	async () =>
// 		(await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
// 	{ ssr: false }
// );

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

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
                to="order"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Order
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="hotel"
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
                to="premium"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Premium
              </NavLinks>
            </NavItem>
            <WalletMultiButton className={styles["wallet-adapter-button-trigger"]}/>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="login" target="_blank">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
