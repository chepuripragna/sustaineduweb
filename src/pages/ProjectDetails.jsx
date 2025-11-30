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
    },
    "Rainwater Harvesting Setup": {
      description: "Learn how to collect and store rainwater for household use.",
      steps: [
        "Select a suitable collection area.",
        "Install storage tanks or barrels.",
        "Filter debris and store water safely.",
        "Use for gardening, cleaning, or household needs."
      ]
    },
    "Zero-Waste Kitchen Challenge": {
      description: "Reduce kitchen waste by adopting reusable containers, composting, and smart shopping.",
      steps: [
        "Identify single-use items in your kitchen.",
        "Switch to reusable containers and wraps.",
        "Compost food scraps.",
        "Plan meals to reduce leftovers."
      ]
    },
    "Tree Plantation Drive": {
      description: "Join a local initiative to plant trees in your community or school.",
      steps: [
        "Locate areas suitable for planting.",
        "Get saplings from local nurseries.",
        "Plant trees with proper spacing.",
        "Water and maintain the trees."
      ]
    },
    "Upcycling Workshop": {
      description: "Turn old items like jars, bottles, or clothes into useful products.",
      steps: [
        "Collect items to upcycle.",
        "Learn basic crafting techniques.",
        "Create functional or decorative items.",
        "Share or gift your upcycled creations."
      ]
    },
    "Neighborhood Cleanup": {
      description: "Participate in cleaning local parks, streets, or riverbanks.",
      steps: [
        "Gather volunteers.",
        "Plan a cleanup route.",
        "Provide gloves and trash bags.",
        "Collect and properly dispose of waste."
      ]
    },
    "Eco-Friendly School Campaign": {
      description: "Create awareness campaigns in your school for reducing plastic and conserving energy.",
      steps: [
        "Prepare posters and presentations.",
        "Conduct workshops or seminars.",
        "Encourage peers to adopt sustainable habits.",
        "Monitor impact and celebrate success."
      ]
    },
    "Community Composting Program": {
      description: "Set up a composting system for your apartment or neighborhood.",
      steps: [
        "Identify a shared composting area.",
        "Provide bins for organic waste.",
        "Educate participants about composting.",
        "Harvest compost regularly for community use."
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
