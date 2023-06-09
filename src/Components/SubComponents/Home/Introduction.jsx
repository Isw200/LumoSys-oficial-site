import React from "react";
import "../../../Styles/Introduction.css";
import { useState } from "react";

import laptopDesk from "../../../Assets/Images/laptop_desk_img.png";
import dotGrid from "../../../Assets/Backgrounds/dotGrid.png";

function Introduction() {
  const [statement, setStatement] = useState(
    "Our mission at Lumosys Solutions is to empower businesses with innovative software solutions that drive growth, efficiency, and customer satisfaction."
  );

  const [vision, setVision] = useState(true);
  const [mission, setMission] = useState(false);

  // bttn click handlers
  const missionBtnClick = () => {
    setStatement(
      "Our mission at Lumosys Solutions is to empower businesses with innovative software solutions that drive growth, efficiency, and customer satisfaction."
    );
    setVision(false);
    setMission(true);
  };

  const visionBtnClick = () => {
    setStatement(
      "Our vision at Lumosys Solutions is to become a leading global provider of software development, web designing, and security solutions."
    );
    setVision(true);
    setMission(false);
  };

  return (
    <div className="Introduction">
        <div className="leftContainer">
          <h1 id="black_topic">Your Gateway to</h1>
          <h1 id="pink_topic">Exceptional Software Services</h1>
          <p className="para">
            Established in 2023, Lumosys Solutions shines as a dynamic startup
            company specializing in comprehensive software development,
            innovative web designing, and mobile application solutions. We pride
            ourselves on prioritizing our clients' needs, providing them with
            unparalleled service and support that consistently surpasses their
            expectations.
          <br />
            Choose Lumosys Solutions as your trusted partner, and let us
            illuminate the path to a brighter future for your business.
            Together, we'll harness the power of technology and drive your
            organization towards unprecedented growth and prosperity.
          </p>
        </div>
        <div className="rightContainer">
          <div className="bgContainer">
            <img src={dotGrid} alt="dotgridimage" />
          </div>
          <div className="imgContainer">
            <img src={laptopDesk} alt="" />
          </div>
        </div>
    </div>
  );
}

export default Introduction;
