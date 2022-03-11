import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as LinkServ } from 'react-router-dom';

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  /* letter-spacing: 0.4rem; */
  margin: auto;
  /* padding: 40px 0 0 0; */
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  padding: 20px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  /* border: 2px solid #cf1717; */
  color: #ff7f50;
  padding: 10px;
  :hover {
    /* color: white; */
  }
`;
export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkService = styled(LinkServ)`
  text-decoration: none;
  color: black;

  cursor: pointer;

  &:hover {
    color: #cf1717;
    transition: all 0.3s ease-out;
  }
  &active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const Textimagexwrap = styled.div`
  max-width: 1200px;
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;
export const ImgService = styled.img`
  /* height: 150px; */
  width: 280px;
  padding-bottom: 20px;
  padding-right: 20px;
  float: left;
  /* margin-top: 150px; */
  shape-margin: 15px;
`;
export const ServDesc = styled.h3`
  position: relative;
  /* padding: 10px 20px 10px 20px; */
  /* margin-bottom: 2rem; */

  font-size: 20px;
  /* text-align: center; */
  /* max-width: 600px; */
  letter-spacing: 1px;
  /* text-shadow: 0.5px 0.5px; */

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ServiceIcon = styled.div`
  /* width: 280px; */
  padding-bottom: 20px;
  padding-right: 20px;
  float: left;
  color: #ff7f50;
  align-items: center;
  /* margin-top: 150px; */
  shape-margin: 15px;
  font-size: 24px;
  @media (max-width: 768px) {
    float: none;
  }
`;
export const EncoursImg = styled.img`
  /* width: 280px; */
  padding-bottom: 20px;
  padding-right: 20px;

  align-items: center;
  /* margin-top: 150px; */
  shape-margin: 15px;
  font-size: 24px;
  @media (max-width: 768px) {
    max-width: 280px;
  }
`;
