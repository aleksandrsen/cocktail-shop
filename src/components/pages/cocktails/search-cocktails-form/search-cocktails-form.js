import React from "react";
import "./search-cocktails-form.scss";
// Components
import { Input } from "antd";

const SearchCocktailsForm = ({ handleSearch }) => (
  <form className="search-cocktails-form">
    <Input onChange={handleSearch} placeholder="Type to search cocktails" />
  </form>
);

export default SearchCocktailsForm;
