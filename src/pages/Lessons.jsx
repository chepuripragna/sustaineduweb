import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LessonCard from "../components/LessonCard";
import "./Lessons.css";

function Lessons() {
  const lessons = [
    { title: "Renewable Energy 101", description: "Learn basics of solar, wind, and hydro energy.", progress: 30 },
    { title: "Waste Reduction Techniques", description: "Practical ways to reduce waste in daily life.", progress: 50 },
    { title: "Eco-Friendly Lifestyle", description: "Small changes for a sustainable lifestyle.", progress: 10 },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="lessons-title">Lessons</h2>
        <div className="lessons-list">
          {lessons.map((lesson, index) => (
            <LessonCard
              key={index}
              title={lesson.title}
              description={lesson.description}
              progress={lesson.progress}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Lessons;
