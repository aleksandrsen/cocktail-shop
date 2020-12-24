import React from "react";
import "./next-event-item.scss";
// Utils
import { Link } from "react-router-dom";
import { formatDate, cutTextContent } from "../../../../../utils";
// Types
import { EventItemType } from "../../../../../types/common";

type NextEventItemPropsType = {
  event: EventItemType;
};

const NextEventItem = ({
  event: { dateStart, id, title },
}: NextEventItemPropsType) => (
  <div className="nextEventsItem">
    <div className="nextEventsItem__info">
      <span className="nextEventsItem__date">
        {formatDate(dateStart, { month: "short", day: "numeric" })}
      </span>
      <span className="nextEventsItem__title">
        {formatDate(dateStart, { hour: "2-digit", minute: "2-digit" })}
      </span>
      <span className="nextEventsItem__time">{cutTextContent(title, 20)}</span>
    </div>
    <Link to={`/music-events/${id}`} className="nextEventsItem__details">
      Event details
    </Link>
  </div>
);

export default React.memo(NextEventItem);
