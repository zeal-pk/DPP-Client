"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackButton from "@/components/backButton";
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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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
  const router = useRouter();
  let [productDetails, setProductDetails] = useState([]);
  let [productName, setProductName] = useState();
  let [showAlert, setShowAlert] = useState("none");
  let [alertSeverity, setAlertSeverity] = useState("");
  let [newProductID, setNewProductID] = useState();

  // Modal Helper -START
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal Helper - END

  async function postProduct(data) {
    try {
      let token = localStorage.getItem("access_token");
      const response = await axios.post(
        // "https://dpp-server-app.azurewebsites.net/genProdId",
        "http://localhost:9000/postProduct",
        data,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      alert(error);
    }
  }

  async function generateProdID(prodName) {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");
    try {
      const response = await axios.get(
        // "https://dpp-server-app.azurewebsites.net/genProdId",
        "http://localhost:9000/genProdId",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      if (response.data.message == "ID Range did not match") {
        alert("ID Range did not match");
      } else {
        console.log(response.data.message);
        let prodId = response.data.message;
        let prodData = {
          id: prodId,
          name: prodName,
        };
        postProduct(prodData);
      }
    } catch (error) {
      alert(error);
    }
  }

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      try {
        const response = await axios.get(
          "https://dpp-server-app.azurewebsites.net/getAllProducts",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setProductDetails(response.data);
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

  // const deleteCustomer = async (customerId) => {
  //   let token = localStorage.getItem("access_token");
  //   axios
  //     .delete(
  //       `https://dpp-server-app.azurewebsites.net/deleteCustomer/${customerId}`,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       if (res.status == 200) {
  //         setAlertSeverity("success");
  //         setShowAlert("block");
  //         setTimeout(() => {
  //           setShowAlert("none");
  //           Fun();
  //         }, "2000");
  //       } else {
  //         setAlertSeverity("error");
  //         setShowAlert("block");
  //         setTimeout(() => {
  //           setShowAlert("none");
  //         }, "2000");
  //       }
  //     });
  // };

  return (
    <div className="main">
      <NavBar />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <BackButton />
        <h3 className="pageTitle">Product List</h3>
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

      {/* --------------------------------- Product List Section - START */}
      <section className="customerList-scroll">
        <section className="customerList-scroll-content">
          <section className="customerList-section">
            {productDetails.map((productDetail) => (
              <Card sx={{ maxWidth: 350 }} key={productDetail.id}>
                <Link
                  className="customerList-link"
                  href={`/admin/productDetails/${productDetail.id}`}
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
                        router.push(`/admin/updateCustomer/${productDetail.id}`)
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

      {/* --------------------------------- Product List Section - END */}

      {/* --------------------------------- Add Product Button Section - START */}
      <section className="customerList-button-section">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add Product
        </Button>
      </section>

      {/* --------------------------------- Add Product Button Section - END */}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Product Name
            </Typography>
            <TextField
              size="small"
              onChange={(e) => setProductName(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => {
                generateProdID(productName);
                handleClose();
              }}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
