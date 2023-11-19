import { Link as ScrollLink } from "react-scroll";
import "../Style/home.css";
import { Typewriter } from "react-simple-typewriter";
import headshot from "../Uploads/headshot.png";
import arrow from "../Uploads/down-arrow.png";
import React from "react";

const Home = ({ onDownButtonClick }) => {
  React.useEffect(() => {
    // Add the body-scroll-enabled class when the component mounts
    document.body.classList.add("body-scroll-enabled");

    // Remove the body-scroll-enabled class when the component unmounts
    return () => {
      document.body.classList.remove("body-scroll-enabled");
    };
  }, []);
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="left-container">
          <h1 className="hello-text">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["", "Hey, I'm Ashley.👋"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </h1>
          <p className="about-text">
            I am a current senior studying Computer Science at the University of
            Michigan. I am passionate about personal growth and seeking out
            impactful SWE opportunities. Scroll around to learn more about my
            skills and experiences!
          </p>
        </div>
        <div className="right-container">
          <img
            src={headshot}
            alt="Headshot"
            width="300"
            className="profile-pic"
          />
        </div>
      </div>
      <div className="bottom-section">
        <ScrollLink to="about-section" smooth={true} duration={500}>
          <img
            className="down-arrow"
            src={arrow}
            alt=""
            width="60"
            onClick={() => {
              onDownButtonClick();
            }}
          />
        </ScrollLink>
      </div>
    </div>
  );
};
export default Home;
