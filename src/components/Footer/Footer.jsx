import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import "./responsive.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <span> Copyright @ WayFar, 2023 </span>
      <div className="footer-links">
        <span onClick={() => navigate("/contact")}>
          Contact Us
        </span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span onClick={() => navigate("/terms")}>
          Terms &amp; Conditions
        </span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span onClick={() => navigate("/about")}>
          About Us
        </span>
      </div>
    </footer>
  );
};

export default Footer;
