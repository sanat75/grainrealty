// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Grain Realty</h2>
        <div className="about-content">
          {/* <div className="about-image">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team Meeting" />
          </div> */}
          <div className="about-text">
            {/* <h3>Your Trusted Partner in Real Estate</h3> */}
            <p>
              At Grain Realty, we pride ourselves on being a premier real estate investment company with a solid reputation for excellence and integrity. With over 15 years of industry experience, we have established ourselves as leaders in identifying and developing valuable property opportunities across residential, commercial, and industrial sectors.
            </p>
            <p>
              Our team of seasoned professionals combines deep market knowledge with innovative thinking to deliver exceptional results for our clients and partners. We're committed to building long-term relationships based on trust, transparency, and consistent performance.
            </p>
            {/* <div className="about-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-text">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">300+</span>
                <span className="stat-text">Properties</span>
              </div>
              <div className="stat">
                <span className="stat-number">$500M+</span>
                <span className="stat-text">Assets Managed</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;