// src/components/Testimonials.js
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
    //   position: "Property Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Working with Grain Realty has been an absolute pleasure. Their deep market knowledge and commitment to excellence have made all the difference in our investment success."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Grain Realty consistently delivers top-tier investment opportunities. Their team's expertise and attention to detail have helped me build a robust and diversified real estate portfolio."
    },
    {
      id: 3,
      name: "Jessica Reynolds",
      position: "Commercial Property Owner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      text: "I've partnered with Grain Realty on multiple commercial projects, and they've never disappointed. Their strategic vision and hands-on approach have maximized the value of every property."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        
        <div className="testimonial-slider">
          <div className="testimonial-slide">
            <div className="testimonial-image">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <div className="testimonial-author">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`} 
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
