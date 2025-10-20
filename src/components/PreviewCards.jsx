import React from "react";
import "./PreviewCards.css";
import energyImg from "../assets/renewable-energy.png";
import wasteImg from "../assets/waste-reduction.png";
import lifestyleImg from "../assets/eco-lifestyle.png";

function PreviewCards() {
  const cards = [
    {
      title: "Renewable Energy",
      image: energyImg,
      description: "Learn about solar, wind, and other renewable sources."
    },
    {
      title: "Waste Reduction",
      image: wasteImg,
      description: "Practical tips to reduce and recycle your waste."
    },
    {
      title: "Eco-Friendly Lifestyle",
      image: lifestyleImg,
      description: "Adopt daily habits that are good for the planet."
    }
  ];

  return (
    <section className="preview-cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  );
}

export default PreviewCards;
