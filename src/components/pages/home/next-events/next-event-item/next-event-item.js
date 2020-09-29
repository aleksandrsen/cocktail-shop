import React from "react";
import "./next-event-item.scss";
import { Link } from "react-router-dom";
import { formatDate, cutTextContent } from "../../../../../utils";

const NextEventItem = ({ date, id, title }) => (
  <div className="next-event-item">
    <div className="next-event-info">
      <span className="next-event-date">
        {formatDate(date, { month: "short", day: "numeric" })}
      </span>
      <span className="next-event-title">
        {formatDate(date, { hour: "2-digit", minute: "2-digit" })}
      </span>
      <span className="next-event-time">{cutTextContent(title, 20)}</span>
    </div>
    <Link to={`/music-events/${id}`} className="next-event-details">
      Event details
    </Link>
  </div>
);

export default NextEventItem;
