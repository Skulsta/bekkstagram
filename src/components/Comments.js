import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Comments = (props) => {
  return (
    <div className="comments">
      {props.comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <span className="comment-user">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
            <span className="timestamp">
              {formatDistanceToNow(comment.createdDate)} ago
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
