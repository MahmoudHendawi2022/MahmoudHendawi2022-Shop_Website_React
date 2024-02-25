import React from "react";
import "./SignUp.css";
import SignInputs from "../SignInputs/SignInputs";
import { useState } from "react";

const SignUp = () => {
  const [sign, setSign] = useState(true);
  return (
    <div className="signUp">
      <div className="containers">
        <form>{sign?<h2>Sign Up</h2>:<h2>Login</h2>}
          
          {sign && (
            <SignInputs
              type="username"
              placeholder="Enter Username"
              id="username"
            />
          )}
          <SignInputs type="email" placeholder="Email Address" id="email" />
          <SignInputs type="password" placeholder="password" id="password" />
          <button>Continue</button>
          <p>
            {sign ? "Already have an account?" : "Create an acount"}
            <span onClick={() => setSign(!sign)}> Click here</span>
          </p>
          <div className="login-signUp-agree">
            <input type="checkbox" id="checkbox" />
            <p>By Continuing , agree to the terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
