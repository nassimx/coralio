import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import servimg from '../../../../..//assets/services.jpeg';
import imgerror from '../../../../../assets/pageerror.png';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Container,
  HeroBg,
  HeroContainer,
  HeroContent,
  Section,
  ServImgBg,
} from '../../../../globalStyles';
// import { getServiceData } from '../../../../redux/actions/posts';
import { getService } from '../../../../redux/actions/posts';

import {
  EncoursImg,
  FeatureTextWrapper,
  FeatureTitle,
  ImgService,
  ServDesc,
  ServiceIcon,
  Textimagexwrap,
} from './ServicesSection.Styles';
import Footer from '../../Footer';
export const ServiceDetails = () => {
  // console.log(serviceId.to);
  const { services, service } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getService(id));
  }, [id]);

  if (!service) return null;

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ServImgBg src={servimg} />
        </HeroBg>
        <HeroContent />
      </HeroContainer>
      <Section smPadding="50px 10px" position="relative" inverse>
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>{service.subtitle}</FeatureTitle>
          </FeatureTextWrapper>
          <Textimagexwrap>
            <ServiceIcon>
              <i className={service.icon}></i>
            </ServiceIcon>
            {/* <ImgService src={service.textimage} alt="ghost" /> */}
            <ServDesc>{service.description}</ServDesc>
          </Textimagexwrap>
          <EncoursImg src={imgerror} alt="En cours de construction" />
        </Container>
      </Section>
      <Footer />
    </>
  );
};
