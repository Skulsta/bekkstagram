import { useState, useEffect } from "react";
import { getImage } from "../server";

const useImage = (id) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getImage(id).then((data) => setImage(data));
  }, [id]);
  return image;
};

export default useImage;
