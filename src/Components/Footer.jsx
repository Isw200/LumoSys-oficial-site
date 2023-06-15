import React from "react";
import bgImg from "../Assets/Backgrounds/footerBackground.png";
import logo from "../Assets/Logo/white_logo.png";
import "../Styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="mainContainer">
        <div
          className="bgImgContainer"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="main">
            <div className="topMain">
              <div className="columns">
                <img src={logo} alt="" />
                <p>
                  Our skilled team illuminates businesses with tailored software
                  solutions, staying ahead in a digital landscape. We understand
                  unique requirements and possess expertise to create impactful
                  results.
                </p>
              </div>
              <div className="columns">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">About LumoSys</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Feedbacks</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                </ul>
              </div>
              <div className="columns">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="columns">
                <h3>Connect with us</h3>
                <div className="socialMedia">
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedinIn} className="iconProp" />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="iconProp" />
                  </a>

                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="iconProp" />
                  </a>

                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} className="iconProp" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bar"></div>
            <div className="bottomMain">
              <h6>© 2023 LomoSys All Rights Reserved</h6>
              <h6>Terms of service | Privacy Policy</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
