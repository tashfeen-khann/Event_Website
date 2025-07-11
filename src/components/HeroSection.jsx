import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp({ fade: 'fade-out' });
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFadeProp({ fade: 'fade-in' });
      }, 1000); // Matching the duration of the fade-out animation
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className={`hero-section d-flex align-items-center justify-content-center ${fadeProp.fade}`}
      style={{
        height: '85vh',
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
    </div>
  );
};

export default HeroSection;
