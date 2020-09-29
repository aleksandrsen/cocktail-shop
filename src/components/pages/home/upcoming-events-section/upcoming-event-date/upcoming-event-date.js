import React from "react";
import "./upcoming-event-date.scss";
import { formatDate } from "../../../../../utils";

const UpcomingEventDate = ({ date }) => (
  <div className="upcoming-event-date">
    <i className="small material-icons">calendar_today</i>
    <span className="format-event-date">
      {formatDate(date, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  </div>
);

export default UpcomingEventDate;
