import React, { useState, useEffect } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Row, Heading, Section, TextWrapper } from '../../../../globalStyles';
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  // CardButton,
} from './PartenairesSection.Style';

import { useDispatch, useSelector } from 'react-redux';
import { getPartenaires } from '../../../../redux/actions/posts';

const PartenairesSection = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartenaires());
  }, [dispatch]);

  const partenaires = useSelector((state) => state.partenaires);
  // console.log(partenaires);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    focusOnselect: false,
    accessability: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Section
      margin="auto"
      maxWidth="1280px"
      padding="70px"
      inverse
      id="partenaires"
    >
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Nos Partenaires
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#ff7f50' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {partenaires.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default PartenairesSection;
