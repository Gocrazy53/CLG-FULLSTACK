import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx"
// import Home from "./Home"
// import Login from "./Login"



const Home = () => {
  const categories = [
    {
      title: "Appliances for your home | Up to 55% off",
      items: [
        {
          name: "Air conditioners",
          img: "https://m.media-amazon.com/images/I/71JQ3kUrR9L._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Refrigerators",
          img: "https://m.media-amazon.com/images/I/81nikv9C6lL._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Microwaves",
          img: "https://m.media-amazon.com/images/I/81pAhoYUzIL._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Washing machines",
          img: "https://m.media-amazon.com/images/I/616wnQmPQ-L._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
      ],
      link: "See more",
    },
    {
      title: "Revamp your home in style",
      items: [
        {
          name: "Cushion covers, bedsheets & more",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
        },
        {
          name: "Figurines, vases & more",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        },
        {
          name: "Home storage",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
        },
        {
          name: "Lighting solutions",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
        },
      ],
      link: "Explore all",
    },
    {
      title: "Starting ₹149 | Headphones",
      items: [
        {
          name: "Starting ₹249 | boAt",
          img: "https://m.media-amazon.com/images/I/81zPp1FE0SL._AC_AIweblab1142340,T2_FMavif_SF165,165_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Starting ₹349 | Boult",
          img: "https://m.media-amazon.com/images/I/81gLKrHsp9L._AC_AIweblab1142340,T2_FMavif_SF165,165_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Starting ₹649 | Noise",
          img: "https://m.media-amazon.com/images/I/81RuugQiKTL._AC_AIweblab1142340,T2_FMavif_SF165,165_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Starting ₹149 | Zebronics",
          img: "https://m.media-amazon.com/images/I/716zw6iNdKL._AC_AIweblab1142340,T2_FMavif_SF165,165_QL58_.jpg?aicid=homepage-qmacv2",
        },
      ],
      link: "See all offers",
    },
    {
      title: "Automotive essentials | Up to 60% off",
      items: [
        {
          name: "Cleaning accessories",
          img: "https://m.media-amazon.com/images/I/61rDIhWQ-9L._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Tyre & rim care",
          img: "https://m.media-amazon.com/images/I/61rDIhWQ-9L._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Helmets",
          img: "https://m.media-amazon.com/images/I/61KY-QEhTCL._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
        {
          name: "Vacuum cleaner",
          img: "https://m.media-amazon.com/images/I/717CyBc08DL._AC_AIweblab1142340,T2_FMavif_SF217.5,217.5_QL58_.jpg?aicid=homepage-qmacv2",
        },
      ],
      link: "See more",
    },
  ];

  return (
    <div>
      {/* Navbar */}
     <div className="nav-section">
     <Navbar/>
     </div>

      {/* Banner Section */}
      <div className="banner">
        <banner className="banner-img">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Febhero/PC_2X._CB550744530_.jpg" alt="" />
        </banner>
      </div>

      {/* Categories Section */}
      <div className="category-section">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.title}</h3>
            <div className="category-items">
              {category.items.map((item, idx) => (
                <div key={idx} className="category-item">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <a href="#" className="see-more">{category.link}</a>
          </div>
        ))}
      </div>
    </div>

     
  );
};

export default Home;
