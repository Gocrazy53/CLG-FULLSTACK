import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Pagetwo from "./Components/Pagetwo.jsx";
import Pagethree from "./Components/Pagethree.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Components/Login.jsx"; // Import the Login component
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Router>
        <div className="main-app-section">
          <Routes>
            {/* Route for Home Page */}

            <Route path="/" element={<Home />} />

            {/* Route for Login Page */}
            <Route path="/login" element={<Login />} />
          </Routes>

          {/* Other Components */}
        <div className="page-two">
            <Pagetwo />
          </div>

          <div className="page-three">
            <Pagethree />
          </div>

          <div className="footer-part">
            <Footer />
          </div>
        </div>

        
      </Router>


        
    </>
  );
};

export default App;
