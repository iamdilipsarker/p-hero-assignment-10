import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "./../../../../src/images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
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
            {user ? (
              <button onClick={handleLogOut} className="log-out-btn">
                Log Out
              </button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
