import React from "react";
import "./wish-list.scss";
// Components
import { Link } from "react-router-dom";
// Utils
import { connect } from "react-redux";
// Types
import { AppRootState } from "../../../store";
import { UserWishListType } from "../../../types/common";

type WishListPropsType = {
  goods: UserWishListType;
};

const WishList = ({ goods }: WishListPropsType) => (
  <Link to="/profile/wishlist" className="wishList">
    {!!Object.values(goods).length && (
      <span className="wishList__count">{Object.values(goods).length}</span>
    )}
    <svg width="25" height="25">
      <use xlinkHref="#wish-list-header" />
    </svg>
  </Link>
);

export default connect((state: AppRootState) => ({
  goods: state.user.wishList,
}))(React.memo(WishList));
