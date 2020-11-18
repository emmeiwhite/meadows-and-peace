import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Posts.css";
import { connect } from "react-redux";

class Posts extends Component {
  componentDidMount() {}

  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        {posts &&
          posts.map((post) => {
            return (
              <Link to={`/posts/${post.id}`} key={post.id}>
                <div className="card">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </Link>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Posts);
