import React from "react";
import SectionHeader from "../Components/SectionHeader.jsx";
import ExperienceCard from "../Components/ExperienceCard";
import { experiences } from "../Info/experiences.js";
import "../Style/experiences.css";
const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience-container">
        <SectionHeader header_text="Experience"></SectionHeader>
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            return (
              <ExperienceCard
                index={index + 1} // skip 0 index
                img={exp.img}
                company={exp.company}
                role={exp.role}
                description={exp.description}
              />
            );
          })}
        </div>
        <div className="experience-line"></div>
      </div>
    </div>
  );
};

export default Experience;
