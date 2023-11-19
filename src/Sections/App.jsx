import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Project";
import Contact from "./Contact";
import "../Style/app.css";

const App = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleDownButtonClick = () => {
    setShowNavbar(true);
  };
  return (
    <div>
      {showNavbar && <Navigation />}
      <Home onDownButtonClick={handleDownButtonClick} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
