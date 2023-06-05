import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ServicesCloud from "./ServicesCloud";
import Contactus from "./Contactus";
import "../Styles/Navbar.css";
import Logo from "../Assets/Logo/logo.png";

function Nav() {
  // hide navbar on scroll down
  const navbar = useRef(null);
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = "0";
    } else {
      navbar.current.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className="navigator">
      <BrowserRouter>
        <nav className="navbar" id="navbar" ref={navbar}>
          <div className="navbar__container">
            <a href="#" className="navbar__logo">
              <img src={Logo} alt="" />
            </a>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="cl-effect-5">
              <a href="">
                <span data-hover="About">About</span>
              </a>
              <a href="">
                <span data-hover="Experience">Experience</span>
              </a>
              <a href="">
                <span data-hover="Projects">Projects</span>
              </a>
              <a href="">
                <span data-hover="Contact">Contact</span>
              </a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/servicescloud" element={<ServicesCloud />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
