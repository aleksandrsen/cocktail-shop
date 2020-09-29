import React from "react";
import "./shopping-cart.scss";
import { connect } from "react-redux";
import { cartAmountSelector } from "../../../selectors";

const ShoppingCart = ({ amount }) => (
  <a href="#" className="shopping-cart">
    <i className="small material-icons">shopping_cart</i>
    {amount !== 0 && <span className="count">{amount}</span>}
  </a>
);

export default connect((state) => {
  return {
    amount: cartAmountSelector(state),
  };
})(ShoppingCart);
