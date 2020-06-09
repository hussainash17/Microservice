import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <h4>This is a post section</h4>
      <PostCreate />
      <hr></hr>
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};