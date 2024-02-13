import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/pricing">
        Pricing
      </NavLink>
      <NavLink className="nav-link" to="products">
        Products
      </NavLink>
    </nav>
  );
}

export default Header;
