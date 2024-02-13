"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Signup() {
  return (
    <section className="login-section">
      <form className="login-form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Password" variant="filled" />
        </Box>
      </form>
    </section>
  );
}
