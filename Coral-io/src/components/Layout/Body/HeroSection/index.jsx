import React, { useEffect, useState } from 'react';
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  VideoBg,
} from './Hero.Style';
import { Button } from '../../../../globalStyles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroSection } from '../../../../redux/actions/posts';

const Hero = ({}) => {
  const initial = {
    y: 0,
    opacity: 0,
    scale: 1,
  };
  const animate = {
    y: 0,
    opacity: 1,
    scale: 1.5,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroSection());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  // console.log(posts);
  return (
    <>
      {posts.map((el, index) => {
        return (
          <HeroContainer key={index}>
            <HeroBg>
              <VideoBg autoPlay loop muted src={el.video} type="mp4/mpeg" />
            </HeroBg>
            <HeroContent>
              <HeroH1
                initial={initial}
                animate={animate}
                transition={{ duration: 1 }}
                whileHover={{
                  scale: 1,
                  transition: { duration: 1 },
                }}
              >
                {el.title}
              </HeroH1>
              <HeroH2>{el.subtitle}</HeroH2>
              <HeroP>{el.description}</HeroP>
              <HeroBtnWrapper>
                <Link to="/contact">
                  <Button>{el.buttonLabel}</Button>
                </Link>
              </HeroBtnWrapper>
            </HeroContent>
          </HeroContainer>
        );
      })}
    </>
  );
};

export default Hero;
