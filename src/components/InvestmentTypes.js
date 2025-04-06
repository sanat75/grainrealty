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
  
  // For swipe functionality on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - go to next image
      showNextImage();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right - go to previous image
      showPrevImage();
    }
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <img
          src={mainImage}
          alt="Property"
          className="main-image"
        />
        <div className="nav-arrow right-arrow" onClick={showNextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
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

const InvestmentTypes = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const investmentTypes = [
    {
      id: 1,
      title: "Residential",
      images: [res1, res2, res3, res4, res5],
      segments: [
        "Single family /Detached homes",
        "Apartments/Condominiums",
      ]
    },
    {
      id: 2,
      title: "Industrial",
      images: [ind4, ind3, ind1, ind5, ind6],
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
            <div 
              key={type.id} 
              className="investment-card fade-in" 
              style={{animationDelay: `${index * 0.3}s`}}
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;