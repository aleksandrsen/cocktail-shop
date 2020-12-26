import React, { useEffect } from "react";
import "./blog-posts-list.scss";
// Actions
import { fetchBlogPosts } from "../../../../actions/blog";
// Components
import BlogPostItem from "./blog-post-item";
import RippleButton from "../../../reusable-components/ripple-button";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
// Types
import { AppRootState } from "../../../../store";
import { BlogPostItemType } from "../../../../types/common";

type BlogPostsListPropsType = {
  blogPosts: null | BlogPostItemType[];
  fetchBlogPosts: () => void;
};

const BlogPostsList = ({
  blogPosts,
  fetchBlogPosts,
}: BlogPostsListPropsType) => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="blogPostsList">
      {blogPosts
        ? blogPosts
            .slice(0, 4)
            .map((item) => <BlogPostItem key={item.id} post={item} />)
        : getSkeletons(7, BlogPostItem)}
      <RippleButton>More posts</RippleButton>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ blogPosts: state.blogPosts.blogPosts }),
  {
    fetchBlogPosts,
  }
)(React.memo(BlogPostsList));
