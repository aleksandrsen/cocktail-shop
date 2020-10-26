import React, { useEffect } from "react";
import "./blog-news.scss";
// Actions
import { fetchLatestBlogPosts } from "../../../../actions/blog";
// Components
import BlogNewsItem from "./blog&news-item";
// Utils
import { connect } from "react-redux";
import SmallSpinner from "../../../spinner";

const BlogNews = ({ blogPosts, fetchLatestBlogPosts }) => {
  useEffect(() => {
    fetchLatestBlogPosts();
  }, []);
  return (
    <div className="default-section blogNewsHome">
      <div className="container">
        <div className="section-title">Blog & News</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
          labore magni nobis omnis rerum, soluta? Delectus id impedit velit
          veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
        </p>
        <div className="row center">
          {blogPosts ? (
            blogPosts.map((post, idx) => (
              <BlogNewsItem key={post.id} imgLeft={idx % 2} post={post} />
            ))
          ) : (
            <SmallSpinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ blogPosts: state.blogPosts.latestBlogPosts }),
  { fetchLatestBlogPosts }
)(BlogNews);
