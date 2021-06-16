import React, { useState, useEffect } from "react";
import "./user-wisht-list.scss";
// Components
import { Select } from "antd";
import RippleButton from "../../../reusable-components/ripple-button";
import CocktailItem from "../../cocktails/cocktails-list/cocktail-item";
import CustomCheckbox from "../../../reusable-components/custom-checkbox";
// Utils
import { connect } from "react-redux";
import { AppRootState } from "../../../../store";
import { getTotalValue } from "../../../../utils";
import emptyWishListImg from "../../../../src_/img/empty-wish-list.jpg";
// Types
import { UserWishListType } from "../../../../types/common";
import { onChangeCustomCheckBoxFuncType } from "../../../reusable-components/custom-checkbox/custom-checkbox";

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

type SelectedItemsType = {
  [key: number]: boolean;
};

type UserWishListPropsType = {
  wishList: UserWishListType;
};

const { Option } = Select;
const UserWishList = ({ wishList }: UserWishListPropsType) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectedItemsType>({});
  const [sortBy, setSortBy] = useState("");

  const formatter = new Intl.NumberFormat("ru");

  useEffect(() => {
    if (Object.values(wishList).length)
      setSelectedItems(
        Object.values(wishList).reduce((obj: SelectedItemsType, item) => {
          obj[item.id] = false;
          return obj;
        }, {})
      );
  }, [wishList]);

  const handleSort = (value: string) => setSortBy(value);

  const getTotalPrice = (): number => {
    const arr =
      Object.values(selectedItems).length &&
      Object.values(selectedItems).some((bool) => bool)
        ? Object.values(wishList).filter(({ id }) => selectedItems[id])
        : Object.values(wishList);

    // @ts-ignore
    return getTotalValue(arr, "price");
  };

  const handleCheckbox: onChangeCustomCheckBoxFuncType = (
    value,
    e,
    { id }
  ): void => {
    const res = { ...selectedItems };

    if (id === "selectAll") {
      for (const id in res) {
        res[id] = !selectAll;
      }
    } else {
      res[id] = value;
    }

    const isAllChecked = Object.values(res).every((bool) => bool);
    setSelectAll(isAllChecked);
    setSelectedItems(res);
  };

  return (
    <section className="default-section userWishList">
      <h2 className="userProfile__title">Wish list</h2>
      <div className="userWishList__options">
        <CustomCheckbox
          value={selectAll}
          data={{ id: "selectAll" }}
          onChange={handleCheckbox}
          label="Select All"
        />
        <button
          className="userWishList__deleteBtn"
          disabled={!Object.values(selectedItems).length}
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
      <div
        className={`userWishList__list row ${
          !Object.values(wishList).length ? "center" : ""
        }`}
      >
        {!Object.values(wishList).length ? (
          <img src={emptyWishListImg} />
        ) : (
          [...Object.values(wishList)].map((cocktail) => (
            <CocktailItem
              col={3}
              key={cocktail.id}
              cocktail={cocktail}
              isShowCheckBox={true}
              handleCheckbox={handleCheckbox}
              checked={selectedItems[cocktail.id]}
              imgSkeletonStyles={{ height: "220px" }}
            />
          ))
        )}
      </div>
      {Object.values(wishList).length > 0 && (
        <div className="userWishList__controls">
          <span className="userWishList__price">
            {formatter.format(getTotalPrice())} $
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
)(React.memo(UserWishList));
