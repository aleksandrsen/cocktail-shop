import React from "react";
import "./reviews-list.scss";
// Utils
import { formatDate } from "../../../../utils";
import { Icons } from "../../../../src_/icons";

const ReviewsList = ({ reviews, setDislike, setLike }) => (
  <section className="reviewsList">
    {reviews.map(({ author, id, date, likes, dislikes, text }) => (
      <div className="reviewsListItem" key={id}>
        <div className="reviewsListItem__header">
          <div className="reviewsListItem__author">{author}</div>
          <div className="reviewsListItem__date">
            {formatDate(date, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="reviewsListItem__text">{text}</div>
        <div className="reviewsListItem__footer">
          <div className="reviewsListItem__like" onClick={(e) => setLike(id)}>
            {Icons.like}
            <span className="reviewsListItem__rating">{likes || ""}</span>
          </div>
          <div
            className="reviewsListItem__dislike"
            onClick={(e) => setDislike(id)}
          >
            {Icons.dislike}
            <span className="reviewsListItem__rating">{dislikes || ""}</span>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default ReviewsList;
