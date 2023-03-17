import React from "react";
import "./takenoteone.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BrushIcon from "@mui/icons-material/Brush";
import ImageIcon from "@mui/icons-material/Image";

function TakeNoteOne() {
  return (
    <div className="takenoteone">
      <div className="typenote">
        <input
          type="text"
          className="note001"
          size="60"
          placeholder="Take a note..."
        />
        <div className="noteicon">
          <div className="icon">
            <CheckBoxIcon />
          </div>
          <div className="icon">
            <BrushIcon />
          </div>
          <div className="icon">
            <ImageIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TakeNoteOne;
