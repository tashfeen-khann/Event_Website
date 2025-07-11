import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is included

const Final = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '25px' }} className="text-center">
                Thank you for your message!
            </h1>
            <p className="text-center mt-3" style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                We are so excited to speak with you, and will respond back shortly!  </p>
            <p className="text-center mt-1" style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                In the meantime, be sure to check out what we're up to on Instagram!  </p>


        </div>
    )
}

export default Final
