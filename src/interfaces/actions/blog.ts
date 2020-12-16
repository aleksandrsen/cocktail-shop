import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POST_DETAILS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_REQUEST,
  SEND_BLOG_POST_REVIEW_REQUEST,
  LIKE_BLOG_POST_REVIEW_REQUEST,
  DISLIKE_BLOG_POST_REVIEW_REQUEST,
} from "../../constants/blog";
import { RequestMessageType } from "../common";

interface IFetchLatestBlogPosts {
  type: typeof FETCH_LATEST_BLOG_POSTS_REQUEST;
}

interface IFetchBlogPosts {
  type: typeof FETCH_BLOG_POSTS_REQUEST;
}

interface IFetchBlogPostDetails {
  type: typeof FETCH_BLOG_POST_DETAILS_REQUEST;
  id: number;
}

interface ISendBlogPostReview {
  type: typeof SEND_BLOG_POST_REVIEW_REQUEST;
  id: number;
  data: RequestMessageType;
}

interface ISetLikeBlogPostReview {
  type: typeof LIKE_BLOG_POST_REVIEW_REQUEST;
  id: number;
}

interface ISetDislikeBlogPostReview {
  type: typeof DISLIKE_BLOG_POST_REVIEW_REQUEST;
  id: number;
}

export type BlogPostsActionType =
  | IFetchLatestBlogPosts
  | IFetchBlogPosts
  | IFetchBlogPostDetails
  | ISendBlogPostReview
  | ISetLikeBlogPostReview
  | ISetDislikeBlogPostReview;
