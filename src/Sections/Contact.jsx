import React from "react";
import resume from "../Uploads/AshleyChenResume.pdf";
import SectionHeader from "../Components/SectionHeader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  return (
    <div>
      <SectionHeader header_text="Get in touch!"></SectionHeader>

      <p>
        I’m always open for any new opportunities. Whether you have a question
        or just want to say hi, I'm just a click away!
      </p>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Enter Your Message"></input>
          <input type="submit" value="Send"></input>
        </form>
      </div>

      <div className="socials">
        <a target="_blank" href="https://www.linkedin.com/in/ashleywchen/">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#000000" />{" "}
        </a>
        <a target="_blank" href="https://github.com/awchen61">
          <FontAwesomeIcon icon={faGithub} size="3x" color="#000000" />{" "}
        </a>
        <a target="_blank" href="https://www.instagram.com/sbd.ash/">
          <FontAwesomeIcon icon={faInstagram} size="3x" color="#000000" />{" "}
        </a>
        <a target="_blank" href={resume}>
          <FontAwesomeIcon icon={faUser} size="3x" color="#000000" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Contact;
