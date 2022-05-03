import React, { useEffect, useRef } from 'react';
import {
  FaBinoculars,
  FaDog,
  FaSnowboarding,
  FaMusic,
  FaGlobe,
} from 'react-icons/fa';

import './About.scss';
import Skills from '../Skills/Skills';

import { gsap } from 'gsap';

function About() {
  const titleRef = useRef();
  const underline = gsap.utils.selector(titleRef);

  const traitsRef = useRef();
  const extra = gsap.utils.selector(traitsRef);

  useEffect(() => {
    const title = titleRef.current;

    gsap.from(title, {
      duration: 1,
      x: '-100%',
      opacity: 0,
      scrollTrigger: {
        start: 'top 80%',
        trigger: title,
        onLeaveBack: () => {
          gsap.to(title, {
            delay: 0.5,
            x: '-100%',
            opacity: 0,
          });
        },
        toggleActions: 'restart',
      },
    });

    gsap.from(underline('.underline'), {
      delay: 1,
      duration: 0.5,
      width: 0,
      opacity: 0,

      scrollTrigger: {
        start: 'top 80%',
        trigger: title,
        toggleActions: 'restart none none reverse',
      },
    });

    const traits = traitsRef.current;

    gsap.from(traits, {
      duration: 1,
      x: '-100%',
      opacity: 0,
      scrollTrigger: {
        start: 'top 80%',
        trigger: traits,
        toggleActions: 'restart none none reverse',
      },
    });

    gsap.from(extra('.about-extra'), {
      duration: 1,
      x: '-100%',
      opacity: 0,
      scrollTrigger: {
        start: '55% 80%',
        trigger: traits,
        toggleActions: 'restart none none reverse',
      },
    });
  }, [extra, underline]);

  return (
    <section id="about" className="about">
      <h2 className="title" ref={titleRef}>
        About
        <div className="underline"></div>
      </h2>
      <div className="about-wrapper">
        <div className="traits" ref={traitsRef}>
          <div className="about-content">
            <h3 className="about-title">Character Traits</h3>
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
                <h4 className="about-content-title">Dedicated & Progressive</h4>
                <p className="about-content-text">
                  Always willing to learn and improve myself.
                </p>
              </li>
              <li>
                <h4 className="about-content-title">
                  Trustworthy & Responsible
                </h4>
                <p className="about-content-text">
                  Promise made, promise kept.
                </p>
              </li>
            </ul>
          </div>

          <div className="about-extra">
            <h4 className="about-extra-title">More about this guy</h4>
            <ul className="about-extra-text">
              <li>
                <FaBinoculars />
                Like traveling & hiking
              </li>
              <li>
                <FaDog />
                Dog person
              </li>
              <li>
                <FaMusic />
                Big fan of electronic music
              </li>
              <li>
                <FaGlobe />
                Trilingual
              </li>
              <li>
                <FaSnowboarding />
                Novice snowboarder
              </li>
            </ul>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
