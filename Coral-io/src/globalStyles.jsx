import { motion } from 'framer-motion';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  /* display: flex; */
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
  /* letter-spacing: 0.4rem; */
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : '90%')};
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : '')};
  font-size: ${({ size }) => (size ? size : '')};
  font-weight: ${({ weight }) => (weight ? weight : '')};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : '100px 0')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : '50px 0')};
    /* 70px sm padding */
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #ff7f50;
  outline: none;
  border: 2px solid #ff7f50;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #ff7f50;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
`;

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 30px;
  height: 300px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 960px) {
    height: 200px;
  }

  @media screen and (max-width: 460px) {
    height: 150px;
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
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* transform: scale(0.5); */

  @media screen and (max-width: 960px) {
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
  object-position: 43% 57%;
  @media screen and (max-width: 960px) {
    /* height: 30%; */
  }
  @media screen and (max-width: 460px) {
    /* height: 20%; */
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* check text al */
  /* margin-top: 10vh; */

  @media screen and (max-width: 768px) {
    /* padding: 30% 0; */
    /* margin-top: 7vh; */
  }
  @media screen and (max-width: 480px) {
    /* padding: 30% 0; */
    /* margin-top: 5vh; */
  }
`;

export const HeroH1 = styled(motion.h1)`
  color: #fff;
  /* font-size: 48px; */
  margin: auto;

  /* font-family: 'BunkenTechSansProWideW01-Bk'; */
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ButtonContact = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #ff7f50;
  outline: none;
  border: 2px solid #ff7f50;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: black;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
`;

export const ServImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
  object-position: 25% 75%;
  @media screen and (max-width: 960px) {
    /* height: 30%; */
  }
  @media screen and (max-width: 460px) {
    /* height: 20%; */
  }
`;

export const SpinnerDiv = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px;
  /* height: 300px; */
  position: relative;
  z-index: 1;
`;

export const RecImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
  object-position: 60% 40%;
  @media screen and (max-width: 960px) {
    /* height: 30%; */
  }
  @media screen and (max-width: 460px) {
    /* height: 20%; */
  }
`;
export const RecrutementWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const RecrutementColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  /* justify-content: center; */
  /* align-items: center; */
  background: #f3f3f3;
  padding: 20px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export const RecrutementDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 20px;
`;

export const IconTextDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 1rem;
  color: #cf1717;

  /* align-items: center; */
  /* text-align: center; */
  /* grid-column-gap: 100px; */
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const IconTextWrapper = styled.div`
  display: inline-block;
`;
export const IconText = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 2rem;
  grid-column-gap: 100px;
  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export const IconSpan = styled.span`
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: black;
  padding: 10px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const RecBtnWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const RecButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: #ff7f50;
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid #ff7f50;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:before {
    background: #ff7f50;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: ${({ inverse }) => (inverse ? 'white' : 'black')};
  }
`;

export default GlobalStyle;
