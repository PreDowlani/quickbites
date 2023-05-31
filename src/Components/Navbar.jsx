import React from "react";
import { NavLink } from "react-router-dom";
import chefLogo from "../images/chefLogo.png";
import { useTranslation } from "react-i18next";

const lang = {
  en: "English",
  es: "Spanish",
  de: "German",
};

const Navbar = ({ changeLanguage }) => {
  const { t, i18n } = useTranslation();

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
            {t("home-container.menu.home")}
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks" to={"/menu"}>
            {t("home-container.menu.menu")}
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks" to={"/contact"}>
            {t("home-container.menu.contact")}
          </NavLink>
        </li>
        <li>
          <button className="setlang" onClick={() => changeLanguage("es")}>
            Es
          </button>
          <button className="setlang" onClick={() => changeLanguage("en")}>
            En
          </button>
          <button className="setlang" onClick={() => changeLanguage("de")}>
            De
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
