import React, { Component, Fragment } from "react";

import PostForm from "./PostForm";

export default class PostFormContainer extends Component {
  state = {
    title: "",
    content: ""
  };

  inputHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  sendPost = e => {
    const { title, content } = this.state;
    e.preventDefault();
    console.log("Post was sent");
    const newPost = {
      title,
      body: content
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Error. Post request was failed");
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        console.log("Success:", JSON.stringify(res));
      })
      .catch(err => console.log(err.message));
  };
  render() {
    return (
      <Fragment>
        <PostForm
          inputHandler={this.inputHandler}
          sendPost={this.sendPost}
          state={this.state}
        />
      </Fragment>
    );
  }
}
