import { GitHub } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";

import "./topbar.scss";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jin.
          </a>
          <div className="itemContainer">
            <a
              className="github"
              href="https://github.com/Jingu-web"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icon" />
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/jingu_web"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
