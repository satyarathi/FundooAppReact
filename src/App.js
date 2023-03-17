import logo from "./logo.svg";
import "./App.css";
import Header from "./component/headers/header";
import TakeNoteOne from "./component/takenoteone/takenoteone";
import TakeNoteTwo from "./component/takenotetwo/takenotetwo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignUp from "./pages/signup/signup";
import SignIn from "./pages/signin/signin";
import TakeNoteThree from "./component/takenotethree/takenotethree";

function App() {
  return (
    <div className="App">
      <Header />
      <TakeNoteOne />
      <TakeNoteTwo />
      <TakeNoteThree />
      {/* <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
      />
      <Button variant="contained">Contained</Button> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </div>
  );
}
export default App;
