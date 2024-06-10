import React from 'react';
import '../Styles/ForDoctor.css'; 
import docImage from '../assets/images/doctor.jpg'; 
const ForDoctor = () => {
  return (
    <div className="for-doctor-container">
      <div className="alert-box">
        <img src={docImage} alt="Abstract Doctor" className="doctor-img" />
      </div>
    </div>
  );
};

export default ForDoctor;
