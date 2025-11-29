import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

function Registration() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");

  const [isLogin, setIsLogin] = useState(true);
  const [showReset, setShowReset] = useState(false); // track reset form

  useEffect(() => {
    setIsLogin(mode !== "signup" ? true : false);
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="registration-container">
        <div className="form-card">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input type="text" placeholder="Full Name" required />
            )}

            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="btn-submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* 🔹 Forgot Password link (only in Login mode) */}
          {isLogin && !showReset && (
            <p className="forgot-text">
              Forgot Password?{" "}
              <span 
                className="forgot-link" 
                onClick={() => setShowReset(true)}
                style={{cursor: "pointer", textDecoration: "underline", color: "#ff6347"}}
              >
                Reset here
              </span>
            </p>
          )}

          {/* 🔹 Reset password form (toggle) */}
          {isLogin && showReset && (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Password reset link sent!"); // simulate reset
                setShowReset(false);
              }}
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn-submit">Send Reset Link</button>
              <p 
                style={{cursor: "pointer", color: "#555", marginTop: "10px"}}
                onClick={() => setShowReset(false)}
              >
                Cancel
              </p>
            </form>
          )}

          <p className="toggle-text">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login</span>
              </>
            )}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Registration;
