import { useState } from "react";
import "../../../Styles/CardSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function CardSlider() {
  const [slides, setSlides] = useState([
    {
      image: "https://picsum.photos/600/500",
      title: "Mobile Application Development",
      description: "This is a second description",
    },
    {
      image: "https://picsum.photos/700/600",
      title: "Cloud Services",
      description: "This is a third description",
    },
    {
      image: "https://picsum.photos/500/400",
      title: "UI/UX Design",
      description: "This is a fourth description",
    },
  ]);

  return (
    <div className="CardSlider">
      <div className="main_container">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          size="2xl"
          style={{ color: "#680684", cursor: "pointer" }}
        />
        {slides.map((slide) => {
          return (
            <div className="card">
              <img className="image" src={slide.image} alt="slide" />
              <div className="title">{slide.title}</div>
              <div className="desc">{slide.description}</div>
            </div>
          );
        })}
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          size="2xl"
          style={{ color: "#5b0772", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default CardSlider;
