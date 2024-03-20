"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/navBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingPage from "../loading";

export default function Home() {
  let router = useRouter();

  let [loadPage, setLoadPage] = useState(false);

  async function VerifyToken() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      try {
        await axios.get(
          "https://dpp-server-app.azurewebsites.net/routVerification",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      } catch (error) {
        if (error.response.status !== 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  }

  function pageLoading() {
    setLoadPage(true);
    // setTimeout(() => {
    //   setLoadPage(false);
    // }, 60000);
  }

  useEffect(() => {
    VerifyToken();
  }, []);

  return (
    <div className="main">
      <NavBar />
      {loadPage ? (
        <LoadingPage />
      ) : (
        <div className="tilePage">
          <Button
            onClick={() => {
              pageLoading();
              router.push("/admin/customerList");
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Customer List
                </Typography>
              </CardContent>
            </Card>
          </Button>

          <Button
            onClick={() => {
              pageLoading();
              router.push("/admin/productList");
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Product List
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </div>
      )}
    </div>
  );
}
