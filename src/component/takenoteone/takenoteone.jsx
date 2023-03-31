import React from "react";
import "./takenoteone.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BrushIcon from "@mui/icons-material/Brush";
import ImageIcon from "@mui/icons-material/Image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function TakeNoteOne(props) {
  const redirectTakeNoteTwo = () => {
    props.listenToTakeNoteOne();
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
            height: 20,
          },
        }}
      >
        <div className="takenoteone" onClick={redirectTakeNoteTwo}>
          <Paper elevation={4}>
            <div className="typenote">
              <input
                type="text"
                className="note001"
                size="80"
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
          </Paper>
        </div>
      </Box>
    </div>
  );
}
export default TakeNoteOne;
