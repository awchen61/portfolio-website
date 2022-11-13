import React from "react";
import SectionHeader from "../Components/SectionHeader.jsx";

import ProjectCard from "../Components/ProjectCard.jsx";

function Projects() {
  return (
    <div>
      <SectionHeader header_text="Projects" />
      <ProjectCard title="Portfolio Website" description="cool stuff" />
      <ProjectCard title="Instagram Clone" description="cool stuff" />
      <ProjectCard title="Chirp" description="cool stuff" />
      <ProjectCard title="Budget Tracker App" description="cool stuff" />
    </div>
  );
}

export default Projects;
