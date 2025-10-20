import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ManageProjects.css";

function ManageProjects() {
  const projects = [
    { title: "Compost Bin Setup", description: "Learn to create a home compost bin." },
    { title: "Plastic-Free Week", description: "Challenge students to avoid single-use plastic." },
    { title: "Community Clean-Up", description: "Organize a local clean-up drive." },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="manage-title">Manage Projects</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="add-project">
          <h3>Add New Project</h3>
          <form>
            <input type="text" placeholder="Project Title" />
            <textarea placeholder="Project Description"></textarea>
            <button type="submit">Add Project</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManageProjects;
