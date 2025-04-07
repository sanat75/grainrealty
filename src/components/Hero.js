import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import bgImage from '../assets/bg1.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Grain Realty</h1>
        <p className="hero-subtitle">Global Vision, Grounded Investments.</p>
        <p className="hero-subtitle">Discover exceptional properties with Grain Realty</p>
        <div className="hero-cta">
          <a href="#investments" className="btn">Explore Investments</a>
          {/* <Link to="#portfolio" className="btn">View Our Portfolio</Link> */}
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;