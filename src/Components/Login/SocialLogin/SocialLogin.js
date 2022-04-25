import React from "react";
import "./SocialLogin.css";
import GoogleLogo from "../../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

   if (error) {
     
     errorElement=  <div>
         <p style={{color:"red"}}>Error: {error.message}</p>
       </div>
     
  }
  
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="social-login">
        <div className="social-horizontal-line"></div>
        <p className="mt-2 px-2">or</p>
        <div className="social-horizontal-line"></div>
      </div>
      {errorElement}
      <div>
        <button onClick={()=>signInWithGoogle()} className="social-login-btn">
          <img className="google-logo" src={GoogleLogo} alt="" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
