import React from "react";
//import logo from "./assets/RotaractIcon.png";
import "./styles/footer.css"; // Updated to use a CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Section - Logo & Caption */}
          <div className="footer-section left">
            <a href="/">
              <img className="footer-logo" src="./logo.png" alt="CrowdHiveAi" />
            </a>
            <p className="footer-caption">
              CrowdHiveAi <br /> 
            </p>
          </div>

          {/* Middle Section - Social Links & Navigation */}
          <div className="footer-section middle">
            <p className="footer-heading">Follow us on</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/crowdhiveai/" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/crowdhiveai/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="footer-links">
              <a href="/about-us">About</a>
              <a href="/contact-us">Contact Us</a>
              <a href="https://www.linkedin.com/company/crowdhiveai/" target="_blank" rel="noreferrer">
              CrowdHiveAi
              </a>
            </div>
          </div>

          {/* Right Section - Credits & Contact */}
          <div className="footer-section right">
            <p className="developers">
              <strong>Developed By</strong>
              <br />
              <a href="https://www.linkedin.com/company/crowdhiveai/" target="_blank" rel="noreferrer">
                CrowdHiveAi Team
              </a>

            </p>
            <p className="contact-info">
              For any queries, reach out to us at <strong>crowdhiveai@gmail.com</strong>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <hr className="footer-line" />
          <p>&copy; 2025 CrowdHiveAi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
