import React, { useEffect } from "react";
import "./side-panel-events-list.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../utils";
// Actions
import { fetchEventsList } from "../../../actions/events";
// Components
import SideEventItem from "./side-event-item";

const SidePanelEventsList = ({ fetchEventsList, events }) => {
  useEffect(() => {
    fetchEventsList();
  }, []);

  return (
    <div className="asideEventsList">
      {events
        ? events
            .slice(0, 4)
            .map((event) => <SideEventItem key={event.id} eventItem={event} />)
        : getSkeletons(4, SideEventItem)}
    </div>
  );
};

export default connect((state) => ({ events: state.events.events }), {
  fetchEventsList,
})(SidePanelEventsList);
