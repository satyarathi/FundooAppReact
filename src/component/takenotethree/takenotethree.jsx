import React from "react";
import "./takenotethree.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

function TakeNoteThree() {
  return (
    <div className="takenotethree">
      <div className="marktwop1">
        <input type="text" className="title2" size="20" placeholder="Title" />

        <div className="pin2">
          <PushPinIcon />
        </div>
      </div>
      <div className="marktwop2">
        <input type="text" className="note2" size="20" placeholder="Note" />
      </div>

      <div className="partp1">
        <div className="pv1">
          <AddAlertOutlinedIcon />
        </div>
        <div className="pv1">
          <PersonAddAlt1Icon />
        </div>
        <div className="pv1">
          <ColorLensIcon />
        </div>
        <div className="pv1">
          <InsertPhotoIcon />
        </div>
        <div className="pv1">
          <ArchiveIcon />
        </div>
        <div className="pv1">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default TakeNoteThree;
