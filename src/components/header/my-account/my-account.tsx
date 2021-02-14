import React, { useState } from "react";
import "./my-account.scss";
// Components
import Auth from "../../auth";
import { Link } from "react-router-dom";
import ModalWrapper from "../../reusable-components/modal-wrapper";
// Utils
import { connect } from "react-redux";
// Types
import { AppRootState } from "../../../store";

export const userMenu = [
  {
    label: "My account",
    link: "/account",
    iconId: "#user-icon-home",
  },
  {
    label: "Wish list",
    link: "/account//wishlist",
    iconId: "#user-menu-wish-list",
  },
  {
    label: "Card",
    link: "/account/card",
    iconId: "#user-menu-cart",
  },
  {
    label: "Orders",
    link: "/account/orders",
    iconId: "#user-menu-orders",
  },
  {
    label: "Watched goods",
    link: "account/watched-goods",
    iconId: "#password-eye",
  },
  {
    label: "Booked events",
    link: "account/booked-events",
    iconId: "#user-menu-events",
  },
  {
    label: "Messages",
    link: "account/messages",
    iconId: "#user-menu-message",
  },
  {
    label: "Reviews",
    link: "account/reviews",
    iconId: "#user-menu-review",
  },
  {
    label: "Log out",
    iconId: "",
    link: "",
  },
];

type MyAccountPropType = {
  isAuthenticated: boolean;
};

const MyAccount = ({ isAuthenticated }: MyAccountPropType) => {
  const [isOpenLogin, setIsOpen] = useState(false);

  const toggleIsOpenLogin = () => setIsOpen(!isOpenLogin);

  return (
    <>
      <div className="myAccount">
        {!isAuthenticated ? (
          <button className="myAccount__logIn" onClick={toggleIsOpenLogin}>
            Log in
          </button>
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
      <ModalWrapper isOpen={isOpenLogin} toggleOpen={toggleIsOpenLogin}>
        <Auth toggleOpen={toggleIsOpenLogin} />
      </ModalWrapper>
    </>
  );
};

export default connect((state: AppRootState) => ({
  isAuthenticated: state.user.isAuthenticated,
}))(React.memo(MyAccount));
