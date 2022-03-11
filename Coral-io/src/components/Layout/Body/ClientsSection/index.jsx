import React, { useEffect } from 'react';
import { Container, Section } from '../../../../globalStyles';
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from './ClientSection.Styled';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getClientSec } from '../../../../redux/actions/posts';
export const ClientsSection = () => {
  const initial = { opacity: 0, y: 30 };
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientSec());
  }, [dispatch]);

  const clientsec = useSelector((state) => state.clientsec);
  // console.log(clientsec);
  return (
    <>
      {clientsec.map((el, index) => {
        return (
          <Section inverse={el.inverse} ref={ref} id="clients" key={index}>
            <Container key={index}>
              <ContentRow reverse={el.reverse}>
                <ContentColumn>
                  <TextWrapper>
                    <TopLine
                      initial={initial}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      animate={animation}
                    >
                      {el.text}
                    </TopLine>
                    <Heading
                      initial={initial}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      animate={animation}
                      inverse={el.inverse}
                    >
                      {el.headline}
                    </Heading>
                    <Subtitle
                      initial={initial}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      animate={animation}
                      inverse={el.inverse}
                    >
                      {el.description}
                    </Subtitle>
                    <Link to="/clients">
                      <ContentButton
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}
                        inverse={el.inverse}
                      >
                        {el.buttonLabel}
                      </ContentButton>
                    </Link>
                  </TextWrapper>
                </ContentColumn>
                <ContentColumn
                  initial={initial}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  animate={animation}
                >
                  <ImgWrapper>
                    <Img
                      src={el.img}
                      // alt={alt}
                      whileHover={{ rotate: 2, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </ImgWrapper>
                </ContentColumn>
              </ContentRow>
            </Container>
          </Section>
        );
      })}
    </>
  );
};
