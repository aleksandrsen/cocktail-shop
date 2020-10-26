import {FETCH_LATEST_BLOG_POSTS_SUCCESS} from "../constants/blog";

const initialState = {
  latestBlogPosts: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_BLOG_POSTS_SUCCESS:
      return {...state, latestBlogPosts: action.payload}

    default:
      return state;
  }
};
