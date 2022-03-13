import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrFacebook, GrLinkedin, GrMail } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getContact } from '../../redux/actions/posts';
import {
  CompanyName,
  ContactIconText,
  ContactSpan,
  IconCircle,
  SocialMedia,
  WrapperCompanyInfo,
  WrapperList,
} from './CompanyInfoStyle';

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
