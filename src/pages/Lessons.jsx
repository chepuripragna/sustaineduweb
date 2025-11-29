import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LessonCard from "../components/LessonCard";
import "./Lessons.css";

function Lessons() {
  const initialLessons = [
    { 
      title: "Renewable Energy 101", 
      description: "Learn basics of solar, wind, and hydro energy."
    },
    { 
      title: "Solar Energy Basics", 
      description: "Understand how solar panels work and their benefits."
    },
    { 
      title: "Waste Reduction Techniques", 
      description: "Practical ways to reduce waste in daily life."
    },
    { 
      title: "Eco-Friendly Lifestyle", 
      description: "Small changes for a sustainable lifestyle."
    },
    {
      title: "Water Conservation Techniques",
      description: "Learn practical ways to save water in daily life."
    },
  ];

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Load progress from localStorage
    const lessonsWithProgress = initialLessons.map((lesson) => {
      const savedProgress = localStorage.getItem(`progress_${lesson.title}`);
      return {
        ...lesson,
        progress: savedProgress ? parseInt(savedProgress) : 0,
      };
    });
    setLessons(lessonsWithProgress);
  }, []);

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
