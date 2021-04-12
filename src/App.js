import React from 'react';
import './App.css';

import Top from './components/Top/Top';
import AboutUs from './components/AboutUs/AboutUs';
import HowToApply from './components/HowToApply/HowToApply';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="trafico">
      <Top />
      <AboutUs />
      <HowToApply />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
