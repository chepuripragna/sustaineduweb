import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PreviewCards from "../components/PreviewCards";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  useEffect(() => {
    if (isLoggedIn) {
      const email = localStorage.getItem("loggedInUser");
      if (email) {
        const name = localStorage.getItem("userName_" + email);
        setUserName(name);
      }
    }
  }, [isLoggedIn]);

  const handleNavigate = (mode) => {
    navigate(`/register?mode=${mode}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
    setUserName("");
    navigate("/register");
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <HeroSection
          onLogin={() => handleNavigate("login")}
          onSignup={() => handleNavigate("signup")}
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLogout={handleLogout}
        />

        {isLoggedIn && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Welcome, {userName}!
          </p>
        )}

        <PreviewCards />
        <Testimonials />
      </div>

      <Footer />
    </>
  );
}

export default Home;
