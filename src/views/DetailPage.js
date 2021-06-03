import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import Image from "../components/Image";
import useTitle from "../components/useTitle";
import useImage from "../components/useImage";

const DetailPage = () => {
  const { id } = useParams();
  const image = useImage(id);

  useTitle(image && `📷 av ${image.username}`);

  return (
    <div className="detail">
      {!image ? (
        <div>loading...</div>
      ) : (
        <Post
          author={image.username}
          timestamp={image.createdDate}
          key={image.id}
        >
          <Image src={image.url} alt={image.description} />
        </Post>
      )}
    </div>
  );
};

export default DetailPage;
