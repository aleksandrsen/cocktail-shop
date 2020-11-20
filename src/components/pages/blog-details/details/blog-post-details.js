import React, { useEffect } from "react";
import "./blog-post-details.scss";
// Utils
import { connect } from "react-redux";
import { Icons } from "../../../../src_/icons";
import { formatDate } from "../../../../utils";
// Actions
import {
  sendBlogPostReview,
  fetchBlogPostDetails,
  setLikeBlogPostReview,
  setDislikeBlogPostReview,
} from "../../../../actions/blog";
// Components
import ReviewForm from "../review-form";
import ReviewsList from "../reviews-list";
import SmallSpinner from "../../../spinner";
import SocialNetworks from "../../../social-networks";

const BlogPostDetails = ({
  details,
  blogPostId,
  sendBlogPostReview,
  fetchBlogPostDetails,
  setLikeBlogPostReview,
  setDislikeBlogPostReview,
}) => {
  useEffect(() => {
    fetchBlogPostDetails(blogPostId);
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    sendBlogPostReview(blogPostId, values);
    resetForm();
  };

  return details ? (
    <div className="blogPostDetails">
      <img
        className="blogPostDetails__img"
        src={details.previewSrc}
        alt={details.title}
      />
      <h2 className="blogPostDetails__title">{details.title}</h2>
      <div className="blogPostDetails__info">
        <div className="blogPostDetails__author">
          {Icons.user}
          {details.authorFullName}
        </div>
        <div className="blogPostDetails__date">
          {Icons.clock}
          {formatDate(details.date)}
        </div>
      </div>
      <p className="default-text">{details.content}</p>
      <SocialNetworks />
      <ReviewForm handleSubmit={handleSubmit} />
      <ReviewsList
        reviews={details.reviews}
        setLike={setLikeBlogPostReview}
        setDislike={setDislikeBlogPostReview}
      />
    </div>
  ) : (
    <SmallSpinner />
  );
};

export default connect(
  (state) => ({ details: state.blogPosts.blogPostDetails }),
  {
    sendBlogPostReview,
    fetchBlogPostDetails,
    setLikeBlogPostReview,
    setDislikeBlogPostReview,
  }
)(BlogPostDetails);
