import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Please Login</h3>
        <form>
          <div className="form-input-group">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to The Dentist Care? <Link className="form-link" to="/register">Create an account</Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
