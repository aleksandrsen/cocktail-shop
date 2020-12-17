import React from "react";
import "./music-event-item.scss";
// Components
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
// Utils
import { formatDate, cutTextContent } from "../../../../utils";
import FieldSkeleton from "../../../reusable-components/field-skeleton";

const MusicEventItem = ({ eventItem }) => (
  <div className="musicEventItem">
    <div className="row noWrap">
      <div className="col col-6">
        <ImgSkeleton
          src={eventItem?.previewSrc}
          title={eventItem?.title}
          skeletonStyle={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="col col-6">
        {eventItem ? (
          <Tippy
            content={eventItem.title}
            theme="bootstrap"
            disabled={eventItem.title.length <= 25}
          >
            <Link
              to={`/music-events/${eventItem.id}`}
              className="musicEventItem__title"
            >
              {cutTextContent(eventItem.title, 22)}
            </Link>
          </Tippy>
        ) : (
          <FieldSkeleton
            styles={{ padding: "16px" }}
            className="musicEventItem__title"
          />
        )}
        {eventItem ? (
          <div className="musicEventItem__date">
            {formatDate(eventItem.dateStart, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        ) : (
          <FieldSkeleton
            styles={{ padding: "16px" }}
            className="musicEventItem__date"
          />
        )}
        {eventItem ? (
          <p className="default-text">
            {cutTextContent(eventItem.description, 250)}
          </p>
        ) : (
          <FieldSkeleton styles={{ padding: "32px" }} />
        )}
      </div>
    </div>
  </div>
);

export default MusicEventItem;
