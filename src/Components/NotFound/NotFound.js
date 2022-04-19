import React from 'react';
import "./NotFound.css"
import NotFoundImage from "../../../src/images/not-found-404.jpg"
const NotFound = () => {
    return (
      <div className="not-found-msg">
        <h3>404! Sorry, this page not found.</h3>
        <img src={NotFoundImage} height={500} width={500} />
      </div>
    );
};

export default NotFound;