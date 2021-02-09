import React, { useState } from "react";
import "./my-account.scss";
// Components
import { Link } from "react-router-dom";
import ModalWrapper from "../../reusable-components/modal-wrapper";
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        asperiores commodi doloremque expedita in iure nostrum nulla, officiis
        optio sequi! A, deserunt magnam neque non perferendis sed sequi. Eaque,
        tempora!
      </ModalWrapper>
    </>
  );
};

export default connect((state: AppRootState) => ({
  isAuthenticated: state.user.isAuthenticated,
}))(React.memo(MyAccount));
