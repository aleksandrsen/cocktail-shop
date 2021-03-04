import React, { useEffect } from "react";
import "./next-events.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
// Actions
import { fetchNextEvents } from "../../../../actions/events";
// Components
import NextEventItem from "./next-event-item";
import FieldSkeleton from "../../../reusable-components/field-skeleton";
// Types
import { AppRootState } from "../../../../store";
import { EventItemType } from "../../../../types/common";

type NextEventsPropsType = {
  events: EventItemType[] | null;
  fetchNextEvents: () => void;
};

const NextEvents = ({ events, fetchNextEvents }: NextEventsPropsType) => {
  useEffect(() => {
    fetchNextEvents();
  }, []);

  return (
    <div className="small-section nextEvents">
      <div className="container">
        <h2 className="section-title">Don't miss our next events</h2>
        <div className="nextEvents__list">
          {events?.length
            ? events.map((event, idx) => (
                <NextEventItem key={event.id} event={event} idx={idx}/>
              ))
            : getSkeletons(2, FieldSkeleton, {
                styles: { height: "75px" },
                className: "nextEventsItem",
              })}
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ events: state.events.nextEvents }),
  {
    fetchNextEvents,
  }
)(React.memo(NextEvents));
