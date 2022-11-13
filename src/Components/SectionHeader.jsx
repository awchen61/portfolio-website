import "../Style/section-header.css";
import React from "react";

export default function SectionHeader(props) {
  return (
    <div>
      <h1 className="section-header">
        <span>{props.header_text}</span>
      </h1>
    </div>
  );
}
