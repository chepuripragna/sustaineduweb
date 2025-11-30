import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import "./Profile.css";

function Projects() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [projects, setProjects] = useState([]);

  const initialProjects = [
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

  useEffect(() => {
    if (!loggedInUser) {
      window.location.href = "/register";
      return;
    }

    const projectsWithStatus = initialProjects.map((p) => {
      const joined = localStorage.getItem(`joined_${p.title}_${loggedInUser}`) === "true";
      return { ...p, joined };
    });

    setProjects(projectsWithStatus);
  }, [loggedInUser]);

  const handleJoin = (title) => {
    const updatedProjects = projects.map((p) =>
      p.title === title ? { ...p, joined: true } : p
    );
    setProjects(updatedProjects);

    localStorage.setItem(`joined_${title}_${loggedInUser}`, "true");

    const completedCount = updatedProjects.filter(p => p.joined).length;
    localStorage.setItem(`projectsCompleted_${loggedInUser}`, completedCount);

    alert(`You joined "${title}"!`);
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h2 className="lessons-title">Projects</h2>
        <div className="lessons-list">
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
