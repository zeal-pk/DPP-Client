"use client";
import zealitLogo from "../assets/ZealLogo.png";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import admin from "../assets/admin.png";
import user from "../assets/user.png";

export default function Login() {
  return (
    <div className="main">
      <div className="login-page-div">
        <section className="login-page-intro-section">
          <h1>
            Hello,<br></br>Welcome to Digital Product Passport
          </h1>
        </section>

        <section className="login-page-avatar-section">
          <Stack direction="row" spacing={10}>
            <Link href="/admin" className="login-link">
              <Avatar
                alt="Admin"
                src={admin}
                sx={{ width: 100, height: 100 }}
              />
              Admin
            </Link>
            <Link href="/user" className="login-link">
              <Avatar alt="User" src={user} sx={{ width: 100, height: 100 }} />
              User
            </Link>
          </Stack>
          <p>Please Login </p>
        </section>
      </div>
    </div>
  );
}
