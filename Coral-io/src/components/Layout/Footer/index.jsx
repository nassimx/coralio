import React, { useEffect } from 'react';
import { FaFacebook, FaMailBulk } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkS,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  LogoFooter,
  // Maploc,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './Footer.Style';

import logoFooter from '../../../../assets/cropped-logo_coralio-6.png-6.png';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrLinkedin, GrMail } from 'react-icons/gr';
import { animateScroll as scroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../../redux/actions/posts';

const Footer = () => {
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const contact = useSelector((state) => state.contact);
  return (
    <>
      {contact.map((el, index) => {
        return (
          <FooterContainer key={index}>
            <FooterWrap>
              {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                  <FooterLinkItems>
                    <FooterLinkTitle>Accueil</FooterLinkTitle>
                    <FooterLink onClick={toggleHome} to="/">
                      Accueil
                    </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                    <FooterLinkTitle>Nos Services</FooterLinkTitle>
                    <FooterLink onClick={toggleService} to="/">
                      Caractéristiques
                    </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                    <FooterLinkTitle>Nos Clients</FooterLinkTitle>
                    <FooterLink onClick={toggleHome} to="/clients">
                      Références
                    </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                    <FooterLinkTitle>Nos Partenaires</FooterLinkTitle>
                    <FooterLink onClick={toggleDown} to="/">
                      Nos Partenaires
                    </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                    <FooterLinkTitle>Rejoingez nous</FooterLinkTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                  </FooterLinkItems>
                </FooterLinksWrapper>
              </FooterLinksContainer> */}

              <SocialMedia>
                <SocialMediaWrap>
                  <SocialLogo to="/" onClick={toggleHome}>
                    <LogoFooter src={logoFooter} />
                  </SocialLogo>
                  <WebsiteRights>
                    © {new Date().getFullYear()} Coral-IO. Site Web par Coral-IO
                  </WebsiteRights>
                  <SocialIcons>
                    <SocialIconLink
                      href="https://www.linkedin.com/company/coralio/"
                      target="_blank"
                      aria-label="Linkedin"
                    >
                      <GrLinkedin />
                    </SocialIconLink>
                    <SocialIconLink
                      href="https://www.facebook.com/coralio.fr"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink
                      href={`mailto:${el.email}`}
                      target="_blank"
                      aria-label="Mail"
                    >
                      <GrMail />
                    </SocialIconLink>
                  </SocialIcons>
                </SocialMediaWrap>
              </SocialMedia>
            </FooterWrap>
          </FooterContainer>
        );
      })}
    </>
  );
};

export default Footer;
