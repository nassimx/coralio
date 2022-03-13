import React, { useEffect } from 'react';
import { Container, Section } from '../../../../globalStyles';
import {
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
  LinkService,
} from './ServicesSection.Styles';

import { useDispatch, useSelector } from 'react-redux';
import { getServiceData } from '../../../../redux/actions/posts';

const Services = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceData());
  }, [dispatch]);

  const services = useSelector((state) => state.services);
  return (
    <Section smPadding="50px 10px" position="relative" inverse id="services">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>Nos Services</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {services.map((el, index) => (
            <LinkService to={`/services/${el.to}`}>
              <FeatureColumn
                initial={initial}
                animate={animate}
                transition={{ duration: 1 + index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                <FeatureImageWrapper className={el.imgClass}>
                  <i className={el.icon}></i>

                  {/* {el.icon} */}
                </FeatureImageWrapper>
                <FeatureName>{el.name}</FeatureName>
                {/* <FeatureText>{el.description}</FeatureText> */}
              </FeatureColumn>
            </LinkService>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Services;
