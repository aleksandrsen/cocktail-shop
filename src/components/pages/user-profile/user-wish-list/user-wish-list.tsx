import React, { useState } from "react";
import "./user-wisht-list.scss";
// Components
import { Select } from "antd";
import RippleButton from "../../../reusable-components/ripple-button";
import CocktailItem from "../../cocktails/cocktails-list/cocktail-item";
import CustomCheckbox from "../../../reusable-components/custom-checkbox";
// Utils
import { connect } from "react-redux";
import { AppRootState } from "../../../../store";
import emptyWishListImg from "../../../../src_/img/empty-wish-list.jpg";
// Types
import { UserWishListType } from "../../../../types/common";

type SortParamItem = {
  label: string;
  value: string;
};

const SORT_PARAMS: SortParamItem[] = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "By date added",
    value: "date",
  },
  {
    label: "Price: high to low",
    value: "price-h-l",
  },
  {
    label: "Price: low to high",
    value: "price-l-h",
  },
];

type UserWishListPropsType = {
  wishList: UserWishListType;
};

const { Option } = Select;
const UserWishList = ({ wishList }: UserWishListPropsType) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [sortBy, setSortBy] = useState("");

  const toggleSelectAll = (checked: boolean) => setSelectAll(checked);

  const handleSort = (value: string) => setSortBy(value);

  const formatter = new Intl.NumberFormat("ru");

  return (
    <section className="default-section userWishList">
      <h2 className="userProfile__title">Wish list</h2>
      <div className="userWishList__options">
        <CustomCheckbox
          value={selectAll}
          onChange={toggleSelectAll}
          label="Select All"
        />
        <button
          className={`userWishList__deleteBtn ${
            Object.values(selectedItems).length ? "active" : ""
          }`}
        >
          <svg width="16" height="16">
            <use xlinkHref="#delete-bucket" />
          </svg>
          Delete
        </button>
        <Select
          onChange={handleSort}
          className="userWishList__select"
          placeholder="Sort cocktails by..."
        >
          {SORT_PARAMS.map(({ label, value }) => (
            <Option
              key={label}
              value={value}
              className="userWishList__selectOption"
            >
              {label}
            </Option>
          ))}
        </Select>
      </div>
      <ul className="userWishList__list">
        {!Object.values(wishList).length ? (
          <li className="userWishList__empty">
            <img src={emptyWishListImg} />
          </li>
        ) : (
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            dolorem, eveniet exercitationem reprehenderit similique tenetur.
            Corporis, culpa cupiditate doloremque esse in itaque, iure iusto
            laboriosam modi possimus repellat similique voluptate?
          </li>
        )}
      </ul>
      {Object.values(wishList).length > 0 && (
        <div className="userWishList__controls">
          <span className="userWishList__price">
            {formatter.format(2234)} $
          </span>
          <RippleButton>Buy</RippleButton>
        </div>
      )}
    </section>
  );
};

export default connect(
  (state: AppRootState) => ({
    wishList: state.user.wishList,
  }),
  null
)(UserWishList);
