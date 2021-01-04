import React from "react";
import "./wish-list.scss";
// Utils
import { connect } from "react-redux";

const counter = () => ({ type: "COUNTER" });

const WishList = ({ goods, counter }) => (
  <div className="wishList">
    <button onClick={counter} style={{ padding: "16px", fontSize: "18px" }}>
      Counter
    </button>
    {!!Object.values(goods).length && (
      <span className="wishList__count">{Object.values(goods).length}</span>
    )}
    <svg width="25" height="25">
      <use xlinkHref="#wish-list-header" />
    </svg>
  </div>
);

export default connect(
  (state) => ({
    goods: state.user.wishList,
  }),
  { counter }
)(WishList);
