import "../../../Styles/OurServices.css";
import Carousel from "react-elastic-carousel";
import React, { useState } from "react";
import ItemImage from "../../../Assets/Logo/item-image.png"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function OurServices() {
  const [items, setItems] = useState([
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    {
      title: "Item Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore laborum, totam consectetur voluptatibus voluptatem delectus nisi doloribus ratione autem ipsa."
    },
    
  ]);

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
            <div key={item} className="item">
              <div className="item-image">
                <img src={ItemImage} alt="" />
              </div>
              <div className="item-texts">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
