import React from "react";
import Post from "./Post/Post";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Post title={post.title} body={post.body} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
