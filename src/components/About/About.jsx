import React from 'react';

import './About.scss';
import Skills from '../Skills/Skills';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="title">
        About Me
        <div className="underline"></div>
      </h2>
      <div className="about-wrapper">
        <div className="about-content">
          <ul>
            <li>
              <h4 className="about-content-title">Passionate & Motivated</h4>
              <p className="about-content-text">
                Keen on coding and building website & web application.
              </p>
            </li>
            <li>
              <h4 className="about-content-title">
                Result-driven & Persistent
              </h4>
              <p className="about-content-text">
                Never give up until the desired outcome has been achieved.
              </p>
            </li>
            <li>
              <h4 className="about-content-title">Diligent & Progressive</h4>
              <p className="about-content-text">
                Always willing to learn and improve myself.
              </p>
            </li>
            <li>
              <h4 className="about-content-title">Trustworthy & Responsible</h4>
              <p className="about-content-text">Promise made, promise kept.</p>
            </li>
          </ul>
          <h4 className="about-content-subtitle">What else?</h4>
          <ul className="about-content-subtext">
            <li>Like traveling & hiking</li>
            <li>Dog person</li>
            <li>Big fan of electronic music</li>
            <li>Novice snowboarder</li>
          </ul>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
