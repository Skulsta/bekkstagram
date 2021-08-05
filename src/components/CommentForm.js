import React from "react";
import { putComment } from "../server";

const CommentForm = (props) => {
  const [comment, setComment] = React.useState("");

  const onCommentSubmit = async () => {
    if (comment.length === 0) return;
    const commentsResponse = await putComment(props.imageId, comment);
    props.addComment(commentsResponse);
    setComment("");
  };
  return (
    <div className="comment-form">
      <input
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Legg til kommentar"
        name="comment"
      />
      <button className="comment-form-button" onClick={onCommentSubmit}>
        Fullfør
      </button>
    </div>
  );
};

export default CommentForm;
