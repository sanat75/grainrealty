// src/components/Portfolio.js
import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const properties = [
    {
      id: 1,
      name: "Skyline Residences",
      type: "residential",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Metro Business Center",
      type: "commercial",
      location: "Financial District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Central Logistics Hub",
      type: "industrial",
      location: "Highway Belt",
      image: "https://images.unsplash.com/photo-1591289009723-fdd5a3c3d6b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Lakefront Apartments",
      type: "residential",
      location: "Waterfront",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      name: "Tech Park Offices",
      type: "commercial",
      location: "Innovation District",
      image: "https://images.unsplash.com/photo-1577760258977-e18fb4a260b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 6,
        name: "Harbor Distribution Center",
        type: "industrial",
        location: "Port Area",
        image: "https://images.unsplash.com/photo-1585282263861-f55e341878f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
    ];
    
    const filteredProperties = activeFilter === 'all' 
      ? properties 
      : properties.filter(property => property.type === activeFilter);
  
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          
          <div className="portfolio-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'industrial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('industrial')}
            >
              Industrial
            </button>
          </div>
          
          <div className="portfolio-grid">
            {filteredProperties.map((property) => (
              <div key={property.id} className="portfolio-item">
                <div className="portfolio-img">
                  <img src={property.image} alt={property.name} />
                </div>
                <div className="portfolio-info">
                  <h3>{property.name}</h3>
                  <p>{property.location}</p>
                  <span className="property-type">{property.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;