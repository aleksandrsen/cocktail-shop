import React from "react";
import "./main-menu.scss";
import { routes } from "../../../routes";
import { NavLink } from "react-router-dom";

const MainMenu = (props) => (
  <nav className="mainMenu">
    {Object.values(routes).map(({ link, label }) => (
      <NavLink
        exact
        to={link}
        activeClassName="active"
        className="mainMenu__item"
      >
        {label}
      </NavLink>
    ))}
  </nav>
);

export default MainMenu;
