import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectDetails() {
  const { title } = useParams();
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [joined, setJoined] = useState(false);

  const projectsData = {
    "Create a Compost Bin": {
      description: "Learn to make your own compost bin at home.",
      steps: [
        "Choose a location in your backyard.",
        "Prepare a container or build one from wood.",
        "Add organic waste like kitchen scraps, leaves, and grass.",
        "Turn the compost every week.",
        "Use finished compost in your garden.",
      ],
    },
    "Plastic-Free Week Challenge": {
      description: "Avoid plastic usage for one week and track results.",
      steps: [
        "Identify common plastic items.",
        "Replace with reusable alternatives.",
        "Track your usage daily.",
        "Share results with community.",
      ],
    },
  };

  // Load join status
  useEffect(() => {
    const saved = localStorage.getItem(`joined_${title}_${loggedInUser}`);
    if (saved === "true") {
      setJoined(true);
    }
  }, [title, loggedInUser]);

  // Handle join
  const handleJoin = () => {
    setJoined(true);

    // Save join for this user
    localStorage.setItem(`joined_${title}_${loggedInUser}`, "true");

    // RECALCULATE completed projects (same logic as Lessons)
    const allProjects = Object.keys(projectsData);
    const completedCount = allProjects.filter(
      (p) => localStorage.getItem(`joined_${p}_${loggedInUser}`) === "true"
    ).length;

    localStorage.setItem(`projectsCompleted_${loggedInUser}`, completedCount);

    alert("Project joined!");
  };

  if (!projectsData[title]) {
    return <h2>Project not found</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h2>{title}</h2>
        <p>{projectsData[title].description}</p>

        <h3>Steps:</h3>
        <ul>
          {projectsData[title].steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

        {!joined ? (
          <button onClick={handleJoin} className="join-btn">
            Join Project
          </button>
        ) : (
          <p className="joined-text">You have joined this project</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
