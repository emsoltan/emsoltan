import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      {/* <!-- replace with your own email address --> */}
      <a href="mailto:e.mad.dragonfly.21@gmail.com" className="footer__link">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com" target="_blank">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
      <p>&copy;e-mad 2022</p>
    </footer>
  );
};

export default Footer;
