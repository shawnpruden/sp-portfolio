import React, { useEffect, useRef } from 'react';

import './Projects.scss';
import Card from '../Card/Card';

import { gsap } from 'gsap';

function Projects() {
  const titleRef = useRef();
  const underline = gsap.utils.selector(titleRef);

  const galleryRef = useRef();
  const cards = gsap.utils.selector(galleryRef);

  const textRef = useRef();

  useEffect(() => {
    gsap.from(cards('.card'), {
      duration: 1.2,
      y: 500,
      opacity: 0,
      scale: 0.5,
      stagger: { amount: 2 },
      ease: 'power4.out',
      scrollTrigger: {
        start: 'top 80%',
        trigger: galleryRef.current,
        toggleActions: 'restart complete none reverse',
      },
    });

    const title = titleRef.current;

    gsap.from(title, {
      duration: 0.5,
      y: 50,
      opacity: 0,
      scrollTrigger: {
        start: '-50 80%',
        trigger: title,
        onLeaveBack: () => {
          gsap.to(title, {
            delay: 0.5,
            y: 50,
            opacity: 0,
          });
        },
        toggleActions: 'restart',
      },
    });

    gsap.from(underline('.underline'), {
      delay: 0.5,
      duration: 0.5,
      scale: 0,
      opacity: 0,

      scrollTrigger: {
        start: '-50 80%',
        trigger: title,
        toggleActions: 'restart none none reverse',
      },
    });

    const text = textRef.current;

    gsap.from(text, {
      delay: 1,
      duration: 1,
      opacity: 0,

      scrollTrigger: {
        start: '-50 80%',
        trigger: title,
        toggleActions: 'restart none none reverse',
      },
    });
  }, [cards, underline]);

  return (
    <section id="projects" className="projects">
      <h2 className="title" ref={titleRef}>
        Projects
        <div className="underline"></div>
      </h2>
      <h4 className="projects-text" ref={textRef}>
        Pleasure in the job puts perfection in the work.
      </h4>
      <div className="projects-gallery" ref={galleryRef}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Projects;
