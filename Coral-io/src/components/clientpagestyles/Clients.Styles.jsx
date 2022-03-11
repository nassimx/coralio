import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ClientsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 4rem;
  grid-gap: 1rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ClientColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 10px;
  /* box-shadow: 0 0 32px 8px #d0d0d0; */
  /* border-radius: 20px; */
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: 'flex-end';
  max-height: 300px;
  justify-content: center;
  position: relative;
`;
