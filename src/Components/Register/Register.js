import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className="form-container">
        <div>
          <h3 className="form-title">Please Register</h3>
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
            <div className="form-input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                required
                type="password"
                name="confirm-password"
                id=""
                placeholder="Enter your Password"
              />
            </div>
            <input className="form-submit" type="submit" value="Register" />
          </form>
          <p>
            Already Have an Account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;