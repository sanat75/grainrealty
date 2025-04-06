import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo1.png'; // Import the logo

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
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
        {/* Menu toggle button removed */}
        {/* Navigation links have been removed */}
      </div>
    </nav>
  );
};

export default Navbar;