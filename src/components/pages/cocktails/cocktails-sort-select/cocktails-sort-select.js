import React from "react";
import "./cocktails-sort-select.scss";
// Components
import { Select } from "antd";
const { Option } = Select;

const SORT_PARAMS = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Rate",
    value: "rate",
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

const CocktailsSortSelect = ({ handleSort }) => (
  <Select
    onChange={handleSort}
    className="selectCocktails"
    placeholder="Sort cocktails by..."
  >
    {SORT_PARAMS.map(({ label, value }) => (
      <Option key={label} value={value} className="selectCocktails__options">
        {label}
      </Option>
    ))}
  </Select>
);

export default CocktailsSortSelect;
