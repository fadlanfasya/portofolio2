import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from "@material-ui/icons/Code";

const Footer = () => {
  return (
    <footer>
      <div className="socialMedia">
        <ul>
          <li>
            <a
              href="https://github.com/fadlanfasya"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-fadlan-fasya-5444b912a/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B97c4aa4d-62e2-479d-9897-ab6ce9002508"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
            {/* <a
              href="https://codesandbox.io/u/DONROB3R7/sandboxes"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <CodeIcon style={{ fontSize: 30 }} />
            </a> */}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
