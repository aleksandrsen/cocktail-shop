import React, { useEffect } from "react";
import "./next-events.scss";
// Utils
import { connect } from "react-redux";
// Actions
import { fetchNextEvents } from "../../../../actions/events";
// Components
import NextEventItem from "./next-event-item";
import FieldSkeleton from "../../../reusable-components/field-skeleton";

const NextEvents = ({ events, fetchNextEvents }) => {
  useEffect(() => {
    fetchNextEvents();
  }, []);

  return (
    <div className="small-section nextEvents">
      <div className="container">
        <h2 className="section-title">Don't miss our next events</h2>
        <div className="nextEvents__list">
          {events?.length
            ? events.map((event) => (
                <NextEventItem key={event.id} event={event} />
              ))
            : [0, 1].map((num) => (
                <FieldSkeleton
                  key={num}
                  styles={{ height: "75px" }}
                  className="nextEventsItem"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({ events: state.events.nextEvents }), {
  fetchNextEvents,
})(NextEvents);
