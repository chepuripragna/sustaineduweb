import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">EcoLearn</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lessons">Lessons</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <div className="navbar-buttons">
        <Link to="/register?mode=login" className="btn-login">Login</Link>
        <Link to="/register?mode=signup" className="btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
