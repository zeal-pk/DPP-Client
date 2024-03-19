"use client";
import React from "react";
import { useState } from "react";
import zealitLogo from "../../assets/ZealLogo.png";
import Image from "next/image";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import BackButton from "@/components/backButton";

export default function Signup() {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  async function handleSignup(userData) {
    let response = await axios
      .post(`${serverUrl}/postUser`, userData)
      .then((response) => {
        // console.log(response);
      });
  }

  return (
    <div className="main">
      <Image src={zealitLogo} width="260" height="100" />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          height: "50vh",
        }}
      >
        <BackButton />
        <h3>User Registration</h3>
        <Stack spacing={2} direction="column" sx={{ width: 320 }}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>

        <Stack spacing={1}>
          <Button
            variant="contained"
            onClick={() => {
              let usrData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: "user",
              };
              handleSignup(usrData);
            }}
          >
            SignUp
          </Button>
        </Stack>
      </Container>
      {/* </div> */}
    </div>
  );
}
