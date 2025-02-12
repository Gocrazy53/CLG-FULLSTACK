import React from "react";
import "./Card.css";

const Card = ({ image, title, subtitle, price, discount }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="text-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-discount">{discount}</p>
        <h4 className="card-subtitle">{subtitle}</h4>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
