import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ServicesCloud from "./ServicesCloud";

import "../Styles/Navbar.css";
import Logo from "../Assets/Logo/white_logo.png";

function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="Navbar">
      <nav className={color ? "navbar coloured_navbar color_bg" : "navbar"}>
        <img src={Logo} alt="Logo" id="logo" />
        <ul>
          <li>
            <a className="nav_titles" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav_titles" href="/services-web">
              Services
            </a>
          </li>
          <li>
            <a className="nav_titles" href="/products">
              Our Products
            </a>
          </li>
          <li>
            <a className="nav_titles" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact-us" id="contact_us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
