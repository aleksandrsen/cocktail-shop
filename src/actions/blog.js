import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POST_DETAILS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_REQUEST,
} from "../constants/blog";

export const fetchLatestBlogPosts = () => ({
  type: FETCH_LATEST_BLOG_POSTS_REQUEST,
});

export const fetchBlogPosts = () => ({
  type: FETCH_BLOG_POSTS_REQUEST,
});

export const fetchBlogPostDetails = (id) => ({
  type: FETCH_BLOG_POST_DETAILS_REQUEST,
  payload: id,
});
