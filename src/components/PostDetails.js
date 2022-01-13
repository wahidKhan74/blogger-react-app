import React from "react";

function PostDetails(props) {
  // console.log(props);
  return (
    <div className="card bg-light mb-3">
      <h5 className="card-header"> {props.post.title} </h5>
      <div className="card-body">
        <p className="card-title">{props.post.body}</p>
        <p className="card-text"> Author : {props.post.author}</p>
        <p className="card-text"> Category : {props.post.category}</p>
      </div>
      <div className="card-footer">
            <button className="btn btn-sm btn-outline-danger mr-3" onClick={ ()=> { props.onDelete(props.post.id) }}> Delete </button>
            <button className="btn btn-sm btn-outline-info mr-3" onClick={ ()=> { props.onUpdate(props.post) }}> Update </button>
      </div>
    </div>
  );
}

export default PostDetails;
