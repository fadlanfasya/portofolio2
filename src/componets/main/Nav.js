import React from "react";
import { Link } from "react-scroll";

const Nav = (props) => {
  return (
    <header>
      <nav className={props.class}>
        <a className="logo" href="/" aria-label="home">
          F
        </a>
        <div className="main nav">
          <ul className="nav-list">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a className="resume" href="https://drive.google.com/file/d/1yEs0a5ZJAf5_HVVUsBGD_Sdv0Dealpr-/view?usp=sharing">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
