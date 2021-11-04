import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="menu-items">
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
    </div>
  );
};
