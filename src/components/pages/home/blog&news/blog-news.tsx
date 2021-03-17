import React, { useEffect, useRef, useState, RefObject } from "react";
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

function isInViewport(element: any) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const useIsShowAnimation = (ref: RefObject<any>) => {
  const [isShow, setIsShow] = useState(false);
  const windowOffset = window.pageYOffset;

  useEffect(() => {
    if (ref?.current) {
      const coords = ref.current.getBoundingClientRect();
      if (
        ref.current.offsetTop + coords.height >= windowOffset &&
        !isInViewport(ref.current)
      )
        setIsShow(true);
    }
  }, [ref]);

  return isShow;
};

const BlogNews = ({ blogPosts, fetchLatestBlogPosts }: BlogNewsPropsType) => {
  useEffect(() => {
    fetchLatestBlogPosts();
  }, [fetchLatestBlogPosts]);

  const elemRef = useRef<HTMLDivElement>(null);

  const isShowAnimation = useIsShowAnimation(elemRef);

  console.log(isShowAnimation)


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
                <BlogNewsItem
                  key={post.id}
                  post={post}
                  idx={idx}
                  isShowAnimation={isShowAnimation}
                />
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
