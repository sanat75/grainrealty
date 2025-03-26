// src/components/Hero.js
import React from 'react';
import './Hero.css';
import bgImage from '../assets/bg1.jpg';


const Hero = () => {


  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Premium Real Estate Investments</h1>
        <p className="hero-subtitle">Discover exceptional properties with Grain Realty</p>
        <div className="hero-cta">
          <a href="#investments" className="btn">Explore Investments</a>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

