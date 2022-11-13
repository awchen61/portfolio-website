import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Project";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
