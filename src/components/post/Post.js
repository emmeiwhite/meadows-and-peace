import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Post({ match }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(match.params.post_id);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${match.params.post_id}`)
      .then((post) => {
        setLoading(false);
        setPost(post.data);
        console.log(post.data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="post-card">
      {loading && !error ? (
        <p>loading ...</p>
      ) : !loading && error ? (
        <p>Error ...</p>
      ) : (
        <div className="card">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
