import React, { useEffect } from "react";
import "./upcoming-events.scss";
// Actions
import { fetchUpcomingEvent } from "../../../../actions/events";
// Utils
import { connect } from "react-redux";
import { Icons } from "../../../../src_/icons";
import { cutTextContent, formatDate } from "../../../../utils";
// Components
import { Link } from "react-router-dom";
import EventCounter from "./event-counter";
import RippleButton from "../../../reusable-components/ripple-button";
import ImgSkeleton from "../../../reusable-components/skeleton";

const UpcomingEvents = ({ event, fetchUpcomingEvent }) => {
  useEffect(() => {
    fetchUpcomingEvent();
  }, []);

  return (
    <section className="default-section upcomingEvent">
      <div className="container">
        <div className="upcomingEvent__header">
          <div className="section-title">Upcoming Events</div>
          <p className="default-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            dolore quibusdam sequiveritatisvoluptatibus. A consectetur
            doloremque ex, explicabo ipsa laboriosam neque, pariaturpraesentium
            quosrecusandae repellat saepe vero voluptatum.
          </p>
        </div>
        <div className="row justify-content-center">
          {event ? (
            <div className="col col-4 upcomingEvent__info">
              <h3 className="upcomingEvent__title">{event.title}</h3>
              <div className="upcomingEvent__date">
                {Icons.calendar}
                {formatDate(event.dateStart)}
              </div>
              <p className="default-text">
                {cutTextContent(event.description, 100)}
              </p>
              <EventCounter date={event.dateStart} />
              <div className="upcomingEvent__actions">
                <Link to={"/music-events/"} className="default-button">
                  Events
                </Link>
                <RippleButton>Book on event</RippleButton>
              </div>
            </div>
          ) : (
            <div className="upcomingEvent__skeleton col col-4" />
          )}
          <div className="col col-6 upcomingEvent__img">
            <ImgSkeleton
              src={event?.previewSrc}
              title={event?.title}
              skeletonStyle={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({ event: state.events.upcomingEvent }), {
  fetchUpcomingEvent,
})(UpcomingEvents);
