/*import React from "react";
import { Link } from "react-router-dom";
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

      <Link to={`/lessons/${title}`}>
        <button className="start-btn">Start / Continue</button>
      </Link>
    </div>
  );
}

export default LessonCard;*/
import React from "react";
import { Link } from "react-router-dom";
import "./LessonCard.css";

function LessonCard({ title, description, progress }) {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress}% completed</p>

      <Link to={`/lessons/${title}`}>
        <button className="start-button">Start / Continue</button>
      </Link>
    </div>
  );
}

export default LessonCard;

