import React from 'react';
import {
  ContactContainer,
  ContactTitle,
} from '../components/Contact/ContactStyle';

import img from '../../assets/1080px.jpeg';

import ContainerContact from '../components/Contact/Container';

import CompanyInfo from './Form/CompanyInfo';
import ContactForm from '../pages/Form/ContactForm';

import MapSection from '../components/Map/Map'; // import the map here

import {
  Container,
  HeroBg,
  HeroContainer,
  ImgBg,
  Section,
} from '../globalStyles';
import {
  FeatureTextWrapper,
  FeatureTitle,
} from '../components/Layout/Body/ServicesSection/ServicesSection.Styles';

const location = {
  address: '231 Rue St Honoré, 75001 Paris, France',
  lat: 48.8661778,
  lng: 2.3291679,
}; // our location object from earlier
const Contact = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ImgBg src={img} />
        </HeroBg>
      </HeroContainer>
      <Section smPadding="50px 10px" position="relative" inverse>
        <ContactContainer>
          <FeatureTextWrapper>
            <FeatureTitle>Nous Écrire</FeatureTitle>
          </FeatureTextWrapper>
          <ContainerContact wrapper>
            <CompanyInfo />

            <ContactForm />
          </ContainerContact>

          <ContactTitle>Où nous retrouver</ContactTitle>

          <MapSection location={location} zoomLevel={16} />
        </ContactContainer>
      </Section>
    </>
  );
};

export default Contact;
