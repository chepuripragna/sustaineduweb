import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function ProjectDetails() {
  const { title } = useParams();

  const projectInfo = {
    "Create a Compost Bin": {
      description: "Learn to make your own compost bin at home.",
      steps: [
        "Choose a location in your backyard.",
        "Prepare a container or build one from wood.",
        "Add organic waste like kitchen scraps, leaves, and grass.",
        "Turn the compost every week.",
        "Use finished compost in your garden."
      ]
    },
    "Plastic-Free Week Challenge": {
      description: "Avoid plastic usage for one week and track results.",
      steps: [
        "Identify common plastic items you use.",
        "Replace with reusable alternatives.",
        "Track your usage daily.",
        "Share results with friends or community."
      ]
    },
    "Community Garden Project": {
      description: "Join a local garden initiative and grow plants sustainably.",
      steps: [
        "Find a local community garden.",
        "Sign up and attend an orientation.",
        "Participate in planting and maintenance activities.",
        "Harvest and enjoy the produce."
      ]
    }
  };

  const project = projectInfo[title];

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="page-container">
          <h2>Project not found</h2>
          <Link to="/projects">
            <button>Back to Projects</button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h2>{title}</h2>
        <p>{project.description}</p>
        <h3>Steps:</h3>
        <ul>
          {project.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <Link to="/projects">
          <button>Back to Projects</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
