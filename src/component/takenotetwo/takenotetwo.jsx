import React, { useState } from "react";
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
import { createNote } from "../../services/noteService";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorPopper from "../colorPoper/colorpoper";
import { border } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function TakeNoteTwo(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    archive: false,
    trash: false,
    color: "white",
  });

  const listenToColorPoper = (color) => {
    console.log(color);
    setNote((prev) => ({ ...prev, color: color }));
  };

  const redirectTakeNoteOne = async () => {
    props.listenToTakeNoteTwo();
    let response = await createNote(note);
    console.log(response);
  };

  const useTitle = (e) => {
    setNote((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const usedescription = (e) => {
    setNote((prevState) => ({ ...prevState, description: e.target.value }));
  };

  const getArchive = () => {
    setNote((prevState) => ({ ...prevState, archive: true }));
  };

  const getTrash = () => {
    setNote((prevState) => ({ ...prevState, trash: true }));
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            // m: 1,
            width: 600,
            height: 30,
          },
        }}
      >
        <div className="takenotetwo" style={{ backgroundColor: note.color }}>
          <Paper elevation={4} style={{ backgroundColor: note.color }}>
            <div className="markone">
              <input
                style={{ backgroundColor: note.color }}
                type="text"
                className="title"
                onChange={useTitle}
                size="75"
                placeholder="Title"
              />

              <div className="pin" style={{ backgroundColor: note.color }}>
                <PushPinIcon />
              </div>
            </div>
            <div className="marktwo">
              <input
                style={{ backgroundColor: note.color }}
                type="text"
                className="notep1"
                onChange={usedescription}
                size="75"
                placeholder="Note"
              />
            </div>
            <div className="markthree" style={{ backgroundColor: note.color }}>
              <div className="part1">
                <div className="v1">
                  <AddAlertOutlinedIcon />
                </div>
                <div className="v1">
                  <PersonAddAlt1Icon />
                </div>
                <div className="v1">
                  <ColorPopper
                    action="create"
                    listenToColorPoper={listenToColorPoper}
                  />
                </div>
                <div className="v1">
                  <DeleteIcon onClick={getTrash} />
                </div>
                <div className="v1">
                  <ArchiveIcon onClick={getArchive} />
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
              <div className="part2" onClick={redirectTakeNoteOne}>
                Close
              </div>
            </div>
          </Paper>
        </div>
      </Box>
    </div>
  );
}

export default TakeNoteTwo;
