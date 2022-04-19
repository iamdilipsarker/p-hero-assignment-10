import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css"

const Header = () => {
    return (
      <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
};

export default Header;
