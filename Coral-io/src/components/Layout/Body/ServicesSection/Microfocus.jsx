import React, { useEffect } from 'react';
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
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
const Microfocus = ({ service }) => {
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
              transition={{ delay: 0.5, duration: 0.8 }}
              animate={animation}
            >
              {service.subtitle}
            </ServiceTitle>
          </FeatureTextWrapper>
          <Textimagexwrap>
            <GridDiv>
              <Div1
                initial={initial1}
                transition={{ delay: 0.7, duration: 0.7 }}
                animate={animation}
              >
                <img src={service.imagetext} alt="image" />
              </Div1>
              <Div2
                initial={initial1}
                transition={{ delay: 0.6, duration: 0.6 }}
                animate={animation}
              >
                <ServDesc
                  initial={initial1}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  animate={animation}
                >
                  {service.description}
                </ServDesc>
                <br />
                <ServDesc
                  initial={initial1}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  animate={animation}
                >
                  {service.text5}
                </ServDesc>
              </Div2>
            </GridDiv>
            {/* <ImgService src={service.textimage} alt="ghost" /> */}
            {/* <br /> */}

            {/* <br /> */}
            <TextUl
              initial={initial1}
              transition={{ delay: 0.7, duration: 0.7 }}
              animate={animation}
            >
              {service.li8}
            </TextUl>
            <ServDesc
              initial={initial1}
              transition={{ delay: 0.8, duration: 0.8 }}
              animate={animation}
            >
              {service.text6}
            </ServDesc>

            <ServDesc
              initial={initial1}
              transition={{ delay: 1, duration: 1 }}
              animate={animation}
            >
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
