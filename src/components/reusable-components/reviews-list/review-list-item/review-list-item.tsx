import React from "react";
// Components
import FieldSkeleton from "../../field-skeleton";
// Utils
import { formatDate } from "../../../../utils/index";
// Types
import {
  BlogPostReviewItemType,
  CocktailReviewItemType,
} from "../../../../types/common";

type ReviewsListItemProps = {
  setLike: (id: number) => void;
  setDislike: (id: number) => void;
  review: null | CocktailReviewItemType | BlogPostReviewItemType;
};

const ReviewListItem = ({
  review,
  setLike,
  setDislike,
}: ReviewsListItemProps) => (
  <div className="reviewsListItem" key={review?.id}>
    <div className="reviewsListItem__header">
      <div className="reviewsListItem__author">
        {review ? (
          review.author
        ) : (
          <FieldSkeleton styles={{ padding: "12px 40px" }} />
        )}
      </div>
      <div className="reviewsListItem__date">
        {review ? (
          formatDate(review.date, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        ) : (
          <FieldSkeleton styles={{ padding: "12px 40px" }} />
        )}
      </div>
    </div>
    <div className="reviewsListItem__text">
      {review ? review.text : <FieldSkeleton styles={{ padding: "64px" }} />}
    </div>
    <div className="reviewsListItem__footer">
      {review ? (
        <>
          <div
            className="reviewsListItem__like"
            onClick={(e) => setLike(review?.id)}
          >
            <svg>
              <use xlinkHref="#like" />
            </svg>
            <span className="reviewsListItem__rating">
              {review?.likes || ""}
            </span>
          </div>
          <div
            className="reviewsListItem__dislike"
            onClick={(e) => setDislike(review?.id)}
          >
            <svg>
              <use xlinkHref="#dislike" />
            </svg>
            <span className="reviewsListItem__rating">
              {review?.dislikes || ""}
            </span>
          </div>
        </>
      ) : (
        <FieldSkeleton styles={{ padding: "12px 40px" }} />
      )}
    </div>
  </div>
);

export default React.memo(ReviewListItem);
