import { motion } from 'framer-motion';
import styled from 'styled-components';

// section 1
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 960px) {
    height: 500px;
  }

  @media screen and (max-width: 460px) {
    height: 400px;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
// add before styles

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto !important;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  @media screen and (min-width: 960px) {
    height: 100%;




  }
  @media screen and (max-width: 460px) {
    /* height: 50%; */
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vw;
  /* padding: 3rem 0; */
  /* check text al */
  /* margin-top: 5%; */
  @media screen and (min-width: 1440px) {
    margin-top: 4vw;
  }
  @media screen and (max-width: 1440px) {
    margin-top: 5vw;
  }

  @media screen and (max-width: 768px) {
    margin-top: 12vw;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 7vw;
  }
  @media screen and (max-width: 320px) {
    margin-top: 3vw;
  }
`;

export const HeroH1 = styled(motion.h1)`
  color: #fff;
  font-size: 40px;
  text-align: center;
  font-family: 'BunkenTechSansProWideW01-Bk';

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const HeroH2 = styled.h2`
  /* cf1717 ou ff7f50 */
  color: #ff7f50;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  letter-spacing: 1px;
  /* text-shadow: 0.5px 0.5px; */

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
