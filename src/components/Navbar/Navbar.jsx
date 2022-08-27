import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './Navbar.scss';

function Navbar() {
  // * hamburger menu
  const [isActive, setIsActive] = useState(false);

  const linkItems = ['home', 'about', 'projects', 'contact'];

  const renderedList = linkItems.map((linkItem, index) => {
    const style = isActive
      ? {
          animation: `linkItemFade 0.5s ease-out forwards ${index / 5 + 0.2}s`,
        }
      : {};

    return (
      <li style={style} key={index}>
        <Link
          activeClass="highlighted"
          to={linkItem}
          spy={true}
          smooth={true}
          duration={800}
          onClick={() => setIsActive(false)}
        >
          {linkItem}
        </Link>
      </li>
    );
  });

  // * navbar
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavbar = useCallback(() => {
    if (window.scrollY >= document.documentElement.clientHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);

      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleNavbar);
  }, [toggleNavbar]);

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
