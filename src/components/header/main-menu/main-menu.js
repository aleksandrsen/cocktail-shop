import React from "react";
import "./main-menu.scss";
import { routes } from "../../../routes";
import MainMenuItem from "./main-menu-item";

const MainMenu = (props) => (
  <nav className="main-menu">
    <div className="nav-wrapper">
      <ul>
        {Object.values(routes).map(({ link, label }) => (
          <MainMenuItem key={link} link={link} label={label} />
        ))}
      </ul>
    </div>
  </nav>
);

export default MainMenu;
