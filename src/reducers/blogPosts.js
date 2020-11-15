import {
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_LATEST_BLOG_POSTS_SUCCESS,
} from "../constants/blog";

const initialState = {
  blogPosts: null,
  latestBlogPosts: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_BLOG_POSTS_SUCCESS:
      return { ...state, latestBlogPosts: action.payload };
    case FETCH_BLOG_POSTS_SUCCESS:
      return { ...state, blogPosts: action.payload };

    default:
      return state;
  }
};
