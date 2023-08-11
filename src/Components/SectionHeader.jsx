import "../Style/section-header.css";
import React from "react";

const SectionHeader = (props) => {
  return (
    <div>
      <h1 className="section-header">
        <span>{props.header_text}</span>
      </h1>
    </div>
  );
};
export default SectionHeader;
