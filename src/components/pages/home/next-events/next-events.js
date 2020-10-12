import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./next-events.scss";
// Actions
import { loadEvents } from "../../../../actions";
// Selectors
import {
  eventsSelector,
  eventsLoadedSelector,
  eventsLoadingSelector,
} from "../../../../selectors";
// Components
import NextEventItem from "./next-event-item";
import Spinner from "../../../spinner";

const NextEvents = ({ loading, loaded, events, loadEvents }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadEvents();
    }
  });

  if (!loading && loaded) {
    return (
      <div className="small-section next-events-section">
        <div className="container">
          <h2 className="section-title">Don't miss our next events</h2>
          <div className="next-events-container">
            {events.slice(0, 2).map(({ id, dateStart, title }) => (
              <NextEventItem key={id} date={dateStart} id={id} title={title} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <Spinner />;
};

export default connect(
  (state) => ({
    loading: eventsLoadingSelector(state),
    loaded: eventsLoadedSelector(state),
    events: eventsSelector(state),
  }),
  { loadEvents }
)(NextEvents);
