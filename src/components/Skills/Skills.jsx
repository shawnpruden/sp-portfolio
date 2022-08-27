import React, { useCallback, useEffect, useRef, useState } from 'react';

import './Skills.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { primary, data } from './data';
import Badge from '../Badge/Badge';

function Skills() {
  const [isActive, setIsActive] = useState(false);

  const skillsRef = useRef();

  const activateProgressBar = useCallback(() => {
    if (
      skillsRef.current.getBoundingClientRect().top <
      document.documentElement.clientHeight - 150
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    if (document.documentElement.clientWidth < 959) {
      window.addEventListener('scroll', activateProgressBar);
    }
  }, [activateProgressBar]);

  useEffect(() => {
    const skills = skillsRef.current;

    ScrollTrigger.saveStyles([skills]);

    ScrollTrigger.matchMedia({
      '(min-width: 960px)': function () {
        gsap.from(skills, {
          delay: 1.2,
          duration: 0.5,

          x: '50%',
          opacity: 0,

          ease: 'power3.out',

          scrollTrigger: {
            start: 'top 80%',
            trigger: skills,
            toggleActions: 'restart none none reverse',

            onEnter: () => {
              setTimeout(() => {
                setIsActive(true);
              }, 1500);
            },

            onLeaveBack: () => {
              setIsActive(false);
            },
          },
        });
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="skills">
      <div ref={skillsRef}>
        <h3 className="subtitle">Technical Skills</h3>

        <ul className="skills-lists">
          {primary.map((skill, index) => (
            <li key={index}>
              <ProgressBar skill={skill} isActive={isActive} index={index} />
            </li>
          ))}
        </ul>

        <Badge type="text" title="React Ecosystem" data={data} />
      </div>
    </section>
  );
}

export default Skills;
