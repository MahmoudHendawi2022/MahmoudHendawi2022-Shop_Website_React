import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="containers">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form className="subscribe">
          <input type="email" placeholder="Your email id" />
          <button className="subscribe">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
