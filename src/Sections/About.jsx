import React from "react";
import SectionHeader from "../Components/SectionHeader.jsx";
import { skills } from "../Info/skills.js";

import "../Style/about.css";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-top-section">
          <SectionHeader header_text="About Me" />
          <p>
            Software engineer with 4+ years of hands-on development experience,
            specializing in creating engaging, user-friendly web experiences. I
            excel in leading frontend development projects, optimizing user
            interfaces, and implementing innovative solutions that seamlessly
            align with corporate goals. Leveraging my expertise in C#,
            JavaScript, React, and other modern frameworks, I deliver dynamic
            and visually appealing web applications. Let's connect and
            collaborate to create exceptional digital experiences together.
          </p>
          <p>
            Software engineer with 4+ years of hands-on development experience,
            specializing in creating engaging, user-friendly web experiences. I
            excel in leading frontend development projects, optimizing user
            interfaces, and implementing innovative solutions that seamlessly
            align with corporate goals. Leveraging my expertise in C#,
            JavaScript, React, and other modern frameworks, I deliver dynamic
            and visually appealing web applications. Let's connect and
            collaborate to create exceptional digital experiences together.
          </p>
        </div>
        <div className="about-bottom-section">
          <h2>Technical Skills | </h2>
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
      </div>
    </div>
  );
};
export default About;
