import { NavLink } from "react-router-dom";

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="navigation">
      <div className="icon">
        <FontAwesomeIcon icon={faDroplet} className="drop-icon" />
      </div>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/register">
        Become a donor
      </NavLink>
      <NavLink className="nav-link" to="/donors-list">
        View donors
      </NavLink>
    </nav>
  );
}

export default Header;
