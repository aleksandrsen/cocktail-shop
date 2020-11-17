import React from "react";
import "./side-event-item.scss";
// Utils
import { Icons } from "../../../../src_/icons";
import formatDate from "../../../../functions/format-date";
import cutTextContent from "../../../../functions/cut-text-content";
// Components
import { Link } from "react-router-dom";

const SideEventItem = ({ eventItem: { title, dateStart, dateEnd, id } }) => {
  const day = formatDate(dateStart, { day: "numeric" });

  return (
    <Link to={`/music-events/${id}`} className="asideEventItem">
      <div className="asideEventItem__date">
        <div className="asideEventItem__day">{day < 10 ? "0" + day : day}</div>
        <div className="asideEventItem__month">
          {formatDate(dateStart, {
            year: "numeric",
            month: "short",
          })}
        </div>
      </div>
      <div className="asideEventItem__info">
        <div className="asideEventItem__title">{cutTextContent(title, 54)}</div>
        <div className="asideEventItem__time">
          {Icons.clock}
          {formatDate(dateStart, { hour: "2-digit", minute: "2-digit" })} -{" "}
          {formatDate(dateEnd, { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </Link>
  );
};

export default SideEventItem;
