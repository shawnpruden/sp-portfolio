import React, { useEffect, useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineEmail, MdSmartphone } from 'react-icons/md';

import './Contact.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contact() {
  const [isSent, setIsSent] = useState({
    state: '',
    color: '',
    isVisible: 0,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent({ ...isSent, isVisible: 1 });

    emailjs
      .sendForm(
        'service_nrles4r',
        'template_1k0n2jv',
        form.current,
        'np3S3OKPAKKpckDlZ'
      )
      .then(
        () => {
          setIsSent({ state: 'succeeded', color: '#c3e88d', isVisible: 1 });
          setTimeout(() => {
            setIsSent({ state: 'succeeded', color: '#c3e88d', isVisible: 0 });
          }, 3000);
        },
        () => {
          setIsSent({ state: 'failed', color: '#ff5370', isVisible: 1 });
          setTimeout(() => {
            setIsSent({ state: 'failed', color: '#ff5370', isVisible: 0 });
          }, 3000);
        }
      );

    e.target.reset();
  };

  const titleRef = useRef();
  const underline = useMemo(() => gsap.utils.selector(titleRef), []);

  const contactRef = useRef();
  const text = useMemo(() => gsap.utils.selector(contactRef), []);
  const methods = useMemo(() => gsap.utils.selector(contactRef), []);

  useEffect(() => {
    const title = titleRef.current;
    const contactForm = form.current;

    ScrollTrigger.saveStyles([
      title,
      underline('.underline'),
      text('.contact-text'),
      methods('.contact-methods'),
      contactForm,
    ]);

    ScrollTrigger.matchMedia({
      '(min-width: 960px)': function () {
        gsap.from(title, {
          duration: 0.5,
          scale: 0.2,
          opacity: 0,
          scrollTrigger: {
            start: '-80 80%',
            trigger: title,
            toggleActions: 'restart none none none',

            onLeaveBack: () => {
              gsap.to(title, {
                delay: 0.5,
                duration: 0.5,
                scale: 0.2,
                opacity: 0,
              });
            },
          },
        });

        gsap.from(underline('.underline'), {
          delay: 0.5,
          duration: 0.5,
          scale: 0,

          scrollTrigger: {
            start: '-80 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });

        gsap.from(text('.contact-text'), {
          delay: 1,
          duration: 0.5,
          scale: 1.2,
          opacity: 0,
          stagger: 1,

          scrollTrigger: {
            start: '-80 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });

        gsap.from(methods('.contact-methods'), {
          delay: 1.5,
          duration: 0.5,
          opacity: 0,

          scrollTrigger: {
            start: '-80 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });

        gsap.from(contactForm, {
          delay: 2,
          duration: 0.5,
          y: 50,
          opacity: 0,

          scrollTrigger: {
            start: '-80 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <h2 className="title" ref={titleRef}>
        Contact
        <div className="underline"></div>
      </h2>

      <p className="contact-text">
        Got any question or just want to talk with me?
      </p>

      <div className="contact-methods">
        <a href="tel:7782278732" target="_blank" rel="noreferrer">
          <MdSmartphone />
          (778)227-8732
        </a>

        <a href="mailto:echt.shawn@gmail.com" target="_blank" rel="noreferrer">
          <MdOutlineEmail />
          echt.shawn@gmail.com
        </a>
      </div>

      <p className="contact-text">Or send me a message.</p>

      <div className="contact-form-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <h4
            className="notification"
            style={{
              color: isSent.color,
              opacity: isSent.isVisible,
              border: `${isSent.color} 1px solid`,
              boxShadow: `0 0 5px ${isSent.color}`,
            }}
          >
            {(() => {
              switch (isSent.state) {
                case 'succeeded':
                  return 'Your message has been successfully sent!';
                case 'failed':
                  return 'Failed to sent the message, please try again.';
                default:
                  return 'Sending message...';
              }
            })()}
          </h4>

          <input name="name" type="text" placeholder="Name" required />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />

          <input name="subject" type="text" placeholder="Subject" />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            required
          ></textarea>

          <button className="contact-form-btn" type="submit">
            Send
            <FaTelegramPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
