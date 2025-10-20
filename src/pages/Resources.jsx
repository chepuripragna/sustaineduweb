import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Resources.css";

function Resources() {
  const resources = [
    { title: "Solar Energy Guide", type: "PDF", link: "#" },
    { title: "Waste Reduction Tips", type: "Article", link: "#" },
    { title: "Eco Lifestyle Video", type: "Video", link: "#" },
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
              <a href={res.link} target="_blank" rel="noopener noreferrer">
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
