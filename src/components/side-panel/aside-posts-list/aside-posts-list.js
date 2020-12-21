import React, { useEffect } from "react";
import "./aside-posts-list.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../utils";
// Actions
import { fetchBlogPosts } from "../../../actions/blog";
// Components
import AsidePostItem from "./aside-post-item";

const AsidePostsList = ({ fetchBlogPosts, blogPosts }) => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return blogPosts ? (
    <div className="asidePostsList">
      {blogPosts.slice(0, 4).map((postItem) => (
        <AsidePostItem key={postItem.id} postItem={postItem} />
      ))}
    </div>
  ) : (
    getSkeletons(4, AsidePostItem)
  );
};

export default connect((state) => ({ blogPosts: state.blogPosts.blogPosts }), {
  fetchBlogPosts,
})(AsidePostsList);
