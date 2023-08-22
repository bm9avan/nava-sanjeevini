import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavBar.css";

const NavBar = () => {
  const [lang, setLang] = useState("kn");
  const { t, i18n } = useTranslation("global");

  function switchHandler() {
    if (lang === "kn") {
      i18n.changeLanguage("en");
      setLang("en");
    } else {
      i18n.changeLanguage("kn");
      setLang("kn");
    }
  }

  return (
    <>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
            end={true}
          >
            {t("nav.1")}
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/loan"
          >
            {t("nav.2")}
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            {t("nav.3")}
          </NavLink>
        </li>
        <li className="lang">
          <button onClick={switchHandler}>
            {lang === "kn" ? "English" : "ಕನ್ನಡ"}
          </button>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
