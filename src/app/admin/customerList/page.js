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
  let [customerDetails, setCustomerDetails] = useState([]);
  let [showAlert, setShowAlert] = useState("none");
  let [alertSeverity, setAlertSeverity] = useState("");
  let [toDelete, setToDelete] = useState("");
  let [loading, setLoading] = useState(false);
  let [done, setDone] = useState(false);
  let [loadId, setLoadId] = useState();

  const [openDeleteModal, setOpenDeleteModat] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModat(true);
  const handleCloseDeleteModal = () => setOpenDeleteModat(false);

  async function generateCustomerId() {
    // console.log("custId");
    try {
      let token = localStorage.getItem("access_token");
      const response = await axios.get(`${serverUrl}/genCustId`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      let custId = response.data.message;

      router.push(`/admin/addCustomer/${custId}`);
    } catch (error) {
      alert(error);
    }
  }

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      try {
        const response = await axios.get(`${serverUrl}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
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
    } catch (err) {
      alert(err);
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
            {customerDetails.map((customerDetail, index) => (
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
