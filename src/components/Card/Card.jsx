import React from 'react';

import './Card.scss';
import sample from '../../assets/sample.jpeg';

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src={sample} alt="sample" />
      </div>
      <div className="card-wrapper">
        <div className="card-content">
          <h4 className="card-title">Project Name</h4>
          <p className="card-skills">Skills Used</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
