import React from "react";
import { Nav, NavLink, NavMenu } from "./StyleElements";

function NavBar({ onNavClick }) {
  return (
    <div className="navbar">
      <Nav>
        <NavMenu>
          <NavLink to="/" onClick={() => onNavClick(false)}>
            Home
          </NavLink>
          <NavLink to="/animals" onClick={() => onNavClick(true)}>
            Animals
          </NavLink>
          <NavLink to="/threatened" onClick={() => onNavClick(true)}>
            Threatened
          </NavLink>
          <NavLink to="/newanimal" onClick={() => onNavClick(false)}>Add Animal</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default NavBar;
