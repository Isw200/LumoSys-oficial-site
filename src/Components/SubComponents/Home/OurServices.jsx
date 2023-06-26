import "../../../Styles/OurServices.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import React, { useState } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function OurServices() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="OurServices">
      <div className="titles">
        <h6>Our Services</h6>
        <h4>Specialized IT Services Designed</h4>
        <h5>for Your Industry's Demands</h5>
      </div>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
