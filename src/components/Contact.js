// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
// Remove the Material UI import since we'll use a simpler approach

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentType: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        investmentType: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Our Office</h4>
                <p>2902 , 33 Elm Drive West<br />Mississauga , Ontario</p>
              </div>
            </div>
            
           

<div className="info-item">
  <div className="info-icon">📱</div>
  <div className="info-content">
    <h4>Contact Details</h4>
    <p>Phone: +1-(647) 819-6399<br />Email: info@grainrealty.com</p>
    <a 
      href="https://wa.me/16478196399" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon-only"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-svg">
        <path 
          fill="#25D366" 
          d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.472 1.12 6.696 3.032 9.316l-1.984 5.902 6.16-1.576A15.99 15.99 0 0 0 16.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.086 22.224c-.266.75-1.58 1.434-2.584 1.624-.684.126-1.58.226-4.594-.984-3.852-1.584-6.33-5.478-6.52-5.73-.184-.252-1.52-2.03-1.52-3.868 0-1.84.968-2.744 1.312-3.124.346-.374.75-.468.998-.468.24 0 .5.008.718.016.232.008.542-.088.85.644.306.734 1.048 2.57 1.14 2.754.092.184.154.4.03.638-.124.238-.186.382-.368.598-.184.216-.386.48-.55.642-.184.184-.376.384-.162.754.214.37.954 1.574 2.052 2.55 1.41 1.254 2.6 1.648 2.968 1.83.37.184.58.154.794-.094.214-.246.916-1.066 1.16-1.434.244-.368.5-.306.828-.184.33.122 2.092.986 2.45 1.168.36.182.598.274.684.426.092.152.092.872-.174 1.622z"
        />
      </svg>
    </a>
  </div>
</div>
            
            <div className="info-item">
              <div className="info-icon">🕙</div>
              <div className="info-content">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Weekends: By appointment</p>
              </div>
            </div>
            
            {/* <div className="info-item">
              <div className="info-icon">🌐</div>
              <div className="info-content">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="#" className="social-icon">Facebook</a>
                  <a href="#" className="social-icon">LinkedIn</a>
                  <a href="#" className="social-icon">Instagram</a>
                </div>
              </div>
            </div> */}
          </div>
          
          <div className="contact-form">
            {formSubmitted ? (
              <div className="form-success">
                <h3>Thank you for contacting us!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="investmentType">Investment Interest</label>
                  <select 
                    id="investmentType" 
                    name="investmentType" 
                    value={formData.investmentType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Investment Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="multiple">Multiple Types</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;