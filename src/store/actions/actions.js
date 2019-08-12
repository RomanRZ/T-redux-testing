import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  POSTS_IS_LOADING
} from '../types/types';

export const fetchPostsIsLoading = () => {
  return {
    type: POSTS_IS_LOADING
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
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      if (!res.ok) {
        dispatch(fetchPostsIsLoading(false));
        throw new Error(res.statusText);
      }
      dispatch(fetchPostsIsLoading(false));
      return res;
    })
    .then(res => res.json())
    .then(res => dispatch(fetchPostsSuccess(res)))
    .catch(err => {
      console.log(err.message);
      dispatch(fetchPostsError(err.message));
    });
};
