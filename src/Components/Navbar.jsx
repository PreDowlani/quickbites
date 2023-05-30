import React from "react";
import { NavLink } from "react-router-dom";
import chefLogo from "../images/chefLogo.png";
import { useTranslation, i18n } from "react-i18next";
import es from "../images/es.png";
import ing from "../images/ing.png";

const Navbar = () => {
  const { t } = useTranslation();

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
        <li>
          <button>
            <select>
              <option value="es">Spanish</option>
              <option value="ing">English</option>
            </select>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
