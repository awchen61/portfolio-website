import React from "react";
import "../Style/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArchive } from "@fortawesome/free-regular-svg-icons";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <p className="project-title">{props.title}</p>
        {props.github && (
          <a target="_blank" href={props.github} rel="noreferrer">
            <FontAwesomeIcon icon={faFileArchive} size="2x" rel="noreferrer" />
          </a>
        )}
      </div>
      <div className="project-card-body">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
