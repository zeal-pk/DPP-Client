"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import zealitLogo from "../assets/ZealLogo.png";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const router = useRouter();

  let [loading, setLoading] = useState(false);
  let [alert, setAlert] = useState(false);
  let [alertMessage, setAlertMessage] = useState();
  let [alertSeverity, setAlertSeverity] = useState();

  // MUI Show and Hide Password - START
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // MUI Show and Hide Password - END

  function loadData() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }

  function errAlert(errData) {
    setLoading(false);
    let message = errData.message;
    let severity = errData.severity;
    setAlert(true);
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  async function handleLogin(e) {
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    loadData();
    e.preventDefault();
    let mail = email;
    let pass = password;
    if (!mail) {
      alert("Please Provide an Email Address");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      let errData = {
        message: "Please Provide a Valid Email Address",
        severity: "error",
      };
      errAlert(errData);
    } else if (!pass) {
      let errData = {
        message: "Please Provide a Password",
        severity: "error",
      };
      errAlert(errData);
    } else {
      try {
        let data = {
          email: mail,
          password: pass,
        };

        let response = await axios
          .post(`${serverUrl}/login`, data)
          .then((response) => {
            localStorage.setItem("access_token", response.data.token);
            localStorage.setItem("current_user", response.data.email);
            localStorage.setItem("current_user_role", response.data.role);
            if (
              response.data.passwordStatus == true &&
              response.data.token !== "undefined"
            ) {
              router.push(`/${response.data.role}`);
            } else {
              let errData = {
                message: "Email or Password is Incorrect",
                severity: "error",
              };
              errAlert(errData);
            }
          });
      } catch (error) {
        let errData = {
          message: error.message,
          severity: "error",
        };
        errAlert(errData);
      }
    }
  }

  return (
    <div className="main">
      <div className="login-page-div">
        <section className="login-page-intro-section">
          <Image src={zealitLogo} width="260" height="100" alt="" />
          <h2>
            Hello,<br></br>Welcome to Digital Product Passport
          </h2>
        </section>

        <form onSubmit={handleLogin}>
          <Stack spacing={2} direction="column" sx={{ width: 320 }}>
            Email Address
            <TextField
              id="outlined-basic"
              value={email || ""}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl sx={{ m: 1 }} variant="outlined">
              Password
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
              />
              {alert ? (
                <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
                  {alertMessage}
                </Alert>
              ) : (
                <></>
              )}
            </FormControl>
            {loading == true ? (
              <Button variant="text">
                <CircularProgress color="primary" />
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                Login
              </Button>
            )}
          </Stack>
          <p>
            Don&apos;t have an account? Please
            <Button
              variant="text"
              onClick={() => {
                // router.push("/signup");
                alert(
                  "Currently a new user can be created only by the product team."
                );
              }}
            >
              Signup
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
}
