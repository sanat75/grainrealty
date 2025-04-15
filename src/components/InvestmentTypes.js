import React, { useState, useEffect } from 'react';
import './InvestmentTypes.css';
import res1 from '../assets/res1.jpg';
import res2 from '../assets/res2.jpg';
import res3 from '../assets/res3.png';
import res4 from '../assets/indoor1.jpg';
import res6 from '../assets/res5.png';
import res7 from '../assets/indoor3.jpg';
import res8 from '../assets/indoor4.jpg';
import res9 from '../assets/indoor5.jpg';
import res10 from '../assets/indoor6.jpg';

import res5 from '../assets/indoor2.jpg';
import ind1 from '../assets/industry1.jpg';
import ind2 from '../assets/industry2.jpg';
import ind3 from '../assets/industry3.jpg';
import ind4 from '../assets/industry4.jpg';
import ind5 from '../assets/industry5.jpg';
import ind6 from '../assets/industry6.jpg';
import ind11 from '../assets/ind11.jpg';
import ind12 from '../assets/ind12.jpg';


// Image Gallery Component
const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [touchMoved, setTouchMoved] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchMoved(false);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchMoved(true);
  };

  const handleTouchEnd = () => {
    if (!touchMoved) return;
    
    if (touchStart - touchEnd > 50) showNextImage();
    if (touchStart - touchEnd < -50) showPrevImage();
  };

  const showPrevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  const showNextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  return (
    <div className="image-gallery">
      <div
        className="main-image-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="nav-arrow left-arrow" onClick={showPrevImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <img src={mainImage} alt="Property" className="main-image" />
        <div className="nav-arrow right-arrow" onClick={showNextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      <div className="thumbnails">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setMainImage(img);
              setCurrentIndex(index);
            }}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Investment Types Component
const InvestmentTypes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

const investmentTypes = [
  {
    id: 1,
    title: "Residential",
    intro: [
      "Comprehensive investment in residential properties across diverse formats, including:",
      "Single-family homes, Detached and Semi-detached homes",
      "Condominiums, Apartments, and Townhomes"
    ],
    images: [res1, res3, res4, res8, res9, res10],
  },
  {
    id: 2,
    title: "Industrial",
    intro: [
      "End-to-end development and investment in industrial real estate, including:",
      "Manufacturing facilities / Industrial sheds",
      "Office spaces"
    ],
    images: [ind4, ind3, ind5, ind6, ind2, ind11, ind12],
  }
];

  return (
    <section id="investments" className="investment-types">
      <div className="container">
        <h2 className="section-title">Investment Types</h2>
        <div className="investment-grid">
          {investmentTypes.map((type, index) => (
            <div
              key={type.id}
              className="investment-card fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3>{type.title}</h3>
              <div className="investment-intro-container">
                <p className="investment-first-point">{type.intro[0]}</p>
                <ul className="investment-intro">
                  {type.intro.slice(1).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <ImageGallery images={type.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;