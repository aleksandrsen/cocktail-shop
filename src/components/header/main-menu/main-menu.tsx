import React from "react";
import "./main-menu.scss";
// Utils
import { routes } from "../../../config/routes";
// Components
import { NavLink } from "react-router-dom";

const MainMenu = () => (
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

export default React.memo(MainMenu);
