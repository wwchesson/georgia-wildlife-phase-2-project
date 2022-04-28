import React from "react";
import { Nav, NavLink, NavMenu } from "./StyleElements";

function NavBar() {
  return (
    <div className="navbar">
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/animals">
            Animals
          </NavLink>
          <NavLink to="/threatened">
            Threatened
          </NavLink>
          <NavLink to="/newanimal">
            Add Animal
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default NavBar;
