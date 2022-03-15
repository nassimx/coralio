import React from 'react';
import { Container, Section } from '../../../../globalStyles';
import {
  Divapm1,
  Divapm2,
  Divapm3,
  Divapm4,
  Divapm5,
  DivIcon,
  FeatureTextWrapper,
  GoToLink,
  GridDivApm,
  ServDesc,
  ServiceIcon,
  ServiceTitle,
  Textimagexwrap,
  TextUl,
} from './ServicesSection.Styles';
const Apm = ({ service }) => {
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
            <GridDivApm>
              <Divapm1>
                <img src={service.textimage} alt="image" width="250" />
              </Divapm1>
              <Divapm2>
                <ServDesc>{service.description}</ServDesc>
                <br />
                <ServDesc>{service.text1}</ServDesc>
                <br />
                <Divapm3>
                  <TextUl>{service.li2}</TextUl>
                  <TextUl>{service.li1}</TextUl>
                  <TextUl>{service.li3}</TextUl>
                  <TextUl>{service.li4}</TextUl>
                  <TextUl>{service.li5}</TextUl>
                </Divapm3>
                <Divapm4>
                  <ServDesc>{service.text2}</ServDesc>
                  <br />
                  <ServDesc>{service.text3}</ServDesc>
                  <br />
                </Divapm4>
                <Divapm5>
                  <TextUl>{service.li6}</TextUl>

                  <TextUl>{service.li7}</TextUl>
                </Divapm5>
                <ServDesc>{service.text4}</ServDesc>
              </Divapm2>
            </GridDivApm>

            <br />

            {/* <TextLi>{service.description}</TextLi> */}

            {/* <ServDesc>{service.description}</ServDesc> */}
          </Textimagexwrap>
        </Container>
      </Section>
    </>
  );
};

export default Apm;
