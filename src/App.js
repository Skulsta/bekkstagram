import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./data/images";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <Header />
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
  );
}

export default App;
