import React, { useEffect } from 'react';

import {
  Container,
  HeroBg,
  HeroContainer,
  HeroContent,
  ImgBg,
  Section,
  SpinnerDiv,
} from '../globalStyles';

import ClientBg from '../../assets/1.jpeg';

import {
  FeatureColumn,
  FeatureImageWrapper,
  FeatureTextWrapper,
  FeatureTitle,
} from '../components/Layout/Body/ServicesSection/ServicesSection.Styles';
import {
  ClientColumn,
  ClientsWrapper,
} from '../components/clientpagestyles/Clients.Styles';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../redux/actions/posts';
import Footer from '../components/Layout/Footer';

const Clients = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const { clients, isLoading } = useSelector((state) => state.clients);
  console.log(clients);
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ImgBg src={ClientBg} />
        </HeroBg>
        <HeroContent />
      </HeroContainer>
      {isLoading ? (
        <>
          <SpinnerDiv>
            <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
          </SpinnerDiv>
        </>
      ) : (
        <Section
          smPadding="50px 10px"
          position="relative"
          inverse
          id="services"
        >
          <Container>
            <FeatureTextWrapper>
              <FeatureTitle>Nos Clients</FeatureTitle>
            </FeatureTextWrapper>
            <ClientsWrapper>
              {clients?.map((el, index) => (
                <ClientColumn
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 1 + index * 0.2 }}
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                >
                  <FeatureImageWrapper className={el.imgClass}>
                    {/* <i className={el.icon}></i> */}
                    <img
                      style={{ width: '200px', height: '' }}
                      src={el.clientlogo}
                      alt=""
                    />
                  </FeatureImageWrapper>
                </ClientColumn>
              ))}
            </ClientsWrapper>
          </Container>
        </Section>
      )}
      <Footer />
    </>
  );
};

export default Clients;
