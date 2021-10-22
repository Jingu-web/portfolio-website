import { GitHub } from "@material-ui/icons";

import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"container " + (menuOpen && "active")}>
      <div className="menu">
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="itemContainer">
        <GitHub className="github-icon" />
      </div>
    </div>
  );
};
