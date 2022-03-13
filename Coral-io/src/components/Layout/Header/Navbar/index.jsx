import {
  Nav,
  NavBarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinkR,
} from './Navbar.Styles';
import Logoimg from '../../../../../assets/cropped-logo_coralio-7.png-7-180x180.png';

import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // console.log(navBar[1]);
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo src={Logoimg} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <i className="fa-solid fa-bars" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkR to="/" onClick={toggleHome}>
                Accueil
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
              >
                Nos Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="clients"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
              >
                Nos Clients
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="partenaires"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
              >
                Nos Partenaires
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkR to="/contact">Nous Écrire</NavLinkR>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
