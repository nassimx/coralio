import styled from 'styled-components';
import { Row } from '../../../../globalStyles';
import Slider from 'react-slick';

export const CarouselImage = styled.img`
  width: 100%;
  /* height: 100px; */
  width: 300px;
  /* margin: 10 apx; */
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 400px;
  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled(Row)`
  margin: 0px 0px 64px 0px;
  /* padding: 0 0 20px 0px; */

  & svg {
    margin: 0 1rem;
    cursor: pointer;
    /* color: red; */
    /* background-color: red; */
  }
  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 1rem auto;
    /* display: none; */
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;
  .slick-track {
    display: flex;
    /* padding: 20px 0px; */
    gap: 2rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;

    margin-bottom: 1;
    outline: none;
  }
  .slick-list {
    overflow: hidden;
  }
`;

export const CardButton = styled.button`
  background-color: #1d609c;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;
  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
