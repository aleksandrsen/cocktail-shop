import React, { useState } from "react";
// Components
import CocktailsFilters from "./cocktails-filters";
import CocktailsList from "./cocktails-list";
import SearchCocktailsForm from "./search-cocktails-form";
import CocktailsSortSelect from "./cocktails-sort-select";
import {Input} from "antd";

const CocktailsPage = (props) => {
  const [filters, setFilters] = useState({});
  const [sortParam, setSortParam] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const setFilter = (type, value) => {
    const value_ = value.reduce((obj, field) => {
      obj[field.toLowerCase()] = field;
      return obj;
    }, {});

    setFilters({ ...filters, [type]: value_ })
  };

  const handleSort = (value) => setSortParam(value);

  const handleSearch = ({ target: { value } }) => setSearchValue(value);

  return (
    <section className="default-section">
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <CocktailsFilters setFilter={setFilter} />
          </div>
          <div className="col col-9">
            <div className="row">
              <div className="col col-6">
                <CocktailsSortSelect handleSort={handleSort} />
              </div>
              <div className="col col-6">
                <form className="search-cocktails-form">
                  <Input onChange={handleSearch} placeholder="Type to search cocktails" />
                </form>
              </div>
            </div>
            <CocktailsList params={{filters, sort: sortParam, searchValue}}/>
          </div>
        </div>
      </div>
    </section>
  );
  // }
};

export default CocktailsPage;
