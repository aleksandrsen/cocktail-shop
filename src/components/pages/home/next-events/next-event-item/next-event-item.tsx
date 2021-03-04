import React from "react";
import "./next-event-item.scss";
// Components
// @ts-ignore
import Fade from "react-reveal/Fade";
// Utils
import { Link } from "react-router-dom";
import { formatDate } from "../../../../../utils";
// Types
import { EventItemType } from "../../../../../types/common";

type NextEventItemPropsType = {
  idx?: number;
  event: EventItemType;
};

const NextEventItem = ({
  idx,
  event: { dateStart, id, title },
}: NextEventItemPropsType) => (
  <Fade left={idx === 0} right={idx !== 0}>
    <div className="nextEventsItem">
      <div className="nextEventsItem__info">
        <span className="nextEventsItem__date">
          {formatDate(dateStart, { month: "short", day: "numeric" })}
        </span>
        <span className="nextEventsItem__title">
          {formatDate(dateStart, { hour: "2-digit", minute: "2-digit" })}
        </span>
        <span className="nextEventsItem__time textOverflow">{title}</span>
      </div>
      <Link to={`/music-events/${id}`} className="nextEventsItem__details">
        Event details
      </Link>
    </div>
  </Fade>
);

export default React.memo(NextEventItem);
