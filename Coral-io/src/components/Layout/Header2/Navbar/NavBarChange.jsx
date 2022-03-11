import React from 'react';
import Logoimg from '../../../../../assets/81.png';
import {
  Logo,
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavBarChange.styles.jsx';

const NavBarChange = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <Logo src={Logoimg} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Accueil</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBarChange;
