import React from "react";
import "./shopping-cart.scss";
// Utils
import { connect } from "react-redux";
// Types
import { AppRootState } from "../../../store";
import { UserCardType } from "../../../types/common";

type ShoppingCartPropsType = {
  goods: UserCardType;
};

const ShoppingCart = ({ goods }: ShoppingCartPropsType) => (
  <div className="shoppingCart">
    <svg>
      <use xlinkHref="#shopping-cart" />
    </svg>
    {!!Object.values(goods).length && (
      <span className="shoppingCart__count">{Object.values(goods).length}</span>
    )}
  </div>
);

export default connect((state: AppRootState) => ({
  goods: state.user.card,
}))(ShoppingCart);
