import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './About.scss';
import { data } from './data';

import Skills from '../Skills/Skills';
import Badge from '../Badge/Badge';

function About() {
  const titleRef = useRef();
  const traitsRef = useRef();

  const underline = gsap.utils.selector(titleRef);

  useEffect(() => {
    const traits = traitsRef.current;
    const title = titleRef.current;

    ScrollTrigger.saveStyles([title, underline('.underline'), traits]);

    ScrollTrigger.matchMedia({
      '(min-width: 960px)': function () {
        gsap.from(title, {
          delay: 0.5,
          duration: 0.5,

          x: '-50%',
          opacity: 0,

          scrollTrigger: {
            start: 'top 80%',
            trigger: title,
            toggleActions: 'restart none none none',

            onLeaveBack: () => {
              gsap.to(title, {
                delay: 0.5,
                duration: 1,
                x: '-50%',
                opacity: 0,
              });
            },
          },
        });

        gsap.from(underline('.underline'), {
          delay: 0.8,

          duration: 0.5,
          scale: 0,

          scrollTrigger: {
            start: 'top 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });

        gsap.from(traits, {
          delay: 1.2,

          duration: 0.5,
          x: '-50%',
          opacity: 0,

          ease: 'power3.out',

          scrollTrigger: {
            start: 'top 80%',
            trigger: traits,
            toggleActions: 'restart none none reverse',
          },
        });
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="about" className="about">
      <h2 className="title" ref={titleRef}>
        About
        <div className="underline"></div>
      </h2>

      <div className="about-wrapper">
        <div className="traits" ref={traitsRef}>
          <div className="about-content">
            <h3 className="subtitle">Character Traits</h3>

            <ul>
              <li>
                <h4>Passionate & Motivated</h4>
                <p>Keen on coding and building website & web application.</p>
              </li>

              <li>
                <h4>Result-driven & Persistent</h4>
                <p>
                  Never give up until the desired outcome has been achieved.
                </p>
              </li>

              <li>
                <h4>Pragmatic & Diligent</h4>
                <p>See problems and challenges as opportunities to grow.</p>
              </li>

              <li>
                <h4>Dedicated & Progressive</h4>
                <p>
                  Always willing to learn and improve what has been learned.
                </p>
              </li>

              <li>
                <h4>Trustworthy & Responsible</h4>
                <p>Promise made, promise kept.</p>
              </li>
            </ul>
          </div>

          <Badge type="image" title="Random Facts" data={data} />
        </div>

        <Skills />
      </div>
    </section>
  );
}

export default About;
