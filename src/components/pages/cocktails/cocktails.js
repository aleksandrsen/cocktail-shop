import React, { useState } from "react";
import "./cocktails.scss";
// Components
import CocktailsList from "./cocktails-list";
import CocktailsSelect from "./cocktails-select";
import CocktailsFilters from "./cocktails-filters";
// Utils
import { Icons } from "../../../src_/icons";

const Cocktails = (props) => {
  const [filters, setFilters] = useState({});
  const [sortParam, setSortParam] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const setFilter = (type, value) => {
    const value_ = value.reduce((obj, field) => {
      obj[field.toLowerCase()] = field;
      return obj;
    }, {});

    setFilters({ ...filters, [type]: value_ });
  };

  const handleSort = (value) => setSortParam(value);

  const handleSearch = ({ target: { value } }) => setSearchValue(value);

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
                  {Icons.searchIcon}
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

export default Cocktails;
