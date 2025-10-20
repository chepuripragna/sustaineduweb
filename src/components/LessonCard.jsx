import React from "react";
import "./LessonCard.css";

function LessonCard({ title, description, progress }) {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="progress-bar">
        <div
          className="progress-filled"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="start-btn">Start / Continue</button>
    </div>
  );
}

export default LessonCard;
