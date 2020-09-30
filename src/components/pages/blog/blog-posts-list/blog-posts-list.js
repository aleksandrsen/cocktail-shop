import React, { useEffect } from "react";
import "./blog-posts-list.scss";
import { connect } from "react-redux";
// Actions
import { loadBlogPosts } from "../../../../actions";
// Selectors
import {
  blogPostsSelector,
  blogPostsLoadedSelector,
  blogPostsLoadingSelector,
} from "../../../../selectors";
// Components
import BlogPostItem from "./blog-post-item";
import DefaultButton from "../../../common-components/default-button";
import Spinner from "../../../spinner";

const BlogPostsList = ({ blogPosts, isLoading, isLoaded, loadBlogPosts }) => {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadBlogPosts();
    }
  });

  if (!isLoading && isLoaded) {
    return (
      <div className="blog-posts-list">
        {blogPosts.slice(0, 4).map((item) => {
          return <BlogPostItem key={item.id} post={item} />;
        })}
        <DefaultButton>More posts</DefaultButton>
      </div>
    );
  }
  return <Spinner />;
};

export default connect(
  (state) => {
    return {
      isLoading: blogPostsLoadingSelector(state),
      isLoaded: blogPostsLoadedSelector(state),
      blogPosts: blogPostsSelector(state),
    };
  },
  { loadBlogPosts }
)(BlogPostsList);
