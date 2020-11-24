import React, { useState } from "react";
// Components
import CocktailsFilters from "./cocktails-filters";
import CocktailsList from "./cocktails-list";
import SearchCocktailsForm from "./search-cocktails-form";
import SelectCocktails from "./select-cocktails";

const CocktailsPage = (props) => {
  const [filters, setFilters] = useState({});

  const setFilter = (type, value) => setFilters({ ...filters, [type]: value });

  return (
    <section className="default-section cocktails">
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <CocktailsFilters setFilter={setFilter} />
          </div>
          {/*<Col span={18}>*/}
          {/*  <Row*/}
          {/*    type="flex"*/}
          {/*    gutter={24}*/}
          {/*    justify="space-between"*/}
          {/*    align="middle"*/}
          {/*    style={{ marginBottom: "40px" }}*/}
          {/*  >*/}
          {/*    <Col span={12}>*/}
          {/*      <SelectCocktails setSortBy={this.setSortBy} />*/}
          {/*    </Col>*/}
          {/*    <Col span={12}>*/}
          {/*      <SearchCocktailsForm search={this.setSearchText} />*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*  /!*<CocktailsList params={params} sortBy={this.state.sortBy} searchText={this.state.searchText}/>*!/*/}
          {/*</Col>*/}
        </div>
      </div>
    </section>
  );
  // }
};

export default CocktailsPage;
