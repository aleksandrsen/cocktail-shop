import React from "react";
import "./reviews-list.scss";
// Utils
import { getSkeletons } from "../../../utils";
// Components
import ReviewListItem from "./review-list-item";
// Types
import {
  CocktailReviewItemType,
  BlogPostReviewItemType,
} from "../../../types/common";

type ReviewsListPropsType = {
  setLike: (id: number) => void;
  setDislike: (id: number) => void;
  reviews: undefined | CocktailReviewItemType[] | BlogPostReviewItemType[];
};

const ReviewsList = ({
  reviews,
  setLike,
  setDislike,
}: ReviewsListPropsType) => (
  <section className="reviewsList">
    {reviews
      ? reviews.map((review) => (
          <ReviewListItem
            key={review.id}
            review={review}
            setLike={setLike}
            setDislike={setDislike}
          />
        ))
      : getSkeletons(5, ReviewListItem)}
  </section>
);

export default React.memo(ReviewsList);
