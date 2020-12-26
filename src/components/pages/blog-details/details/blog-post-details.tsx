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
import SocialNetworks from "../../../social-networks";
import ReviewForm from "../../../reusable-components/review-form";
import ReviewsList from "../../../reusable-components/reviews-list";
import ImgSkeleton from "../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../reusable-components/field-skeleton";
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
    { resetForm }: { resetForm?: () => void }
  ) => {
    sendBlogPostReview(blogPostId, values);
    if (resetForm) resetForm();
  };

  return (
    <div className="blogPostDetails">
      <ImgSkeleton
        src={details?.previewSrc}
        title={details?.title}
        classes={["blogPostDetails__img"]}
        skeletonStyle={{ height: "250px" }}
      />
      {details ? (
        <h2 className="blogPostDetails__title">{details.title}</h2>
      ) : (
        <FieldSkeleton styles={{ padding: "16px", marginBottom: "10px" }} />
      )}
      <div className="blogPostDetails__info">
        <div className="blogPostDetails__author">
          <svg width="16" height="16">
            <use xlinkHref="#user" />
          </svg>
          {details ? (
            details.authorFullName
          ) : (
            <FieldSkeleton styles={{ padding: "12px 32px" }} />
          )}
        </div>
        <div className="blogPostDetails__date">
          <svg width="16" height="16">
            <use xlinkHref="#clock" />
          </svg>
          {details ? (
            formatDate(details.date)
          ) : (
            <FieldSkeleton styles={{ padding: "12px 32px" }} />
          )}
        </div>
      </div>
      {details ? (
        <p className="default-text">{details.content}</p>
      ) : (
        <FieldSkeleton
          styles={{ padding: "130px 32px", marginBottom: "16px" }}
        />
      )}
      <SocialNetworks />
      <ReviewForm handleSubmit={handleSubmit} />
      <ReviewsList
        reviews={details?.reviews}
        setLike={setLikeBlogPostReview}
        setDislike={setDislikeBlogPostReview}
      />
    </div>
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
