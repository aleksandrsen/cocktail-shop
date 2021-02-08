import React from "react";
import "./my-account.scss";
// Components
import { Link } from "react-router-dom";
// Utils
import { connect } from "react-redux";
// Types
import { AppRootState } from "../../../store";

const userMenu = [
  {
    label: "Wish list",
    link: "/wishlist",
  },
  {
    label: "Card",
    link: "/Card",
  },
  {
    label: "Orders",
    link: "/Orders",
  },
  {
    label: "Watched goods",
    link: "/watched-goods",
  },
  {
    label: "Booked events",
    link: "/booked-events",
  },
  {
    label: "Messages",
    link: "/messages",
  },
  {
    label: "Log out",
    link: "/",
  },
];

type MyAccountPropType = {
  isAuthenticated: boolean;
};

const MyAccount = ({ isAuthenticated }: MyAccountPropType) => (
  <div className="myAccount">
    {!isAuthenticated ? (
      <button className="myAccount__logIn">Log in</button>
    ) : (
      <>
        <svg className="myAccount__userIcon" width="25" height="25">
          <use xlinkHref="#my-account" />
        </svg>
      </>
    )}
    {isAuthenticated && (
      <ul className="myAccount__menuList">
        {userMenu.map(({ label, link }) => (
          <li key={label}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default connect((state: AppRootState) => ({
  isAuthenticated: state.user.isAuthenticated,
}))(React.memo(MyAccount));