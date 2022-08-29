import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './Navbar.scss';

const linkItems = ['home', 'about', 'projects', 'contact'];

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // * navbar
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
    <nav className={`navbar ${isVisible && 'navbar-visible'}`}>
      <ul className={`navbar-links ${isActive && 'navbar-active'}`}>
        {linkItems.map((linkItem, index) => (
          <li
            key={index}
            style={{
              opacity: isActive && 1,
              transform: isActive && 'translateX(0)',
              transitionDelay: isActive && `${index / 5 + 0.2}s`,
            }}
          >
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
        ))}
      </ul>

      <ul
        className={`navbar-burger ${isActive && 'navbar-burger-active'}`}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
