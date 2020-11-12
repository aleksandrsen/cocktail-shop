import React, { useState } from "react";
import "./aside.scss";
// Components
import AsidePostsList from "./aside-posts-list";
import AsideEventsList from "./aside-events-list";
import InstagramGallery from "./instagram-gallery";
// Utils
import { Icons } from "../../src_/icons";

const SidePanel = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({ target: { value } }) => setSearchValue(value);

  return (
    <aside className="sidePanel">
      <div className="sidePanel__item">
        <h3 className="sidePanel__title search">Search</h3>
        <div className="sidePanel__searchWrapper">
          {Icons.searchIcon}
          <input
            type="text"
            placeholder="Enter key words"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
      {/*<div className="aside-item">*/}
      {/*    <h3 className="title">Upcoming events</h3>*/}
      {/*    <AsideEventsList/>*/}
      {/*</div>*/}
      {/*<div className="aside-item">*/}
      {/*    <h3 className="title">Recent Posts</h3>*/}
      {/*    <AsidePostsList/>*/}
      {/*</div>*/}
      {/*<div className="aside-item">*/}
      {/*    <h3 className="title">Instagram</h3>*/}
      {/*    <InstagramGallery/>*/}
      {/*</div>*/}
    </aside>
  );
};

export default SidePanel;
