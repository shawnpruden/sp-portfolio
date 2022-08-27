import React, { Fragment } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
