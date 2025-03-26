// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <h1>Grain Realty</h1>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          {/* <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#investments" onClick={() => setMenuOpen(false)}>Investments</a></li>
          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

