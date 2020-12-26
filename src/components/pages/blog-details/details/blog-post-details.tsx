import React, { useEffect } from "react";
import "./blog-post-details.scss";
// Utils
import { connect } from "react-redux";
import { formatDate } from "../../../../utils";
// Actions
import {
  sendBlogPostReview,
  fetchBlogPostDetails,
  setLikeBlogPostReview,
  setDislikeBlogPostReview,
} from "../../../../actions/blog";
// Components
import SmallSpinner from "../../../spinner";
import SocialNetworks from "../../../social-networks";
import ReviewForm from "../../../reusable-components/review-form";
import ReviewsList from "../../../reusable-components/reviews-list";
// Types
import { AppRootState } from "../../../../store";
import { BlogPostItemType, RequestMessageType } from "../../../../types/common";

type BlogPostDetailsPropsType = {
  blogPostId: number;
  details: null | BlogPostItemType;
  setLikeBlogPostReview: (id: number) => void;
  setDislikeBlogPostReview: (id: number) => void;
  fetchBlogPostDetails: (blogPostId: number) => void;
  sendBlogPostReview: (blogPostId: number, values: RequestMessageType) => void;
};

const BlogPostDetails = ({
  details,
  blogPostId,
  sendBlogPostReview,
  fetchBlogPostDetails,
  setLikeBlogPostReview,
  setDislikeBlogPostReview,
}: BlogPostDetailsPropsType) => {
  useEffect(() => {
    fetchBlogPostDetails(blogPostId);
  }, []);

  const handleSubmit = (
    values: RequestMessageType,
    { resetForm }: { resetForm: () => void }
  ) => {
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
          <svg width="16" height="16">
            <use xlinkHref="#user" />
          </svg>
          {details.authorFullName}
        </div>
        <div className="blogPostDetails__date">
          <svg width="16" height="16">
            <use xlinkHref="#clock" />
          </svg>
          {formatDate(details.date)}
        </div>
      </div>
      <p className="default-text">{details.content}</p>
      <SocialNetworks />
      {/*<ReviewForm handleSubmit={handleSubmit} />*/}
      {details.reviews && (
        <ReviewsList
          reviews={details.reviews}
          setLike={setLikeBlogPostReview}
          setDislike={setDislikeBlogPostReview}
        />
      )}
    </div>
  ) : (
    <SmallSpinner />
  );
};

export default connect(
  (state: AppRootState) => ({ details: state.blogPosts.blogPostDetails }),
  {
    sendBlogPostReview,
    fetchBlogPostDetails,
    setLikeBlogPostReview,
    setDislikeBlogPostReview,
  }
)(React.memo(BlogPostDetails));
