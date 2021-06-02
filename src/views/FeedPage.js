import React from "react";
import Image from "../components/Image";
import images from "../data/images";
import Post from "../components/Post";

const FeedPage = () => {
  return (
    <React.Fragment>
      <div className="posts">
        {images.map((image) => {
          return (
            <Post
              author={image.username}
              timestamp={image.createdDate}
              key={image.id}
            >
              <Image src={image.url} alt={image.description} />
            </Post>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FeedPage;