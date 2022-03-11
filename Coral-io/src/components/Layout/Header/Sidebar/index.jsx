import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SideBarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ContactSidebarLink,
} from './SidebarStyles';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
    toggle();
  };
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="/"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              onClick={toggleHome}
            >
              Accueil
            </SidebarLink>
            <SidebarLink
              to="services"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}

              onClick={toggle}
            >
              Nos Services
            </SidebarLink>
            <SidebarLink
              to="clients"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              onClick={toggle}
            >
              <Link
                to="/clients"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Nos Clients
              </Link>
            </SidebarLink>
            <SidebarLink
              to="partenaires"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              onClick={toggle}
            >
              Nos Partenaires
            </SidebarLink>

            <ContactSidebarLink to="/contact">Nous Écrire</ContactSidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/" onClick={toggle}>
              <GrLanguage />
            </SidebarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
