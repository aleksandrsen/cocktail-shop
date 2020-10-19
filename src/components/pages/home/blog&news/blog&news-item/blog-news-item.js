import React from "react";
import "./blog-news-item.scss";
import { cutTextContent, formatDate } from "../../../../../utils";
import { Link } from "react-router-dom";
import { Icons } from "../../../../../src_/icons";

const BlogNewsItem = ({
  imgLeft,
  post: {
    title,
    text,
    img,
    date,
    id,
    author: { name, surname },
  },
}) => {
  const blogNewsItemTitle =
    title.length > 35 ? cutTextContent(title, 35) : title;
  const blogNewsItemText = text.length > 140 ? cutTextContent(text, 140) : text;

  const dayNumber = formatDate(date, {
    day: "numeric",
  });

  return (
    <div className="col col-10 blogNewsItem">
      <div className="row center">
        <div className="col col-5" style={{ order: imgLeft ? 1 : 0 }}>
          <div className="blogNewsItem__info">
            <div className="blogNewsItem__date">
              <div className="blogNewsItem__dateDay">
                {dayNumber < 10 ? "0" + dayNumber : dayNumber}
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
                <span>{`${name} ${surname}`}</span>
              </div>
              <Link to={`/blog/${id}`} className="blogNewsItem__title">
                {blogNewsItemTitle}
              </Link>
              <p className="default-text">{blogNewsItemText}</p>
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
          <img className="blogNewsItem__preview" src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default BlogNewsItem;
