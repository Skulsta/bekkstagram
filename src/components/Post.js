import React from "react";
import Timestamp from "./Timestamp";
import Author from "./Author";
import Likes from "./Likes";

const Post = (props) => {
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <Timestamp timestamp={props.timestamp} />
      <Likes />
    </div>
  );
};

export default Post;
