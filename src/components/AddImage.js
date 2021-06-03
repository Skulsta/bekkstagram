import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { uploadImage } from "../server";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const AddImage = (onAddImage) => {
  const [showDialog, setShowDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageDescription, setImageDescription] = useState(null);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const addImage = async (url, description) => {
    const imageResponse = await uploadImage({ url, description });
    if (!imageResponse) {
      return;
    }
    onAddImage(imageResponse);
    resetAndCloseDialog();
  };

  const resetAndCloseDialog = () => {
    setImageUrl(null);
    setImageDescription(null);
    setShowDialog(false);
  };

  return (
    <div>
      <button onClick={open} className="camera-button">
        <FaCameraRetro />
      </button>
      <Dialog
        className="add-image-dialog"
        isOpen={showDialog}
        onDismiss={close}
      >
        <div>
          <h2>Publiser et nytt bilde</h2>
          <label htmlFor="url">Url til bildet</label>
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            className="add-image-dialog-input"
            name="url"
            placeholder="https://dog.png"
          />
          <label htmlFor="description">Beskrivelse</label>
          <textarea
            onChange={(e) => setImageDescription(e.target.value)}
            className="add-image-dialog-input"
            rows="5"
            placeholder="Hvite skyer og fjelltopper"
          />
          <button
            onClick={() => addImage(imageUrl, imageDescription)}
            type="submit"
          >
            Post
          </button>
          <button>Avbryt</button>
        </div>
      </Dialog>
    </div>
  );
};

export default AddImage;
