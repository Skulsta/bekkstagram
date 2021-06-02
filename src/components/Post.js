import React from "react";
import Timestamp from "./Timestamp";
import Author from "./Author";

const Post = (props) => {
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <Timestamp timestamp={props.timestamp} />
    </div>
  );
};

export default Post;
