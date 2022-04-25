import React, { useState } from 'react';

import './ProgressBar.scss';

function ProgressBar({ skill }) {
  const [style, setStyle] = useState({});

  // * need scrolling effect
  setTimeout(() => {
    setStyle({ opacity: 1, width: `${skill.progress}%` });
  }, 3000);

  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-wrapper">
          {skill.icon}
          <p className="progress-bar-title">{skill.title}</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-grow" style={style}>
            {skill.progress}%
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
