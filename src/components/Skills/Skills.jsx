import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

import './Skills.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

function Skills() {
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
  ];

  const renderedList = skills.map((skill, index) => (
    <li key={index}>
      <ProgressBar skill={skill} />
    </li>
  ));
  return (
    <section className="skills">
      <div className="skills-title">
        <h2>Technical Skills</h2>
        <div></div>
      </div>
      <ul className="skills-lists">{renderedList}</ul>
    </section>
  );
}

export default Skills;
