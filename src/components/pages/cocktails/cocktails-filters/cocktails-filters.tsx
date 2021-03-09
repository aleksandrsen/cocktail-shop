import React, { useCallback } from "react";
import "./cocktails-filters.scss";
// Types
import { CheckboxValueType } from "antd/es/checkbox/Group";
// Utils
import { ALCOHOLIC, CATEGORIES, INGREDIENTS } from "./filters";
// Components
import { Checkbox, Collapse } from "antd";
const { Panel } = Collapse;

type CocktailsFiltersPropsType = {
  setFilter: (type: string, checkedValue: CheckboxValueType[]) => void;
};

const CocktailsFilters = ({ setFilter }: CocktailsFiltersPropsType) => {
  const handleFilter = useCallback(
    (filterStr: string) => (checkedValue: any) =>
      setFilter(filterStr, checkedValue),
    [setFilter]
  );

  return (
    <aside className="aside-cocktails">
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        <Panel header="Alcoholic" key="1">
          <Checkbox.Group
            options={ALCOHOLIC}
            onChange={(checkedValue) => setFilter("alcoholic", checkedValue)}
            // onChange={handleFilter("alcoholic")}
          />
        </Panel>
        <Panel header="Categories" key="2">
          <Checkbox.Group
            options={CATEGORIES}
            // onChange={handleFilter("category")}
            onChange={(checkedValue) => setFilter("category", checkedValue)}
          />
        </Panel>
        <Panel header="Ingredients" key="3">
          <Checkbox.Group
            options={INGREDIENTS}
            // onChange={handleFilter("ingredients")}
            onChange={(checkedValue) => setFilter("ingredients", checkedValue)}
          />
        </Panel>
      </Collapse>
    </aside>
  );
};

export default React.memo(CocktailsFilters);
