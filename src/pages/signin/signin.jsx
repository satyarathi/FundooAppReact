import React from "react";
import "./signin.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signinin } from "../../services/userservice";
import { Link, redirect, useNavigate } from "react-router-dom";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function SignIn() {
  const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });
  const [errorObj, setErrorObj] = React.useState({
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const navigate = useNavigate();

  const takeEmail = (event) => {
    // setn((prev)=>prev+1)
    setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSigninObj((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const submit = async () => {
    let emailTest = emailRegex.test(signinObj.email);
    let passwordTest = passwordRegex.test(signinObj.password);

    if (emailTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "enter correct password",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    }

    if (emailTest === true && passwordTest === true) {
      let response = await signinin(signinObj);
      console.log(response);
      localStorage.setItem("token", response.data.data.token);
      // return redirect("/dashboard");
      navigate("/dashboard");
    }
  };
  return (
    <div className="signin">
      <div className="img">
        <img
          className="gimg"
          src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"
          alt="error"
        />
      </div>
      <div className="text">
        <h4>Sign in</h4>
        <div>Use your google account</div>
      </div>
      <div className="email">
        <TextField
          className="emailid"
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          error={errorObj.emailError}
          helperText={errorObj.emailHelper}
          onChange={takeEmail}
        />
      </div>
      <div className="password">
        <TextField
          className="pass"
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={takePassword}
          error={errorObj.passwordError}
          helperText={errorObj.passwordHelper}
        />
      </div>
      <div className="text2">
        Not your computer? Use Guest mode to sign in privately.
      </div>
      <div className="create">
        <div className="caccount">
          <Link to="/signup">Create account</Link>
        </div>
        <div className="linkbutton">
          <Button onClick={submit} variant="contained">
            Next
            {/* <Link to="/dashboard">Next</Link> */}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
