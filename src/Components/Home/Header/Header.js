import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../../src/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="navbar">
          <div className="navbar-part-1">
            <img src={logo} alt="" />
            <h3 className="pt-2">The Dentist Care</h3>
          </div>
          <div className="navbar-part-2">
             <Link to="/home">Home</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
