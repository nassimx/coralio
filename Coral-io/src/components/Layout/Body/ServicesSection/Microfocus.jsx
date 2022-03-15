import React from 'react';
import { Container, Section } from '../../../../globalStyles';
import {
  Div1,
  Div2,
  DivIcon,
  FeatureTextWrapper,
  GoToLink,
  GridDiv,
  ServDesc,
  ServiceIcon,
  ServiceTitle,
  Textimagexwrap,
  TextUl,
} from './ServicesSection.Styles';

const Microfocus = ({ service }) => {
  return (
    <>
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
            <GridDiv>
              <Div1>
                <img src={service.imagetext} alt="image" />
              </Div1>
              <Div2>
                <ServDesc>{service.description}</ServDesc>
                <br />
                <ServDesc>{service.text5}</ServDesc>
              </Div2>
            </GridDiv>
            {/* <ImgService src={service.textimage} alt="ghost" /> */}
            {/* <br /> */}

            {/* <br /> */}
            <TextUl>{service.li8}</TextUl>
            <ServDesc>{service.text6}</ServDesc>

            <ServDesc>
              {service.text}
              <GoToLink href="https://www.microfocus.com/" target="_blank">
                {service.LinkText}
              </GoToLink>
            </ServDesc>

            {/* <TextLi>{service.description}</TextLi> */}

            {/* <ServDesc>{service.description}</ServDesc> */}
          </Textimagexwrap>
          {/* <EncoursImg src={imgerror} alt="En cours de construction" /> */}
        </Container>
      </Section>
    </>
  );
};

export default Microfocus;
