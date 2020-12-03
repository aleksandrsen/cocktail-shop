import React, { useEffect } from "react";
import "./blog-posts-list.scss";
// Actions
import { fetchBlogPosts } from "../../../../actions/blog";
// Components
import SmallSpinner from "../../../spinner";
import BlogPostItem from "./blog-post-item";
import RippleButton from "../../../reusable-components/ripple-button";
// Utils
import { connect } from "react-redux";

const BlogPostsList = ({ blogPosts, fetchBlogPosts }) => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="blogPostsList">
      {!blogPosts ? (
        <SmallSpinner />
      ) : (
        blogPosts
          .slice(0, 4)
          .map((item) => <BlogPostItem key={item.id} post={item} />)
      )}
      <RippleButton>More posts</RippleButton>
    </div>
  );
};

export default connect((state) => ({ blogPosts: state.blogPosts.blogPosts }), {
  fetchBlogPosts,
})(BlogPostsList);
