import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InvestmentTypes from './components/InvestmentTypes';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  
    // Scroll to top on first load
    window.scrollTo(0, 0);
  
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="App">
      <Navbar isScrolled={scrollPosition > 50} />
      <Hero />
      <About />
      <InvestmentTypes />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
