import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

import './Skills.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

import { gsap } from 'gsap';

function Skills() {
  const [isActive, setIsActive] = useState(false);

  const skillsRef = useRef();

  const toolsRef = useRef();

  useEffect(() => {
    const skills = skillsRef.current;
    gsap.from(skills, {
      duration: 1,
      x: '100%',
      opacity: 0,
      scrollTrigger: {
        start: 'top 80%',
        trigger: skills,
        toggleActions: 'restart none none reverse',
        onEnter: () => {
          setTimeout(() => {
            setIsActive(true);
          }, 500);
        },
        onLeaveBack: () => {
          setIsActive(false);
        },
      },
    });

    const tools = toolsRef.current;

    gsap.from(tools, {
      duration: 1,
      x: '100%',
      opacity: 0,
      scrollTrigger: {
        start: '60% 80%',
        trigger: skills,
        toggleActions: 'restart none none reverse',
      },
    });
  }, []);

  const skills = [
    {
      title: 'HTML',
      icon: <FaHtml5 style={{ color: '#f78c6c' }} />,
      progress: 90,
    },

    {
      title: 'CSS',
      icon: <FaCss3Alt style={{ color: '#82aaff' }} />,
      progress: 85,
    },
    {
      title: 'Javascript',
      icon: <FaJsSquare style={{ color: '#ffcb6b' }} />,
      progress: 80,
    },
    {
      title: 'React',
      icon: <FaReact style={{ color: '#89ddff' }} />,
      progress: 70,
    },
    {
      title: 'React',
      icon: <FaReact style={{ color: '#89ddff' }} />,
      progress: 70,
    },
    {
      title: 'React',
      icon: <FaReact style={{ color: '#89ddff' }} />,
      progress: 70,
    },
  ];

  const renderedList = skills.map((skill, index) => (
    <li key={index}>
      <ProgressBar skill={skill} isActive={isActive} />
    </li>
  ));

  return (
    <section className="skills">
      <div ref={skillsRef}>
        <h3 className="skills-title">Technical Skills</h3>

        <ul className="skills-lists">{renderedList}</ul>
        <div className="skills-wrapper" ref={toolsRef}>
          <h4 className="skills-subtitle">What else I can do?</h4>
          <ul className="skills-others">
            <li>Default</li>
            <li>Default</li>
            <li>Default</li>
            <li>Default</li>
            <li>Default</li>
          </ul>
          <h4 className="skills-subtitle">What's in my tool box?</h4>
          <ul className="skill-tools">
            <li>Default</li>
            <li>Default</li>
            <li>Default</li>
            <li>Default</li>
            <li>Default</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
