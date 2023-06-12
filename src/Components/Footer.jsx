import React from "react";
import bgImg from "../Assets/Backgrounds/footerBackground.png";
import logo from "../Assets/Logo/logo.png";
import "../Styles/Footer.css";

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
              </div>
              <div className="columns">
                <h3>Resources</h3>
              </div>
              <div className="columns">
                <h3>Connect with us</h3>
              </div>
            </div>
            <div className="bar"></div>
            <div className="bottomMain"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
