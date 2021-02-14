import React from "react";
import "./user-menu.scss";
// Components
import { Link } from "react-router-dom";
// Utils
import { userMenu } from "../../../header/my-account/my-account";

const UserMenu = () => {
  return (
    <section className="default-section userMenu">
      <div className="userMenu__mainInfo">
        <svg width="30" height="30">
          <use xlinkHref="#user-menu-my-account" />
        </svg>
        <div className="infoWrapper">
          <div className="fullName textOverflow">FirstName LastName</div>
          <div className="email textOverflow">userEmail@gmail.com</div>
        </div>
      </div>
      <ul className="userMenu__list">
        {userMenu
          .filter((item) => item.link && item.link !== "/account")
          .map(({ label, link, iconId }) => (
            <li key={label} className="userMenu_listItem">
              <Link to={link} className="userMenu__link">
                <div className="listItemIcon">
                  <svg width="16" height="16">
                    <use xlinkHref={iconId} />
                  </svg>
                </div>
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UserMenu;
