import React from "react";
import "./next-event-item.scss";
import { Link } from "react-router-dom";
import { formatDate, cutTextContent } from "../../../../../utils";

const NextEventItem = ({ event: { date, id, title } }) => (
  <div className="nextEventsItem">
    <div className="nextEventsItem__info">
      <span className="nextEventsItem__date">
        {formatDate(date, { month: "short", day: "numeric" })}
      </span>
      <span className="nextEventsItem__title">
        {formatDate(date, { hour: "2-digit", minute: "2-digit" })}
      </span>
      <span className="nextEventsItem__time">{cutTextContent(title, 20)}</span>
    </div>
    <Link to={`/music-events/${id}`} className="nextEventsItem__details">
      Event details
    </Link>
  </div>
);

export default NextEventItem;
