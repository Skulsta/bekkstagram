import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = (props) => {
  const [comments, setComments] = useState(props.comments);

  const addComment = (comment) => {
    setComments((prevState) => [...prevState, comment]);
  };

  if (comments) {
    return (
      <div className="comments">
        {props.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <CommentForm
          imageId={props.imageId}
          addComment={(comment) => addComment(comment)}
        />
      </div>
    );
  }
  return (
    <CommentForm
      imageId={props.imageId}
      addComment={(comment) => addComment(comment)}
    />
  );
};

export default Comments;
