import React, { useState, useEffect } from 'react';
import './InvestmentTypes.css';
import res1 from '../assets/res1.jpg';
import res2 from '../assets/res2.jpg';
import res3 from '../assets/res3.png';
import res4 from '../assets/indoor1.jpg';
import res5 from '../assets/indoor2.jpg';
import ind1 from '../assets/industry1.jpg';
import ind2 from '../assets/industry2.jpg';
import ind3 from '../assets/industry3.jpg';
import ind4 from '../assets/industry4.jpg';
import ind5 from '../assets/industry5.jpg';
import ind6 from '../assets/industry6.jpg';

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
        "Investing in residential real estate across the spectrum, including:        ",
        "Single-family homes, Detached homes, and Semi-detached homes        ",
        "Detached and semi-detached houses",
        "Condominiums, Apartments, and Townhomes"
        
      ],
      images: [res1, res2, res3, res4, res5],
    },
    {
      id: 2,
      title: "Industrial",
      intro: [
        "Encompassing the full construction lifecycle, we also operate in industrial real estate, including:",
        "Manufacturing facilities / Industrial sheds ",
        "Office spaces"
      ],
      images: [ind4, ind3, ind1, ind5, ind6],
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
              <ul className="investment-intro">
                {type.intro.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <ImageGallery images={type.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;