import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, POSTS_IS_LOADING } from "../types/types";

export const postsInitialState = {
  posts: [],
  isLoading: false,
  error: null
};

export const fetchPostsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case POSTS_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_POSTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
