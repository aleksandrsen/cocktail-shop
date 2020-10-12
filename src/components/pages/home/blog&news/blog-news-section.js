import React, { useEffect } from "react";
import "./blog-news-section.scss";
import { connect } from "react-redux";
// Actions
import { loadAllDataForBlogPosts } from "../../../../actions";
// Selectors
import {
  blogPostsLoadedSelector,
  usersLoadedSelector,
  getAllDataForBlogPosts,
} from "../../../../selectors";
// Components
import BlogNewsItem from "./blog&news-item";
import Spinner from "../../../spinner";
import { Row } from "antd";

const BlogNewsSection = ({
  isLoadedBLogPosts,
  isLoadedUsers,
  blogPosts,
  loadAllDataForBlogPosts,
}) => {
  let recentBlogPosts;

  useEffect(() => {
    if (!isLoadedBLogPosts && !isLoadedUsers) {
      loadAllDataForBlogPosts();
    }
  });

  if (isLoadedBLogPosts && isLoadedUsers) {
    recentBlogPosts = blogPosts.slice(0, 2).map((post, idx) => {
      return <BlogNewsItem key={post.id} imgLeft={idx % 2} post={post} />;
    });
  }

  return (
    <div className="default-section blog-news-section">
      <div className="container">
        <div className="section-title">Blog & News</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
          labore magni nobis omnis rerum, soluta? Delectus id impedit velit
          veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
        </p>
        <Row type="flex" gutter={30} justify="space-between">
          {recentBlogPosts ? recentBlogPosts : <Spinner />}
        </Row>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    isLoadedBLogPosts: blogPostsLoadedSelector(state),
    isLoadedUsers: usersLoadedSelector(state),
    blogPosts: getAllDataForBlogPosts(state),
  }),
  { loadAllDataForBlogPosts }
)(BlogNewsSection);
