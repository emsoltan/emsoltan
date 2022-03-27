import React from "react";
import "../styles/Projects.css";
import dummy from "../assets/dummy.svg";

const Projects = () => {
  return (
    <section className="my-work" id="projects">
      <h2 className="section__title section__title--work">What I'm doing</h2>
      <p className="section__subtitle section__subtitle--work">
      A selection of my range of projects
      </p>

      <div className="portfolio">
        {/* <!-- Portfolio item 01 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 02 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 03 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 04 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 05 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 06 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 07 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 08 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 09 --> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 0 0--> */}
        <a href="#" className="portfolio__item">
          <img src={dummy} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
