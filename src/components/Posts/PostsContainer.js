import React, { Component } from "react";
import Posts from "./Posts";
import { fetchPosts } from "../../store/actions/actions";
import { connect } from "react-redux";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <Posts posts={this.props.posts} />;
  }
}

const mapStateToProps = store => {
  return {
    posts: store.postsData.posts,
    postsIsLoading: store.postsData.isLoading,
    postsError: store.postsData.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: url => dispatch(fetchPosts(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
