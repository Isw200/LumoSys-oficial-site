import React from "react";
import SvgComponent from "./SubComponents/SvgComponent";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="svg">
          <SvgComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
