import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ title }) {
  const navigate = useNavigate();

  const handleJoin = () => {
    // Set a flag that the project is joined
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      localStorage.setItem(`joined_${title}_${loggedInUser}`, true);

      // Optional: increment project count here or do it in ProjectDetails
    }

    // Navigate to project details page
    navigate(`/projects/${title}`);
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <button className="join-btn" onClick={handleJoin}>
        Join Project
      </button>
    </div>
  );
}

export default ProjectCard;
