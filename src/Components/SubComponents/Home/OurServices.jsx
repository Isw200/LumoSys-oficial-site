import "../../../Styles/OurServices.css";
import Carousel from "react-elastic-carousel";
import React, { useState } from "react";
import UiImg from "../../../Assets/Images/UiImg.png";
import ArrowPathServices from "../../../Assets/Images/ArrowPathServices.png";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const items=[
  {
    key:1,
    title:"Mobile Development",
    disc:"Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.",
    img:UiImg,
    imgarrow:ArrowPathServices,
    link:"/services-mobile"
  },
  {
    key:2,
    title: "Full Stack Development",
    disc:"Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.",
    img:UiImg,
    imgarrow:ArrowPathServices,
    link:"/services-fullstack"
  },
  {
    key:3,
    title: "Cloud Services",
    disc:"Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.",
    img:UiImg,
    imgarrow:ArrowPathServices,
    link:"/services-cloud"
  },
  {
    key:4,
    title: "Ui/Ux Design",
    disc:"Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.",
    img:UiImg,
    imgarrow:ArrowPathServices,
    link:"/services-uiux"
  },
  {
    key:5,
    title: "Ui/Ux Design",
    disc:"Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.",
    img:UiImg,
    imgarrow:ArrowPathServices,
    link:"/services-uiux"
  },
];



function OurServices() {
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
            <div className="card_item" key={item.key}>
              <div className="card_info">
              <img className="img" src={item.img} alt="img"/>  
              <h2>{item.title}</h2>
              <p>{item.disc}</p>
              <a href={item.link}><img className="imgarrow" src={item.imgarrow} alt="img"/></a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
