import React from "react";
import "./main-menu.scss";
import { routes } from "../../../config/routes";
import { NavLink } from "react-router-dom";

const MainMenu = (props) => (
  <nav className="mainMenu">
    {Object.values(routes).map(({ link, label }) => (
      <NavLink
        to={link}
        key={label}
        exact={link === "/"}
        activeClassName="active"
        className="mainMenu__item"
      >
        {label}
      </NavLink>
    ))}
  </nav>
);

export default MainMenu;
