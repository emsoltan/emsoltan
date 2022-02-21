import React from "react";
import avatar from "../assets/intro-pic.svg";
import "../styles/Intro.css";
const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        <span> Hi there!</span> I am Emad
      </h1>

      <img src={avatar} alt="e-mad" className="intro__img" />
      <p className="section__subtitle section__subtitle--intro">
        Front-end    
        <div className="section__subtitle section__subtitle--intro--2">
          web developer
        </div>
      </p>
    </section>
  );
};

export default Intro;
