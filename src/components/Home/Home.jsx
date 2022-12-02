import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { FaAngleDown } from 'react-icons/fa';

import './Home.scss';
import TypeWriter from './TypeWriter';

function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const translateButton = useCallback(() => {
    if (window.scrollY >= document.documentElement.clientHeight) {
      setIsDisabled(true);
      setIsActive(true);
    } else {
      setIsDisabled(false);
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', translateButton);
  }, [translateButton]);

  const handleClick = () => {
    if (
      window.pageYOffset >= 250 &&
      window.pageYOffset < document.documentElement.clientHeight
    ) {
      setIsDisabled(true);
    }

    if (!isActive) {
      window.removeEventListener('scroll', translateButton);
      setTimeout(() => {
        window.addEventListener('scroll', translateButton);
      }, 1000);
    }

    setIsActive(true);
  };

  return (
    <section id="home" className="home">
      <h1 className="home-greeting">Hello, and welcome!</h1>

      <TypeWriter />

      <div className="home-btn-container">
        <Link
          className={`home-btn ${isActive && 'home-transformed-btn'}`}
          to={isActive ? 'home' : 'about'}
          spy={true}
          smooth={true}
          duration={800}
          onClick={handleClick}
          style={{
            transition: isDisabled && 'background-color 0.5s ease-in-out',
          }}
        >
          <p
            className={`home-btn-text ${
              isActive && 'home-transformed-btn-text'
            }`}
            style={{ transition: isDisabled && 'none' }}
          >
            View More
          </p>

          <FaAngleDown
            className={`${
              isActive ? 'home-transformed-btn-icon' : 'home-btn-icon'
            }`}
          />
        </Link>
      </div>
    </section>
  );
}

export default Home;
