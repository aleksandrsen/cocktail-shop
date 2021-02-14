import React from "react";
import "./user-account.scss";
// Components
import UserMenu from "./user-menu";
import UserInfo from "./user-info";

const UserAccount = () => {
  return (
    <section className="default-section cocktailsPage">
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <UserMenu />
          </div>
          <div className="col col-9">
            <UserInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
