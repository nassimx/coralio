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
