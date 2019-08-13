import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, POSTS_IS_LOADING } from "../types/types";

import { fetchPostsReducer } from "./reducers";

describe("Testing reducers", () => {
  it("POSTS_IS_LOADING", () => {
    const stateBefore = { posts: [], isLoading: false, error: null };
    const action = {
      type: POSTS_IS_LOADING,
      payload: true
    };

    expect(fetchPostsReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: true
    });
  });

  it("FETCH_POSTS_SUCCESS", () => {
    const stateBefore = { posts: [], isLoading: false, error: null };
    const action = {
      type: FETCH_POSTS_SUCCESS,
      payload: [
        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
      ]
    };
    expect(fetchPostsReducer(stateBefore, action)).toEqual({
      ...stateBefore,

      posts: action.payload
    });
  });

  it("FETCH_POSTS_ERROR", () => {
    const stateBefore = { posts: [], isLoading: false, error: null };
    const action = { type: FETCH_POSTS_ERROR, payload: "Error 500" };

    expect(fetchPostsReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      error: action.payload
    });
  });
});
