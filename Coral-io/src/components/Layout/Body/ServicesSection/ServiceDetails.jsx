import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import servimg from '../../../../..//assets/services.jpeg';
import imgerror from '../../../../../assets/pageerror.png';
import { useParams, useNavigate } from 'react-router-dom';

import {
  HeroBg,
  HeroContainer,
  HeroContent,

  ServImgBg,
  SpinnerDiv,
} from '../../../../globalStyles';
// import { getServiceData } from '../../../../redux/actions/posts';
import { getService } from '../../../../redux/actions/posts';

import Footer from '../../Footer';
import ServiceDetailsAll from './ServiceDetailsAll';
import Apm from './Apm';
import Microfocus from './Microfocus';
export const ServiceDetails = () => {
  // console.log(serviceId.to);
  const [isLoading, setIsLoading] = useState(true);

  const { services, service } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getService(id));
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [id]);

  // const recommendedServices = services.filter(({ _id }) => _id !== service._id);
  // console.log(service);

  if (!service) return null;

  // const openService = (_id) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     history(`/services/${_id}`);
  //     setIsLoading(false);
  //   }, 500);
  // };
  // console.log(id);
  // if (isLoading) {
  //   return <h2>Chargment</h2>;
  // }
  // console.log(recommendedServices);
  // console.log(openService);
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ServImgBg src={servimg} />
        </HeroBg>
        <HeroContent />
      </HeroContainer>
      {(() => {
        if (isLoading) {
          return (
            <>
              <SpinnerDiv>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
              </SpinnerDiv>
            </>
          );
        } else if (id === '6228dc712d809d54aff96d4b') {
          return (
            <>
              <Apm service={service} />
            </>
          );
        } else if (id === '6228e8cc2d809d54aff96d4c') {
          return (
            <>
              <Microfocus service={service} />
            </>
          );
        } else {
          return (
            <>
              <ServiceDetailsAll service={service} />
            </>
          );
        }
      })()}
      {/* <EncoursImg src={imgerror} alt="En cours de construction" width="200" /> */}
      <Footer />
    </>
  );

  //     <Section smPadding="50px 10px" position="relative" inverse>
  //       <DivIcon>
  //         <ServiceIcon>
  //           <i className={service.icon} />
  //         </ServiceIcon>
  //       </DivIcon>
  //       <Container>
  //         <FeatureTextWrapper>
  //           <ServiceTitle>{service.subtitle}</ServiceTitle>
  //         </FeatureTextWrapper>
  //         <Textimagexwrap>
  //           {/* <ImgService src={service.textimage} alt="ghost" /> */}
  //           <ServDesc>{service.description}</ServDesc>
  //           <br />
  //           <ServDesc>{service.text1}</ServDesc>
  //           <ServDesc>{service.text5}</ServDesc>

  //           <br />
  //           <TextUl>{service.li8}</TextUl>
  //           <ServDesc>{service.text6}</ServDesc>

  //           <TextUl>{service.li1}</TextUl>
  //           <ServDesc>{service.text6}</ServDesc>
  //           <TextUl>{service.li2}</TextUl>
  //           <ServDesc>
  //             {service.text}
  //             <GoToLink href="https://www.microfocus.com/" target="_blank">
  //               {service.LinkText}
  //             </GoToLink>
  //           </ServDesc>

  //           <TextUl>{service.li3}</TextUl>
  //           <TextUl>{service.li4}</TextUl>
  //           <TextUl>{service.li5}</TextUl>
  //           <br />

  //           <ServDesc>{service.text2}</ServDesc>
  //           <br />
  //           <ServDesc>{service.text3}</ServDesc>
  //           <br />
  //           <TextUl>{service.li6}</TextUl>
  //           <TextUl>{service.li7}</TextUl>
  //           <br />
  //           <ServDesc>{service.text4}</ServDesc>

  //           {/* <TextLi>{service.description}</TextLi> */}

  //           {/* <ServDesc>{service.description}</ServDesc> */}
  //         </Textimagexwrap>
  //         {/* <EncoursImg src={imgerror} alt="En cours de construction" /> */}
  //       </Container>
  //     </Section>

  //     {!!recommendedServices.length && (
  //       <div>
  //         <p>You might also like:</p>
  //         <p />
  //         <div>
  //           {recommendedServices?.map(
  //             ({ title, name, message, likes, selectedFile, _id }) => (
  //               <div onClick={() => openService(_id)} key={_id}>
  //                 {/* <p>{title}</p> */}
  //                 <p>{name}</p>
  //                 {/* <p>{message}</p> */}
  //                 {/* <p>Likes: {likes.length}</p> */}
  //               </div>
  //             )
  //           )}
  //         </div>
  //       </div>
  //     )}

  //     <Footer />
  //   </>
  // );
};
