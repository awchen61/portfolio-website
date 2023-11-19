import React from "react";
import SectionHeader from "../Components/SectionHeader.jsx";

import ProjectCard from "../Components/ProjectCard.jsx";

const Projects = () => {
  return (
    <div className="projects-section">
      <SectionHeader header_text="Projects" />
      <ProjectCard title="Portfolio Website" description="cool stuff" />
      <ProjectCard title="FrequencEase" description="cool stuff" />
      <ProjectCard title="Instagram Clone" description="cool stuff" />
      <ProjectCard title="Budget Tracker App" description="cool stuff" />
    </div>
  );
};

export default Projects;
