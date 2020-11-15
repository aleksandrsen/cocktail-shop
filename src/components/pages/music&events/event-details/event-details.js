import React, { useEffect } from "react";
import "./event-details.scss";
import clockIcon from "../../../../img/icons/clock-regular.svg";
import { connect } from "react-redux";
import mapIcon from "../../../../img/icons/map-icon.svg";
// Components
import Share from "../../../share/share";
import formatDate from "../../../../functions/format-date";
import Map from "../../contact/map";
import PubPartners from "../../bartenders/pub-partners";
// Actions
import { loadEventById } from "../../../../actions";
// Selectors
import {
  eventItemLoadedSelector,
  eventItemSelector,
  eventItemLoadingSelector,
  eventItemIdSelector,
} from "../../../../selectors";
import Spinner from "../../../spinner";

const EventDetails = ({
  eventId,
  oldEventItemId,
  isLoading,
  isLoaded,
  eventItem,
  loadEventById,
}) => {
  useEffect(() => {
    if ((!isLoading && !isLoaded) || eventId !== oldEventItemId) {
      loadEventById(eventId);
    }
  });

  if (!isLoading && isLoaded) {
    let { title, bigImg, dateStart, text } = eventItem;
    let eventDate = formatDate(dateStart, {
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    });
    let address = "New York, 345 Park AveNY 10154, USA";

    return (
      <section className="default-section event-details">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <p className="default-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            alias aperiam dolorem exercitationem fugit in ipsa ipsum libero,
            maiores minus nihil obcaecati pariatur perspiciatis quas quibusdam
            sint ullam voluptate voluptatibus?
          </p>
        </div>
        <img className="event-img" src={bigImg} alt="" />
        <div className="container">
          <p className="default-text description">{text}</p>
          <div className="event-details">
            <div className="event-detail-item">
              <img className="icon-item" src={clockIcon} alt="clock-icon" />
              {eventDate}, in hub on pubs
            </div>
            <div className="event-detail-item">
              <img className="icon-item" src={mapIcon} alt="map-icon" />
              {address}
            </div>
          </div>
          <Share />
        </div>
        <Map />
        <PubPartners />
      </section>
    );
  }

  return <Spinner />;
};

export default connect(
  (state) => ({
    isLoading: eventItemLoadingSelector(state),
    isLoaded: eventItemLoadedSelector(state),
    oldEventItemId: eventItemIdSelector(state),
    eventItem: eventItemSelector(state),
  }),
  { loadEventById }
)(EventDetails);
