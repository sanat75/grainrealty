import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo1.png'; // Import the logo

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
            <img src={logo} alt="Grain Realty Logo" className="logo-image" />
            <h1>Grain Realty</h1>
          </a>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Navigation links have been removed */}
      </div>
    </nav>
  );
};

export default Navbar;