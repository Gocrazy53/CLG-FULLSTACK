import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import './App.css'

const App = () => {
  return (
    <div className="main-div">
      <Router>
        <nav>
          <ul className="d-flex">
            <li>
              <Link to="/" className="nav-con">Home</Link>
            </li>

            <li>
              <Link to="/about" className="nav-con">About</Link>
            </li>
            <li>
              <Link to="./contact" className="nav-con">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
