import React from "react";
import chewy_logo from "../Uploads/chewy-logo.png";
import daily_logo from "../Uploads/michigan-daily.png";
import juni_logo from "../Uploads/juni-learning.png";
import mich_logo from "../Uploads/urop.jpeg";
import SectionHeader from "../Components/SectionHeader.jsx";
import ExperienceCard from "../Components/ExperienceCard";

function Experience() {
  return (
    <div>
      <SectionHeader header_text="Experience"></SectionHeader>
      <ExperienceCard
        img={chewy_logo}
        company="Chewy"
        role="Software Engineer Intern - Android"
        description="idk"
      />
      <ExperienceCard
        img={daily_logo}
        company="Michigan Daily"
        role="Mobile App Developer"
        description="idk"
      />
      <ExperienceCard
        img={juni_logo}
        company="Juni Learning"
        role="Computer Science Instructor"
        description="idk"
      />
      <ExperienceCard
        img={mich_logo}
        company="University of Michigan"
        role="Undergraduate Research Assistant"
        description="idk"
      />
    </div>
  );
}

export default Experience;
