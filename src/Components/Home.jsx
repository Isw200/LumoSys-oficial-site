import React from "react";
import SvgComponent from "./SubComponents/SvgComponent";
import "../Styles/Home.css";
import mainBgImg from "../Assets/Backgrounds/homeMainBackground.png";
import Introduction from "./SubComponents/Home/Introduction";
import techBg from "../Assets/Backgrounds/technologiesBackground.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import reactLogo from "../Assets/Logo/react.png";
import angularLogo from "../Assets/Logo/angular.png";
import androidLogo from "../Assets/Logo/android.png";
import flutterLogo from "../Assets/Logo/flutter.png";
import iosLogo from "../Assets/Logo/ios.png";
import javaLogo from "../Assets/Logo/java.png";
import pythonLogo from "../Assets/Logo/python.png";
import azureLogo from "../Assets/Logo/azure.png";
import ContactStrip from "./SubComponents/Home/ContactStrip";
import OurServices from "./SubComponents/Home/OurServices";

function Home() {
  return (
    <div className="Home">
      <div className="mainContainer">
        <div
          className="bgImgContainer"
          style={{
            backgroundImage: `url(${mainBgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1>Hi, We are LumoSys : ) </h1>
          <p>
            Illuminating your business with our cutting-edge software solutions
          </p>
          <div className="buttonContainer">
            <div className="btnSubContainer">
              <button id="ourWorkBtn">
                <span>See our work </span>

                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{
                    "--fa-primary-color": "#ffffff",
                    "--fa-secondary-color": "#b7b1b1",
                  }}
                />
              </button>
              <button id="chatBtn">Let's chat </button>
            </div>
          </div>
        </div>
        <Introduction />
        <div className="techImgContainer">
          <img id="techBg" src={techBg} alt="" />
          <div className="techImageDesc">
            <h4>We are with</h4>
            <h3>Latest Technologies</h3>
          </div>
        </div>
        <div className="techStackContainer">
          <div className="techStackSubContainer">
            <img src={reactLogo} alt="" />
            <img src={angularLogo} alt="" />
            <img src={androidLogo} alt="" />
            <img src={flutterLogo} alt="" />
            <img src={iosLogo} alt="" />
            <img src={javaLogo} alt="" />
            <img src={pythonLogo} alt="" />
            <img src={azureLogo} alt="" />
          </div>
        </div>
        <OurServices />
        <ContactStrip />
      </div>
    </div>
  );
}

export default Home;
