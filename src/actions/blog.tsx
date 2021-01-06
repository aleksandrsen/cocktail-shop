import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POST_DETAILS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_REQUEST,
  SEND_BLOG_POST_REVIEW_REQUEST,
  LIKE_BLOG_POST_REVIEW_REQUEST,
  DISLIKE_BLOG_POST_REVIEW_REQUEST,
  RESET_BLOG_POST_DETAILS
} from "../constants/blog";
import { BlogPostsActionType } from "../types/actions/blog";
import { RequestMessageType } from "../types/common";

export const fetchLatestBlogPosts = (): BlogPostsActionType => ({
  type: FETCH_LATEST_BLOG_POSTS_REQUEST,
});

export const fetchBlogPosts = (): BlogPostsActionType => ({
  type: FETCH_BLOG_POSTS_REQUEST,
});

export const fetchBlogPostDetails = (id: number): BlogPostsActionType => ({
  type: FETCH_BLOG_POST_DETAILS_REQUEST,
  id,
});

export const resetBlogPostDetails = (): BlogPostsActionType => ({
  type: RESET_BLOG_POST_DETAILS
})

export const sendBlogPostReview = (
  id: number,
  data: RequestMessageType
): BlogPostsActionType => ({
  type: SEND_BLOG_POST_REVIEW_REQUEST,
  id,
  data,
});

export const setLikeBlogPostReview = (id: number): BlogPostsActionType => ({
  type: LIKE_BLOG_POST_REVIEW_REQUEST,
  id,
});

export const setDislikeBlogPostReview = (id: number): BlogPostsActionType => ({
  type: DISLIKE_BLOG_POST_REVIEW_REQUEST,
  id,
});
