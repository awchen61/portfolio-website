import React from "react";
import { skills } from "../Info/skills.js";
import "../Style/about.css";

const TechnicalSkills = (props) => {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <>
            <img src={skill.logo} alt={skill.name} className={"skills-logo"} />
            {/* <span className="logoname">{skill.name}</span> */}
          </>
        );
      })}
    </div>
  );
};
export default TechnicalSkills;
