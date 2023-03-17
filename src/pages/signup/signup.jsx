import React from "react";
import "./signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signupp } from "../../services/userservice";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nameReg = /^[A-Z]{1}[a-zA-Z]+$/;

function SignUp() {
  const [signupObj, setSignupObj] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorObj, setErrorObj] = React.useState({
    firstNameError: false,
    firstNameHelper: "",
    lastNameError: false,
    lastNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const takefirstName = (a) => {
    setSignupObj((prevState) => ({ ...prevState, firstName: a.target.value }));
  };
  const takelastName = (b) => {
    setSignupObj((prevState) => ({ ...prevState, lastName: b.target.value }));
  };
  const takeEmail = (event) => {
    setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSignupObj((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const submit = async () => {
    let firstNameTest = nameReg.test(signupObj.firstName);
    let lastNameTest = nameReg.test(signupObj.lastName);
    let emailTest = emailRegex.test(signupObj.email);
    let passwordTest = passwordRegex.test(signupObj.password);

    if (firstNameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: true,
        firstNameHelper: "enter correct firstname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: false,
        firstNameHelper: "",
      }));
    }

    if (lastNameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: true,
        lastNameHelper: "enter correct lastname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: false,
        lastNameHelper: "",
      }));
    }

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

    if (
      firstNameTest === true &&
      lastNameTest === true &&
      emailTest === true &&
      passwordTest === true
    ) {
      let response = await signupp(signupObj);
      console.log(response);
    }
  };

  return (
    <div className="signUp">
      <div className="one1">
        <div className="box1">
          <img
            className="gimage"
            src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"
            alt="error"
          />
        </div>
        <div className="box2">
          <h3>Create your Google Account</h3>
        </div>
        <div className="box3">
          <div className="fName">
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              onChange={takefirstName}
              error={errorObj.firstNameError}
              helperText={errorObj.firstNameHelper}
            />
          </div>
          <div className="lName">
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              onChange={takelastName}
              error={errorObj.lastNameError}
              helperText={errorObj.lastNameHelper}
            />
          </div>
        </div>
        <div className="box4">
          <TextField
            className="emailbox"
            id="outlined-basic"
            label="User name"
            variant="outlined"
            onChange={takeEmail}
            error={errorObj.emailError}
            helperText={errorObj.emailHelper}
          />
        </div>
        <div className="box5">
          <div className="fName">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={takePassword}
              error={errorObj.passwordError}
              helperText={errorObj.passwordHelper}
            />
          </div>
          <div className="lName">
            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
            />
          </div>
        </div>
        <div className="box6">
          <div>Sign in instead</div>
          <div>
            <Button onClick={submit} variant="contained">
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="two2">
        <img
          className="image"
          src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
          alt="error"
        />
        <div>
          <p>One account. All of Google working for you.</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
