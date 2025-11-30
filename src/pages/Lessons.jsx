import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LessonCard from "../components/LessonCard";
import "./Lessons.css";

function Lessons() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [lessons, setLessons] = useState([]);

  const initialLessons = [
    { title: "Renewable Energy 101", description: "Learn basics of solar, wind, and hydro energy." },
    { title: "Solar Energy Basics", description: "Understand how solar panels work and their benefits." },
    { title: "Waste Reduction Techniques", description: "Practical ways to reduce waste in daily life." },
    { title: "Eco-Friendly Lifestyle", description: "Small changes for a sustainable lifestyle." },
    { title: "Water Conservation Techniques", description: "Learn practical ways to save water in daily life." },
    { title: "Climate Change Awareness", description: "Understand global warming, its causes, and solutions." },
    { title: "Sustainable Transportation", description: "Learn how eco-friendly transport reduces carbon footprint." },
    { title: "Recycling Fundamentals", description: "Know what can be recycled and how the process works." }
  ];

  useEffect(() => {
    if (!loggedInUser) {
      window.location.href = "/register"; // redirect if not logged in
      return;
    }

    const lessonsWithProgress = initialLessons.map((lesson) => {
      const savedProgress = localStorage.getItem(`progress_${lesson.title}_${loggedInUser}`);
      return { ...lesson, progress: savedProgress ? parseInt(savedProgress) : 0 };
    });

    setLessons(lessonsWithProgress);
  }, [loggedInUser]);

  const updateLessonProgress = (title, newProgress) => {
    const updatedLessons = lessons.map((lesson) => 
      lesson.title === title ? { ...lesson, progress: newProgress } : lesson
    );
    setLessons(updatedLessons);

    // save per user
    localStorage.setItem(`progress_${title}_${loggedInUser}`, newProgress);

    // update total lessonsCompleted for Profile
    const completedCount = updatedLessons.filter(l => l.progress === 100).length;
    localStorage.setItem(`lessonsCompleted_${loggedInUser}`, completedCount);
  };

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
              onProgressUpdate={(newProgress) => updateLessonProgress(lesson.title, newProgress)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Lessons;
