import React from 'react';
import './Portfolio.css';

// Import all images
import of1 from '../assets/of1.jpg';
import comr1 from '../assets/comr1.jpg';
import comr2 from '../assets/comr2.jpg';
import comr3 from '../assets/comr3.jpg';
import ind1 from '../assets/ind1.png';
import ind2 from '../assets/ind2.jpg';
import ind3 from '../assets/ind3.jpg';
import ind4 from '../assets/ind4.png';
import ind5 from '../assets/ind5.jpg';
import off2 from '../assets/off2.jpg';
import off3 from '../assets/off3.jpg';
import res1 from '../assets/res1.jpg';
import res2 from '../assets/res2.jpg';
import res3 from '../assets/res3.png';

const Portfolio = () => {
  const properties = [
    {
      id: 1,
      name: "Skyline Residences",
      type: "residential",
      location: "Downtown",
      image: res1
    },
    {
      id: 2,
      name: "Metro Business Center",
      type: "commercial",
      location: "Financial District",
      image: of1
    },
    {
      id: 3,
      name: "Central Logistics Hub",
      type: "industrial",
      location: "Highway Belt",
      image: ind1
    },
    {
      id: 4,
      name: "Lakefront Apartments",
      type: "residential",
      location: "Waterfront",
      image: res2
    },
    {
      id: 5,
      name: "Tech Park Offices",
      type: "commercial",
      location: "Innovation District",
      image: off2
    },
    {
      id: 6,
      name: "Harbor Distribution Center",
      type: "industrial",
      location: "Port Area",
      image: ind2
    },
    {
      id: 7,
      name: "Urban Living Condos",
      type: "residential",
      location: "City Center",
      image: res3
    },
    {
      id: 8,
      name: "Commercial Residence Complex",
      type: "commercial",
      location: "Mixed-Use District",
      image: comr1
    },
    {
      id: 9,
      name: "Manufacturing Plant",
      type: "industrial",
      location: "Industrial Zone",
      image: ind3
    },
    {
      id: 10,
      name: "Executive Office Suites",
      type: "commercial",
      location: "Business District",
      image: off3
    },
    {
      id: 11,
      name: "Multi-Family Housing",
      type: "commercial",
      location: "Suburban Area",
      image: comr2
    },
    {
      id: 12,
      name: "Logistics Warehouse",
      type: "industrial",
      location: "Shipping District",
      image: ind4
    },
    {
      id: 13,
      name: "Modern Residence Towers",
      type: "commercial",
      location: "East End",
      image: comr3
    },
    {
      id: 14,
      name: "Distribution Facility",
      type: "industrial",
      location: "Transportation Hub",
      image: ind5
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        
        <div className="portfolio-grid">
          {properties.map((property) => (
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