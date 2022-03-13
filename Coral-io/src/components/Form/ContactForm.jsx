import React, { useEffect, useRef, useState } from 'react';

//import components
import Form from '../Contact/Form';
import Label from '../Contact/Label';

import Input from '../Contact/Input';
import Textarea from '../Contact/Textarea';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactButton, WrapperGrid } from './ContactFormStyle';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });
  const form = useRef();

  // const handleClick = () => {
  //   setLoading(true);
  // };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm(
        'service_cragajk',
        'template_nvbs5e5',
        form.current,
        'PpgntkaUfpFptAZ7q'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('envoyé avec succès', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(`echec d'envoi message`, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );

    e.target.reset();
  };
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
      <Form ref={form} onSubmit={sendEmail}>
        <WrapperGrid>
          <ToastContainer />

          <Label>Nom</Label>
          <Input type="text" name="name" required />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Nom de l'entreprise</Label>
          <Input type="text" name="company" />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Adresse Email</Label>
          <Input type="email" name="email" required />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Numéro de téléphone portable</Label>
          <Input type="text" name="phone" />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" rows="5" required></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <ContactButton
            // onClick={handleClick}
            disabled={loading}
            inverse="true"
            type="submit"
            // initial={initial}
            // transition={{ delay: 1, duration: 0.6 }}
            // animate={animation}
          >
            {loading && (
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: '5px' }}
              />
            )}
            {loading && <span>Chargement</span>}
            {!loading && <span>Submit</span>}
          </ContactButton>
        </WrapperGrid>
      </Form>
    </>
  );
};

export default ContactForm;
