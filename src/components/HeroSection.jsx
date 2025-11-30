import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/eco-hero.png";

function HeroSection({ onLogin, onSignup, isLoggedIn, userName, onLogout }) {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Learn. Act. Live Sustainably.</h1>
        <p>
          Join EcoLearn to explore sustainable living practices, interactive lessons,
          and eco-friendly projects.
        </p>

        {!isLoggedIn ? (
          <div className="hero-buttons">
            <button onClick={onSignup} className="btn-primary">
              Sign Up
            </button>
            <button onClick={onLogin} className="btn-secondary">
              Log In
            </button>
          </div>
        ) : (
          <div className="hero-loggedin">
            <span style={{ marginRight: "15px", fontWeight: "bold" }}>
              Welcome, {userName}!
            </span>
           
          </div>
        )}
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Eco Living" />
      </div>
    </section>
  );
}

export default HeroSection;
