import React from "react";
import Card from "./Card";
import "./ScrollableSection.css";

const ScrollableSection = () => {
  const cards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Borosil EazyPull Chopper",
      subtitle: "6 Blades, Pull Mechanism",
      price: "₹371.00",
      discount: "25% off | Limited Time Deal",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Nutlase Iron Tadka Pan",
      subtitle: "Loha/Lokhand Fry Pan with Wood Handle",
      price: "₹299.00",
      discount: "60% off",
    },
    {
        image: "https://via.placeholder.com/150",
        title: "Nutlase Iron Tadka Pan",
        subtitle: "Loha/Lokhand Fry Pan with Wood Handle",
        price: "₹299.00",
        discount: "60% off",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Nutlase Iron Tadka Pan",
        subtitle: "Loha/Lokhand Fry Pan with Wood Handle",
        price: "₹299.00",
        discount: "60% off",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Nutlase Iron Tadka Pan",
        subtitle: "Loha/Lokhand Fry Pan with Wood Handle",
        price: "₹299.00",
        discount: "60% off",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Nutlase Iron Tadka Pan",
        subtitle: "Loha/Lokhand Fry Pan with Wood Handle",
        price: "₹299.00",
        discount: "60% off",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Nutlase Iron Tadka Pan",
        subtitle: "Loha/Lokhand Fry Pan with Wood Handle",
        price: "₹299.00",
        discount: "60% off",
      },
  ];

  return (
    <div className="scroll-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default ScrollableSection;
