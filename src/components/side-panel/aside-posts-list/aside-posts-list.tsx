import React, { useEffect } from "react";
import "./aside-posts-list.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../utils";
// Actions
import { fetchBlogPosts } from "../../../actions/blog";
// Components
import AsidePostItem from "./aside-post-item";
// Types
import { AppRootState } from "../../../store";
import { BlogPostItemType } from "../../../types/common";

type AsidePostsListPropsType = {
  fetchBlogPosts: () => void;
  blogPosts: null | BlogPostItemType[];
};

const AsidePostsList = ({
  blogPosts,
  fetchBlogPosts,
}: AsidePostsListPropsType) => {
  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  return (
    <div className="asidePostsList">
      {blogPosts
        ? blogPosts
            .slice(0, 4)
            .map((postItem) => (
              <AsidePostItem key={postItem.id} postItem={postItem} />
            ))
        : getSkeletons(4, AsidePostItem)}
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ blogPosts: state.blogPosts.blogPosts }),
  {
    fetchBlogPosts,
  }
)(React.memo(AsidePostsList));
