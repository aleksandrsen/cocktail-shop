import React from "react";
import "./aside-post-item.scss";
// Utils
import { Icons } from "../../../../src_/icons";
import { cutTextContent, formatDate } from "../../../../utils";
// Components
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../reusable-components/field-skeleton";

const AsidePostItem = ({ postItem }) => (
  <Link to={`/blog/${postItem?.id}`} className="asidePostItem">
    <ImgSkeleton
      src={postItem?.previewSrc}
      classes={["asidePostItem__img"]}
      skeletonStyle={{ width: "50%", flexGrow: 1, borderRadius: "5px" }}
    />
    <div className="asidePostItem__info">
      <div className="asidePostItem__title">
        {}
        {postItem ? (
          cutTextContent(postItem.title, 35)
        ) : (
          <FieldSkeleton styles={{ padding: "16px", marginBottom: "10px" }} />
        )}
      </div>
      <div className="asidePostItem__date">
        {Icons.calendar}
        {postItem ? (
          <div>
            {formatDate(postItem.date, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        ) : (
          <FieldSkeleton styles={{ width: "100%", padding: "10px" }} />
        )}
      </div>
    </div>
  </Link>
);

export default AsidePostItem;
