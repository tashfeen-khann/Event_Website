import React from 'react';

import '../css/notes.css';

const Notes = ({ image, text, name }) => {
    return (
        <>
          
        <div className="testimonial-item">
            <div className="testimonial-image-wrapper">
                <img src={image} alt={name} className="testimonial-image" />
            </div>
            <div className="testimonial-text">
                <p>{text}</p>
                <p className="testimonial-name">- {name}</p>
            </div>
        </div>
        </>
    );
};

export default Notes;
