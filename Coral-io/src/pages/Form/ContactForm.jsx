import React, { useEffect } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

//import components
import Form from '../../components/Contact/Form';
import Label from '../../components/Contact/Label';
// import StyledButton from '../../components/Contact/Button';
import Input from '../../components/Contact/Input';
import Textarea from '../../components/Contact/Textarea';
// import { ContentButton } from '../../components/Layout/Body/ClientsSection/ClientSection.Styled';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Button, ButtonContact } from '../../globalStyles';

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

const ContactButton = styled(motion.button)`
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
`;

const ContactForm = () => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <Form ref={ref}>
        <WrapperGrid>
          <Label>Nom</Label>
          <Input type="text" name="name" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Nom de l'entreprise</Label>
          <Input type="text" name="company" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Adresse Email</Label>
          <Input type="email" name="email" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Numéro de téléphone portable</Label>
          <Input type="text" name="phone" />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" rows="5"></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <ContactButton
            inverse="true"
            // initial={initial}
            // transition={{ delay: 1, duration: 0.6 }}
            // animate={animation}
          >
            Submit
          </ContactButton>
        </WrapperGrid>
      </Form>
    </>
  );
};

export default ContactForm;
