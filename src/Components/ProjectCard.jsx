import React from "react";
import "../Style/projects.css";
export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <p className="project-title">{props.title}</p>
      </div>
      <div className="project-card-body">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
