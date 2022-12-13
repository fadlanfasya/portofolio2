import React from "react";

const AboutMe = (props) => {
  return (
    <section className="main about_me" id={props.id}>
      <div className="about_me left">
        <div className="about_title">
          <h3>About Me</h3>
        </div>

        <div className="about_content">
          <p>Hello! I'm Robert, a software engineer based in Berlin.</p>
          <p>
            I enjoy turning complex problems into simple solutions. When I’m not
            coding or pushing pixels into components, you’ll find me learning
            new technologies.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Vue</li>
            <li>WordPress</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="about_me right">
        <div className="about_img">
          <picture>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEHUvKC_aYXOQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=TiRLx3xv8i6hxwSz4yVa2w1qva5t_Xv4e5bJMOsH90I"
              alt="rex"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
