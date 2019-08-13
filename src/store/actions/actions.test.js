import * as actions from "./actions";
import * as types from "../types/types";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
// Creating fake store
const mockStore = configureMockStore(middlewares);

describe("Testing actions", () => {
  describe("Testing sync actions", () => {
    it("fetchPostsIsLoading", () => {
      const action = {
        type: types.POSTS_IS_LOADING
      };
      expect(actions.fetchPostsIsLoading()).toEqual(action);
    });
    it("fetchPostsSuccess", () => {
      const action = {
        type: types.FETCH_POSTS_SUCCESS,
        payload: [1, 2, 3]
      };
      expect(actions.fetchPostsSuccess([1, 2, 3])).toEqual(action);
    });
  });

  describe("Testing async actions", () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });
    it("Creating FETCH_POSTS_SUCCESS", () => {
      // Creating fake response from the server
      fetchMock.getOnce("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "content-type": "application/json"
        },
        body: [1, 2, 3]
      });
      const expectedActions = [
        { type: types.POSTS_IS_LOADING, payload: true },
        { type: types.POSTS_IS_LOADING, payload: false },
        { type: types.FETCH_POSTS_SUCCESS, payload: [1, 2, 3] }
      ];

      const store = mockStore({});
      return store.dispatch(actions.fetchPosts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
