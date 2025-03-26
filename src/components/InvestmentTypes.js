// src/components/InvestmentTypes.js
import React from 'react';
import './InvestmentTypes.css';

const InvestmentTypes = () => {
  const investmentTypes = [
    {
      id: 1,
      title: "Residential",
      icon: "🏠",
      description: "Premium residential properties in high-demand locations, including single-family homes, luxury apartments, and multifamily buildings."
    },
    {
      id: 2,
      title: "Commercial",
      icon: "🏢",
      description: "Strategic commercial investments including office buildings, retail spaces, and mixed-use developments in thriving business districts."
    },
    {
      id: 3,
      title: "Industrial",
      icon: "🏭",
      description: "High-performing industrial properties including warehouses, distribution centers, and manufacturing facilities in key logistics hubs."
    }
  ];

  return (
    <section id="investments" className="investment-types">
      <div className="container">
        <h2 className="section-title">Investment Types</h2>
        <div className="investment-grid">
          {investmentTypes.map((type, index) => (
            <div key={type.id} className={`investment-card fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="investment-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
              <div className="investment-segments">
                <h4>Segments</h4>
                {type.title === "Residential" && (
                  <ul>
                    <li>Single-Family Homes</li>
                    <li>Luxury Apartments</li>
                    <li>Multifamily Buildings</li>
                    <li>Vacation Properties</li>
                  </ul>
                )}
                {type.title === "Commercial" && (
                  <ul>
                    <li>Office Buildings</li>
                    <li>Retail Spaces</li>
                    <li>Mixed-Use Developments</li>
                    <li>Hospitality</li>
                  </ul>
                )}
                {type.title === "Industrial" && (
                  <ul>
                    <li>Warehouses</li>
                    <li>Distribution Centers</li>
                    <li>Manufacturing Facilities</li>
                    <li>Logistics Hubs</li>
                  </ul>
                )}
              </div>
              <a href="#contact" className="btn btn-outline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;

