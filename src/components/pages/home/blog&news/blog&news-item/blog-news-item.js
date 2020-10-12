import React from "react";
import "./blog-news-item.scss";
import { cutTextContent, formatDate } from "../../../../../utils";
import { Link } from "react-router-dom";
// Components
import { Col, Row } from "antd";

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
  const maxTitleLength = 37;
  const maxTextLength = 127;

  const blogNewsItemTitle =
    title.length > maxTitleLength
      ? cutTextContent(title, maxTitleLength)
      : title;
  const blogNewsItemText =
    text.length > maxTextLength ? cutTextContent(text, maxTextLength) : text;

  const dayNumber = formatDate(date, {
    day: "numeric",
  });

  return (
    <Col span={24} className="blog-news-item">
      <Row type="flex" gutter={30} justify="space-between" align="middle">
        <Col span={12} order={imgLeft ? 1 : 0}>
          <div className="blog-news-item-info">
            <div className="blog-news-item-date">
              <div className="main-date">
                {dayNumber < 10 ? "0" + dayNumber : dayNumber}
              </div>
              <div className="month">
                {formatDate(date, {
                  month: "short",
                })}
              </div>
            </div>
            <div className="blog-news-item-details">
              <div className="theme">
                <i className="material-icons">person</i>
                <span>{name + " " + surname}</span>
              </div>
              <Link to={`/blog/${id}`} className="title">
                {blogNewsItemTitle}
              </Link>
              <p className="default-text">{blogNewsItemText}</p>
              <div className="date">
                <i className="material-icons">query_builder</i>
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
        </Col>
        <Col span={12}>
          <div className="blog-news-item-photo">
            <img src={img} alt={title} />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default BlogNewsItem;
