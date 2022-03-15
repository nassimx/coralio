import React from 'react';

import {
  Container,
  HeroBg,
  HeroContainer,
  HeroContent,
  Section,
  ServImgBg,
} from '../../../../globalStyles';
import {
  DivIcon,
  EncoursImg,
  FeatureTextWrapper,
  FeatureTitle,
  GoToLink,
  ImgService,
  ServDesc,
  ServiceIcon,
  ServiceTitle,
  Textimagexwrap,
  TextUl,
} from './ServicesSection.Styles';

const ServiceDetailsAll = ({ service }) => {
  return (
    <div>
      <Section smPadding="50px 10px" position="relative" inverse>
        <DivIcon>
          <ServiceIcon>
            <i className={service.icon} />
          </ServiceIcon>
        </DivIcon>
        <Container>
          <FeatureTextWrapper>
            <ServiceTitle>{service.subtitle}</ServiceTitle>
          </FeatureTextWrapper>
          <Textimagexwrap>
            {/* <ImgService src={service.textimage} alt="ghost" /> */}
            <ServDesc>{service.description}</ServDesc>
            {/* <TextLi>{service.description}</TextLi> */}

            {/* <ServDesc>{service.description}</ServDesc> */}
          </Textimagexwrap>
          {/* <EncoursImg src={imgerror} alt="En cours de construction" /> */}
        </Container>
      </Section>
    </div>
  );
};

export default ServiceDetailsAll;
