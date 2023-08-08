import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import "./responsive.css";

const Header = () => {
  const navigate = useNavigate();
  let navRoute= "/login"

  if(localStorage.getItem("userName")){
    navRoute = "/home"
  }

  return (
    <header className="nav-header">
      <div
        className="nav-title"
        onClick={() => {
          navigate(navRoute);
        }}
      >
        <span>WayFar</span>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <nav className="nav-links" aria-label="Navigation links in WayFar header">
        <ul>
          <li className="navItems">
            <span
              onClick={() => {
                navigate("/home");
              }}
            >
              HOME
            </span>
          </li>
          <li className="navItems">
            <span
              onClick={() => {
                navigate("/popularDestinations");
              }}
            >
              POPULAR DESTINATIONS
            </span>
          </li>
          <li className="navItems">
            <span
              onClick={() => {
                navigate("/tourPackages");
              }}
            >
              TOUR PACKAGES
            </span>
          </li>
          <li className="navItems">
            <span
              onClick={() => {
                navigate("/offers");
              }}
            >
              OFFERS
            </span>
          </li>
          <li className="navItems">
            <span
              onClick={() => {
                navigate("/enquire");
              }}
            >
              ENQUIRE-US
            </span>
          </li>
          <li className="navItems">
            <span
              onClick={() => {
                navigate("/gallery");
              }}
            >
              GALLERY
            </span>
          </li>
          <li className="navItems">
            <span
              onClick={() => {
                const nav = document.getElementsByClassName("nav-links");
                nav[0].classList.add("disable-nav");
                const navbtn = document.getElementsByClassName("nav-btn");
                navbtn[0].classList.add("disable-nav");
                localStorage.removeItem("userName");
                navigate("/login");
              }}
            >
              LOGOUT
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
