import React from "react";
import "./side-event-item.scss";
// Utils
import { formatDate, cutTextContent } from "../../../../utils";
// Components
import { Link } from "react-router-dom";
import FieldSkeleton from "../../../reusable-components/field-skeleton";
// Types
import { EventItemType } from "../../../../types/common";

type SideEventItemPropType = {
  eventItem: null | EventItemType;
};

const SideEventItem = ({ eventItem }: SideEventItemPropType) => {
  const day = formatDate(eventItem?.dateStart, { day: "numeric" });

  return (
    <Link to={`/music-events/${eventItem?.id}`} className="asideEventItem">
      <div className="asideEventItem__date">
        <div className="asideEventItem__day">
          {eventItem?.dateStart ? (
            +day < 10 ? (
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
          <svg width="16" height="16">
            <use xlinkHref="#side-panel-event-clock" />
          </svg>
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

export default React.memo(SideEventItem);
