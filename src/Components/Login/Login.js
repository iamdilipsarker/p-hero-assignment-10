import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
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
              id=""
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              id=""
              placeholder="Enter your Password"
            />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to The Dentist Care? <Link className="form-link" to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
