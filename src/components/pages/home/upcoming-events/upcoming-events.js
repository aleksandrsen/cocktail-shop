import React from "react";
import "./upcoming-events.scss";
// Components
import UpcomingEventItem from "./upcoming-event-item";

const UpcomingEvents = (props) => (
  <div className="default-section upcoming-events">
    <div className="container">
      <div className="section-title">Upcoming Events</div>
      <p className="default-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        dolore quibusdam sequiveritatisvoluptatibus. A consectetur doloremque
        ex, explicabo ipsa laboriosam neque, pariaturpraesentium quosrecusandae
        repellat saepe vero voluptatum.
      </p>
      <UpcomingEventItem />
    </div>
  </div>
);

export default UpcomingEvents;
