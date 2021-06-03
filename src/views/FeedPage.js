import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import Post from "../components/Post";
import useTitle from "../hooks/useTitle";
import useFeed from "../hooks/useFeed";

const FeedPage = () => {
  useTitle("🎨 Bekkstagram");

  const images = useFeed();

  return (
    <React.Fragment>
      <div className="posts">
        {!images ? (
          <div>Loading...</div>
        ) : (
          images.map((image) => {
            return (
              <Post
                author={image.username}
                timestamp={image.createdDate}
                key={image.id}
              >
                <Link to={`/post/${image.id}`}>
                  <Image src={image.url} alt={image.description} />
                </Link>
              </Post>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default FeedPage;
