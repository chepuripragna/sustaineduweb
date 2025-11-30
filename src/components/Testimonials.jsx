import React from "react";
import "./Testimonials.css";
import student1 from "../assets/student1.png";
import student2 from "../assets/student1.png";
import student3 from "../assets/student1.png";

function Testimonials() {
  const testimonials = [
    {
      img: student1,
      text: "EcoLearn helped me understand how to reduce waste at home!",
      name: "Student 1",
    },
    {
      img: student2,
      text: "The projects are fun and make sustainable living easy!",
      name: "Student 2",
    },
    {
      img: student3,
      text: "I love tracking my eco-goals and seeing my impact grow.",
      name: "Student 3",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.img} alt={t.name} />
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
