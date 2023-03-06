import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const value = this.state.value;
    return (
      <React.Fragment>
        <div className="experience_title">
          <h3>My Experience</h3>
        </div>

        <div className="jss92" id={this.props.id}>
          <Tabs
            orientation={this.props.orientation}
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
            className="jss93"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Lapi ITB"
              id="vertical-tab-0"
              aria-controls="vertical-tabpanel-0"
            />
            <Tab
              label="Artifisial Intelegensia Indonesia"
              id="vertical-tab-1"
              aria-controls="vertical-tabpanel-1"
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <h3>
              <span>Software Engineer Intern</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.lapi-itb.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Lapi ITB
                </a>
              </span>
            </h3>
            <p className="timeline">Aug 2022 - Dec 2022</p>

            <ul className="company-jobs">
              <li>
                Collaborating closely with the team to support projects during
                all phases of delivery.
              </li>
              <li>Bringing mock-ups to life using HTML, CSS, JavaScript.</li>
              <li>Working with a custom CSM</li>
              <li>
                Developed and optimised a complex website using React, PHP, CSS,
                HTML
              </li>
              <li>
                Developed and maintained code for in-house and client websites
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3>
              <span>Front End Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.nexern.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Nexern Gmbh
                </a>
              </span>
            </h3>
            <p className="timeline">Apr 2018 - Oct 2019</p>

            <ul className="company-jobs">
              <li>Created user interfaces using React.</li>
              <li>
                Used jQuery to make the HTML and CSS interact with JavaScript
                functions in order to develop dynamic web pages.
              </li>
              <li>
                Communicated and collaborated with different departaments, from
                designers, project managers, content writers, Seo experts; to
                adding new Front-End features to existent websites.
              </li>
              <li>
                Developed and optimised a complex betting calculator app with
                over 30 differents bet types
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3>
              <span>Junior Front End Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.nexern.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  Nexern Gmbh
                </a>
              </span>
            </h3>
            <p className="timeline">Jul 2016 - Mar 2018</p>

            <ul className="company-jobs">
              <li>Searched and fixed small errors in CSS.</li>
              <li>Updated the new elements for the new content.</li>
              <li>Used Dev Tools on Chrome and Firefox for fixing bugs.</li>
              <li>Updated and created the new PHP scripts.</li>
              <li>Worked closely with designers, creating great interfaces.</li>
              <li>Worked extensively with Javascript, HTML5 and CSS3.</li>
            </ul>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <h3>
              <span>Junior Front-end Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <span className="inline-link">Ibps Gmbh</span>
              </span>
            </h3>
            <p className="timeline">Nov 2015 - Jun 2016</p>

            <ul className="company-jobs">
              <li>
                Creating layouts in Photoshop and turning them into working
                websites
              </li>
              <li>Creating flavicon icon designs.</li>
              <li>Using Dev Tools on Chrome and Firefox for fixing bugs.</li>
              <li>Creating 3D effects and animations with CSS3.</li>
              <li>
                Manually tested sites in various browsers and mobile devices to
                ensure responsiveness
              </li>
            </ul>
          </TabPanel>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
