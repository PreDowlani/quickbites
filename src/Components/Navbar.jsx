import React from "react";
import { NavLink } from "react-router-dom";
import chefLogo from "../images/chefLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to={"/"}>
            <div className="navbar-logo">
              <img src={chefLogo} alt="logo" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks" to={"/menu"}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks" to={"/contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
