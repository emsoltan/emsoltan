import React from "react";
import logo from "../assets/e-mad-logo-final.svg";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="log" />
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
