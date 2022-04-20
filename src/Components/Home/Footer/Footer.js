import React from 'react';
import "./Footer.css"
const Footer = () => {
   const today = new Date ();
    const year = today.getFullYear();
    return (
      <div className="footer">
        <p>
          All rights reserved by The Dentist Care &nbsp;&copy; {year}
        </p>
      </div>
    );
};

export default Footer;