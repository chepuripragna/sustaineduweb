import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Resources.css";

// import your pdfs from assets
import solarEnergyPDF from "../assets/solar-energy.pdf";
import wasteManagementPDF from "../assets/waste-management.article.pdf";

function Resources() {
  const resources = [
    { title: "Solar Energy Guide", type: "PDF", link: solarEnergyPDF },
    { title: "Waste Reduction Tips", type: "Article", link: wasteManagementPDF },
    { 
      title: "Eco Lifestyle Video", 
      type: "Video", 
      link: "https://youtu.be/SNF8b7KKJ2I?si=bMyfIihA-04g4N9v" 
    },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="resources-title">Resources</h2>
        <div className="resources-list">
          {resources.map((res, index) => (
            <div key={index} className="resource-item">
              <h3>{res.title}</h3>
              <p>Type: {res.type}</p>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="course-btn"
              >
                Access Resource
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Resources;
