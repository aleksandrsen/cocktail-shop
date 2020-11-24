import React, { useEffect } from "react";
import "./event-details.scss";
// Components
import Map from "../contact/map";
import SmallSpinner from "../../spinner";
import SocialNetworks from "../../social-networks";
import PubPartners from "../bartenders/pub-partners";
// Actions
import { fetchEventDetails } from "../../../actions/events";
// Utils
import { connect } from "react-redux";
import { formatDate } from "../../../utils";
import { Icons } from "../../../src_/icons";

const EventDetails = ({
  eventDetails,
  fetchEventDetails,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    fetchEventDetails(id);
  }, []);

  return !eventDetails ? (
    <SmallSpinner />
  ) : (
    <section className="default-section eventDetails">
      <div className="container">
        <h2 className="section-title">{eventDetails.title}</h2>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          alias aperiam dolorem exercitationem fugit in ipsa ipsum libero,
          maiores minus nihil obcaecati pariatur perspiciatis quas quibusdam
          sint ullam voluptate voluptatibus?
        </p>
        <img
          className="eventDetails__img"
          src={eventDetails.previewSrc}
          alt=""
        />
        <p className="eventDetails__description">{eventDetails.description}</p>
        <div className="eventDetails__details">
          <div className="eventDetails__item">
            {Icons.clock}
            {formatDate(eventDetails.dateStart, {
              month: "long",
              day: "numeric",
              weekday: "long",
              hour: "numeric",
              minute: "numeric",
            })}
            , in hub on pubs
          </div>
          <div className="eventDetails__item">
            {Icons.location}
            {eventDetails.address}
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
  (state) => ({ eventDetails: state.events.eventDetails }),
  { fetchEventDetails }
)(EventDetails);
