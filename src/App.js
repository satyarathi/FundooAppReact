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
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/proctectedRoutes";
import AuthRoute from "./routes/authRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AuthRoute>
                <SignIn />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
