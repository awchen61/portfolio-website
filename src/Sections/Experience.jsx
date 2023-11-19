import React from "react";
import SectionHeader from "../Components/SectionHeader.jsx";
import ExperienceCard from "../Components/ExperienceCard";
import { experienceInfo } from "../Info/experiences.js";
import "../Style/experiences.css";
const Experience = () => {
  return (
    <div className="experience-section">
      <SectionHeader header_text="Experience"></SectionHeader>
      {experienceInfo.map((exp) => {
        return (
          <ExperienceCard
            img={exp.image}
            company={exp.company}
            role={exp.role}
            description={exp.description}
          />
        );
      })}
    </div>
  );
};

export default Experience;
