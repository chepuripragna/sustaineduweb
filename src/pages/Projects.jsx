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
    { title: "Rainwater Harvesting Setup", description: "Learn how to collect and store rainwater for household use." },
    { title: "Zero-Waste Kitchen Challenge", description: "Reduce kitchen waste by adopting reusable containers, composting, and smart shopping." },
    { title: "Tree Plantation Drive", description: "Join a local initiative to plant trees in your community or school." },
    { title: "Upcycling Workshop", description: "Turn old items like jars, bottles, or clothes into useful products." },
    { title: "Neighborhood Cleanup", description: "Participate in cleaning local parks, streets, or riverbanks." },
    { title: "Eco-Friendly School Campaign", description: "Create awareness campaigns in your school for reducing plastic and conserving energy." },
    { title: "Community Composting Program", description: "Set up a composting system for your apartment or neighborhood." },
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

