import React, { useState } from "react";
import "./side-panel.scss";
// Components
import AsidePostsList from "./aside-posts-list";
import InstagramGallery from "./instagram-gallery";
import SidePanelEventsList from "./side-panel-events-list";

const SidePanel = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setSearchValue(value);

  return (
    <aside className="sidePanel">
      <div className="sidePanel__item">
        <h3 className="sidePanel__title search">Search</h3>
        <div className="sidePanel__searchWrapper">
          <svg width="16" height="16">
            <use xlinkHref="#search-icon" />
          </svg>
          <input
            type="text"
            placeholder="Enter key words"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="sidePanel__item">
        <h3 className="sidePanel__title">Upcoming events</h3>
        <SidePanelEventsList />
      </div>
      <div className="sidePanel__item">
        <h3 className="sidePanel__title">Recent Posts</h3>
        <AsidePostsList />
      </div>
      <div className="sidePanel__item">
        <h3 className="sidePanel__title">Instagram</h3>
        <InstagramGallery />
      </div>
    </aside>
  );
};

export default React.memo(SidePanel);
