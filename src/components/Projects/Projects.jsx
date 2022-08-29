import React, { useEffect, useRef } from 'react';

import './Projects.scss';
import Card from '../Card/Card';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { data } from './data';

function Projects() {
  const titleRef = useRef();
  const sloganRef = useRef();

  const underline = gsap.utils.selector(titleRef);

  useEffect(() => {
    const title = titleRef.current;
    const slogan = sloganRef.current;

    ScrollTrigger.saveStyles([title, underline('.underline'), slogan]);

    ScrollTrigger.matchMedia({
      '(min-width: 960px)': function () {
        gsap.from(title, {
          duration: 0.5,
          y: 100,
          opacity: 0,
          scrollTrigger: {
            start: '-50 80%',
            trigger: title,
            toggleActions: 'restart none none none',

            onLeaveBack: () => {
              gsap.to(title, {
                delay: 0.5,
                duration: 0.5,
                y: 100,
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
            start: '-50 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });

        gsap.from(slogan, {
          delay: 1,
          duration: 1,
          opacity: 0,

          scrollTrigger: {
            start: '-50 80%',
            trigger: title,
            toggleActions: 'restart none none reverse',
          },
        });
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="title" ref={titleRef}>
        Projects
        <div className="underline"></div>
      </h2>

      <h4 className="projects-slogan" ref={sloganRef}>
        Pleasure in the job puts perfection in the work.
      </h4>

      <ul className="projects-gallery">
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
