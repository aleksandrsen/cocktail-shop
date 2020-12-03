import React, { useEffect } from "react";
import "./next-events.scss";
// Utils
import { connect } from "react-redux";
// Actions
import { fetchNextEvents } from "../../../../actions/events";
// Components
import SmallSpinner from "../../../spinner";
import NextEventItem from "./next-event-item";

const NextEvents = ({ events, fetchNextEvents }) => {
  useEffect(() => {
    fetchNextEvents();
  }, []);

  return (
    <div className="small-section nextEvents">
      <div className="container">
        <h2 className="section-title">Don't miss our next events</h2>
        <div className="nextEvents__list">
          {events && events.length ? (
            events.map((event) => (
              <NextEventItem key={event.id} event={event} />
            ))
          ) : (
            <SmallSpinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({ events: state.events.nextEvents }), {
  fetchNextEvents,
})(NextEvents);
