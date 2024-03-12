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

  async function handleLogin(e) {
    e.preventDefault();
    let mail = email;
    let pass = password;
    if (!mail) {
      alert("Please Provide an Email Address");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      alert("Please Provide a valid Email Address");
    } else if (!pass) {
      alert("Please Provide Password");
    } else {
      try {
        let data = {
          email: mail,
          password: pass,
        };
        let response = await axios
          // .post(`https://dpp-server-app.azurewebsites.net/login`, data)
          .post("http://localhost:9000/login", data)
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
              alert("Email or Password is Incorrect!");
            }
            console.log(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("access_token") &&
  //     localStorage.getItem("current_user_role")
  //   ) {
  //     router.push(`/${localStorage.getItem("current_user_role")}`);
  //   }
  // });

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

            <Button type="submit" variant="contained">
              Login
            </Button>
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
