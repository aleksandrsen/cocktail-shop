import React, { useEffect } from "react";
import "./blog-post-details.scss";
// Utils
import { connect } from "react-redux";
import { Icons } from "../../../../src_/icons";
import { formatDate } from "../../../../utils";
// Actions
import { fetchBlogPostDetails } from "../../../../actions/blog";
// Components
import ReviewsList from "../../blog/reviews-list";
import LeaveReviews from "../../blog/leaave-reviews";
import SmallSpinner from "../../../spinner";
import SocialNetworks from "../../../social-networks";

const BlogPostDetails = ({ details, blogPostId, fetchBlogPostDetails }) => {
  useEffect(() => {
    fetchBlogPostDetails(blogPostId);
  }, []);

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
      {/*<LeaveReviews blogPostId={blogPostId}/>*/}
      {/*<ReviewsList id={blogPostId}/>*/}
    </div>
  ) : (
    <SmallSpinner />
  );
};

export default connect(
  (state) => ({ details: state.blogPosts.blogPostDetails }),
  {
    fetchBlogPostDetails,
  }
)(BlogPostDetails);
