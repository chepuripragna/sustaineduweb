import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LessonDetails.css";

function LessonDetails() {
  const { id } = useParams();
  const [progress, setProgress] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Define all lesson contents
  const lessonsContent = {
    "Renewable Energy 101": {
      text: `
Renewable energy comes from natural sources that are constantly replenished. 
Unlike fossil fuels, renewable energy does not run out and is much cleaner for the planet.

🌱 **Why Renewable Energy Matters**
- Reduces pollution
- Helps fight climate change
- Sustainable for future generations
- Low operating cost

🌞 **Popular Types of Renewable Energy**
1. **Solar Energy** – Energy from the sun using solar panels.
2. **Wind Energy** – Electricity generated through wind turbines.
3. **Hydropower** – Power from flowing water.
4. **Biomass Energy** – Organic materials like plants & waste.
5. **Geothermal Energy** – Heat energy from beneath the Earth.

💡 **Where You See Renewable Energy Today**
- Rooftop solar panels on houses
- Wind farms in villages & mountains
- Hydropower dams
- Solar street lights
- Electric vehicles charged using green power
      `,
      videoId: "1kUE0BZtTRc",
      quiz: [
        {
          question: "Which is a renewable energy source?",
          options: ["Coal", "Solar", "Natural Gas", "Petrol"],
          answer: "Solar",
        },
        {
          question: "Why is renewable energy important?",
          options: [
            "Reduces pollution",
            "Increases fossil fuel use",
            "Consumes more energy",
            "Creates waste",
          ],
          answer: "Reduces pollution",
        },
      ],
    },
    "Solar Energy Basics": {
      text: `
Solar energy is the power we get from sunlight. Solar panels capture sunlight and convert it into electricity.

💡 **Why Solar Energy Is Important**
- Clean and eco-friendly
- Saves electricity bills
- Works in remote areas
- Low maintenance
- Supports sustainable living

🔧 **How Solar Panels Work**
1. Sunlight hits the solar panel
2. Panel produces DC electricity
3. Inverter converts DC → AC
4. AC powers homes, schools, industries

🌍 **Where Solar Energy Is Used Today**
- Rooftop solar systems
- Solar street lights
- Solar farms
- Water heaters
- Solar-powered gadgets
      `,
      videoId: "1kUE0BZtTRc",
      quiz: [
        {
          question: "What type of electricity do solar panels produce?",
          options: ["AC", "DC", "Both", "None"],
          answer: "DC",
        },
        {
          question: "What converts DC to AC in solar systems?",
          options: ["Battery", "Inverter", "Generator", "Transformer"],
          answer: "Inverter",
        },
      ],
    },
    "Waste Reduction Techniques": {
      text: `
Reducing waste helps protect the environment and conserves resources.

♻️ **Why Waste Reduction Matters**
- Less landfill waste
- Saves natural resources
- Reduces pollution
- Saves money

📝 **Practical Waste Reduction Tips**
1. Reuse containers and packaging
2. Compost kitchen scraps
3. Avoid single-use plastics
4. Repair instead of throwing away
5. Donate unused items

🌍 **Where You Can Apply These Tips**
- At home
- At school
- At work
- Community initiatives
      `,
      videoId: "40OKRIyOrYI",
      quiz: [
        {
          question: "Which of these is NOT a waste reduction method?",
          options: ["Composting", "Reusing", "Throwing everything away", "Repairing"],
          answer: "Throwing everything away",
        },
        {
          question: "Why is waste reduction important?",
          options: ["Saves money", "Increases waste", "Pollutes more", "None"],
          answer: "Saves money",
        },
      ],
    },
    "Eco-Friendly Lifestyle": {
      text: `
Living an eco-friendly lifestyle helps protect the planet and promotes sustainability.

🌱 **Why Eco-Friendly Living Matters**
- Reduces carbon footprint
- Conserves natural resources
- Promotes healthier living
- Encourages responsible consumption

💡 **Tips for an Eco-Friendly Lifestyle**
1. Use reusable bags, bottles, and containers
2. Reduce electricity and water usage
3. Choose sustainable transportation (bike, walk, public transport)
4. Buy eco-friendly products
5. Grow your own plants or garden

🌍 **Where You Can Practice Eco-Friendly Habits**
- At home
- At school or college
- Workplace
- Community programs
      `,
      videoId: "dQw4w9WgXcQ",
      quiz: [
        {
          question: "Which reduces carbon footprint?",
          options: ["Walk or bike", "Use car always", "Waste water", "Throw trash in river"],
          answer: "Walk or bike",
        },
      ],
    },
    "Water Conservation Techniques": {
      text: `
Water is a precious resource, and conserving it helps protect the environment and ensures availability for future generations.

💧 **Why Water Conservation Matters**
- Saves energy used in water treatment
- Protects ecosystems
- Reduces water bills
- Ensures water for future generations

📝 **Practical Water Conservation Tips**
1. Fix leaks immediately
2. Use water-efficient appliances
3. Collect rainwater
4. Reduce water waste while cleaning
5. Water plants early in the morning or late evening

🌍 **Where You Can Apply These Tips**
- At home
- In gardens and farms
- Schools and offices
- Community programs
      `,
      videoId: "QLOGvbSrIDk",
      quiz: [
        {
          question: "What is a water saving method?",
          options: ["Fix leaks", "Leave taps open", "Flood garden", "None"],
          answer: "Fix leaks",
        },
      ],
    },
  };

  const lessonsOrder = [
    "Renewable Energy 101",
    "Solar Energy Basics",
    "Waste Reduction Techniques",
    "Eco-Friendly Lifestyle",
    "Water Conservation Techniques",
  ];

  const lesson = lessonsContent[id] || {
    text: "Lesson content not found.",
    videoId: "",
    quiz: [],
  };

  const currentIndex = lessonsOrder.indexOf(id);
  const prevLesson = lessonsOrder[currentIndex - 1];
  const nextLesson = lessonsOrder[currentIndex + 1];

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${id}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    } else {
      // If first time visiting, mark 50% for reading
      setProgress(50);
      localStorage.setItem(`progress_${id}`, 50);
    }
  }, [id]);

  // Handle quiz submission
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
      localStorage.setItem(`progress_${id}`, 100);
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

        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Progress: {progress}%
        </p>

        {lesson.quiz.length > 0 && !quizCompleted && (
          <form onSubmit={handleQuizSubmit} style={{ marginTop: "20px" }}>
            <h3>Quiz:</h3>
            {lesson.quiz.map((q, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <p>{q.question}</p>
                {q.options.map((option, i) => (
                  <label key={i} style={{ display: "block" }}>
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      required
                    />{" "}
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button type="submit">Submit Quiz</button>
          </form>
        )}

        <div className="navigation-buttons">
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
