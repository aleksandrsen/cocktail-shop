import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POST_DETAILS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_REQUEST,
  SEND_BLOG_POST_REVIEW_REQUEST,
  LIKE_BLOG_POST_REVIEW_REQUEST,
  DISLIKE_BLOG_POST_REVIEW_REQUEST,
} from "../constants/blog";

export const fetchLatestBlogPosts = () => ({
  type: FETCH_LATEST_BLOG_POSTS_REQUEST,
});

export const fetchBlogPosts = () => ({
  type: FETCH_BLOG_POSTS_REQUEST,
});

export const fetchBlogPostDetails = (id) => ({
  type: FETCH_BLOG_POST_DETAILS_REQUEST,
  id,
});

export const sendBlogPostReview = (id, data) => ({
  type: SEND_BLOG_POST_REVIEW_REQUEST,
  payload: { id, data },
});

export const setLikeBlogPostReview = (id) => ({
  type: LIKE_BLOG_POST_REVIEW_REQUEST,
  id,
});

export const setDislikeBlogPostReview = (id) => ({
  type: DISLIKE_BLOG_POST_REVIEW_REQUEST,
  id,
});
