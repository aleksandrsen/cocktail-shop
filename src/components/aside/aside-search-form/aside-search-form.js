import React, { useState } from "react";
import "./aside-search-form.scss";
// Components
import { Input } from "antd";

const { Search } = Input;

const AsideSearchForm = (props) => {
  let [searchText, setSearchText] = useState("");

  return (
    <form className="aside-search-form">
      <h3 className="aside-search-form-title">Search</h3>
      <Search
        placeholder="Enter key words"
        value={searchText}
        onSearch={(value) => setSearchText(value)}
        enterButton
      />
    </form>
  );
};

export default AsideSearchForm;
