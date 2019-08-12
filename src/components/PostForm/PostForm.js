import React from "react";

const PostForm = ({
  fetchPosts,
  inputHandler,
  sendPost,
  state: { title, content }
}) => {
  return (
    <div>
      <form
        onSubmit={sendPost}
        method="POST"
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <div>
          <h5>Title</h5>
          <input
            type="text"
            name="title"
            value={title}
            onChange={inputHandler}
          />
        </div>
        <div>
          <h5>Content</h5>
          <textarea name="content" value={content} onChange={inputHandler} />
        </div>
        <br />
        <button type="submit">Add post</button>
      </form>
    </div>
  );
};

export default PostForm;
