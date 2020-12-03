import React, { useEffect } from "react";
import "./side-panel-events-list.scss";
// Utils
import { connect } from "react-redux";
// Actions
import { fetchEventsList } from "../../../actions/events";
// Components
import SmallSpinner from "../../spinner";
import SideEventItem from "./side-event-item";

const SidePanelEventsList = ({ fetchEventsList, events }) => {
  useEffect(() => {
    fetchEventsList();
  }, []);

  return !events ? (
    <SmallSpinner />
  ) : (
    <div className="asideEventsList">
      {events.slice(0, 4).map((event) => (
        <SideEventItem key={event.id} eventItem={event} />
      ))}
    </div>
  );
};

export default connect((state) => ({ events: state.events.events }), {
  fetchEventsList,
})(SidePanelEventsList);
