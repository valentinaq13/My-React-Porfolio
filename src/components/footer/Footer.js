import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Valentina Quiroga</h1>
        <p>Córdoba, Argentina.</p>
        <p>Cel Phone: +54 (0351) 158574580 / emeritavalentina@gmail.com</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>

      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/valentina-quiroga-zalazar/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/valentinaq13" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a> */}

        </div>

      </div>
      <div className="design-by2">Design by Valentina Quiroga</div>

    </footer>
  );
};

export default Footer;

