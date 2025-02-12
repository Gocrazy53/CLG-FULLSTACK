import React from "react";
import "./Login.css";
import Navbar from "./Navbar.jsx";

const Login = () => {
  return (
    <>
      <div className="login-section">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="login">
          <div className="login-container">
            <div className="login-card">
              <h2>Login or Create a New Account</h2>
              <form>
                <input type="email" placeholder="Email ID" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
