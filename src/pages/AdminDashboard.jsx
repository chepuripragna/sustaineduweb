import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsCard from "../components/StatsCard";
import "./AdminDashboard.css";

function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: 120 },
    { title: "Active Users", value: 85 },
    { title: "Lessons Completed", value: 350 },
    { title: "Ongoing Projects", value: 10 },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="admin-title">Admin Dashboard</h2>

        <div className="admin-stats">
          {stats.map((stat, index) => (
            <StatsCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>

        <div className="admin-sections">
          <div className="admin-section">
            <h3>Manage Lessons</h3>
            <p>Add, edit, or delete lessons here.</p>
          </div>
          <div className="admin-section">
            <h3>Manage Projects</h3>
            <p>Add new project ideas or approve user submissions.</p>
          </div>
          <div className="admin-section">
            <h3>Manage Resources</h3>
            <p>Upload PDFs, links, or infographics for students.</p>
          </div>
          <div className="admin-section">
            <h3>User Engagement</h3>
            <p>Track user activity and popular content.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminDashboard;
