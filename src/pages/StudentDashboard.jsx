import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsCard from "../components/StatsCard";
import "./StudentDashboard.css";

function StudentDashboard() {
  const stats = [
    { title: "Lessons Completed", value: 5 },
    { title: "Projects Started", value: 2 },
    { title: "Eco Goals Progress", value: "40%" },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="dashboard-title">Welcome, Student!</h2>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <StatsCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentDashboard;
