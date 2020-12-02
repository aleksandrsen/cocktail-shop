import React from "react";
import "./shopping-cart.scss";
// Utils
import { connect } from "react-redux";
import { Icons } from "../../../src_/icons";

const ShoppingCart = ({ goods }) => (
  <div className="shoppingCart">
    {Icons.shoppingCard}
    {!!Object.values(goods).length && (
      <span className="shoppingCart__count">{Object.values(goods).length}</span>
    )}
  </div>
);

export default connect(
  (state) => ({
    goods: state.user.card,
  }),
  null
)(ShoppingCart);
