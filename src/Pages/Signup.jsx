import React from "react";
import "./Signup.css"

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p className="signup-subtitle">Join us and get started</p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-switch">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
