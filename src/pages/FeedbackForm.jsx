import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FeedbackForm.css";

const courses = ["Renewable Energy", "Solar Energy Basics", "Waste Reduction Techniques", "Eco-Friendly Lifestyle", "Water Conservation Techniques", "Climate Change Awareness",
  "Sustainable Transportation", "Recycling Fundamentals"
];
const optionsCheckbox = ["Lectures", "Resources", "Interactive videos", "Projects", "Others"];

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    instructor: "",
    recommend: "",
    rating: 0,
    workedWell: [],
    comments: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    if (field === "workedWell") {
      let newArr = [...form.workedWell];
      if (form.workedWell.includes(value)) {
        newArr = newArr.filter(v => v !== value);
      } else {
        newArr.push(value);
      }
      setForm({ ...form, workedWell: newArr });
    } else if (field === "consent") {
      setForm({ ...form, consent: !form.consent });
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleStarClick = (star) => {
    setForm({ ...form, rating: star });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.course) newErrors.course = "Select a course";
    if (!form.instructor) newErrors.instructor = "Instructor required";
    if (!form.recommend) newErrors.recommend = "Select an option";
    if (form.rating < 1) newErrors.rating = "Select a rating";
    if (!form.comments || form.comments.length < 50) newErrors.comments = "Minimum 50 characters";
    if (!form.consent) newErrors.consent = "Consent required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const submissions = JSON.parse(localStorage.getItem("feedback_submissions")) || [];
      submissions.push(form);
      localStorage.setItem("feedback_submissions", JSON.stringify(submissions));
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        course: "",
        instructor: "",
        recommend: "",
        rating: 0,
        workedWell: [],
        comments: "",
        consent: false,
      });
      setErrors({});
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="projects-title">Feedback</h2>

        <div className="feedback-list">
          <div className="feedback-card">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Student Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <select value={form.course} onChange={(e) => handleChange("course", e.target.value)}>
                <option value="">Select Course</option>
                {courses.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.course && <p className="error">{errors.course}</p>}

              <input
                type="text"
                placeholder="Instructor"
                value={form.instructor}
                onChange={(e) => handleChange("instructor", e.target.value)}
              />
              {errors.instructor && <p className="error">{errors.instructor}</p>}

              <p>Would you recommend this course?</p>
              <div className="radio-group">
                <label>
                  <input type="radio" value="Yes" checked={form.recommend === "Yes"} onChange={(e) => handleChange("recommend", e.target.value)} />
                  Yes
                </label>
                <label>
                  <input type="radio" value="No" checked={form.recommend === "No"} onChange={(e) => handleChange("recommend", e.target.value)} />
                  No
                </label>
              </div>
              {errors.recommend && <p className="error">{errors.recommend}</p>}

              <p>Overall Rating</p>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={form.rating >= star ? "star selected" : "star"}
                    onClick={() => handleStarClick(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              {errors.rating && <p className="error">{errors.rating}</p>}

              <p>What worked well?</p>
              <div className="checkbox-group">
                {optionsCheckbox.map(opt => (
                  <label key={opt}>
                    <input type="checkbox" checked={form.workedWell.includes(opt)} onChange={() => handleChange("workedWell", opt)} />
                    {opt}
                  </label>
                ))}
              </div>

              <textarea
                placeholder="Comments"
                value={form.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
              />
              {errors.comments && <p className="error">{errors.comments}</p>}

              <label className="consent">
                <input type="checkbox" checked={form.consent} onChange={() => handleChange("consent")} />
                I agree to share this feedback with the instructor
              </label>
              {errors.consent && <p className="error">{errors.consent}</p>}

              <button type="submit" className="btn-submit">Submit</button>
              {submitted && <p className="success">Feedback submitted successfully!</p>}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FeedbackForm;
