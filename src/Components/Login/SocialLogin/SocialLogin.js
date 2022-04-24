import React from "react";
import "./SocialLogin.css";
import GoogleLogo from "../../../images/google.png";
const SocialLogin = () => {
  return (
    <div>
      <div className="social-login">
        <div className="social-horizontal-line"></div>
        <p className="mt-2 px-2">or</p>
        <div className="social-horizontal-line"></div>
      </div>
      <div>
        <button className="social-login-btn">
          <img className="google-logo" src={GoogleLogo} alt="" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
