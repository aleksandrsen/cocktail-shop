import React from "react";
import "./cocktails-filters.scss";
// Utils
import { ALCOHOLIC, CATEGORIES, INGREDIENTS } from "./filters";
// Components
import { Checkbox, Collapse } from "antd";
const { Panel } = Collapse;

const CocktailsFilters = ({ setFilter }) => (
  <aside className="aside-cocktails">
    <Collapse bordered={false} defaultActiveKey={["1"]}>
      <Panel header="Alcoholic" key="1">
        <Checkbox.Group
          options={ALCOHOLIC}
          onChange={(checkedValue) => setFilter("alcoholic", checkedValue)}
        />
      </Panel>
      <Panel header="Categories" key="2">
        <Checkbox.Group
          options={CATEGORIES}
          onChange={(checkedValue) => setFilter("category", checkedValue)}
        />
      </Panel>
      <Panel header="Ingredients" key="3">
        <Checkbox.Group
          options={INGREDIENTS}
          onChange={(checkedValue) => setFilter("ingredients", checkedValue)}
        />
      </Panel>
    </Collapse>
  </aside>
);

export default CocktailsFilters;
