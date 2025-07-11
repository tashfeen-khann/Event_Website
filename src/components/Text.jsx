
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import note1 from'../assets/imgs/note1.jpeg';
import note2 from'../assets/imgs/note2.jpg';
import note3 from'../assets/imgs/note3.webp';

import '../css/TextSection.css';
const Text = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      {
        image: note1, // Replace with the actual path to your images
        text: `'We wanted to send you a huge thank you for quite literally making the wedding of our dreams possible! From the beginning, you had the perfect sense for the vision that we wanted, and the final product was beyond our wildest dreams."`,
        author: "ALYSSIA & JACK",
      },
      {
        image: note2,
        text: `"There are many planners, but not every planner can catch every single detail. You truly do not miss a thing and I knew I had nothing to worry about!"`,
        author: "GRACE & STEVE",
      },
      {
        image: note3,
        text: `"From day one you were professional, in control, kind, supportive, honest, transparent and just a generally lovely person to be working with. Our wedding was EXACTLY what we wanted and we couldn't be happier."`,
        author: "LIZ & MICHEAL",
      },
     
      // Add more slides as needed
    ];
  
    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
  return (
    <>
    <div className="content-container">
    <p className="heading">
      TK Events is known for planning and designing <span className="cursive">exceptional</span> events. We have created a planning experience that is as thorough as it is seamless, bringing a customized and tailored planning experience to those who value the <span className="cursive">fine art</span> of hosting, and desire to create an approachable, detail rich, <span className="cursive">timeless</span> wedding celebration.
    </p>
    <p className="description">
      We provide an unparalleled level of <span className="cursive">personalized service</span> and attention to detail, allowing us to fully understand the intricacies of what makes your relationship unique to you as a couple, and limit our bookings to ensure we are able to uphold our incredibly high standards of service. We are so excited you are here, and cannot wait to meet you and begin creating a celebration as special as your love story.
    </p>
    <div className="links">
      <span>
        VIEW OUR{' '}
        <Link to="/portfolio" className="cursive" >portfolio</Link>
      </span>
      <span>
        REVIEW OUR{' '}
        <Link to="/about" className="cursive">about</Link>
      </span>
      <span>
        REACH OUT TO{' '}
        <Link to="/contact" className="cursive">inquire</Link>
      </span>
    </div>
  </div><div className="slider-container">
  <div className="slider-header">
    <div className="slider-heading-container">
      <h2 className="slider-heading">LOVE NOTES</h2>
      <h3 className="slider-subheading">from our lovely clients</h3>
    </div>
  </div>

  <div className="slider-content">
    <div className="slider-image-container">
    <button onClick={handlePrev} className="slider-arrow slider-arrow-left">←</button>

      <img src={slides[currentSlide].image} alt="Client testimonial" className="slider-image" />
    </div>
    <div className="slider-text">
      <p className="slider-description">{slides[currentSlide].text}</p>
      <p className="slider-author">{slides[currentSlide].author}</p>

    </div>
    <button onClick={handleNext} className="slider-arrow slider-arrow-right">→</button>

  </div>
</div>


 </>
);
};

export default Text
