import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Container */}
      <div className="footer-container">
        <div>
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div>
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfillment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <img
          src="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png-1.webp"
          alt="Amazon Logo"
          className="footer-logo"
        />
        <div className="footer-buttons">
          <button>🌍 English</button>
          <button>🇮🇳 India</button>
        </div>
      </div>

      {/* Additional Links Section */}
      <div className="lc">
        <div className="footer-links">
          <div>
            <h4>AbeBooks</h4>
            <p>Books, art & collectibles</p>
          </div>
          <div>
            <h4>Amazon Web Services</h4>
            <p>Scalable Cloud Computing Services</p>
            <p>Computing Services</p>
          </div>
          <div>
            <h4>Audible</h4>
            <p>Download Audio Books</p>
          </div>
          <div>
            <h4>Shopbop</h4>
            <p>Designer Fashion Brands</p>
          </div>
          <div>
            <h4>Amazon Business</h4>
            <p>Everything for Your Business</p>
          </div>
          <div>
            <h4>Prime Now</h4>
            <p>2-Hour Delivery on Everyday Items</p>
          </div>
          <div>
            <h4>IMDb</h4>
            <p>Movies, TV & Celebrities</p>
          </div>
          <div>
            <h4>Amazon Prime Music</h4>
            <p>100 million songs, ad-free</p>
            <p>Over 15 million podcast episodes</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
          <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
