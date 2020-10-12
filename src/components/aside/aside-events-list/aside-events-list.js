import React, { useEffect } from "react";
import "./aside-events-list.scss";
import { connect } from "react-redux";
// Actions
import { loadEvents } from "../../../actions";
// Selectors
import {
  eventsLoadedSelector,
  eventsLoadingSelector,
  eventsSelector,
} from "../../../selectors";
// Components
import AsideEventItem from "./aside-event-item";
import Spinner from "../../spinner";

const AsideEventsList = ({ isLoading, isLoaded, events, loadEvents }) => {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadEvents();
    }
  });

  if (!isLoading && isLoaded) {
    return (
      <div className="aside-events-list">
        {events.slice(0, 4).map((event) => {
          return <AsideEventItem key={event.id} eventItem={event} />;
        })}
      </div>
    );
  }
  return <Spinner />;
};

export default connect(
  (state) => ({
    isLoading: eventsLoadingSelector(state),
    isLoaded: eventsLoadedSelector(state),
    events: eventsSelector(state),
  }),
  { loadEvents }
)(AsideEventsList);