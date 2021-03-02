import React, { useEffect } from "react";
import "./upcoming-events.scss";
// Actions
import { fetchUpcomingEvent } from "../../../../actions/events";
// Utils
import { connect } from "react-redux";
import { cutTextContent, formatDate } from "../../../../utils";
// Components
import { Link } from "react-router-dom";
import EventCounter from "./event-counter";
import BookEventModal from "./book-event-modal";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../reusable-components/field-skeleton";
// Types
import { EventItemType } from "../../../../types/common";
import { AppRootState } from "../../../../store";

type UpcomingEventsPropsType = {
  event: null | EventItemType;
  fetchUpcomingEvent: () => void;
};

const UpcomingEvents = ({
  event,
  fetchUpcomingEvent,
}: UpcomingEventsPropsType) => {
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
          <div className="col col-4 col-lg-5 col-md-8 col-sm-11 upcomingEvent__info">
            <h3 className="upcomingEvent__title textOverflow">
              {event?.title}
            </h3>
            <div className="upcomingEvent__date">
              <svg width="16" height="16">
                <use xlinkHref="#event-counter-date" />
              </svg>
              {event?.dateStart ? (
                formatDate(event.dateStart)
              ) : (
                <FieldSkeleton
                  styles={{
                    padding: "15px 0",
                    width: "50%",
                  }}
                />
              )}
            </div>
            <p className="default-text">
              {event?.description ? (
                cutTextContent(event.description, 100)
              ) : (
                <FieldSkeleton
                  styles={{
                    padding: "35px 0",
                    width: "100%",
                  }}
                />
              )}
            </p>
            {event?.dateStart ? (
              <EventCounter date={event.dateStart} />
            ) : (
              <FieldSkeleton
                styles={{
                  padding: "40px 0",
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
            )}
            <div className="upcomingEvent__actions">
              {event?.id ? (
                <Link to={"/music-events/"} className="default-button">
                  Events
                </Link>
              ) : (
                <FieldSkeleton
                  styles={{
                    padding: "20px 60px",
                  }}
                />
              )}
              {event?.id ? (
                <BookEventModal event={event}/>
              ) : (
                <FieldSkeleton
                  styles={{
                    padding: "20px 60px",
                    marginLeft: "16px",
                  }}
                />
              )}
            </div>
          </div>
          <div className="col col-6 col-md-8 col-sm-11 upcomingEvent__img">
            <ImgSkeleton
              src={event?.previewSrc}
              title={event?.title}
              skeletonStyle={{ height: "100%", minHeight: "450px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  (state: AppRootState) => ({ event: state.events.upcomingEvent }),
  {
    fetchUpcomingEvent,
  }
)(React.memo(UpcomingEvents));
