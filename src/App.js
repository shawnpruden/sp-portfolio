import React from 'react';
import { CssBaseline } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
    </>
  );
};

export default App;
