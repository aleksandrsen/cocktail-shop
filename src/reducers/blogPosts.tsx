import {
  DISLIKE_BLOG_POST_REVIEW_SUCCESS,
  FETCH_BLOG_POST_DETAILS_SUCCESS,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_LATEST_BLOG_POSTS_SUCCESS,
  LIKE_BLOG_POST_REVIEW_SUCCESS,
  RESET_BLOG_POST_DETAILS,
  SEND_BLOG_POST_REVIEW_SUCCESS,
} from "../constants/blog";
import { IBlogPosts } from "../types/reducers";

const initialState: IBlogPosts = {
  blogPosts: null,
  latestBlogPosts: null,
  blogPostDetails: null,
};

const BlogPostsState = (state = initialState, action: any): IBlogPosts => {
  switch (action.type) {
    case FETCH_LATEST_BLOG_POSTS_SUCCESS:
      return { ...state, latestBlogPosts: action.payload };
    case FETCH_BLOG_POSTS_SUCCESS:
      return { ...state, blogPosts: action.payload };
    case FETCH_BLOG_POST_DETAILS_SUCCESS:
    case SEND_BLOG_POST_REVIEW_SUCCESS:
    case LIKE_BLOG_POST_REVIEW_SUCCESS:
    case DISLIKE_BLOG_POST_REVIEW_SUCCESS:
      return { ...state, blogPostDetails: action.payload };
    case RESET_BLOG_POST_DETAILS:
      return { ...state, blogPostDetails: null };

    default:
      return state;
  }
};

export default BlogPostsState;
