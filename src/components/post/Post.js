import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Post({ post }) {
  console.log(post);
  return (
    <div className="post-card">
      {post && (
        <div className="card">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

/* 
    ownProps refers to the component props, before we attach the addition props 
    from the redux store. And our ownProps are going to contain information about
    the routes. And we can grab id from the routes
*/
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  const post = state.posts.find((post) => post.id == id);
  return {
    post,
  };
};

export default connect(mapStateToProps)(Post);
