import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ title, description }) {
  const navigate = useNavigate();

  const handleJoin = () => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/projects/${encodedTitle}`);
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="join-btn" onClick={handleJoin}>
        Join Project
      </button>
    </div>
  );
}

export default ProjectCard;
