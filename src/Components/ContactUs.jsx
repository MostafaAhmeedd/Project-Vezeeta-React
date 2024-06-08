import React from 'react';
import '../Styles/StyleContactUs.css';
import logo1 from '../assets/images/con1.jpeg'; 
import logo2 from '../assets/images/con2.jpeg'; 

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="card contact-card">
        <div className="card-header text-center" style={{ backgroundColor: 'rgb(0, 112, 205)', color: 'white' }}>
          <a 
            href="https://www.vezeeta.com/en/Generic/ContactUs" 
            style={{ fontSize: '1.5em', textDecoration: 'none', color: 'white' }}
          > 
            Contact Us
          </a>
        </div>
        <div className="card-body">
          <div className="image-container">
            <img src={logo1} alt="Abstract Doctor" className="doctor-img" />
            <img src={logo2} alt="Abstract Doctor" className="doctor-img" />
          </div>
          <div className="contact-details">
            <div className="detail-box">
              <h3>Name</h3>
            </div>
            <div className="detail-box">
              <h3>From outside Egypt call:</h3>
              <p>+2 02 259 83 999</p>
            </div>
            <div className="detail-box">
              <h3>Address</h3>
              <p>124 Othman Ibn Affan St. behind Military college - Heliopolis</p>
            </div>
            <div className="detail-box">
              <h3>Mail Us</h3>
              <p>customercare@gmail.com</p>
            </div>
            <div className="detail-box">
              <h3>Call Us</h3>
              <p>16676 (Cost of regular call)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
