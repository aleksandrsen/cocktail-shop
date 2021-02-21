import React from "react";
import "./user-menu.scss";
// Components
import { NavLink } from "react-router-dom";
// Utils
import { userMenu } from "../../../header/my-account/my-account";

const UserMenu = () => (
  <section className="default-section userMenu">
    <NavLink
      to={userMenu.userProfile.link}
      className="userMenu__mainInfo"
      activeClassName="active"
    >
      <svg width="30" height="30">
        <use xlinkHref="#user-menu-my-account" />
      </svg>
      <div className="infoWrapper">
        <div className="fullName textOverflow">FirstName LastName</div>
        <div className="email textOverflow">userEmail@gmail.com</div>
      </div>
    </NavLink>
    <ul className="userMenu__list">
      {Object.values(userMenu)
        .filter((item) => item.link && item.link !== "/profile/info")
        .map(({ label, link, iconId }) => (
          <li key={label} className="userMenu_listItem">
            <NavLink
              to={link}
              className="userMenu__link"
              activeClassName="active"
            >
              <div className="listItemIcon">
                <svg width="16" height="16">
                  <use xlinkHref={iconId} />
                </svg>
              </div>
              {label}
            </NavLink>
          </li>
        ))}
    </ul>
  </section>
);

export default UserMenu;
