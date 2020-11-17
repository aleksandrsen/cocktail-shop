import React from "react";
import "./aside-post-item.scss";
// Utils
import { Icons } from "../../../../src_/icons";
import { cutTextContent, formatDate } from "../../../../utils";
// Components
import { Link } from "react-router-dom";

const AsidePostItem = ({ postItem: { previewSrc, title, date, id } }) => (
  <Link to={`/blog/${id}`} className="asidePostItem">
    <img src={previewSrc} className="asidePostItem__img" />
    <div className="asidePostItem__info">
      <div className="asidePostItem__title">{cutTextContent(title, 35)}</div>
      <div className="asidePostItem__date">
        {Icons.calendar}
        <span>
          {formatDate(date, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  </Link>
);

export default AsidePostItem;
