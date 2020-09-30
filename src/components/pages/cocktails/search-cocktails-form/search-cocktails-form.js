import React from "react";
import "./search-cocktails-form.scss";
// Components
import { Input } from "antd";

const SearchCocktailsForm = (props) => (
  <form className="search-cocktails-form">
    <Input
      onChange={(e) => props.search(e.target.value)}
      placeholder="Type to search cocktails"
    />
  </form>
);

export default SearchCocktailsForm;
