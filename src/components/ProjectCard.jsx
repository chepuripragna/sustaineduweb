import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, onJoin }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="join-btn" onClick={onJoin}>
        Join Project
      </button>
    </div>
  );
}

export default ProjectCard;
