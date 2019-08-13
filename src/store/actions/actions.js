import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, POSTS_IS_LOADING } from "../types/types";

export const fetchPostsIsLoading = bool => {
  return {
    type: POSTS_IS_LOADING,
    payload: bool
  };
};
export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
};
export const fetchPostsError = msg => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: msg
  };
};
export const fetchPosts = () => dispatch => {
  dispatch(fetchPostsIsLoading(true));
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      dispatch(fetchPostsIsLoading(false));
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .then(res => dispatch(fetchPostsSuccess(res)))
    .catch(err => {
      dispatch(fetchPostsError(err.message));
    });
};
