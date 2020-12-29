import React from "react";
import "./cocktails-select.scss";
// Components
import { Select } from "antd";
const { Option } = Select;

export type SortParamsValuesTypes =
  | "rate"
  | "price-h-l"
  | "price-l-h"
  | "name"
  | "";

type SortParamItem = {
  label: string;
  value: SortParamsValuesTypes;
};

const SORT_PARAMS: SortParamItem[] = [
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

type CocktailsSelectPropType = {
  handleSort: (value: SortParamsValuesTypes) => void;
};

const CocktailsSelect = ({ handleSort }: CocktailsSelectPropType) => (
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

export default React.memo(CocktailsSelect);
