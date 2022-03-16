import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SideBarWrapper,
  SidebarLink,
  ContactSidebarLink,
} from './SidebarStyles';
import { animateScroll as scroll } from 'react-scroll';

const Sidebar2 = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
    toggle();
  };
  const toggleDown = () => {
    scroll.scrollTo(2200);
    toggle();
  };
  const toggleService = () => {
    scroll.scrollTo(700);
    toggle();
  };

  const toggleClients = () => {
    scroll.scrollTo(1400);
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
            <SidebarLink to="/" onClick={toggleHome}>
              Accueil
            </SidebarLink>
            <SidebarLink to="/" onClick={toggleService}>
              Nos Services
            </SidebarLink>
            <SidebarLink to="/" onClick={toggleClients}>
              Nos Clients
            </SidebarLink>
            <SidebarLink to="/" onClick={toggleDown}>
              Nos Partenaires
            </SidebarLink>
            <ContactSidebarLink to="/recrutement">
              Nous Rejoindre
            </ContactSidebarLink>

            <ContactSidebarLink to="/contact">Nous Écrire</ContactSidebarLink>
          </SidebarMenu>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar2;
