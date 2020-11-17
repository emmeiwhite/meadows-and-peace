import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Posts.css";

export default class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = [...response.data.slice(0, 10)];
        this.setState({
          posts,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }
  render() {
    const { loading, error, posts } = this.state;
    return (
      <main>
        {loading && !error ? (
          <p>loading ...</p>
        ) : !loading && error ? (
          <p>Error ...</p>
        ) : (
          <div className="posts">
            {posts.map((post) => {
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
        )}
      </main>
    );
  }
}
