import React from "react";
import resume from "../Uploads/AshleyChenResume.pdf";
import SectionHeader from "../Components/SectionHeader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import "../Style/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef();

  // using emailJS React template
  // from: (https://www.emailjs.com/docs/examples/reactjs/)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kjq2vzk",
        "template_pyuel6d",
        form.current,
        "UfHgaAmpBH7OkubGi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset(); //clear form on submit
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <SectionHeader header_text="Get in touch!"></SectionHeader>
        <p>
          I’m always open for any new opportunities. Whether you have a question
          or just want to say hi, I'm just a click away!
        </p>

        <div className="contact-form">
          <form onSubmit={sendEmail} ref={form}>
            <ul>
              <li className="half-input">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                ></input>
              </li>
              <li className="half-input">
                <input
                  type="text"
                  name="user_email"
                  placeholder="Email"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" value="Send"></input>
              </li>
            </ul>
          </form>
        </div>

        <div className="socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ashleywchen/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#FFFFFF" />
          </a>
          <a
            target="_blank"
            href="https://github.com/awchen61"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" color="#FFFFFF" />
          </a>
          <a target="_blank" href={resume} rel="noreferrer">
            <FontAwesomeIcon
              icon={faFile}
              size="3x"
              color="#FFFFFF"
              rel="noreferrer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
