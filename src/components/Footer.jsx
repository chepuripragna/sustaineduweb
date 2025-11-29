import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            EcoLearn is dedicated to educating students about sustainable living
            and eco-friendly practices.
          </p>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/lessons">Lessons</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/resources">Guides & Tools</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@ecolearn.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Instagram | Twitter | LinkedIn</p>
        </div>
      </div>

      <div className="feedback-button-container">
        <button className="feedback-button" onClick={() => navigate("/feedback")}>
          Give Feedback
        </button>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 EcoLearn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
