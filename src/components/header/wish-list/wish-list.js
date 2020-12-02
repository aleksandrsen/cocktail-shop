import React from "react";
import "./wish-list.scss";
// Utils
import { connect } from "react-redux";
import { Icons } from "../../../src_/icons";

const WishList = ({ goods }) => (
  <div className="wishList">
    {!!Object.values(goods).length && (
      <span className="wishList__count">{Object.values(goods).length}</span>
    )}
    {Icons.wishList}
  </div>
);

export default connect(
  (state) => ({
    goods: state.user.wishList,
  }),
  null
)(WishList);
