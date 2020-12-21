import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POST_DETAILS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_REQUEST,
  SEND_BLOG_POST_REVIEW_REQUEST,
  LIKE_BLOG_POST_REVIEW_REQUEST,
  DISLIKE_BLOG_POST_REVIEW_REQUEST,
} from "../../constants/blog";
import { RequestMessageType } from "../common";

type FetchLatestBlogPostsActionType = {
  type: typeof FETCH_LATEST_BLOG_POSTS_REQUEST;
};

type FetchBlogPostsActionType = {
  type: typeof FETCH_BLOG_POSTS_REQUEST;
};

type FetchBlogPostDetailsActionType = {
  type: typeof FETCH_BLOG_POST_DETAILS_REQUEST;
  id: number;
};

type SendBlogPostReviewActionType = {
  type: typeof SEND_BLOG_POST_REVIEW_REQUEST;
  id: number;
  data: RequestMessageType;
};

type SetLikeBlogPostReviewActionType = {
  type: typeof LIKE_BLOG_POST_REVIEW_REQUEST;
  id: number;
};

type SetDislikeBlogPostReviewActionType = {
  type: typeof DISLIKE_BLOG_POST_REVIEW_REQUEST;
  id: number;
};

export type BlogPostsActionType =
  | FetchLatestBlogPostsActionType
  | FetchBlogPostsActionType
  | FetchBlogPostDetailsActionType
  | SendBlogPostReviewActionType
  | SetLikeBlogPostReviewActionType
  | SetDislikeBlogPostReviewActionType;
