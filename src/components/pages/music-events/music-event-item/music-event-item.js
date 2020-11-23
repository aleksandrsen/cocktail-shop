import React from "react";
import "./music-event-item.scss";
// Components
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
// Utils
import { formatDate, cutTextContent } from "../../../../utils";

const MusicEventItem = ({
  eventItem: { title, previewSrc, dateStart, description, id },
}) => (
  <div className="musicEventItem">
    <div className="row noWrap">
      <div className="col col-6">
        <img src={previewSrc} alt="event-img" />
      </div>
      <div className="col col-6">
        <Tippy content={title} theme="bootstrap" disabled={title.length <= 25}>
          <Link to={`/music-events/${id}`} className="musicEventItem__title">
            {cutTextContent(title, 22)}
          </Link>
        </Tippy>
        <div className="musicEventItem__date">
          {formatDate(dateStart, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <p className="default-text">{cutTextContent(description, 250)}</p>
      </div>
    </div>
  </div>
);

export default MusicEventItem;
