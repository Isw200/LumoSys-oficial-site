import CardSlider from "./CardSlider";
import "../../../Styles/OurServices.css";

function OurServices() {
  return (
    <div className="OurServices">
      <div className="mainContainer">
        <div className="descContainer">
          <span id="topic">Our Services</span>
          <h1 id="it_services_1">Specialized IT Services Designed</h1>
          <h2 id="it_services_2">for Your Industry's Demands</h2>
        </div>
        <CardSlider />
      </div>
    </div>
  );
}

export default OurServices;
