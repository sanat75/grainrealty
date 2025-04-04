import React, { useState } from 'react';
import './InvestmentTypes.css';
import res1 from '../assets/res1.jpg';
import res2 from '../assets/res2.jpg';
import res3 from '../assets/res3.png';
import res4 from '../assets/indoor1.jpg';
import res5 from '../assets/indoor2.jpg';
import ind1 from '../assets/industry1.jpg';
import ind2 from '../assets/industry2.jpg';
import ind3 from '../assets/industry3.jpg';

// Image Gallery Component
const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <div className="main-image-container">
        <img 
          src={mainImage} 
          alt="Property" 
          className="main-image" 
        />
      </div>
      <div className="thumbnails">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`thumbnail ${img === mainImage ? 'active' : ''}`}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const InvestmentTypes = () => {
  const investmentTypes = [
    {
      id: 1,
      title: "Residential",
      images: [res1, res2, res3,res4,res5],
      segments: [
        "Single family /Detached homes",
        "Apartments/Condominiums",
      ]
    },
    {
      id: 2,
      title: "Industrial",
      images: [ind1,ind2,ind3], // You can adjust these or add different images
      segments: [
        "Manufacturing Facilities",
        "Commercial Office Spaces"
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
              <h3>{type.title}</h3>
              
              {/* Image Gallery Integration */}
              <ImageGallery images={type.images} />
              
              <div className="investment-segments">
                <h4>Segments</h4>
                <ul>
                  {type.segments.map((segment, idx) => (
                    <li key={idx}>{segment}</li>
                  ))}
                </ul>
              </div>
              {/* <a href="#contact" className="btn btn-outline">Learn More</a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;