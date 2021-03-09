import React, { useEffect } from "react";
import "./music-events-list.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
// Actions
import { fetchEventsList } from "../../../../actions/events";
// Components
import MusicEventItem from "../music-event-item";
import RippleButton from "../../../reusable-components/ripple-button";
// Types
import { AppRootState } from "../../../../store";
import { EventItemType } from "../../../../types/common";

type MusicEventsListPropsType = {
  fetchEventsList: () => void;
  events: null | EventItemType[];
};

const MusicEventsList = ({
  fetchEventsList,
  events,
}: MusicEventsListPropsType) => {
  useEffect(() => {
    fetchEventsList();
  }, [fetchEventsList]);

  return (
    <div className="musicEventsList">
      {events
        ? events.map((eventItem) => (
            <MusicEventItem key={eventItem.id} eventItem={eventItem} />
          ))
        : getSkeletons(7, MusicEventItem)}
      <RippleButton>Load more events</RippleButton>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ events: state.events.events }),
  {
    fetchEventsList,
  }
)(React.memo(MusicEventsList));
