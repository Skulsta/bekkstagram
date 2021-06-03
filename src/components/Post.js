import React from "react";
import Timestamp from "./Timestamp";
import Author from "./Author";
import Likes from "./Likes";
import { removeImage } from "../server";

const Post = (props) => {
  const removePost = () => {
    console.log(props.id);
    removeImage(props.id);
  };
  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <Timestamp timestamp={props.timestamp} />
      <Likes />
      <button onClick={removePost}>x</button>
    </div>
  );
};

export default Post;
