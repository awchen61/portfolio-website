import React from "react";
import { skills } from "../Info/skills.js";
import "../Style/about.css";

const TechnicalSkills = () => {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <img
            src={skill.logo}
            alt={skill.name}
            className={"skills-logo"}
            width={10}
          />
        );
      })}
    </div>
  );
};
export default TechnicalSkills;
