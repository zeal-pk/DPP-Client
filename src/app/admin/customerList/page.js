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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import LoadingPage from "@/app/loading";

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

  let [customerDetails, setCustomerDetails] = useState([]);
  let [toDelete, setToDelete] = useState("");
  let [loading, setLoading] = useState(false);
  let [done, setDone] = useState(false);
  let [loadId, setLoadId] = useState();

  const [openDeleteModal, setOpenDeleteModat] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModat(true);
  const handleCloseDeleteModal = () => setOpenDeleteModat(false);

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

  async function generateCustomerId() {
    // console.log("custId");
    pageLoading(true);
    try {
      let token = localStorage.getItem("access_token");
      const response = await axios.get(`${serverUrl}/genCustId`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      let custId = response.data.message;
      pageLoading(true);
      router.push(`/admin/addCustomer/${custId}`);
    } catch (error) {
      let errData = {
        message: error.message,
        severity: "error",
      };
      errAlert(errData);
    }
  }

  function pageLoading(val) {
    setLoadPage(val);
  }

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      pageLoading(true);
      try {
        const response = await axios.get(`${serverUrl}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCustomerDetails(response.data);
        pageLoading(false);
      } catch (error) {
        let errData = {
          message: error.message,
          severity: "error",
        };
        errAlert(errData);
      }
    } else {
      router.push("/error");
    }
  };

  async function load() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 1000);
      Fun();
    }, 2000);
  }

  async function copyCustomer(custId) {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    try {
      let res = await axios.get(`${serverUrl}/copyCustomer/${custId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      let errData = {
        message: error.message,
        severity: "error",
      };
      errAlert(errData);
    }
  }

  function copyAnimation(index) {
    if (loading && loadId == index) {
      return <CircularProgress color="inherit" size="20px" />;
    } else if (done && loadId == index) {
      return <DoneIcon color="success" />;
    } else {
      return <ContentCopyIcon />;
    }
  }

  useEffect(() => {
    Fun();
  }, []);

  const deleteCustomer = async (customerId) => {
    let token = localStorage.getItem("access_token");
    try {
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
            let alertData = {
              message: `Customer: ${customerId} Deleted`,
              severity: "success",
            };
            errAlert(alertData);
            Fun();
          } else {
            let alertData = {
              message: `ERROR: Customer: ${customerId} Not Deleted`,
              severity: "error",
            };
            errAlert(alertData);
          }
        });
    } catch (error) {
      let errData = {
        message: error.message,
        severity: "error",
      };
      errAlert(errData);
    }
  };

  return (
    <div className="main">
      <NavBar />
      {alert ? (
        <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
          {alertMessage}
        </Alert>
      ) : (
        <></>
      )}

      <div style={{ display: "flex", alignItems: "baseline" }}>
        <BackButton />
        <h3 className="pageTitle">Customer List</h3>
      </div>
      {/* --------------------------------- Customer List Section - START */}
      {loadPage ? (
        <LoadingPage />
      ) : (
        <>
          <section className="customerList-scroll">
            <section className="customerList-scroll-content">
              <section className="customerList-section">
                {customerDetails.map((customerDetail, index) => (
                  <Card sx={{ maxWidth: 350 }} key={customerDetail.id}>
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
                    <CardActions className="customerList-card-cardAction">
                      <Stack direction="row" spacing={0}>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            router.push(
                              `/admin/updateCustomer/${customerDetail.id}`
                            );
                            pageLoading(true);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            load();
                            setLoadId(index);
                            copyCustomer(customerDetail.id);
                          }}
                        >
                          {copyAnimation(index)}
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            handleOpenDeleteModal();
                            setToDelete(customerDetail.id);
                          }}
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
        </>
      )}
      {/* --------------------------------- Customer List Section - END */}

      {/* --------------------------------- Add Customer Button Section - START */}
      <section className="customerList-button-section">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            generateCustomerId();
          }}
        >
          Add Customer
        </Button>
      </section>

      {/* --------------------------------- Add Customer Button Section - END */}

      {/* --------------------------------- Deletion Conformation - END */}

      <div>
        <Modal
          open={openDeleteModal}
          onClose={handleCloseDeleteModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Delete?
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                deleteCustomer(toDelete);
                handleCloseDeleteModal();
              }}
            >
              Yes
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
