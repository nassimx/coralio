import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrFacebook, GrLinkedin, GrMail } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getContact } from '../../redux/actions/posts';

const WrapperCompanyInfo = styled.div`
  background: #ff7f50;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1.6rem;
  @media (max-width: 700px) {
    padding: 1.2rem;
  }
`;

const CompanyName = styled.h3`
  /* margin: 0 0 1rem 0; */
  text-align: center;
  font-size: 1.5rem;
  /* font-size: clamp(1.5rem, 2vw, 5vh); */

  /* font-weight: 500; */

  color: #fff;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

const WrapperList = styled.ul`
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 700px) {
    text-align: left;
  }
`;
export const ContactIconText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex: 0 0 40px; */
  padding: 1.3rem 0 1rem 0;
  /* margin-bottom: 1rem; */
  text-align: center;
  color: white;

  /* color: limegreen; */
  font-size: 1.6em;
  /* padding: 1rem; */
  @media (min-width: 700px) {
    text-align: left;
  }
`;
export const ContactSpan = styled.a`
  font-size: 1.3rem;
  font-weight: 300;
  text-decoration: none;

  color: white;
  margin-left: 2.5rem;
  /* text-align: s; */
`;
export const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  padding: 1.8rem 0rem 0rem 0rem;
  text-align: center;

  /* background: black; */
  /* justify-content: space-between; */
  font-size: 1.3rem;
  /* align-items: center; */
  /* margin-top: 2rem; */
  @media (min-width: 700px) {
    text-align: left;
  }
`;
export const IconCircle = styled.a`
  color: white;
  flex: 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  @media (min-width: 700px) {
    text-align: left;
  }
  :hover {
    background: #cf1717;
  }
`;

const CompanyInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const contact = useSelector((state) => state.contact);
  // console.log(contact);
  return (
    <>
      {contact.map((el, index) => {
        return (
          <WrapperCompanyInfo key={index}>
            <CompanyName>Vous souhaitez communiquer avec nous ?</CompanyName>
            <WrapperList>
              <ContactIconText>
                <FaPhoneAlt />
                <ContactSpan href="tel:+33188329801" target="_blank">
                  {el.numtel}
                </ContactSpan>
              </ContactIconText>
              <ContactIconText>
                <GrMail />
                <ContactSpan href="mailto:contact@coral-io.fr" target="_blank">
                  {el.email}
                </ContactSpan>
              </ContactIconText>
              <ContactIconText>
                <FaMapMarkerAlt />
                <ContactSpan
                  href="https://goo.gl/maps/viQ5YDJdbAx6jPHZ7"
                  target="_blank"
                >
                  {el.adresse}
                </ContactSpan>
              </ContactIconText>
              <SocialMedia>
                <IconCircle
                  href="https://www.linkedin.com/company/coralio/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <GrLinkedin />
                </IconCircle>
                <IconCircle
                  href="https://www.facebook.com/coralio.fr"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <GrFacebook />
                </IconCircle>
              </SocialMedia>
            </WrapperList>
          </WrapperCompanyInfo>
        );
      })}
    </>
  );
};

export default CompanyInfo;
