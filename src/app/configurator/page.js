"use client";
import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "@/components/navBar";

export default function ConfigurationRoutes() {
  const router = useRouter();

  async function VerifyToken() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "configurator") {
      try {
        await axios.get(
          "https://dpp-server-app.azurewebsites.net/routVerification"
        );
      } catch (error) {
        if (error.response.status == 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  }

  useEffect(() => {
    VerifyToken();
  }, []);

  return (
    <div className="main">
      <NavBar />
      <div className="configurator-button-section">
        <Button
          onClick={() => router.push("/configurator/productDetailsUI/Battery")}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Configure Product Addition Fields
              </Typography>
            </CardContent>
          </Card>
        </Button>
      </div>
    </div>
  );
}
