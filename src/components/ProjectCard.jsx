import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="join-btn">Join Project</button>
    </div>
  );
}

export default ProjectCard;
