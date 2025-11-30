import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LessonDetails.css";

function LessonDetails() {
  const { id } = useParams();
  const loggedInUser = localStorage.getItem("loggedInUser"); // current user
  const [progress, setProgress] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Define all lesson contents
  const lessonsContent = {
    "Renewable Energy 101": {
      text: `Renewable energy comes from natural sources that are constantly replenished...`,
      videoId: "1kUE0BZtTRc",
      quiz: [
        { question: "Which is a renewable energy source?", options: ["Coal", "Solar", "Natural Gas", "Petrol"], answer: "Solar" },
        { question: "Why is renewable energy important?", options: ["Reduces pollution", "Increases fossil fuel use", "Consumes more energy", "Creates waste"], answer: "Reduces pollution" },
      ],
    },
    "Solar Energy Basics": {
      text: `Solar energy is power from sunlight. Solar panels convert sunlight into electricity.`,
      videoId: "1kUE0BZtTRc",
      quiz: [
        { question: "What type of electricity do solar panels produce?", options: ["AC", "DC", "Both", "None"], answer: "DC" },
        { question: "What converts DC to AC in solar systems?", options: ["Battery", "Inverter", "Generator", "Transformer"], answer: "Inverter" },
      ],
    },
    // Add remaining lessons here...
  };

  const lessonsOrder = Object.keys(lessonsContent);
  const lesson = lessonsContent[id] || { text: "Lesson content not found.", videoId: "", quiz: [] };
  const currentIndex = lessonsOrder.indexOf(id);
  const prevLesson = lessonsOrder[currentIndex - 1];
  const nextLesson = lessonsOrder[currentIndex + 1];

  // Load user-specific progress
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${id}_${loggedInUser}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    } else {
      setProgress(50);
      localStorage.setItem(`progress_${id}_${loggedInUser}`, 50);
    }
  }, [id, loggedInUser]);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let correctCount = 0;

    lesson.quiz.forEach((q, index) => {
      const userAnswer = form[`q${index}`].value;
      if (userAnswer === q.answer) correctCount++;
    });

    if (correctCount === lesson.quiz.length) {
      setProgress(100);
      setQuizCompleted(true);

      // Save per user
      localStorage.setItem(`progress_${id}_${loggedInUser}`, 100);

      // Update total lessonsCompleted in Profile
      const lessonsCompleted = Object.keys(lessonsContent)
        .filter(lessonTitle => parseInt(localStorage.getItem(`progress_${lessonTitle}_${loggedInUser}`)) === 100)
        .length;
      localStorage.setItem(`lessonsCompleted_${loggedInUser}`, lessonsCompleted);

      alert("Quiz completed! Progress is now 100%");
    } else {
      alert(`You got ${correctCount}/${lesson.quiz.length} correct. Try again!`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="lesson-details-container">
        <h2 className="lesson-details-title">{id}</h2>
        <p className="lesson-details-text">{lesson.text}</p>

        {lesson.videoId && (
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={id}
              allowFullScreen
            ></iframe>
          </div>
        )}

        <p style={{ marginTop: "15px", fontWeight: "bold" }}>Progress: {progress}%</p>

        {lesson.quiz.length > 0 && !quizCompleted && (
          <form onSubmit={handleQuizSubmit} style={{ marginTop: "20px" }}>
            <h3>Quiz:</h3>
            {lesson.quiz.map((q, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <p>{q.question}</p>
                <div style={{ display: "flex", gap: "15px" }}>
                  {q.options.map((option, i) => (
                    <label key={i}>
                      <input type="radio" name={`q${index}`} value={option} required /> {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit">Submit Quiz</button>
          </form>
        )}

        <div className="navigation-buttons" style={{ marginTop: "20px" }}>
          {prevLesson && (
            <Link to={`/lessons/${prevLesson}`}>
              <button>Previous Lesson</button>
            </Link>
          )}
          {nextLesson && (
            <Link to={`/lessons/${nextLesson}`}>
              <button>Next Lesson</button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LessonDetails;
