import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { Dialog } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";

const AddImage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <button onClick={open} className="camera-button">
        <FaCameraRetro />
      </button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <h2>Last opp bilde</h2>
        <form className="image-form">
          <div>
            <label htmlFor="url">URL</label>
            <br />
            <input type="text" name="url" />
          </div>
          <div>
            <label htmlFor="description">Beskrivelse</label>
            <br />
            <textarea name="description" rows="3" />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AddImage;
