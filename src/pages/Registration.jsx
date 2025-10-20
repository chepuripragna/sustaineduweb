import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

function Registration() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (mode === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Login Successful! 🎉");
    } else {
      alert("Sign Up Successful! 🎉");
      setIsLogin(true); // optional: switch to login after signup
    }
  };

  return (
    <>
      <Navbar />

      <div className="registration-container">
        <div className="form-card">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn-submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

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
