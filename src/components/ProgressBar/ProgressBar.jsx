import React from 'react';

import './ProgressBar.scss';

function ProgressBar({ skill: { progress, title, icon }, isActive, index }) {
  const grow = {
    opacity: 1,
    width: `${isNaN(progress) ? 100 : progress}%`,
    transitionDelay: `${index / 20}s`,
  };

  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-wrapper">
          <div className="progress-bar-icon">
            <img src={icon} alt={title} />
          </div>

          <p className="progress-bar-title">{title}</p>
        </div>

        <div className="progress-bar-container">
          <div
            className={`progress-bar-grow ${
              isNaN(progress) ? 'learning' : 'learned'
            }`}
            style={isActive ? grow : null}
          >
            {progress}
            {isNaN(progress) ? '...' : '%'}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
