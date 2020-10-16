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

const NextEvents = (props) => (
  <div className="small-section nextEvents">
    <div className="container">
      <h2 className="section-title">Don't miss our next events</h2>
      <div className="nextEvents__list">
        {[0, 1].map((item) => (
          <NextEventItem
            key={item}
            event={{
                id: item,
                date: "2021-08-30T20:00",
                title: "adsfasdf"
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default connect(
  (state) => ({
    loading: eventsLoadingSelector(state),
    loaded: eventsLoadedSelector(state),
    events: eventsSelector(state),
  }),
  { loadEvents }
)(NextEvents);
