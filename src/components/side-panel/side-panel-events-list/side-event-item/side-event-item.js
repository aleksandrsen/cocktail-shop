import React from "react";
import "./side-event-item.scss";
// Utils
import { Icons } from "../../../../src_/icons";
import { formatDate, cutTextContent } from "../../../../utils";
// Components
import { Link } from "react-router-dom";
import FieldSkeleton from "../../../reusable-components/field-skeleton";

const SideEventItem = ({ eventItem }) => {
  const day = formatDate(eventItem?.dateStart, { day: "numeric" });

  return (
    <Link to={`/music-events/${eventItem?.id}`} className="asideEventItem">
      <div className="asideEventItem__date">
        <div className="asideEventItem__day">
          {day ? (
            day < 10 ? (
              "0" + day
            ) : (
              day
            )
          ) : (
            <FieldSkeleton
              styles={{ padding: "20px 32px", marginBottom: "5px" }}
            />
          )}
        </div>
        <div className="asideEventItem__month">
          {eventItem ? (
            formatDate(eventItem.dateStart, {
              year: "numeric",
              month: "short",
            })
          ) : (
            <FieldSkeleton styles={{ padding: "10px 32px" }} />
          )}
        </div>
      </div>
      <div className="asideEventItem__info">
        {eventItem?.title ? (
          <div className="asideEventItem__title">
            {cutTextContent(eventItem.title, 54)}
          </div>
        ) : (
          <FieldSkeleton
            styles={{ padding: "16px" }}
            className="asideEventItem__title"
          />
        )}

        <div className="asideEventItem__time">
          {Icons.clock}
          {eventItem ? (
            `${formatDate(eventItem.dateStart, {
              hour: "2-digit",
              minute: "2-digit",
            })}-${formatDate(eventItem.dateEnd, {
              hour: "2-digit",
              minute: "2-digit",
            })}`
          ) : (
            <FieldSkeleton styles={{ padding: "10px 32px", width: "100%" }} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default SideEventItem;
