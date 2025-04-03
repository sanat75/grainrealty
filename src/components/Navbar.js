// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleNavigation = (path) => {
    // Close menu if open
    setMenuOpen(false);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Navigate to the path
    navigate(path);
  };
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }} 
            className="logo-link"
          >
            <h1>Grain Realty</h1>
          </a>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/portfolio');
              }}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;