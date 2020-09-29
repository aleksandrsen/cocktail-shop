import React from "react";
import "./main-menu-item.scss";
import { NavLink } from "react-router-dom";

const MainMenuItem = ({ link, label }) => (
  <li className="main-menu-item">
    <NavLink exact to={link} activeClassName="active">
      {label}
    </NavLink>
  </li>
);

export default MainMenuItem;
