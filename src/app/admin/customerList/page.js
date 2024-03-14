"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import BackButton from "@/components/backButton";
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
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";

export default function Home() {
  const router = useRouter();
  let [customerDetails, setCustomerDetails] = useState([]);
  let [showAlert, setShowAlert] = useState("none");
  let [alertSeverity, setAlertSeverity] = useState("");

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      try {
        const response = await axios.get(
          "https://dpp-server-app.azurewebsites.net/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setCustomerDetails(response.data);
      } catch (error) {
        if (error.response.status == 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  };
  useEffect(() => {
    Fun();
  }, []);

  const deleteCustomer = async (customerId) => {
    let token = localStorage.getItem("access_token");
    axios
      .delete(
        `https://dpp-server-app.azurewebsites.net/deleteCustomer/${customerId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          setAlertSeverity("success");
          setShowAlert("block");
          setTimeout(() => {
            setShowAlert("none");
            Fun();
          }, "2000");
        } else {
          setAlertSeverity("error");
          setShowAlert("block");
          setTimeout(() => {
            setShowAlert("none");
          }, "2000");
        }
      });
  };

  return (
    <div className="main">
      <NavBar />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <BackButton />
        <h3 className="pageTitle">Customer List</h3>
      </div>

      <Alert
        variant="filled"
        severity={alertSeverity}
        sx={{ display: showAlert }}
      >
        {alertSeverity == "success"
          ? "Success! Action Completed"
          : "Error! Please Try Again Later"}
      </Alert>

      {/* --------------------------------- Customer List Section - START */}
      <section className="customerList-scroll">
        <section className="customerList-scroll-content">
          <section className="customerList-section">
            {customerDetails.map((customerDetail) => (
              <Card sx={{ maxWidth: 350 }} key={customerDetail.id}>
                <Link
                  className="customerList-link"
                  href={`/admin/customerDetails/${customerDetail.id}`}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      ID: {customerDetail.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {customerDetail.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {customerDetail.businessType}
                    </Typography>
                    <Typography variant="body2">
                      {customerDetail.descreption}
                    </Typography>
                  </CardContent>
                </Link>
                <CardActions className="customerList-card-cardAction">
                  <Button
                    size="small"
                    // onClick={getCustomerData(customerDetail.customerId)}
                  >
                    Learn More
                  </Button>
                  <Stack direction="row" spacing={0}>
                    <IconButton
                      aria-label="delete"
                      onClick={() =>
                        router.push(
                          `/admin/updateCustomer/${customerDetail.id}`
                        )
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteCustomer(customerDetail.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            ))}
          </section>
        </section>
      </section>

      {/* --------------------------------- Customer List Section - END */}

      {/* --------------------------------- Add Customer Button Section - START */}
      <section className="customerList-button-section">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            router.push("/admin/addCustomer");
          }}
        >
          Add Customer
        </Button>
      </section>

      {/* --------------------------------- Add Customer Button Section - END */}
    </div>
  );
}
