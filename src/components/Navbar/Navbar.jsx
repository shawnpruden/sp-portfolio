import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './Navbar.scss';

function Navbar() {
  // * hamburger menu
  const [isActive, setIsActive] = useState(false);
  const linkItems = ['home', 'about', 'projects', 'contact'];
  const renderedList = linkItems.map((linkItem, index) => {
    let style = isActive
      ? {
          animation: `linkItemFade 0.5s ease-out forwards ${index / 2 + 0.2}s`,
        }
      : { opacity: 1 };
    return (
      <li style={style} key={index}>
        <Link
          activeClass="navbar-active"
          to={linkItem}
          spy={true}
          smooth={true}
          duration={800}
        >
          {linkItem}
        </Link>
      </li>
    );
  });

  // * navbar
  const [isVisible, setIsVisible] = useState(false);
  const colorNav = () => {
    if (window.pageYOffset >= document.documentElement.clientHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', colorNav);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : ''}`}>
      <ul className={`navbar-links ${isActive ? 'nav-active' : ''}`}>
        {renderedList}
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
