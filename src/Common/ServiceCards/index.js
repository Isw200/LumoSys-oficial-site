import React from "react";
import "./styles.scss";

import icon from "./Icons/icon.png";

function ServiceCard({ details }) {
  return (
    <div className="service-card">
      {details.map((detail) => (
        <div className="card">
          <h4>{detail.id}</h4>
          <h3>{detail.topic}</h3>
          <p>{detail.content}</p>
          <img src={icon} alt="icon" />
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
