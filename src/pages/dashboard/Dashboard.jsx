import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MiniDrawer from "../../component/drawer/drawer";
import Header from "../../component/headers/header";
import TakeNoteOne from "../../component/takenoteone/takenoteone";
import TakeNoteThree from "../../component/takenotethree/takenotethree";
import TakeNoteTwo from "../../component/takenotetwo/takenotetwo";
import { getNote } from "../../services/noteService";

function Dashboard() {
  const [toggles, setToggle] = useState(true);
  const [note, setnote] = useState([]);

  const [drawerToggles, setDrawerToggle] = useState(false);
  const [choice, setChoice] = useState("notes");

  const listenToTakeNoteOne = () => {
    setToggle(false);
  };

  const listenToTakeNoteTwo = () => {
    setToggle(true);
  };
  const getAllNote = async () => {
    let response = await getNote();
    let filter = [];
    if (choice === "notes") {
      filter = response.data.data.filter((note) => {
        if (note.archive === false && note.trash === false) {
          return note;
        }
      });
    } else if (choice === "Archive") {
      filter = response.data.data.filter((note) => {
        if (note.archive === true && note.trash === false) {
          return note;
        }
      });
    } else if (choice === "Trash") {
      filter = response.data.data.filter((note) => {
        if (note.archive === false && note.trash === true) {
          return note;
        }
      });
    }
    console.log(response);
    setnote(filter);
  };

  useEffect(() => {
    getAllNote();
  }, [choice]);

  const listenToHeader = () => {
    setDrawerToggle(!drawerToggles);
  };

  const listenToDrawer = (data) => {
    setChoice(data);
  };
  return (
    <div>
      <Header listenToHeader={listenToHeader} />
      <MiniDrawer
        drawerToggles={drawerToggles}
        listenToDrawer={listenToDrawer}
      />
      <div>
        {toggles ? (
          <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} />
        ) : (
          <TakeNoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} />
        )}
      </div>

      <div>
        <Container
          className="containerbox"
          style={{
            width: "80vw",
            marginLeft: "200px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          <Grid className="gridbox" container spacing={3}>
            {note.map((noteObj, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <TakeNoteThree noteObj={noteObj} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
