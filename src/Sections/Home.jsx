import React from "react";
import profile_pic from "../Uploads/profile-pic.jpg";
import "../Style/home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-content-left">
          <h1 className="home-title">
            <Typewriter
              words={["", "Hey, I'm Ashley"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </h1>

          <p className="home-description">
            I am a current senior studying Computer Science at the University of
            Michigan with experience in frontend and mobile app development. I
            am passionate about personal growth and seeking out impactful SWE
            opportunities. Currently based in NYC. ~pin~
          </p>
        </div>
        <div className="home-content-right">
          <div className="profile-pic-container">
            <img className="profile-pic" src={profile_pic} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
