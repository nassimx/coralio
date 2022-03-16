import React, { useEffect, useState } from 'react';
import { HeroBg, HeroContainer, HeroContent, RecImgBg } from '../globalStyles';
import rec from '../../assets/rec2.jpeg';
import { Container, Section, SpinnerDiv } from '../globalStyles';
import {
  FeatureTitle,
  FeatureTextWrapper,
} from '../components/Layout/Body/ServicesSection/ServicesSection.Styles';
import Footer from '../components/Layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getRecrutement } from '../redux/actions/posts';

const Recrutement = () => {
  // const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecrutement());
  }, [dispatch]);

  const { recrutement, isLoading } = useSelector((state) => state.recrutement);
  console.log(recrutement);
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <RecImgBg src={rec} />
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
              <FeatureTitle>Nous Rejoindre</FeatureTitle>
            </FeatureTextWrapper>
            {/* {recrutement?.map((el, index) => (
              <>
                <h1>work</h1>
              </>
            ))} */}
          </Container>
        </Section>
      )}
      <Footer />
    </>
  );
};

export default Recrutement;
