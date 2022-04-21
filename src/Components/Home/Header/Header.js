import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/checkout"
            >
              Checkout
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
  