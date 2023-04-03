import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";
import "../styles/Footer.css"; 
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div  style={{marginBottom:'3rem',marginTop:'8rem'}}>
    <div className="footer "  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
      <Link className="navbar-brand fw-bolder fs-1" to="/">Parking.com</Link>
      <div className="contact-info d-flex flex-column justify-content-center align-items-center mb-3">
        <span className="mb-4">
        <h3>Contact Info</h3>
        </span>
        <p><FaEnvelope className="icon" /> <a href="mailto:example@example.com">example@example.com</a></p>
        <p><FaPhone className="icon" /> <a href="tel:555-555-5555">555-555-5555</a></p>
        <p><FaMapMarker className="icon" /> <a href="https://www.google.com/maps/search/?api=1&query=123+Main+St,+Anytown,+USA" target="_blank" rel="noopener noreferrer">123 Main St, Anytown, USA</a></p>
      </div>
      <div className="social-media d-flex justify-content-end mb-4" style={{gap:"2rem"}}>
        <a href="https://www.facebook.com" className="social-icon text-dark"><FaFacebook /></a>
        <a href="https://www.twitter.com" className="social-icon text-dark"><FaTwitter /></a>
        <a href="https://www.linkedin.com" className="social-icon text-dark"><FaLinkedin /></a>
      </div>
    </div>
    </div>
  );
};

export default Footer;
