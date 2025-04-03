import React from 'react';
import './InvestmentTypes.css';

const InvestmentTypes = () => {
  const investmentTypes = [
    {
      id: 1,
      title: "Residential",
      icon: "🏠",
      description: "Premium residential properties in high-demand locations, including single-family homes, luxury apartments, and multifamily buildings.",
      segments: [
        "Single-Family Homes",
        "Luxury Apartments",
        "Multifamily Buildings",
        "Vacation Properties"
      ]
    },
    {
      id: 2,
      title: "Industrial",
      icon: "🏭",
      description: "High-performing industrial properties including warehouses, distribution centers, and manufacturing facilities in key logistics hubs.",
      segments: [
        "Warehouses",
        "Distribution Centers",
        "Manufacturing Facilities",
        "Logistics Hubs"
      ]
    }
  ];
  
  return (
    <section id="investments" className="investment-types">
      <div className="container">
        <h2 className="section-title">Investment Types</h2>
        <div className="investment-grid">
          {investmentTypes.map((type, index) => (
            <div key={type.id} className="investment-card fade-in" style={{animationDelay: `${index * 0.3}s`}}>
              <div className="investment-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
              <div className="investment-segments">
                <h4>Segments</h4>
                <ul>
                  {type.segments.map((segment, idx) => (
                    <li key={idx}>{segment}</li>
                  ))}
                </ul>
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