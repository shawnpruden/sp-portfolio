import React from 'react';

import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="title">
        Contact
        <div className="underline"></div>
      </h2>

      <p className="contact-text">Here is how you can reach me</p>

      <div className="contact-form-wrapper">
        <form name="portfolio-form" method="post">
          <input type="hidden" name="form-name" value="portfolio-form" />
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
          <div data-netlify-recaptcha="true"></div>
          <button className="contact-form-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
