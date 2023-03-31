import React, { useState } from "react";
import "./takenotethree.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  getNote,
  updateNote,
  updateNoteArchive,
  updateNoteTrash,
} from "../../services/noteService";
import ColorPopper from "../colorPoper/colorpoper";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import { Tooltip } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};
function TakeNoteThree({ noteObj }) {
  const [open, setOpen] = React.useState(false);
  const [noteObj1, setNoteObj] = useState({
    title: "",
    description: "",
  });
  const handleOpen = (obj) => {
    setOpen(true);
    setNoteObj({
      title: obj.title,
      description: obj.description,
    });
  };

  const handleClose = () => setOpen(false);

  const updateArchive = async () => {
    noteObj.archive = true;
    let response = await updateNoteArchive(noteObj);
    console.log(response);
  };

  const changeTitle = (e) => {
    setNoteObj((prev) => ({ ...prev, title: e.target.value }));
  };

  const changeDes = (e) => {
    setNoteObj((prev) => ({ ...prev, description: e.target.value }));
  };

  const closeButton = async () => {
    let obj = {
      title: noteObj1.title,
      description: noteObj1.description,
    };
    console.log(obj);
    const response = await updateNote(noteObj1, noteObj._id);
    console.log(response);
    setOpen(false);
    window.location.reload();
  };

  const updateTrash = async () => {
    noteObj.trash = true;
    let response = await updateNoteTrash(noteObj);
    console.log(response);
  };

  return (
    <>
      <Card
        className="takenotethree"
        style={{ backgroundColor: noteObj.color }}
      >
        <CardContent onClick={() => handleOpen(noteObj)}>
          <Typography
            variant="h6"
            flexWrap="wrap"
            display="flex"
            justifyContent="flex-start"
            gutterBottom
          >
            {noteObj.title}
          </Typography>

          {/* <div className="pin2">
          <PushPinIcon />
        </div> */}
          <Typography
            component="div"
            color="text.secondary"
            paragraph="true"
            flexWrap="wrap"
            display="flex"
            justifyContent="flex-start"
            width="100"
            height="30%"
          >
            {noteObj.description}
          </Typography>
        </CardContent>

        <CardActions>
          <div
            className="partp"
            style={{
              width: "250px",
              height: "15px",
              display: "flex",
              flexDirection: "row",
              marginLeft: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Tooltip title="Alert">
              <AddAlertOutlinedIcon />
            </Tooltip>

            <Tooltip title="AddPerson">
              <PersonAddAlt1Icon />
            </Tooltip>
            <Tooltip title="ColorPopper">
              <ColorPopper action="edit" id1={noteObj._id} />
            </Tooltip>
            <Tooltip title="Trash">
              <DeleteIcon onClick={updateTrash} />
            </Tooltip>
            <Tooltip title="Archive">
              <ArchiveIcon onClick={updateArchive} />
            </Tooltip>
            <Tooltip title="More">
              <MoreVertIcon />
            </Tooltip>
          </div>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: noteObj.color }}>
          <input
            type="text"
            defaultValue={noteObj1.title}
            onChange={changeTitle}
            style={{
              width: "400px",
              height: "20px",
              border: "none",
              display: "flex",
              flexDirection: "row",
              fontSize: "1em",
              fontWeight: "bold",
              marginLeft: "8px",
              alignItems: "center",
              backgroundColor: noteObj.color,
            }}
          ></input>
          <input
            type="text"
            defaultValue={noteObj1.description}
            onChange={changeDes}
            style={{
              width: "400px",
              height: "20px",
              border: "none",
              display: "flex",
              flexDirection: "row",
              fontSize: "1em",
              marginLeft: "8px",
              alignItems: "center",
              backgroundColor: noteObj.color,
            }}
          ></input>
          <div
            className="partp"
            style={{
              width: "400px",
              height: "10px",
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AddAlertOutlinedIcon />

            <PersonAddAlt1Icon />

            <ColorPopper action="edit" id1={noteObj._id} />

            <DeleteIcon onClick={updateTrash} />

            <ArchiveIcon onClick={updateArchive} />

            <MoreVertIcon />
            <Button
              onClick={closeButton}
              style={{ backgroundColor: noteObj1.color }}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default TakeNoteThree;
