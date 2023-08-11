import React from "react";
import "../Style/experiences.css";
export default function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <img src={props.img} alt={props.company} />
        <h2 className="experience-company">{props.company}</h2>
        <h2 className="experience-role">{props.role}</h2>
      </div>
      <div className="experience-card-body">
        {" "}
        <p>{props.description}</p>
      </div>
    </div>
  );
}
