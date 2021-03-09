import React, { useEffect } from "react";
import "./blog-news.scss";
// Actions
import { fetchLatestBlogPosts } from "../../../../actions/blog";
// Components
import BlogNewsItem from "./blog&news-item";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
// Types
import { AppRootState } from "../../../../store";
import { BlogPostItemType } from "../../../../types/common";

type BlogNewsPropsType = {
  blogPosts: BlogPostItemType[] | null;
  fetchLatestBlogPosts: () => void;
};

const BlogNews = ({ blogPosts, fetchLatestBlogPosts }: BlogNewsPropsType) => {
  useEffect(() => {
    fetchLatestBlogPosts();
  }, [fetchLatestBlogPosts]);

  return (
    <div className="default-section blogNewsHome" data-test="blogNewsHome">
      <div className="container">
        <div className="section-title">Blog & News</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
          labore magni nobis omnis rerum, soluta? Delectus id impedit velit
          veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
        </p>

        <div className="row center">
          {blogPosts?.length
            ? blogPosts.map((post, idx) => (
                <BlogNewsItem key={post.id} post={post} idx={idx} />
              ))
            : getSkeletons(2, BlogNewsItem)}
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ blogPosts: state.blogPosts.latestBlogPosts }),
  { fetchLatestBlogPosts }
)(React.memo(BlogNews));
