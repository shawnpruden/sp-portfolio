import React, { Fragment } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { About, Contact, Footer, Home, Navbar, Projects } from 'components';

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
