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

export const userMenu = {
  userProfile: {
    label: "Profile",
    link: "/profile/info",
    iconId: "#user-icon-home",
  },
  userWishList: {
    label: "Wish list",
    link: "/profile/wishlist",
    iconId: "#user-menu-wish-list",
  },
  userCard: {
    label: "Card",
    link: "/profile/card",
    iconId: "#user-menu-cart",
  },
  userOrders: {
    label: "Orders",
    link: "/profile/orders",
    iconId: "#user-menu-orders",
  },
  userWatchedGoods: {
    label: "Watched goods",
    link: "/profile/watched-goods",
    iconId: "#password-eye",
  },
  userBookedEvents: {
    label: "Booked events",
    link: "/profile/booked-events",
    iconId: "#user-menu-events",
  },
  userMessages: {
    label: "Messages",
    link: "/profile/messages",
    iconId: "#user-menu-message",
  },
  userReviews: {
    label: "Reviews",
    link: "/profile/reviews",
    iconId: "#user-menu-review",
  },
  logOut: {
    label: "Log out",
    iconId: "",
    link: "",
  },
};

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
            {Object.values(userMenu).map(({ label, link }) => (
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
