import React, { useEffect } from 'react';

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

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ServiceDetailsAll = ({ service }) => {
  const initial = {
    y: 0,
    opacity: 0,
    scale: 3,
  };
  const animate = {
    y: 0,
    opacity: 1,
    scale: 1,
  };
  const initial1 = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <Section smPadding="50px 10px" position="relative" inverse ref={ref}>
        <DivIcon>
          <ServiceIcon
            initial={initial}
            animate={animate}
            transition={{ duration: 1 }}
          >
            <i className={service.icon} />
          </ServiceIcon>
        </DivIcon>
        <Container>
          <FeatureTextWrapper>
            <ServiceTitle
              initial={initial1}
              transition={{ delay: 0.5, duration: 0.5 }}
              animate={animation}
            >
              {service.subtitle}
            </ServiceTitle>
          </FeatureTextWrapper>
          <Textimagexwrap>
            {/* <ImgService src={service.textimage} alt="ghost" /> */}
            <ServDesc
              initial={initial1}
              transition={{ delay: 1, duration: 1 }}
              animate={animation}
            >
              {service.description}
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

export default ServiceDetailsAll;
