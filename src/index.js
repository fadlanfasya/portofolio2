import React, { Component } from "react";
import ReactDOM from "react-dom";
import Aside from "./componets/main/Aside";
import Nav from "./componets/main/Nav";
import Intro from "./componets/main/Intro";
import AboutMe from "./componets/main/AboutMe";
import Experience from "./componets/main/Experience";
import MainProject from "./componets/main/MainProject";
import GetInTouch from "./componets/main/GetInTouch";
import Footer from "./componets/main/Footer";
import Zoom from "react-reveal/Zoom";


import "./styles.css";

class Main extends Component {
  constructor(props) {
    const orientation = window.innerWidth < 700 ? "horizontal" : "vertical";
    super(props);
    this.wrapperAside = React.createRef();
    this.wrapperHamburgerButton = React.createRef();
    this.state = { menuIsOpen: false, orientation: orientation };
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperAside &&
      !this.wrapperAside.current.contains(event.target)
    ) {
      if (this.state.menuIsOpen) {
        if (!this.wrapperHamburgerButton.current.contains(event.target)) {
          this.toggleMenu();
        }
      }
    }
  };

  handleResize = (event) => {
    const windowSize = window.innerWidth;
    if (windowSize < 700) {
      this.setState({ menuIsOpen: false, orientation: "horizontal" });
    } else {
      this.setState({ orientation: "vertical" });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("resize", this.handleResize);
  }

  bodyOverFlow = () => {
    if (!this.state.menuIsOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
    this.bodyOverFlow();
  };

  render() {
    this.bodyOverFlow();
    const menuIsOpen = this.state.menuIsOpen;
    return (
      <React.Fragment>
        <div className="hamburger-content">
          <ul
            ref={this.wrapperHamburgerButton}
            className={
              menuIsOpen ? "open hamburger-button" : "close hamburger-button"
            }
            onClick={this.toggleMenu}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Aside ref={this.wrapperAside} class={menuIsOpen ? "open" : "close"} />
        <Nav />
        <section className={menuIsOpen ? "blur" : null}>
          <Zoom>
            <Intro />
          </Zoom>
          <Zoom>
            <AboutMe id="about" />
          </Zoom>
          <Zoom>
            <Experience id="experience" orientation={this.state.orientation} />
          </Zoom>

          <Zoom>
            <MainProject
              bigTitle="Some Things I’ve Built"
              id="projects"
              // liveCode="https://codesandbox.io/s/mancity-0fygx"
              projectImg="https://i.ibb.co/wMh6YnF/image-5.png"
              // projectLink="https://0fygx.csb.app/"
              mainTitle="WorkForLife"
              content="A web app for search job"
              technologies={[
                "HTML5",
                "CSS3",
                "JS",
                "Laravel",
                "Tailwind CSS",
                "MySQL"
              ]}
              gitHub="https://github.com/fadlanfasya/WorkForLife.git"
            />
            <MainProject
              id="projects"
              // liveCode="https://codesandbox.io/s/mancity-0fygx"
              projectImg="https://i.ibb.co/1TnWtgm/image-2023-03-06-151000656.png"
              // projectLink="https://0fygx.csb.app/"
              mainTitle="PMIS LAPI ITB"
              content="A system information web app for bla bla"
              technologies={[
                "HTML5",
                "CSS3",
                "JS",
                "Codeigniter",
                "Vuetify",
                "MySQL"
              ]}
              // gitHub="https://github.com/fadlanfasya/WorkForLife.git"            
            />
          </Zoom>
          <Zoom>
            <GetInTouch id="contact" />
          </Zoom>
          <Zoom>
            <Footer />
          </Zoom>
        </section>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
