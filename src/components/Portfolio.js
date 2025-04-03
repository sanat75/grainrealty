import React, { useState } from 'react';
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
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Section descriptions with more creative headings
  const sectionDescriptions = {
    industrial: {
      title: "Industrial Excellence",
      description: "Leading Industrial Real Estate Agency in the Greater Toronto Area. Grain Realty is a premier industrial real estate company in the Greater Toronto Area, specializing in high-quality industrial buildings for rent. With in-depth expertise in the industrial sector, we provide tailored solutions to meet the diverse needs of businesses of all sizes. Industrial Property for Rent in the Greater Toronto Area. Looking for an industrial property for rent in the Greater Toronto Area? Grain Realty offers a wide selection of strategically located industrial spaces designed to enhance your business operations. Our properties come equipped with modern facilities and infrastructure, ideal for manufacturing and warehousing. Why Choose Grain Realty? As a trusted name in industrial real estate, we are committed to delivering exceptional service and full support throughout the leasing process. Our experts work closely with you to find the perfect industrial space that ensures efficiency and business growth. Whether you're expanding operations or launching a new venture, Grain Realty is your ideal partner for industrial real estate solutions in the Greater Toronto Area. Contact us today to explore our available properties and take your business to the next level with Grain Realty."
    },
    commercial: {
      title: "Business Prosperity Spaces",
      description: "Commercial Property for Sale in the Greater Toronto Area\nGrain Realty offers premium commercial properties for sale in the Greater Toronto Area, Canada. Our inventory includes prime spaces in key locations, ensuring excellent visibility and accessibility for your business. Whether you're expanding your operations or seeking a high-value investment, our commercial properties are an excellent choice.\n\nCommercial Property for Rent in the Greater Toronto Area\nGrain Realty provides commercial buildings for rent across the Greater Toronto Area, offering flexible and strategic leasing solutions. Our rental spaces are designed to meet the unique needs of various industries, featuring modern amenities and prime locations to give your business a competitive edge.\n\nPre-Leased Property for Sale in Canada\nFor investors seeking stable and reliable income, explore our selection of pre-leased properties for sale in Canada. These properties come with reputable tenants and long-term leases, ensuring a steady revenue stream. Grain Realty simplifies the process of finding and acquiring pre-leased commercial spaces that align with your investment goals.\n\nWhy Choose Grain Realty?\nGrain Realty is a trusted name in commercial real estate, dedicated to providing exceptional property solutions in the Greater Toronto Area. With extensive market expertise and a committed team, we help you find the ideal property—whether you're buying, renting, or investing.\n\nContact us today to explore our commercial properties and see how Grain Realty can support your business goals."
    },
    residential: {
      title: "Dream Living Destinations",
      description: "Residential Properties for Sale in the Greater Toronto Area\nGrain Realty offers a wide range of residential properties for sale in the Greater Toronto Area, Canada. From modern condos to spacious family homes, our listings feature prime locations with excellent amenities. Whether you're a first-time buyer or looking for an upgrade, we help you find the perfect home.\n\nResidential Properties for Rent in the Greater Toronto Area\nLooking for a home to rent? Grain Realty provides quality rental properties across the Greater Toronto Area. Our listings include apartments, townhouses, and detached homes with flexible leasing options, ensuring you find a comfortable and convenient living space.\n\nInvestment Properties in Canada\nFor investors seeking long-term value, our portfolio includes pre-leased residential properties with reliable tenants. These properties provide a steady rental income and are a great addition to any real estate investment portfolio. Grain Realty simplifies the process, ensuring seamless transactions.\n\nWhy Choose Grain Realty?\nGrain Realty is a trusted name in residential real estate, offering expert guidance and a wide range of property options in the Greater Toronto Area. Whether you're buying, renting, or investing, our team is here to help you make informed decisions.\n\nContact us today to find your dream home or next investment property with Grain Realty."
    }
  };
  
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
    
  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);
  
  // Group properties by type for cleaner display
  const renderSectionWithDescription = (type) => {
    if (activeFilter !== 'all' && activeFilter !== type) return null;
    
    const typeProperties = properties.filter(property => property.type === type);
    if (typeProperties.length === 0) return null;
    
    return (
      <div className="property-section" key={type}>
        <div className="section-description">
          <h3>{sectionDescriptions[type].title}</h3>
          <div className="description-content">
            {sectionDescriptions[type].description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="portfolio-grid">
          {typeProperties.map((property) => (
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
    );
  };

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
        
        {activeFilter === 'all' ? (
          <>
            {renderSectionWithDescription('residential')}
            {renderSectionWithDescription('commercial')}
            {renderSectionWithDescription('industrial')}
          </>
        ) : (
          renderSectionWithDescription(activeFilter)
        )}
      </div>
    </section>
  );
};

export default Portfolio;