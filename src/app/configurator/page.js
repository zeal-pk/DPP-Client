"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/navBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import SettingsIcon from "@mui/icons-material/Settings";
import LoadingPage from "../loading";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const router = useRouter();
  let [loadPage, setLoadPage] = useState(false);
  let [alert, setAlert] = useState(false);
  let [alertMessage, setAlertMessage] = useState();
  let [alertSeverity, setAlertSeverity] = useState();

  let [productDetails, setProductDetails] = useState([]);
  let [productName, setProductName] = useState();
  let [newProductID, setNewProductID] = useState();

  function errAlert(errData) {
    setLoadPage(false);
    let message = errData.message;
    let severity = errData.severity;
    setAlert(true);
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  // Modal Helper -START
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal Helper - END

  function pageLoading(val) {
    setLoadPage(val);
  }

  // async function postProduct(data) {

  //   try {
  //     let token = localStorage.getItem("access_token");
  //     const response = await axios.post(
  //       // "https://dpp-server-app.azurewebsites.net/genProdId",
  //       "http://localhost:9000/postProduct",
  //       data,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");
    pageLoading(true);
    if (token && role == "configurator") {
      try {
        const response = await axios.get(
          `${serverUrl}/getAllProducts`,
          // "http://localhost:9000/getAllProducts",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        pageLoading(false);
        setProductDetails(response.data);
      } catch (error) {
        if (error.status == 403) {
          router.push("/error");
        } else {
          let errData = {
            message: error.message,
            severity: "error",
          };
          errAlert(errData);
        }
      }
    } else {
      router.push("/error");
    }
  };
  useEffect(() => {
    Fun();
  }, []);

  return (
    <div className="main">
      <NavBar />
      {alert ? <Alert severity={alertSeverity}>{alertMessage}</Alert> : <></>}

      {loadPage ? (
        <LoadingPage />
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <h3 className="pageTitle">Product List</h3>
          </div>

          {/* --------------------------------- Product List Section - START */}
          <section className="customerList-scroll">
            <section className="customerList-scroll-content">
              <section className="customerList-section">
                {productDetails.map((productDetail) => (
                  <Card sx={{ maxWidth: 350 }} key={productDetail.id}>
                    <Link
                      className="customerList-link"
                      href={`/configurator/productDetailsUI/${productDetail.id}`}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          ID: {productDetail.id}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {productDetail.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {productDetail.category}
                        </Typography>
                        <Typography variant="body2">
                          {productDetail.description}
                        </Typography>
                      </CardContent>
                    </Link>
                    <CardActions className="customerList-card-cardAction">
                      <Stack direction="row" spacing={0}>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            router.push(
                              `/configurator/productDetailsUI/${productDetail.id}`
                            );
                            pageLoading(true);
                          }}
                        >
                          <SettingsIcon />
                        </IconButton>
                      </Stack>
                    </CardActions>
                  </Card>
                ))}
              </section>
            </section>
          </section>
        </>
      )}
      {/* --------------------------------- Product List Section - END */}
    </div>
  );
}
