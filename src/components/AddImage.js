import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { uploadImage } from "../server";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const AddImage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const addImage = async (url, description) => {
    const imageResponse = await uploadImage({ url, description });
    if (!imageResponse) {
      return;
    }
    resetAndCloseDialog();
  };

  const resetAndCloseDialog = () => {
    setImageUrl("");
    setImageDescription("");
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
            value={imageUrl}
          />
          <label htmlFor="description">Beskrivelse</label>
          <textarea
            onChange={(e) => setImageDescription(e.target.value)}
            className="add-image-dialog-input"
            rows="5"
            placeholder="Hvite skyer og fjelltopper"
            value={imageDescription}
          />
          <button
            className="publish-button"
            onClick={() => addImage(imageUrl, imageDescription)}
          >
            Post
          </button>
          <button onClick={resetAndCloseDialog}>Avbryt</button>
        </div>
      </Dialog>
    </div>
  );
};

export default AddImage;
