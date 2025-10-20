import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ManageResources.css";

function ManageResources() {
  const resources = [
    { title: "Solar Energy Guide", type: "PDF", link: "#" },
    { title: "Waste Reduction Tips", type: "Article", link: "#" },
    { title: "Eco Lifestyle Video", type: "Video", link: "#" },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 className="manage-title">Manage Resources</h2>

        <div className="resources-list">
          {resources.map((res, index) => (
            <div key={index} className="resource-item">
              <h3>{res.title}</h3>
              <p>Type: {res.type}</p>
              <a href={res.link} target="_blank" rel="noopener noreferrer">
                View Resource
              </a>
              <div className="resource-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="add-resource">
          <h3>Add New Resource</h3>
          <form>
            <input type="text" placeholder="Resource Title" />
            <input type="text" placeholder="Resource Type (PDF, Article, Video)" />
            <input type="text" placeholder="Resource Link" />
            <button type="submit">Add Resource</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManageResources;
