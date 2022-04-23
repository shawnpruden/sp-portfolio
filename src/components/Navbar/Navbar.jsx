import React, { useState } from 'react';

import './Navbar.scss';

function Navbar() {
  const linkItems = ['home', 'about', 'projects', 'contact'];

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">SP</a>
      </div>
      <ul className={`navbar-links ${isActive ? 'nav-active' : ''}`}>
        {linkItems.map((linkItem, index) => {
          let style = isActive
            ? {
                animation: `linkItemFade 0.5s ease-out forwards ${
                  index / 2 + 0.2
                }s`,
              }
            : { opacity: 1 };
          return (
            <li style={style} key={index}>
              <a href={`#${linkItem}`}>{linkItem}</a>
            </li>
          );
        })}
      </ul>
      <div
        className={`navbar-burger ${isActive ? 'line-transform' : ''}`}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <div className="burger-line1"></div>
        <div className="burger-line2"></div>
        <div className="burger-line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
