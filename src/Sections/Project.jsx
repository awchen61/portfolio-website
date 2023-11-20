import React from "react";
import SectionHeader from "../Components/SectionHeader.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import { projects } from "../Info/projects.js";

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <SectionHeader header_text="Projects" />
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <ProjectCard
                title={project.name}
                description={project.description}
                github={project.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
