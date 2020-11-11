import React, { useEffect } from "react";
import "./blog-posts-list.scss";
// Actions
import { fetchBlogPosts } from "../../../../actions/blog";
// Components
import BlogPostItem from "./blog-post-item";
import Spinner from "../../../spinner";
// Utils
import { connect } from "react-redux";

import RippleButton from "../../../reusable-components/Button";
import SmallSpinner from "../../../spinner";

const BlogPostsList = ({ blogPosts, fetchBlogPosts }) => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-posts-list">
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
