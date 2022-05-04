import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineEmail, MdSmartphone } from 'react-icons/md';

import './Contact.scss';

import { gsap } from 'gsap';

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
        'service_c30p4mr',
        'template_1a2kkz8',
        form.current,
        'RtNtT5MR2Q-MuacDU'
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
  const underline = gsap.utils.selector(titleRef);

  const contactRef = useRef();
  const text = gsap.utils.selector(contactRef);

  useEffect(() => {
    const title = titleRef.current;

    gsap.from(title, {
      duration: 0.5,
      scale: 0.2,
      opacity: 0,
      scrollTrigger: {
        start: '-80 80%',
        trigger: title,
      },
    });

    gsap.from(underline('.underline'), {
      delay: 0.5,
      duration: 0.5,
      scale: 0,
      opacity: 0,

      scrollTrigger: {
        start: '-80 80%',
        trigger: title,
      },
    });

    gsap.from(text('.contact-text'), {
      duration: 1,
      scale: 1.2,
      opacity: 0,
      stagger: 0.5,

      scrollTrigger: {
        start: '30 80%',
        trigger: title,
      },
    });

    const contactForm = form.current;

    gsap.from(contactForm, {
      delay: 0.5,
      duration: 1,
      y: 50,
      opacity: 0,

      scrollTrigger: {
        start: '-150 80%',
        trigger: contactForm,
      },
    });
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
        <h4>
          <MdSmartphone /> (778)-227-8732
        </h4>
        <h4>
          <MdOutlineEmail /> dev.shawnpruden@gmail.com
        </h4>
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
