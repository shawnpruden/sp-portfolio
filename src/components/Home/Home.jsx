import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Link } from 'react-scroll';

import './Home.scss';

function Home() {
  const [textColor, setTextColor] = useState('name-color');

  const switchClass = () => {
    switch (textColor) {
      case 'name-color':
        return 'name-color';
      case 'position-color':
        return 'position-color';
      default:
        return '';
    }
  };

  return (
    <div id="home" className="home">
      <h1 className="home-text">Hello, and welcome!</h1>
      <div className="home-text-wrapper">
        <p>I'm</p>
        <div className={switchClass()}>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .typeString('Shawn Pruden')
                .pauseFor(1000)
                .deleteAll('natural')
                .callFunction(() => setTextColor('position-color'))
                .typeString('a React Developer')
                .pauseFor(1000)
                .deleteAll('natural')
                .callFunction(() => setTextColor('name-color'));
            }}
          />
        </div>
        <p>.</p>
      </div>
      <Link
        className="home-btn"
        activeClass="navbar-active"
        to="about"
        spy={true}
        smooth={true}
        duration={800}
      >
        View More
        <KeyboardArrowDownRoundedIcon
          className="home-btn-icon"
          fontSize="inherit"
        />
      </Link>
    </div>
  );
}

export default Home;
