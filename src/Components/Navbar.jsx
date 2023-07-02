import React, { useState } from "react";

import "../Styles/Navbar.css";
import Logo from "../Assets/Logo/white_logo.png";

function Navbar() {
  const [color, setColor] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const showMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-nav");
    mobileMenu.classList.toggle("active-mobile-menu");
    setMobileMenu(!isMobileMenu);

    // stop scroll
    const body = document.querySelector("body");
    body.classList.toggle("stop-scrolling");

    // toggle menu icon
    toggleMenuIcon();
  };

  const toggleMenuIcon = () => {
    const mobileMenuIcon = document.querySelector(".mobileMenuicon");
    mobileMenuIcon.classList.toggle("active-mobnav");
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="Navbar">
      <nav
        className={
          color || isMobileMenu ? "navbar coloured_navbar color_bg" : "navbar"
        }
      >
        <a href="/">
          <img src={Logo} alt="Logo" id="logo" />
        </a>
        <div className="mobileMenuicon" onClick={showMobileMenu}>
          <div className="menu-bar bar1"></div>
          <div className="menu-bar bar2"></div>
          <div className="menu-bar bar3"></div>
        </div>
        <div className="mobile-nav">
          <nav>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services-web">Services</a>
              </li>
              <li>
                <a href="/products">Our Products</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact-us" id="contact_us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="dektop-nav">
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
