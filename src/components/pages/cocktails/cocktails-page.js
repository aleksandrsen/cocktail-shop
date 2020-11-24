import React, { useState } from "react";
// Components
import CocktailsFilters from "./cocktails-filters";
import CocktailsList from "./cocktails-list";
import SearchCocktailsForm from "./search-cocktails-form";
import CocktailsSortSelect from "./cocktails-sort-select";

const CocktailsPage = (props) => {
  const [filters, setFilters] = useState({});
  const [sortParam, setSortParam] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const setFilter = (type, value) => setFilters({ ...filters, [type]: value });

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
                <SearchCocktailsForm handleSearch={handleSearch} />
              </div>
            </div>
            {/*<CocktailsList params={params} sortBy={this.state.sortBy} searchText={this.state.searchText}/>*/}
          </div>
        </div>
      </div>
    </section>
  );
  // }
};

export default CocktailsPage;
