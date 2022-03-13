import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const ContactButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? '#ff7f50' : 'white')};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? '#ff7f50' : 'white')};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:before {
    background: ${({ inverse }) => (inverse ? '#ff7f50' : 'white')};
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
    background: #ff7f50;
    color: ${({ inverse }) => (inverse ? 'white' : 'white')};
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.5);
    border: 2px solid gray;
    background: whitesmoke;
    cursor: not-allowed;
    /* opacity: 0.4; */
  }
`;

export const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;
