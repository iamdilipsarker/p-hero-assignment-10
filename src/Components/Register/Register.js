import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const [CreateUserWithEmailAndPassword, user , loading, gotError] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  
  const handleEmailBlur = event => {
    setEmail(event.target.value);
    
  }

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/home")
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match")
      return;
      
    }
    
    if (password.length < 6) {
      setError("Your password must be 6 characters or longer");
      return;
    }
    CreateUserWithEmailAndPassword(email, password);
    toast("Account created successfully.")
    
  }


    return (
      <div className="form-container">
        <div>
          <h3 className="form-title">Please Register</h3>
          <form onSubmit={handleCreateUser}>
            <div className="form-input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
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
                onBlur={handlePasswordBlur}
                required
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
              />
            </div>
            <div className="form-input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                required
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Enter your Password"
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Register" />
          </form>
          <p>
            Already Have an Account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      </div>
    );
};

export default Register;