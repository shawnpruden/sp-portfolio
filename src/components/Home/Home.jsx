import React, { useCallback, useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

import './Home.scss';
import TypeWriter from './TypeWriter';

function Home() {
  const [isActive, setIsActive] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const translateButton = useCallback(() => {
    if (window.pageYOffset >= document.documentElement.clientHeight) {
      setIsDisabled(false);
      setIsActive(true);
    } else if (window.pageYOffset < document.documentElement.clientHeight) {
      setIsActive(false);
      setIsDisabled(true);
    }
  }, []);

  console.log(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', translateButton);
  }, [translateButton]);

  return (
    <section id="home" className="home">
      <h1 className="home-text">Hello, and welcome!</h1>
      <TypeWriter />
      <div className="home-btn-container">
        <Link
          className={`home-btn ${isActive ? 'home-transformed-btn' : ''}`}
          to={isActive ? 'home' : 'about'}
          spy={true}
          smooth={true}
          duration={800}
          onClick={() => {
            if (window.pageYOffset >= 280) {
              setIsDisabled((prevState) => !prevState);
            }
            if (!isActive) {
              window.removeEventListener('scroll', translateButton);
              setTimeout(() => {
                window.addEventListener('scroll', translateButton);
              }, 1000);
            } else {
              window.addEventListener('scroll', translateButton);
            }

            setIsActive((prevState) => !prevState);
          }}
          style={isDisabled ? {} : { transition: 'none' }}
        >
          <p
            className={`home-btn-text ${
              isActive ? 'home-transformed-btn-text' : ''
            }`}
            style={isDisabled ? {} : { transition: 'none' }}
          >
            View More
          </p>
          <FaAngleDown
            className={` ${
              isActive ? 'home-transformed-btn-icon' : 'home-btn-icon'
            }`}
          />
        </Link>
      </div>
    </section>
  );
}

export default Home;
