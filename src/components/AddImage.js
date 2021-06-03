import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { Dialog } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";

const AddImage = () => {
  const [showDialog, setShowDialog] = useState(true);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

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
        <h2>Last opp bilde</h2>
        <input className="add-image-dialog-input" />
        <textarea className="add-image-dialog-input" rows="5" />
        <button type="submit">Post</button>
        <button>Avbryt</button>
      </Dialog>
    </div>
  );
};

export default AddImage;
