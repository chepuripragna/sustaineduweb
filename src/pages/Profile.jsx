import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Pragna Chepuri",
    email: "pragna@example.com",
    ecoGoals: 75, // percentage of eco-goals completed
    lessonsCompleted: 12,
    projectsCompleted: 5,
  });

  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="profile-container">
          <h2>My Profile</h2>

          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Lessons Completed:</strong> {user.lessonsCompleted}</p>
            <p><strong>Projects Completed:</strong> {user.projectsCompleted}</p>
            <p><strong>Eco Goals Progress:</strong> {user.ecoGoals}%</p>
          </div>

          <div className="edit-profile">
            <h3>Edit Profile</h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
