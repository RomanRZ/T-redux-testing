import { combineReducers } from "redux";
import { fetchPostsReducer } from "./reducers";

export const rootReducer = combineReducers({
  postsData: fetchPostsReducer
});
