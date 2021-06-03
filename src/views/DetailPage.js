import React from "react";
import { useParams } from "react-router-dom";
import images from "../data/images";
import Post from "../components/Post";
import Image from "../components/Image";
import useTitle from "../components/useTitle";

const DetailPage = () => {
  const { id } = useParams();
  const image = images.find((image) => image.id === id);

  useTitle(`📷 av ${image.username}`);

  return (
    <div className="detail">
      <Post
        author={image.username}
        timestamp={image.createdDate}
        key={image.id}
      >
        <Image src={image.url} alt={image.description} />
      </Post>
    </div>
  );
};

export default DetailPage;
