import React from "react";
import Timestamp from './Timestamp'

const Post = (props) => {
  return (
    <div className="post">
      {props.children}
    </div>
  );
};

export default Post;