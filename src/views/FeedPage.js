import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import Post from "../components/Post";
import useTitle from "../hooks/useTitle";
import useFeed from "../hooks/useFeed";
import AddImage from "../components/AddImage";

const FeedPage = () => {
  // eslint-disable-next-line
  const [images, setImages] = useState(null);
  useTitle("🎨 Bekkstagram");

  const imagesFromFeed = useFeed();

  useEffect(() => {
    setImages(imagesFromFeed);
  }, [imagesFromFeed]);

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
                id={image.id}
                key={image.id}
                comments={image.comments}
              >
                <Link to={`/post/${image.id}`}>
                  <Image src={image.url} alt={image.description} />
                </Link>
              </Post>
            );
          })
        )}
      </div>

      <AddImage />
    </React.Fragment>
  );
};

export default FeedPage;
