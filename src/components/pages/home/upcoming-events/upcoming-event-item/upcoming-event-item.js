import React from "react";
import "./upcoming-event-item.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cutTextContent } from "../../../../../utils";
// Components
import EventCounter from "../event-counter";
// import UpcomingEventDate from "../upcoming-event-date";
import Spinner from "../../../../spinner";
// Selectors
import {
  eventsLoadingSelector,
  eventsLoadedSelector,
  eventsSelector,
} from "../../../../../selectors";

const UpcomingEventItem = ({ loading, loaded, events }) => {
  if (!loading && loaded) {
    let { dateStart, title, text, middleImg } = events[0];
    let eventText = cutTextContent(text, 300);
    let nearestEventDate = new Date(Date.parse(dateStart));

    return (
      <div className="row upcoming-event-item">
        <div className="col event-info">
          <h3 className="upcoming-event-title">{title}</h3>
          {/*<UpcomingEventDate date={nearestEventDate} />*/}
          <p className="default-text">{eventText}</p>
          <EventCounter date={nearestEventDate} />
          <div className="upcoming-event-actions">
            <Link to={"/music-events/"} className="default-button">
              Events
            </Link>
            <button className="default-button">Book on event</button>
          </div>
        </div>
        <div className="col col-5 event-img">
          <img src={middleImg} alt="event-img" />
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
  null
)(UpcomingEventItem);
