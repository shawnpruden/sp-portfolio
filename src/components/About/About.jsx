import React from 'react';

import './About.scss';
import Skills from '../Skills/Skills';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h3>
          About Me
          <div className="under-line"></div>
        </h3>
      </div>
      <div className="about-wrapper">
        <ul className="about-content">
          <li>
            <h4 className="about-content-title">Passionate</h4>
            <p className="about-content-text">
              Keen on coding and building website & web application.
            </p>
          </li>
          <li>
            <h4 className="about-content-title">Result-driven & Persistent</h4>
            <p className="about-content-text">
              Never give up until the desired outcome has been achieved.
            </p>
          </li>
          <li>
            <h4 className="about-content-title">Progressive</h4>
            <p className="about-content-text">
              Always willing to learn and improve myself.
            </p>
          </li>
          <li>
            <h4 className="about-content-title">Responsible & Trustworthy</h4>
            <p className="about-content-text">Promise made, promise kept.</p>
          </li>
        </ul>
        <Skills />
      </div>
    </section>
  );
}

export default About;
