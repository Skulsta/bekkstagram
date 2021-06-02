import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import images from "../data/images";
import Post from "../components/Post";

const FeedPage = () => {
  return (
    <React.Fragment>
      <div className="posts">
        {images.map((image) => {
          return (
            <Link to={`/post/${image.id}`}>
              <Post
                author={image.username}
                timestamp={image.createdDate}
                key={image.id}
              >
                <Image src={image.url} alt={image.description} />
              </Post>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FeedPage;
