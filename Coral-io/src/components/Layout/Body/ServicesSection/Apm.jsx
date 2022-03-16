import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
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
              transition={{ delay: 0.2, duration: 0.5 }}
              animate={animation}
            >
              {service.subtitle}
            </ServiceTitle>
          </FeatureTextWrapper>
          <Textimagexwrap>
            <GridDivApm>
              <Divapm1
                initial={initial1}
                transition={{ delay: 0.4, duration: 0.6 }}
                animate={animation}
              >
                <img src={service.textimage} alt="image" width="250" />
              </Divapm1>
              <Divapm2
                initial={initial1}
                transition={{ delay: 0.6, duration: 0.7 }}
                animate={animation}
              >
                <ServDesc>{service.description}</ServDesc>
                <br />
                <ServDesc>{service.text1}</ServDesc>
                <br />
                <Divapm3
                  initial={initial1}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  animate={animation}
                >
                  <TextUl>{service.li1}</TextUl>
                  <TextUl>{service.li2}</TextUl>
                  <TextUl>{service.li3}</TextUl>
                  <TextUl>{service.li4}</TextUl>
                  <TextUl>{service.li5}</TextUl>
                </Divapm3>
                <Divapm4
                  initial={initial1}
                  transition={{ delay: 1, duration: 0.9 }}
                  animate={animation}
                >
                  <ServDesc>{service.text2}</ServDesc>
                  <br />
                  <ServDesc>{service.text3}</ServDesc>
                  <br />
                </Divapm4>
                <Divapm5
                  initial={initial1}
                  transition={{ delay: 1, duration: 1 }}
                  animate={animation}
                >
                  <TextUl>{service.li6}</TextUl>

                  <TextUl>{service.li7}</TextUl>
                </Divapm5>
                <ServDesc
                  initial={initial1}
                  transition={{ delay: 1, duration: 1 }}
                  animate={animation}
                >
                  {service.text4}
                </ServDesc>
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
