import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    
    const handleNameBlur = (event) => {
      setName(event.target.value);
    };


  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhoneNumber(event.target.value);
  };
    
    const handleCreateUser = (event) => {
      event.preventDefault();
      
      
      toast("Thanks for your Appointment.");
    };

  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Your Appointment Information</h4>
        <form onSubmit={handleCreateUser}>
          <div className="form-input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email} readOnly
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              required
              type="text"
              name="address"
              id="address"
              placeholder="Enter your Address"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              required
              type="number"
              name="phone-number"
              id="phone-number"
              placeholder="Enter your Phone Number"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Confirm Appointment" />
        </form>
       
        <ToastContainer />
      </div>
    </div>
  );
};

export default Checkout;
