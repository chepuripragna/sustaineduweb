import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    { title: "Create a Compost Bin", description: "Learn to make your own compost bin at home." },
    { title: "Plastic-Free Week Challenge", description: "Avoid plastic usage for one week and track results." },
    { title: "Community Garden Project", description: "Join a local garden initiative and grow plants sustainably." },
  ];

  const handleJoin = (title) => {
    navigate(`/projects/${encodeURIComponent(title)}`);
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              onJoin={() => handleJoin(project.title)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;
