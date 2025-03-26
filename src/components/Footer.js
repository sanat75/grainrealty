// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Grain Realty</h2>
            <p>Premium Real Estate Investments</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              {/* <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#investments">Investment Types</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul> */}
            </div>
            
            <div className="footer-section">
              <h4>Investment Types</h4>
              <ul>
                <li><a href="#investments">Residential</a></li>
                <li><a href="#investments">Commercial</a></li>
                <li><a href="#investments">Industrial</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>123 Business Avenue, Suite 500<br />Metro City, ST 12345</p>
              <p>Phone: (555) 123-4567<br />Email: info@grainrealty.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Grain Realty. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
