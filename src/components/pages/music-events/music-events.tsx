import React from "react";
// Components
import SidePanel from "../../side-panel";
import MusicEventsList from "./music-events-list";

const MusicEvents = () => (
  <section className="default-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-6">
          <MusicEventsList />
        </div>
        <div className="col col-3">
          <SidePanel />
        </div>
      </div>
    </div>
  </section>
);

export default MusicEvents;
