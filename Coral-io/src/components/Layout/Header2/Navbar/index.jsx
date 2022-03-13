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

const Navbar2 = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleDown = () => {
    scroll.scrollTo(2200);
  };
  const toggleService = () => {
    scroll.scrollTo(700);
  };

  const toggleClients = () => {
    scroll.scrollTo(1400);
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
                to="/"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                onClick={toggleService}
              >
                Nos Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                onClick={toggleClients}
              >
                Nos Clients
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                onClick={toggleDown}
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

export default Navbar2;
