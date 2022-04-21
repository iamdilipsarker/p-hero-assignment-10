import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   const today = new Date ();
    const year = today.getFullYear();
  return (
    <>
      <footer class="footer-section">
        <div class="footer-area">
          <h6>The Dentist Care</h6>
          <p class="footers-para">Copyright &copy; {year} The Dentist Care</p>
          <p class="footers-para">All rights reserved</p>
        </div>
        <div class="contact-link">
          <span>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </span>
        </div>
      </footer>
    </>

    // <div className="footer">
    //   <p>
    //     All rights reserved by The Dentist Care &nbsp;&copy; {year}
    //   </p>
    // </div>
  );
};

export default Footer;