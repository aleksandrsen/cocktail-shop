import React, { useState } from "react";
import "./leave-reviews.scss";
import DefaultButton from "../../../common-components/default-button";
// Components
import BlogPostsReviewForm from "../blog-posts-reviews-form/blog-posts-review-form";

const LeaveReviews = ({ blogPostId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="leave-reviews">
      <div className="leave-reviews-block">
        <h3 className="leave-reviews-title">Leave your review</h3>
        <DefaultButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close form" : "Write review"}
        </DefaultButton>
      </div>
      {isOpen ? <BlogPostsReviewForm /> : ""}
    </div>
  );
};

export default LeaveReviews;
