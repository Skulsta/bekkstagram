import React, { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => setLikes(likes + 1);

  return (
    <div className="likes">
      Likes: {likes}{" "}
      <button className="like-button" onClick={incrementLikes}>
        <span role="img" aria-label="Thumbs up">
          👍
        </span>
      </button>
    </div>
  );
};

export default Likes;
