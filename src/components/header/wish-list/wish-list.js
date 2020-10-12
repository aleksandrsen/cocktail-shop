import React from "react";
import "./wish-list.scss";
import { connect } from "react-redux";
import { wishListAmountSelector } from "../../../selectors";
import { Icons } from "../../../src_/icons";

const WishList = ({ amount }) => (
  <div className="wish-list">
    {amount !== 0 && <span className="count">{amount}</span>}
    <svg>
      <use xlinkHref="#wishListIcon" />
    </svg>
    {Icons.wishList}
  </div>
);

export default connect((state) => ({
  amount: wishListAmountSelector(state),
}))(WishList);
