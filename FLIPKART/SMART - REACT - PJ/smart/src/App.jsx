import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import "./App.css";

const App = () => {
  // const leftupper = [CiMail,IoCallOutline];
  const rightupper = [
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaTelegramPlane,
  ];

  const lowerItem = [
    "Home",
    "Services",
    " Skill Up With Us",
    "Products",
    "Carrers",
  ];

  return (
    <div className="main-div">
      {/* upper nav section */}
      <div className="upperNav">
        <div className="leftupper">
          {/* {leftupper.map((Icons, index) => (
            <li key={index}>{Icons}</li>
          ))} */}

          <li>
            <CiMail className="left-icon" />
            info@smartica.co.in
          </li>
          <li>
            <IoCallOutline className="left-icon" />
            +91 9363282829
          </li>
        </div>

        <div className="rightupper">
          {rightupper.map((Icons, index) => (
            <div key={index} className="gola">
              <Icons className="icon" />
            </div>
          ))}
        </div>
      </div>

      <div className="lowerNav">
        <div className="logo">
          <img
            src="https://www.smartica.co.in/src/assets/images/smart-logo.png"
            alt=""
          />
        </div>
        <div className="lower-item">
          {lowerItem.map((Item, index) => (
            <li key={index}>{Item}</li>
          ))}
        </div>
      </div>

      <div className="smartica-1st-page">
        <div className="bodypart">{/* background-color */}</div>
        <div className="text-part">
          <h4>REACH YOUR CARRER THROUGH</h4>
          <h3>
            India's Largest carrer <br /> development company
          </h3>

          <button className="btn btn1">Learn More</button>
          <button className="btn btn2">View Courses</button>
        </div>
      </div>
    </div>
  );
};

export default App;
