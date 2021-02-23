import React, { useState } from "react";
import "./user-wisht-list.scss";
// Components
import RippleButton from "../../../reusable-components/ripple-button";
import CocktailItem from "../../cocktails/cocktails-list/cocktail-item";
// Utils
import { connect } from "react-redux";
import { AppRootState } from "../../../../store";
// Types
import { UserWishListType } from "../../../../types/common";
import CustomCheckbox from "../../../reusable-components/custom-checkbox";

type UserWishListPropsType = {
  wishList: UserWishListType;
};

const UserWishList = ({ wishList }: UserWishListPropsType) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  const toggleSelectAll = (checked: boolean) => setSelectAll(checked);

  return (
    <section className="default-section userWishList">
      <h2 className="userProfile__title">Wish list</h2>
      <div className="userWishList__options">
        <div className="userWishList__selectAllWrapper">
          <CustomCheckbox
            value={selectAll}
            onChange={toggleSelectAll}
            label="Select All"
          />
        </div>
      </div>
      <ul className="userWishList__list"></ul>
      <div className="userWishList__controls">
        <div className="userWishList__price">2234</div>
        <RippleButton>Buy</RippleButton>
      </div>
    </section>
  );
};

export default connect(
  (state: AppRootState) => ({
    wishList: state.user.wishList,
  }),
  null
)(UserWishList);
