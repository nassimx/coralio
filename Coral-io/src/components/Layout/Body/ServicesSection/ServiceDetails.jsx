import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import servimg from '../../../../../assets/services.jpeg';

import { useParams } from 'react-router-dom';
import {
  Container,
  HeroBg,
  HeroContainer,
  HeroContent,
  Section,
  ServImgBg,
} from '../../../../globalStyles';
import { getServiceData } from '../../../../redux/actions/posts';
import {
  FeatureTextWrapper,
  FeatureTitle,
  ImgService,
  ServDesc,
  Textimagexwrap,
} from './ServicesSection.Styles';
export const ServiceDetails = () => {
  const params = useParams();
  console.log(params._id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceData());
  }, [dispatch]);

  const services = useSelector((state) => state.services);
  const service = services.find(
    (service) => service._id.toString() === params._id
  );

  // console.log(service);
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
            <ImgService src={service.textimage} alt="ghost" />
            <ServDesc>{service.description}</ServDesc>
          </Textimagexwrap>
        </Container>
      </Section>
    </>
  );
};
