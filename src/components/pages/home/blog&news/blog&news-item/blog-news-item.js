import React, { useState } from "react";
import "./blog-news-item.scss";
// Utils
import { Icons } from "../../../../../src_/icons";
import { cutTextContent, formatDate } from "../../../../../utils";
// Components
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../../reusable-components/skeleton";

const BlogNewsItem = ({
  imgLeft,
  post: { id, date, title, content, previewSrc, authorFullName },
}) => {
  const dayNum = formatDate(date, {
    day: "numeric",
  });

  return (
    <div className="col col-12 blogNewsItem">
      <div className="row center">
        <div className="col col-5" style={{ order: imgLeft ? 1 : 0 }}>
          <div className="blogNewsItem__info">
            <div className="blogNewsItem__date">
              <div className="blogNewsItem__dateDay">
                {dayNum < 10 ? "0" + dayNum : dayNum}
              </div>
              <div className="blogNewsItem__dateMonth">
                {formatDate(date, {
                  month: "short",
                })}
              </div>
            </div>
            <div className="blogNewsItem__details">
              <div className="blogNewsItem__author">
                {Icons.home_blogNewsUser}
                <span>{`${authorFullName}`}</span>
              </div>
              <Link to={`/blog/${id}`} className="blogNewsItem__title">
                {title.length > 35 ? cutTextContent(title, 35) : title}
              </Link>
              <p className="default-text">
                {content.length > 140 ? cutTextContent(content, 140) : content}
              </p>
              <div className="blogNewsItem__fullDate">
                {Icons.home_blogNewsClock}
                <span>
                  {formatDate(date, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-5">
          <ImgSkeleton
            title={title}
            src={previewSrc}
            skeletonStyle={{ height: "250px" }}
            classes={["blogNewsItem__preview"]}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogNewsItem;
