import React, { useEffect } from "react";
import "./event-details.scss";
// Components
import Map from "../contact/map";
import SocialNetworks from "../../social-networks";
import PubPartners from "../bartenders/pub-partners";
import ImgSkeleton from "../../reusable-components/img-skeleton";
import FieldSkeleton from "../../reusable-components/field-skeleton";
// Actions
import { fetchEventDetails } from "../../../actions/events";
// Utils
import { connect } from "react-redux";
import { match } from "react-router-dom";
import { formatDate } from "../../../utils";
// Types
import { AppRootState } from "../../../store";
import { EventItemType } from "../../../types/common";

type MatchTypeParams = {
  id: string;
};

type EventDetailsPropsType = {
  eventDetails: null | EventItemType;
  fetchEventDetails: (id: number) => void;
  match: match<MatchTypeParams>;
};

const EventDetails = ({
  eventDetails,
  fetchEventDetails,
  match: {
    params: { id },
  },
}: EventDetailsPropsType) => {
  useEffect(() => {
    fetchEventDetails(+id);
  }, []);

  return (
    <section className="default-section eventDetails">
      <div className="container">
        {eventDetails ? (
          <h2 className="section-title">{eventDetails?.title}</h2>
        ) : (
          <FieldSkeleton
            styles={{
              padding: "16px 150px",
              marginBottom: "16px",
              display: "inline-block",
            }}
          />
        )}
        {eventDetails ? (
          <p className="default-text">{eventDetails.description}</p>
        ) : (
          <FieldSkeleton
            styles={{ padding: "64px 64px" }}
            className="default-text"
          />
        )}
        <ImgSkeleton
          src={eventDetails?.previewSrc}
          classes={["eventDetails__img"]}
          skeletonStyle={{ height: "300px", width: "400px", margin: "auto" }}
        />
        {eventDetails ? (
          <p className="eventDetails__description">
            {eventDetails.description}
          </p>
        ) : (
          <FieldSkeleton
            className="eventDetails__description"
            styles={{ padding: "32px" }}
          />
        )}
        <div className="eventDetails__details">
          <div className="eventDetails__item">
            <svg width="16" height="16">
              <use xlinkHref="#clock" />
            </svg>
            {eventDetails ? (
              `${formatDate(eventDetails.dateStart, {
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
              })}, in hub on pubs`
            ) : (
              <FieldSkeleton styles={{ padding: "14px 120px" }} />
            )}
          </div>
          <div className="eventDetails__item">
            <svg width="16" height="16">
              <use xlinkHref="#location" />
            </svg>
            {eventDetails ? (
              eventDetails.address
            ) : (
              <FieldSkeleton styles={{ padding: "14px 120px" }} />
            )}
          </div>
          <div className="eventDetails__item">
            <SocialNetworks exclude="youtube" />
          </div>
        </div>
      </div>
      <Map />
      <PubPartners />
    </section>
  );
};

export default connect(
  (state: AppRootState) => ({ eventDetails: state.events.eventDetails }),
  { fetchEventDetails }
)(React.memo(EventDetails));
