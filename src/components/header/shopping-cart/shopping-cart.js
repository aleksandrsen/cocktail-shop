import React from "react";
import "./shopping-cart.scss";
import { connect } from "react-redux";
import { cartAmountSelector } from "../../../selectors";
import {Icons} from "../../../src_/icons";

const ShoppingCart = ({ amount }) => (
  <div className="shopping-cart">
    {Icons.shoppingCard}
    {amount !== 0 && <span className="count">{amount}</span>}
  </div>
);

export default connect((state) => {
  return {
    amount: cartAmountSelector(state),
  };
})(ShoppingCart);
