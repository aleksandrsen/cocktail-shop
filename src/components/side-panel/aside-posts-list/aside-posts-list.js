import React, { useEffect } from "react";
import "./aside-posts-list.scss";
import { connect } from "react-redux";
// Actions
import { fetchBlogPosts } from "../../../actions/blog";
// Components
import AsidePostItem from "./aside-post-item";
import SmallSpinner from "../../spinner";

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
    <SmallSpinner />
  );
};

export default connect((state) => ({ blogPosts: state.blogPosts.blogPosts }), {
  fetchBlogPosts,
})(AsidePostsList);
