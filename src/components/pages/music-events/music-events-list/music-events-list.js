import React, { useEffect } from "react";
import "./music-events-list.scss";
// Utils
import { connect } from "react-redux";
// Actions
import { fetchEventsList } from "../../../../actions/events";
// Components
import MusicEventItem from "../music-event-item";
import RippleButton from "../../../reusable-components/ripple-button";

const MusicEventsList = ({ fetchEventsList, events }) => {
  useEffect(() => {
    fetchEventsList();
  }, []);

  return (
    <div className="musicEventsList">
      {events
        ? events.map((eventItem) => (
            <MusicEventItem key={eventItem.id} eventItem={eventItem} />
          ))
        : new Array(7)
            .fill(1)
            .map((num, idx) => (
              <MusicEventItem key={`${num}${idx}`} eventItem={null} />
            ))}
      <RippleButton>Load more events</RippleButton>
    </div>
  );
};

export default connect((state) => ({ events: state.events.events }), {
  fetchEventsList,
})(MusicEventsList);
