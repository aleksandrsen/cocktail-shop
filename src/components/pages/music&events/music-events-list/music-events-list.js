import React, { useEffect } from "react";
import "./music-events-list.scss";
import { connect } from "react-redux";
// Events
import { loadEvents } from "../../../../actions";
// Selectors
import {
  eventsLoadingSelector,
  eventsLoadedSelector,
  eventsSelector,
} from "../../../../selectors";
// Components
import MusicEventItem from "../music-event-item/music-event-item";
import Spinner from "../../../spinner";

const MusicEventsList = ({ events, loadEvents, isLoading, isLoaded }) => {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadEvents();
    }
  });

  if (!isLoading && isLoaded) {
    return (
      <div className="music-events-list">
        {events.map((eventItem) => {
          return <MusicEventItem key={eventItem.id} eventItem={eventItem} />;
        })}
        <button className="default-button">More events</button>
      </div>
    );
  }
  return <Spinner />;
};

export default connect(
  (state) => {
    return {
      isLoading: eventsLoadingSelector(state),
      isLoaded: eventsLoadedSelector(state),
      events: eventsSelector(state),
    };
  },
  { loadEvents }
)(MusicEventsList);
