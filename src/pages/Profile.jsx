import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    ecoGoals: 0,
    lessonsCompleted: 0,
    projectsCompleted: 0,
  });

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser");

    if (!email) {
      window.location.href = "/register";
      return;
    }

    // Load all user data from localStorage
    const name = localStorage.getItem(`userName_${email}`) || "";
    const lessons = parseInt(localStorage.getItem(`lessonsCompleted_${email}`)) || 0;
    const projects = parseInt(localStorage.getItem(`projectsCompleted_${email}`)) || 0;
    const ecoGoals = parseInt(localStorage.getItem(`ecoGoals_${email}`)) || 0;

    setUser({
      name,
      email,
      lessonsCompleted: lessons,
      projectsCompleted: projects,
      ecoGoals,
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const email = user.email;

    // Save updated data
    localStorage.setItem(`userName_${email}`, user.name);
    localStorage.setItem(`lessonsCompleted_${email}`, user.lessonsCompleted);
    localStorage.setItem(`projectsCompleted_${email}`, user.projectsCompleted);
    localStorage.setItem(`ecoGoals_${email}`, user.ecoGoals);

    alert("Profile updated!");

    // REFRESH UI instantly
    setUser({ ...user });
  };

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
            <p><strong>Eco Goals Saved:</strong> {user.ecoGoals}</p>
          </div>

          <div className="edit-profile">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSave}>
              <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />

              <input type="email" value={user.email} readOnly />

              <input
                type="number"
                placeholder="Lessons Completed"
                value={user.lessonsCompleted}
                onChange={(e) =>
                  setUser({ ...user, lessonsCompleted: parseInt(e.target.value) })
                }
              />

              <input
                type="number"
                placeholder="Projects Completed"
                value={user.projectsCompleted}
                onChange={(e) =>
                  setUser({ ...user, projectsCompleted: parseInt(e.target.value) })
                }
              />

              <input
                type="number"
                placeholder="Eco Goals"
                value={user.ecoGoals}
                onChange={(e) =>
                  setUser({ ...user, ecoGoals: parseInt(e.target.value) })
                }
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
