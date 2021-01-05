import React from "react";
import "./shopping-cart.scss";
// Utils
import { connect } from "react-redux";

const ShoppingCart = ({ goods }) => (
  <div className="shoppingCart">
    <svg>
      <use xlinkHref="#shopping-cart" />
    </svg>
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
