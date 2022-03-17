import React, { useEffect, useState } from 'react';
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  IconSpan,
  IconTextDiv,
  IconTextWrapper,
  RecBtnWrapper,
  RecButton,
  RecImgBg,
  RecrutementColumn,
  RecrutementDiv,
  RecrutementWrapper,
} from '../globalStyles';
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
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecrutement());
  }, [dispatch]);

  const { recrutement, isLoading } = useSelector((state) => state.recrutement);
  // console.log(recrutement);
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <RecImgBg src={rec} />
        </HeroBg>
        <HeroContent />
      </HeroContainer>
      <Section smPadding="50px 10px" position="relative" inverse id="services">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>Nous Rejoindre</FeatureTitle>
          </FeatureTextWrapper>
          {(() => {
            if (isLoading) {
              return (
                <>
                  <SpinnerDiv>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
                  </SpinnerDiv>
                </>
              );
            } else if (recrutement.length === 0) {
              return (
                <>
                  <div>
                    <h2>Candidature Spontanée</h2>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  {recrutement?.map((offre, index) => (
                    <>
                      <RecrutementWrapper>
                        <RecrutementColumn
                          initial={initial}
                          animate={animate}
                          transition={{ duration: 1 + index * 0.2 }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 1 },
                          }}
                        >
                          <RecrutementDiv>
                            <h1>{offre.titre}</h1>
                            <IconTextDiv>
                              <IconTextWrapper>
                                <i className={offre.icon1} />
                                <IconSpan>{offre.lieu}</IconSpan>
                              </IconTextWrapper>
                              <IconTextWrapper>
                                <i className={offre.icon2} />
                                <IconSpan>{offre.niveau}</IconSpan>
                              </IconTextWrapper>
                              <IconTextWrapper>
                                <i className={offre.icon3} />
                                <IconSpan>{offre.experience}</IconSpan>
                              </IconTextWrapper>
                            </IconTextDiv>
                            <h1>{offre.titre2}</h1>
                            <h2>{offre.connaissances}</h2>
                            <h2>{offre.desc}</h2>
                            <RecBtnWrapper>
                              <a href="mailto:contact@coral-io.fr">
                                <RecButton>Postulez</RecButton>
                              </a>
                            </RecBtnWrapper>
                          </RecrutementDiv>
                        </RecrutementColumn>
                      </RecrutementWrapper>
                    </>
                  ))}
                </>
              );
            }
          })()}
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default Recrutement;
