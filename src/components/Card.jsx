import React from 'react';
import '../css/card.css';
const Card = ({ imageSrc, overlayText }) => {
  return (
    <div className="container">
   
        <div className="col-md-4">
    <div className="card-component ">
      <div className="card">
        <img src={imageSrc} className="card-img" alt="Card" />
        <div className="card-overlay">
          <p className="overlay-text">{overlayText}</p>
        </div>
        
      </div></div>
    </div></div>
  );
};

export default Card;
