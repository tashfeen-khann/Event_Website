import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div>
     
      <footer className="footer-container">
  <div className="footer-top">
    <p className="footer-visit">VISIT US ON</p>
     <a href="https://www.instagram.com/"><p className="footer-instagram ">Instagram</p></a>
  </div>
  <div className="footer-icons">
      <a href="#" className="footer-icon ">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="footer-icon">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="footer-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="#" className="footer-icon">
        <FontAwesomeIcon icon={faPhoneAlt} />
      </a>
    </div>
  <div className="footer-info">
    <p className="footer-description">TK Events is a luxury full-service wedding planning boutique based in Chicago, available worldwide.</p>
    <p className="footer-belief">We believe love is love and celebrate and welcome everyone to our table regardless of race, gender identity, sexual orientation, religion, or ability.</p>
    <p className="footer-copyright">COPYRIGHT 2024  TK EVENTS</p>
  </div>
</footer>


    </div>
  )
}

export default Footer
