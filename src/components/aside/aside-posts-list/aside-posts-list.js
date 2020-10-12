import React, { useEffect } from "react";
import "./aside-posts-list.scss";
import { connect } from "react-redux";
// Actions
import { loadBlogPosts } from "../../../actions";
// Selectors
import {
  blogPostsLoadedSelector,
  blogPostsLoadingSelector,
  blogPostsSelector,
} from "../../../selectors";
// Components
import AsidePostItem from "./aside-post-item";
import Spinner from "../../spinner";

const AsidePostsList = ({ isLoading, isLoaded, blogPosts, loadBlogPosts }) => {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadBlogPosts();
    }
  });

  if (!isLoading && isLoaded) {
    return (
      <div className="aside-posts-list">
        {blogPosts.slice(0, 4).map((postItem) => {
          return <AsidePostItem key={postItem.id} postItem={postItem} />;
        })}
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
)(AsidePostsList);
