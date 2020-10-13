import React, { useEffect, useState } from "react";
import "./reviews-list.scss";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// Actions
import { loadReviews } from "../../../../actions";
// Components
import ReviewListItem from "./review-list-item";
import Spinner from "../../../spinner";
// Selectors
import {
  blogPostsReviewsLoadedSelector,
  blogPostsReviewsLoadingSelector,
  getAllReviewsForBlogPost,
} from "../../../../selectors";

const ReviewsList = ({ postId, isLoading, isLoaded, reviews, loadReviews }) => {
  const [isShort, setShort] = useState(true);

  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadReviews();
    }
  });

  if (!isLoading && isLoaded) {
    const shortReviewsListLength = 3;

    const shortReviewsList = (
      <TransitionGroup>
        {reviews.slice(0, shortReviewsListLength).map((review) => (
          <CSSTransition key={review.id} timeout={500} classNames="item">
            <ReviewListItem key={review.id} review={review} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );

    const allReviewsList = (
      <TransitionGroup>
        {reviews.map((review) => (
          <CSSTransition key={review.id} timeout={500} classNames="item">
            <ReviewListItem key={review.id} review={review} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );

    const showAllCommentsBtn = !isShort || (
      <button className="default-button" onClick={() => setShort(false)}>
        Show all reviews
      </button>
    );

    return (
      <div className="reviews-list">
        {isShort ? shortReviewsList : allReviewsList}
        {reviews.length < shortReviewsListLength + 1 ? "" : showAllCommentsBtn}
      </div>
    );
  }

  return <Spinner />;
};

export default connect(
  (state, ownProps) => ({
    isLoading: blogPostsReviewsLoadingSelector(state),
    isLoaded: blogPostsReviewsLoadedSelector(state),
    reviews: getAllReviewsForBlogPost(state, ownProps),
  }),
  { loadReviews }
)(ReviewsList);
