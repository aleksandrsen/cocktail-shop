import React, { useEffect } from "react";
import "./upcoming-events.scss";
import img from "../../../../src_/img/upcoming-event-img.jpg";
import { fetchUpcomingEvent } from "../../../../actions/events";
import { connect } from "react-redux";
// Components
import EventCounter from "./event-counter";
import { Link } from "react-router-dom";
import RippleButton from "../../../reusable-components/Button";

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
          <div className="col col-4 upcomingEvent__info">
            <h3 className="upcomingEvent__title">THANKFUL</h3>
            <div className="upcomingEvent__date">
              ICON JUL 30, 2021, 05:00 PM
            </div>
            <p className="default-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              at autem deleniti esse expedita hic id illo ipsam iusto laborum
              minus nobis non officiis perferendis porro provident sed ullam
              voluptatibus!
            </p>
            <EventCounter date={new Date("2021-08-30T20:00")} />
            <div className="upcomingEvent__actions">
              <Link to={"/music-events/"} className="default-button">
                Events
              </Link>
              <RippleButton>Book on event</RippleButton>
            </div>
          </div>
          <div className="col col-6 upcomingEvent__img">
            <img src={img} alt="event-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { fetchUpcomingEvent })(UpcomingEvents);
