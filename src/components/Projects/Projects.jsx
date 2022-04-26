import React from 'react';

import './Projects.scss';
import Card from '../Card/Card';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="title">
        Projects
        <div className="underline"></div>
      </h2>
      <div className="projects-gallery">
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
