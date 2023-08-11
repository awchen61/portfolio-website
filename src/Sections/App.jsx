import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Project";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
