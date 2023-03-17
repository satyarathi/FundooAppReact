import React from "react";
import "./takenotetwo.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

function TakeNoteTwo() {
  return (
    <div className="takenotetwo">
      <div className="markone">
        <input type="text" className="title" size="60" placeholder="Title" />

        <div className="pin">
          <PushPinIcon />
        </div>
      </div>
      <div className="marktwo">
        <input type="text" className="notep1" size="60" placeholder="Note" />
      </div>
      <div className="markthree">
        <div className="part1">
          <div className="v1">
            <AddAlertOutlinedIcon />
          </div>
          <div className="v1">
            <PersonAddAlt1Icon />
          </div>
          <div className="v1">
            <ColorLensIcon />
          </div>
          <div className="v1">
            <InsertPhotoIcon />
          </div>
          <div className="v1">
            <ArchiveIcon />
          </div>
          <div className="v1">
            <MoreVertIcon />
          </div>
          <div className="v1">
            <UndoIcon />
          </div>
          <div className="v1">
            <RedoIcon />
          </div>
        </div>
        <div className="part2">Close</div>
      </div>
    </div>
  );
}

export default TakeNoteTwo;
