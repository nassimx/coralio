import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SectionContact = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  /* padding: 50px; */
`;

export const ContactTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  /* letter-spacing: 0.4rem; */
  padding-top: 100px;
  padding-bottom: 100px;
`;

// export const ContactContainer = styled.div`
//   display: flex;
//   /* flex-direction: column; */
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   /* display: block; */
//   /* grid-template-columns: repeat(2, 1fr); */
//   /* max-width: 1100px; */
//   /* min-width: 300px; */
//   border-radius: 15px;
//   overflow: hidden;
//   padding: 20px;
//   background: whitesmoke;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   } ;
// `;
export const ContactInfo = styled.div`
  background-color: #1d609c;
  border-radius: 15px;
  flex: 0 1 40%;
  padding: 40px;
  color: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: start; */
`;

export const ContactH4 = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  /* margin-top: 0; */
  flex: 0 0 50px;

  margin: 0;
`;
export const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;
export const ContactIconText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex: 0 0 40px; */
  margin-bottom: 2rem;

  /* color: limegreen; */
  font-size: 1.6em;
  /* padding: 1rem; */
`;
export const ContactSpan = styled.a`
  font-size: 1.3rem;
  font-weight: 300;
  text-decoration: none;
  color: white;
  margin-left: 2rem;
`;
export const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 0rem 1rem 0rem;
  /* background: black; */
  /* justify-content: space-between; */
  font-size: 1.3rem;
  align-items: center;
  /* margin-top: 2rem; */
`;
export const IconCircle = styled.a`
  color: white;
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #ff7f50;
  }
`;
export const ContactForm = styled.form`
  padding: 40px;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 0 1 100%;
  padding-right: 40px;
  /* padding-bottom: 10px; */
  select {
    padding: 10px;
    /* border: none; */
    outline: none;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  display: flex;
  font-size: 0.9;
  margin-bottom: 1rem;
  /* padding-top: 5px; */
  /* margin: 10px; */
  &:nth-child(2) {
    padding-right: 0;
  }
`;
export const InputText = styled.input`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 0.1px solid rgba(128, 128, 128, 0.5);
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;

  &:focus {
    border-bottom: 2px solid gray;
    outline: none;
  }
`;

export const LabelSelect = styled.label`
  display: flex;
  font-size: 0.9;
  margin-bottom: 1rem;
  /* padding-top: 5px; */
  /* margin: 10px; */
`;
export const InputTextArea = styled.textarea`
  height: 100px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 0.1px solid rgba(128, 128, 128, 0.5);
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-bottom: 2px solid gray;
    outline: none;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;

  @media screen and (max-width: 960px) {
    padding: 0 5px;
  }
`;
