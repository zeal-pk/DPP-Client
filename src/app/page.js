"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import zealitLogo from "../assets/ZealLogo.png";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const router = useRouter();

  // MUI Show and Hide Password - START
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // MUI Show and Hide Password - END

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  async function handleLogin(loginData) {
    let email = loginData.email;
    let password = loginData.password;

    if (!email) {
      alert("Please Provide a valid Email Address");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      alert("Please Provide a valid Email Address");
    } else if (!password) {
      alert("Please Provide Password");
    } else {
      const res = await axios.get(
        `http://localhost:9000/login/${email}/${password}`
      );
      console.log(res);

      if (res.data.passwordStatus == true) {
        router.push(`/${res.data.role}`);
      } else {
        alert("Email or Password is Incorrect!");
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

        <Stack spacing={2} direction="column" sx={{ width: 320 }}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
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
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Stack>

        <Stack spacing={1}>
          <Button
            variant="contained"
            onClick={() => {
              let loginData = {
                email: email,
                password: password,
              };
              handleLogin(loginData);
            }}
          >
            Login
          </Button>
        </Stack>
        <p>
          Don't have an account? Please{" "}
          <Button variant="text" onClick={() => router.push("/signup")}>
            Signup
          </Button>
        </p>
      </div>
    </div>
  );
}
