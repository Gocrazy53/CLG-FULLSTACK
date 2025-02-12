import React from "react";
import "./Pagethree.css";

const Pagethree = () => {
  const sections = [
    {
      title: "No cost EMI up to 24 months | Starting ₹4,433 INR/month*",
      images: [
        "https://m.media-amazon.com/images/I/711AeOIZxjL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71FaTv3lIML.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71PGc7ijDjL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71w1jomhLNL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/817hIa9ORoL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71Y4tPF6wCL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/712Wm2NIMWL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/712Wm2NIMWL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71c0VTbO5bL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71c0VTbO5bL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71FlAsMQOjL.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/51a0T2AQnJL.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/71ZiYOX1p4L.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/31OtlIBIQJL.AC_SY400.jpg",
      ],
      className: "whitebox1",
    },
    {
      title: "Up to 75% off | A wide range of electronics & accessories from Small businesses",
      images: [
        "https://m.media-amazon.com/images/I/61lpIqotYPL.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/61Famx7xQwL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/61mgu9K9ZFL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/51KaJg-OtWL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/61+AbtSQH9L.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/51nnSP43eQL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/51815uUTF5L.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/71ef5xDbraL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/61xkImqA+sL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/51UQ-uq36FL.AC_SY400.jpg",
      ],
      className: "whitebox2",
    },
    {
      title: "Best Sellers in Toys & Games",
      images: [
        "https://m.media-amazon.com/images/I/51nqXz7iWrL.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/612F8Cg4vQL.AC_SY200.jpg",
        "https://m.media-amazon.com/images/I/617OBlRSVTL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/613ls1KV-HL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/717pTcRrigL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71ICPSc3H+L.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/61xr-fzqcxL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/61A2ddWFQxL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71kl33XC3pL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71VPXp3DuAL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/81A+9JEi5zL.AC_SY400.jpg",
        "https://m.media-amazon.com/images/I/71AVbfHYu2L.AC_SY400.jpg",
      ],
      className: "whitebox3",
    },
  ];

  return (
    <div className="background">
      {sections.map((section, index) => (
        <div key={index} className="box1">
          <h3>{section.title}</h3>
          <div className={section.className}>
            {section.images.map((src, imgIndex) => (
              <img key={imgIndex} src={src} alt={`Placeholder ${imgIndex + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagethree;
