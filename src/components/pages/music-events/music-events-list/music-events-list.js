import React, { useEffect } from "react";
import "./music-events-list.scss";
// Utils
import { connect } from "react-redux";
// Actions
import { fetchEventsList } from "../../../../actions/events";
// Components
import SmallSpinner from "../../../spinner";
import RippleButton from "../../../reusable-components/Button";
import MusicEventItem from "../music-event-item/music-event-item";

const MusicEventsList = ({ fetchEventsList, events }) => {
  useEffect(() => {
    fetchEventsList();
  }, []);

  return !events ? (
    <SmallSpinner />
  ) : (
    <div className="musicEventsList">
      {events.map((eventItem) => (
        <MusicEventItem key={eventItem.id} eventItem={eventItem} />
      ))}
      <RippleButton>Load more events</RippleButton>
    </div>
  );
};

export default connect((state) => ({ events: state.events.events }), {
  fetchEventsList,
})(MusicEventsList);
