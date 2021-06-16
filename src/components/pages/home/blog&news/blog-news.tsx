import React, { useEffect, useRef } from "react";
import "./blog-news.scss";
// Actions
import { fetchLatestBlogPosts } from "../../../../actions/blog";
// Components
// @ts-ignore
import Fade from "react-reveal/Fade";
import BlogNewsItem from "./blog&news-item";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../utils";
import { useIsShowAnimation } from "../../../../utils/hooks";
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

  const elemRef = useRef<HTMLDivElement>(null);

  // const isShowAnimation = useIsShowAnimation(elemRef);

  return (
    <div
      ref={elemRef}
      className="default-section blogNewsHome"
      data-test="blogNewsHome"
    >
      <div className="container">
        <div className="section-title">Blog & News</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
          labore magni nobis omnis rerum, soluta? Delectus id impedit velit
          veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
        </p>

        <div className="row center">
          {blogPosts?.length && elemRef.current
            ? blogPosts.map((post, idx) => (
                <Fade
                  key={post.id}
                  // left={!idx && isShowAnimation}
                  left={!idx && 0}
                  // right={!!idx && isShowAnimation}
                  right={!!idx && 0}
                >
                  <BlogNewsItem key={post.id} post={post} />
                </Fade>
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
