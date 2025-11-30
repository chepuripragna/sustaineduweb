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
  const [showReset, setShowReset] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsLogin(mode !== "signup" ? true : false);
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      const storedPassword = localStorage.getItem("user_" + email);
      if (!storedPassword) {
        setMessage("User not found. Please Sign Up.");
      } else if (storedPassword === password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("loggedInUser", email); // store logged-in email
        setMessage("Login successful!");
        navigate("/"); // navigate to homepage
      } else {
        setMessage("Incorrect password!");
      }
    } else {
      // Sign Up logic
      if (localStorage.getItem("user_" + email)) {
        setMessage("User already exists. Please Login.");
      } else {
        // Store credentials
        localStorage.setItem("user_" + email, password);
        localStorage.setItem("userName_" + email, fullName);

        // Initialize profile stats
        localStorage.setItem("lessonsCompleted_" + email, 0);
        localStorage.setItem("projectsCompleted_" + email, 0);
        localStorage.setItem("ecoGoals_" + email, 0);

        setMessage("Sign Up successful! You can now login.");
        setIsLogin(true);
      }
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn-submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}

          {isLogin && !showReset && (
            <p className="forgot-text">
              Forgot Password?{" "}
              <span
                className="forgot-link"
                onClick={() => setShowReset(true)}
                style={{ cursor: "pointer", textDecoration: "underline", color: "#ff6347" }}
              >
                Reset here
              </span>
            </p>
          )}

          {isLogin && showReset && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Password reset link sent!");
                setShowReset(false);
              }}
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn-submit">Send Reset Link</button>
              <p
                style={{ cursor: "pointer", color: "#555", marginTop: "10px" }}
                onClick={() => setShowReset(false)}
              >
                Cancel
              </p>
            </form>
          )}

          <p className="toggle-text">
            {isLogin ? (
              <>
                Don’t have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
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
