import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ManageLessons.css";

function ManageLessons() {
  const lessons = [
    { title: "Renewable Energy", description: "Learn about solar, wind, and clean energy." },
    { title: "Waste Reduction", description: "Reduce, reuse, recycle effectively." },
    { title: "Eco-Friendly Lifestyle", description: "Adopt sustainable habits daily." },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="manage-title">Manage Lessons</h2>

        <div className="lessons-list">
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-item">
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <div className="lesson-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="add-lesson">
          <h3>Add New Lesson</h3>
          <form>
            <input type="text" placeholder="Lesson Title" />
            <textarea placeholder="Lesson Description"></textarea>
            <button type="submit">Add Lesson</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManageLessons;
