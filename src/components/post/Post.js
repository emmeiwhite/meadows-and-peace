import React from "react";
import { connect } from "react-redux";
import { deletePost } from "./../../actions/postActions";

function Post({ post, deletePost, history }) {
  const handleBtnClick = (id) => {
    deletePost(id); // dispatching action to reducer
    history.push("/");
  };
  return (
    <div className="post-card">
      {post && (
        <div className="card">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={() => handleBtnClick(post.id)}>Delete Post</button>
        </div>
      )}
    </div>
  );
}

/* --- 
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

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
