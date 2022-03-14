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

  const { services, isLoading } = useSelector((state) => state.services);
  // console.log(services);

  return isLoading ? (
    'loading'
  ) : (
    <Section smPadding="50px 10px" position="relative" inverse id="services">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>Nos Services</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {services?.map((service, index) => (
            <LinkService to={`/services/${service._id}`}>
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
                <FeatureImageWrapper className={service.imgClass}>
                  <i className={service.icon}></i>

                  {/* {el.icon} */}
                </FeatureImageWrapper>
                <FeatureName>{service.name}</FeatureName>
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
