import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div class="contact container">
      <h3>Get in Touch</h3>

      <form>
        <p>
          <input type="text" placeholder="Your Name" name="Name" />
        </p>
        <p>
          <input type="email" placeholder="Your E-mail" name="email" />
        </p>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your message here"
        ></textarea>
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Contact;
