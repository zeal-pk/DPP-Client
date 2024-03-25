"use client";
import React, { Suspense } from "react";
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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import LoadingPage from "../../loading";

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

  let [productDetails, setProductDetails] = useState([]);
  let [productName, setProductName] = useState();
  let [productId, setProductId] = useState();
  let [showAlert, setShowAlert] = useState("none");
  let [alertSeverity, setAlertSeverity] = useState("");
  let [newProductID, setNewProductID] = useState();
  let [toDelete, setToDelete] = useState("");
  let [loading, setLoading] = useState(false);
  let [done, setDone] = useState(false);
  let [loadId, setLoadId] = useState(false);

  // Modal Helper -START
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCopy, setOpenCopy] = useState(false);
  const handleOpenCopy = () => setOpenCopy(true);
  const handleCloseCopy = () => setOpenCopy(false);

  const [openDeleteModal, setOpenDeleteModat] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModat(true);
  const handleCloseDeleteModal = () => setOpenDeleteModat(false);
  // Modal Helper - END

  async function postProduct(data) {
    try {
      let token = localStorage.getItem("access_token");
      const response = await axios.post(`${serverUrl}/postProduct`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      alert(error);
    }
  }

  function pageLoading(val) {
    setLoadPage(val);
    // setTimeout(() => {
    //   setLoadPage(false);
    // }, 60000);
  }

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

  async function generateProdID(prodName) {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");
    try {
      const response = await axios.get(`${serverUrl}/genProdId`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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
        Fun();
      }
    } catch (error) {
      alert(error);
    }
  }

  async function copyProduct(prodId) {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    try {
      let res = await axios.get(`${serverUrl}/copyProd/${prodId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      Fun();
    } catch (err) {
      alert(err);
    }
  }

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      pageLoading(true);
      try {
        const response = await axios.get(`${serverUrl}/getAllProducts`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        pageLoading(false);
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

  const deleteProduct = async (productId) => {
    console.log(productId);
    let token = localStorage.getItem("access_token");
    axios
      .delete(`${serverUrl}/deleteProduct/${productId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
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
      {loadPage ? (
        <LoadingPage />
      ) : (
        <>
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
                {productDetails.map((productDetail, index) => (
                  <Card sx={{ maxWidth: 350 }} key={productDetail.id}>
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
                    <CardActions className="customerList-card-cardAction">
                      <Stack direction="row" spacing={0}>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            router.push(
                              `/admin/editProduct/${productDetail.id}`
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
                            copyProduct(productDetail.id);
                          }}
                        >
                          {copyAnimation(index)}
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            handleOpenDeleteModal();
                            setToDelete(productDetail.id);
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
        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={handleOpenCopy}
        >
          Copy Product
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

      {/* --------------------------------- Copy Product Button Section - END */}

      <div>
        <Modal
          open={openCopy}
          onClose={handleCloseCopy}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Product ID
            </Typography>
            <TextField
              size="small"
              onChange={(e) => setProductId(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => {
                copyProduct(productId);
                handleCloseCopy();
              }}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </div>

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
                deleteProduct(toDelete);
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
