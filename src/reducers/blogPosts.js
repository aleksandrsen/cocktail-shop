import {
  DISLIKE_BLOG_POST_REVIEW_SUCCESS,
  FETCH_BLOG_POST_DETAILS_SUCCESS,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_LATEST_BLOG_POSTS_SUCCESS,
  LIKE_BLOG_POST_REVIEW_SUCCESS,
  SEND_BLOG_POST_REVIEW_SUCCESS,
} from "../constants/blog";

const initialState = {
  blogPosts: null,
  latestBlogPosts: null,
  blogPostDetails: null,
};

export default (state = initialState, action) => {
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

    default:
      return state;
  }
};
