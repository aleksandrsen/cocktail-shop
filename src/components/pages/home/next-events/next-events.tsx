import React, { useEffect, useRef } from "react";
import "./next-events.scss";
// Components
// @ts-ignore
import Fade from "react-reveal/Fade";
import NextEventItem from "./next-event-item";
import FieldSkeleton from "../../../reusable-components/field-skeleton";
// Actions
import { fetchNextEvents } from "../../../../actions/events";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
import { useIsShowAnimation } from "../../../../utils/hooks";

// Types
import { AppRootState } from "../../../../store";
import { EventItemType } from "../../../../types/common";

type NextEventsPropsType = {
  events: EventItemType[] | null;
  fetchNextEvents: () => void;
};

const NextEvents = ({ events, fetchNextEvents }: NextEventsPropsType) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    fetchNextEvents();
  }, [fetchNextEvents]);

  // const isShowAnimation = useIsShowAnimation(sectionRef);

  return (
    <div ref={sectionRef} className="small-section nextEvents">
      <div className="container">
        <h2 className="section-title">Don't miss our next events</h2>
        <div className="nextEvents__list">
          {events?.length
            ? events.map((event, idx) => (
                <Fade
                  key={event.id}
                  left={!idx && 0}
                  // left={!idx && isShowAnimation}
                  // right={!!idx && isShowAnimation}
                  right={!!idx && 0}
                >
                  <NextEventItem event={event} />
                </Fade>
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
