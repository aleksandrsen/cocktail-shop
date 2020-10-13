import React from "react";
import "./upcoming-events.scss";
// Components
import UpcomingEventItem from "./upcoming-event-item";
import EventCounter from "./event-counter";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../utils";
import img from "../../../../src_/img/our-story.png"

const UpcomingEvents = ({ event }) => {
  // const {title, date, text, nearestDate} = event;

  return (
    <section className="default-section upcomingEvent">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <div className="section-title">Upcoming Events</div>
            <p className="default-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio dolore quibusdam sequiveritatisvoluptatibus. A
              consectetur doloremque ex, explicabo ipsa laboriosam neque,
              pariaturpraesentium quosrecusandae repellat saepe vero voluptatum.
            </p>

          </div>
          <div className="col col-6">
            <img src={img} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
