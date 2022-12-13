import React from "react";

const Intro = () => {
  return (
    <section className="main intro">
      <div className="intro_section">
        <h1>Hi, my name is</h1>
        <h2>Costache Robert.</h2>
        <h3>I build things for the web.</h3>
      </div>

      <div className="intro_content">
        <p>
          I'm a software engineer based in Berlin, specializing building
          exceptional websites, applications, and everything in between.
        </p>
      </div>
      <div className="intro_cta">
        <a href="mailto:random.com">Get In Touch</a>
      </div>
    </section>
  );
};

export default Intro;
