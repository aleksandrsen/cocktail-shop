import React from "react";
import "./user-profile.scss";
// Components
import UserMenu from "./user-menu";
import UserInfo from "./user-info";
import UserCard from "./user-card";
import UserWishList from "./user-wish-list";
import { Route, Switch } from "react-router-dom";
// Utils
import { userMenu } from "../../header/my-account/my-account";

const UserProfile = () => (
  <section className="default-section userProfile">
    <div className="container">
      <div className="row">
        <div className="col col-3">
          <UserMenu />
        </div>
        <div className="col col-9">
          <Switch>
            <Route path={userMenu.userProfile.link} component={UserInfo} />
            <Route path={userMenu.userWishList.link} component={UserWishList} />
            <Route path={userMenu.userCard.link} component={UserCard} />
          </Switch>
        </div>
      </div>
    </div>
  </section>
);

export default UserProfile;
