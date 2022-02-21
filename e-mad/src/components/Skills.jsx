import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    //  <!-- My Skills -->
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>React</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet cupiditate, id qui modi ratione, omnis excepturi corporis
            ullam impedit.
          </p>
        </div>
        {/* <!-- / skill --> */}
        <div className="service">
          <h3>CSS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet cupiditate, id qui modi ratione, omnis excepturi corporis
            ullam impedit.
          </p>
        </div>{" "}
        {/* <!-- / skill --> */}
        <div className="service">
          <h3>JavaScript</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet cupiditate, id qui modi ratione, omnis excepturi corporis
            ullam impedit.
          </p>
        </div>{" "}
        {/* <!-- / skill --> */}
      </div>
      {/* <!-- / skills --> */}
      <a href="#projects" className="btn">
        My Work
      </a>
    </section>
  );
};

export default Skills;
