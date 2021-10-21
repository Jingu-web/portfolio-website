import { GitHub } from "@material-ui/icons";

import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jin.
          </a>
          <div className="itemContainer">
            <GitHub className="github-icon" />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
