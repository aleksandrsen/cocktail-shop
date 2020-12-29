import React, { useState, ChangeEvent, useCallback } from "react";
import "./cocktails.scss";
// Components
import CocktailsList from "./cocktails-list";
import CocktailsSelect from "./cocktails-select";
import CocktailsFilters from "./cocktails-filters";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { SortParamsValuesTypes } from "./cocktails-select/cocktails-select";
// Types

type Filters = {
  [key: string]: CheckboxValueType;
};

export type AllFilters = {
  [key: string]: Filters;
};

const Cocktails = () => {
  const [filters, setFilters] = useState<AllFilters>({});
  const [sortParam, setSortParam] = useState<SortParamsValuesTypes>("");
  const [searchValue, setSearchValue] = useState("");

  const setFilter = useCallback((type: string, value: CheckboxValueType[]) => {
    const value_ = value.reduce((obj: Filters, field): Filters => {
      obj[`${field}`.toLowerCase()] = field;
      return obj;
    }, {});

    setFilters({ ...filters, [type]: value_ });
  }, []);

  const handleSort = useCallback(
    (value: SortParamsValuesTypes) => setSortParam(value),
    []
  );

  const handleSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(value);

  return (
    <section className="default-section cocktailsPage">
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <CocktailsFilters setFilter={setFilter} />
          </div>
          <div className="col col-9">
            <div className="row align-items-center flex-end">
              <div className="col col-4 cocktailsPage__searchInputCol">
                <div className="inputWrapper">
                  <svg>
                    <use xlinkHref="#search-icon" />
                  </svg>
                  <input
                    value={searchValue}
                    onChange={handleSearch}
                    placeholder="Type to search cocktails"
                  />
                </div>
              </div>
              <div className="col col-3">
                <CocktailsSelect handleSort={handleSort} />
              </div>
            </div>
            <CocktailsList params={{ filters, sort: sortParam, searchValue }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Cocktails);
