import React from "react";
import "./review-list-item.scss";
import formatDate from "../../../../../functions/format-date";
import like from "../../../../../img/icons/like.svg";
import dislike from "../../../../../img/icons/dislike.svg";
import { connect } from "react-redux";
// Actions
import { likeReview, disLikeReview } from "../../../../../actions";

const ReviewListItem = ({
  review: {
    text,
    date,
    likes,
    dislikes,
    author: { name, surname },
    id,
  },
  likeReview,
  disLikeReview,
}) => {
  let reviewDate = formatDate(date, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="reviews-list-item">
      <div className="review-header">
        <div className="review-author">{name + " " + surname}</div>
        <div className="review-date">{reviewDate}</div>
      </div>
      <div className="review-text">{text}</div>
      <div className="review-footer">
        <div className="like" onClick={() => likeReview(id)}>
          <img src={like} alt="like" />
          <span className="rating">{!likes ? "" : likes}</span>
        </div>
        <div className="dislike" onClick={() => disLikeReview(id)}>
          <img src={dislike} alt="dislike" />
          <span className="rating">{!dislikes ? "" : dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { likeReview, disLikeReview })(ReviewListItem);
