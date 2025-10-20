import React from "react";
import "./Testimonials.css";
import student1 from "../assets/student1.png";
import student2 from "../assets/student2.png";
import student3 from "../assets/student3.png";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <img src={student1} alt="Student 1" />
          <p>"EcoLearn helped me understand how to reduce waste at home!"</p>
          <h4>- Student 1</h4>
        </div>
        <div className="testimonial-card">
          <img src={student2} alt="Student 2" />
          <p>"The projects are fun and make sustainable living easy!"</p>
          <h4>- Student 2</h4>
        </div>
        <div className="testimonial-card">
          <img src={student3} alt="Student 3" />
          <p>"I love tracking my eco-goals and seeing my impact grow."</p>
          <h4>- Student 3</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
