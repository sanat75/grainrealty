// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;