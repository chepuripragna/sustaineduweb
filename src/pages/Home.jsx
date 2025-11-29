import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PreviewCards from "../components/PreviewCards";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";


  const handleNavigate = (mode) => {
    navigate(`/register?mode=${mode}`);
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <HeroSection
          onLogin={() => handleNavigate("login")}
          onSignup={() => handleNavigate("signup")}
          isLoggedIn={isLoggedIn}
        />
        
        <PreviewCards />
        <Testimonials />
      </div>

      <Footer />
    </>
  );
}

export default Home;
