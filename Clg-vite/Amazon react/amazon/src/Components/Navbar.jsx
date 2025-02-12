import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            {/* amazon<span>.in</span> */}
            <Link to="/" className="logo">
              amazon<span>.in</span>
            </Link>
          </div>
          <div className="location">
            <span>Delivering to Bhubaneswar 752101</span>
            {/* <button>Update location</button> */}
          </div>
        </div>

        <div className="search-bar">
          <select className="search-category">
            <option>All</option>
            <option>A</option>
            <option>Ab</option>
            <option>Abcd</option>
            <option>Abcde</option>
          </select>
          <input type="text" placeholder="Search Amazon.in" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="navbar-right">
          {/* <a href="#">Login</a> */}
          <Link to="/login">Login</Link>
          <a href="#">Returns & Orders</a>
          <div className="cart">
            🛒 <span className="cart-count">0</span>
          </div>
        </div>
      </nav>
      {/* Sub Navbar */}
      <div className="sub-navbar">
        <button className="menu-btn">☰ All</button>
        <a href="#">Fresh</a>
        <a href="#">MX Player</a>
        <a href="#">Sell</a>
        <a href="#">Best Sellers</a>
        <a href="#">Today's Deals</a>
        <a href="#">Mobiles</a>
        <a href="#">Electronics</a>
        <a href="#">Home & Kitchen</a>
        <a href="#">Fashion</a>
        <a href="#">Books</a>
        <a href="#">Customer Service</a>
        <a href="#">Amazon Pay</a>
        <a href="#">Prime</a>
        <a href="#">New Releases</a>
        <a href="#">Computers</a>
        <a href="#">Cars & Motorbikes</a>
        <a href="#">Toys & Games</a>
      </div>
    </>
  );
};

export default Navbar;
