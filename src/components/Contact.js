import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-content">
          <div className="contact-item">
            <h3>Our Office</h3>
            <p>33 Elm Drive West</p>
            <p>Mississauga, Ontario</p>
          </div>
          
          <div className="contact-item">
            <h3>Get In Touch</h3>
            <p>
              <a href="tel:+16478196399" className="contact-link">
                +1-(647) 819-6399
              </a>
            </p>
            <p>
              <a href="mailto:harshdeep.singh@queensu.ca" className="contact-link">
                harshdeep.singh@queensu.ca
              </a>
            </p>
            <div className="social-links">
              <a 
                href="https://wa.me/16478196399" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Contact us on WhatsApp"
              >
                <svg viewBox="0 0 32 32" className="social-icon">
                  <path
                    fill="#25D366"
                    d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.472 1.12 6.696 3.032 9.316l-1.984 5.902 6.16-1.576A15.99 15.99 0 0 0 16.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.086 22.224c-.266.75-1.58 1.434-2.584 1.624-.684.126-1.58.226-4.594-.984-3.852-1.584-6.33-5.478-6.52-5.73-.184-.252-1.52-2.03-1.52-3.868 0-1.84.968-2.744 1.312-3.124.346-.374.75-.468.998-.468.24 0 .5.008.718.016.232.008.542-.088.85.644.306.734 1.048 2.57 1.14 2.754.092.184.154.4.03.638-.124.238-.186.382-.368.598-.184.216-.386.48-.55.642-.184.184-.376.384-.162.754.214.37.954 1.574 2.052 2.55 1.41 1.254 2.6 1.648 2.968 1.83.37.184.58.154.794-.094.214-.246.916-1.066 1.16-1.434.244-.368.5-.306.828-.184.33.122 2.092.986 2.45 1.168.36.182.598.274.684.426.092.152.092.872-.174 1.622z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;