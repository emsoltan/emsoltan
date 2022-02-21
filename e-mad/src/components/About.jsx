import React from "react";
import "../styles/About.css";
import avatar from "../assets/emad-logo2.svg"
const About = () => {
  return (
    // <!-- About -->
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">About me</h2>
      <p className="section__subtitle section__subtitle--about">Me myself</p>
      <div className="about-me__body">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1641328406522-f94f8a050fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="em"
        className="about-me__img"
      />
    </section>
  );
};

export default About;
