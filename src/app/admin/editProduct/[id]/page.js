"use client";
import React from "react";
import { useState, useEffect } from "react";
import NavBar from "@/components/navBar.js";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  ThemeProvider,
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  Bar,
  Button,
  Form,
  FormItem,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  FileUploader,
} from "@ui5/webcomponents-react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

import * as XLSX from "xlsx";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function EditProduct() {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let router = useRouter();

  let [alert, setAlert] = useState(false);
  let [alertMessage, setAlertMessage] = useState();
  let [alertSeverity, setAlertSeverity] = useState();

  let [UiTemplate, setUiTemplate] = useState([]);
  let [productId, setProductId] = useState();
  let [productName, setProductName] = useState();
  let [productCategory, setProductCategory] = useState();
  let [productDescreption, setProductDescreption] = useState();
  let [imgUrl, setImgUrl] = useState();
  let [otherData, setOther] = useState();
  let [image, setImage] = useState();
  let [editMode, setEditMode] = useState(false);

  function errAlert(errData) {
    let message = errData.message;
    let severity = errData.severity;
    setAlert(true);
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  async function getProductUI() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    //getting id from url
    let path = window.location.pathname;
    let pathArr = path.split("/");
    let productId = pathArr[3];

    if (token && role == "admin") {
      try {
        await axios
          .get(`${serverUrl}/productUiTemplate/${productId}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            setUiTemplate(response.data);
            console.log(response.data);
          });
      } catch (error) {
        // if (error.response.status !== 403) {
        //   router.push("/error");
        // } else {
        //   console.log(error);
        // }
        console.log(error);
      }
    } else {
      router.push("/error");
    }
  }

  async function getProductDetails(productId) {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    try {
      await axios
        .get(`${serverUrl}/getProduct/${productId}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          setProductId(response.data.id);
          setProductName(response.data.name);
          setProductCategory(response.data.category);
          setProductDescreption(response.data.description);
          setImgUrl(response.data.imageUrl);
          console.log(response.data);
        });
    } catch (error) {
      // if (error.response.status !== 403) {
      //   router.push("/error");
      // } else {
      //   console.log(error);
      // }
      console.log(error);
    }
  }

  useEffect(() => {
    let path = window.location.pathname;
    let pathArr = path.split("/");
    let id = pathArr[3];
    getProductUI(id);
    getProductDetails(id);
  }, []);

  function handleUploadFile(e) {
    console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImage(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  }

  useEffect(() => {
    console.log(image);
  }, [image]);

  let [submitting, setSubmitting] = useState(false);
  let [submitStatus, setSubmitStatus] = useState({
    color: "primary",
    message: "Submit",
  });

  useEffect(() => {
    setTimeout(() => {
      setSubmitStatus({ color: "primary", message: "Submit" });
    }, 3000);
  }, [submitting]);

  async function handleUpdateHeaderData() {
    let token = localStorage.getItem("access_token");
    let path = window.location.pathname;
    let pathArr = path.split("/");
    let productId = pathArr[3];

    let editedData = {
      id: productId,
      name: productName,
      imageUrl: imgUrl,
      category: productCategory,
      description: productDescreption,
      otherData: otherData,
    };

    try {
      setSubmitting(true);
      let response = await axios.post(
        `${serverUrl}/updateProductHeader/${productId}`,
        editedData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status == 200) {
        setSubmitting(false);
        setSubmitStatus({ color: "success", message: "Successful" });
      }
    } catch (error) {
      let errData = {
        message: `${error}, Please try again later`,
        severity: "error",
      };
      errAlert(errData);
      setSubmitting(false);
      setSubmitStatus({ color: "error", message: `${error.message}` });
      console.log(error);
    }
  }

  function fieldIteration(subTabType, fields) {
    if (subTabType == "inputFields") {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {fields.map((field, index) => {
            if (field != "" && field != " ") {
              return (
                <p key={field}>
                  Field {index + 1}: <b>{field}</b>
                </p>
              );
            }
          })}
        </div>
      );
    } else if (subTabType == "document") {
      return (
        <div>
          <FileUploader type="file" onChange={handleUploadFile}>
            <Button>
              <CloudUploadIcon />
              Upload File
            </Button>
          </FileUploader>
          <img src={image} style={{ height: "100px" }} />
        </div>
      );
    }
  }

  let testData = [
    { Tab1: "Lokesh Kanna", SubTab1: "Dev" },
    { name: "Premanand", type: "SAP" },
    { name: "Narendhran", type: "Con" },
    // Object.keys(UiTemplate).map((key, index) => {
    //   return Object.keys(UiTemplate[key]).map((child) => {
    //     return { tab: key, subTab: UiTemplate[key][child] };
    //   });
    // }),
  ];

  function downloadExcel(testData) {
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.json_to_sheet(testData);
    let sheetName = "Sheet1";
    let fileName = "Test.xlsx";

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    XLSX.writeFileXLSX(workbook, fileName);
  }

  function ShowUIElements(UiTemplate) {
    return Object.keys(UiTemplate).map((key, index) => {
      if (
        key != "_id" &&
        key != "templateId" &&
        key != "Tab 1" &&
        key != "Tab 2" &&
        key != "Tab 3" &&
        key != "Tab 4" &&
        key != "Tab 5" &&
        key != "Tab 6" &&
        key != "Tab 7" &&
        key != "Tab 8" &&
        key != "Tab 9" &&
        key != "Tab 10"
      ) {
        return (
          <ObjectPageSection
            aria-label={key}
            key={index}
            id={key.replace(/\s/g, "")}
            titleText={key}
          >
            {Object.keys(UiTemplate[key]).map((child, index) => {
              let subTabindex = index;
              let subTabType = UiTemplate[key][child].subTabType;
              let fields = UiTemplate[key][child].Fields;
              let id = `${key.replace(/\s/g, "")}-${child.replace(/\s/g, "")}`;

              let x = child.split(" ");
              let invalid = x[0] + x[1];
              if (invalid != "SubTab") {
                return (
                  <ObjectPageSubSection
                    key={index}
                    aria-label="Product Conformity"
                    id={id}
                    titleText={child}
                  >
                    <div>
                      {subTabType != "" ? (
                        <>
                          <p>
                            Sub Tab Type: <b>{subTabType}</b>
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: "20px",
                            }}
                          >
                            {fieldIteration(subTabType, fields)}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </ObjectPageSubSection>
                );
              }
            })}
          </ObjectPageSection>
        );
      }
    });
  }

  return (
    <div className="main">
      <div>
        {alert ? (
          <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
            {alertMessage}
          </Alert>
        ) : (
          <></>
        )}
        <ThemeProvider>
          <ObjectPage
            footer={
              <Bar
                endContent={
                  <>
                    <Button
                      design="Emphasized"
                      onClick={() => downloadExcel(testData)}
                    >
                      Download Excel
                    </Button>
                  </>
                }
                startContent={
                  <>
                    <Button design="Emphasized" onClick={() => router.back()}>
                      Back
                    </Button>
                  </>
                }
              />
            }
            headerContent={
              <DynamicPageHeader>
                <FlexBox alignItems="Center" wrap="Wrap">
                  <FlexBox
                    direction="column"
                    justifyContent="SpaceBetween"
                    alignItems="Center"
                    style={{ gap: "20px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: 10,
                        }}
                      >
                        Product ID
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          disabled
                          size="small"
                          value={productId}
                          onChange={(e) => setOther(e.target.value)}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: 10,
                        }}
                      >
                        Product Name
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          size="small"
                          disabled={!editMode}
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: 10,
                        }}
                      >
                        Product Image URL
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          disabled={!editMode}
                          size="small"
                          value={imgUrl}
                          onChange={(e) => setImgUrl(e.target.value)}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: 10,
                        }}
                      >
                        Product Category
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          disabled={!editMode}
                          size="small"
                          value={productCategory}
                          onChange={(e) => setProductCategory(e.target.value)}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: 5,
                        }}
                      >
                        Product Descreption
                        <TextField
                          id="outlined-multiline-static"
                          disabled={!editMode}
                          multiline
                          rows={4}
                          value={productDescreption}
                          inputProps={{ maxLength: 250 }}
                          sx={{ minWidth: "400px" }}
                          onChange={(e) =>
                            setProductDescreption(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </FlexBox>
                </FlexBox>
              </DynamicPageHeader>
            }
            headerContentPinnable
            headerTitle={
              <>
                <DynamicPageTitle
                  actions={
                    <>
                      {editMode ? (
                        <Button onClick={() => setEditMode(false)}>
                          <VisibilityIcon />
                        </Button>
                      ) : (
                        <Button onClick={() => setEditMode(true)}>
                          <EditIcon />
                        </Button>
                      )}

                      <Button onClick={handleUpdateHeaderData}>
                        {submitStatus.color === "success" ? (
                          <DoneIcon color="success" />
                        ) : submitStatus.color === "error" ? (
                          <CloseIcon color="error" />
                        ) : (
                          <SaveIcon />
                        )}
                      </Button>
                    </>
                  }
                  header={productName}
                  showSubHeaderRight
                  subHeader={productCategory}
                ></DynamicPageTitle>
              </>
            }
          >
            {ShowUIElements(UiTemplate)}
          </ObjectPage>
        </ThemeProvider>
      </div>
    </div>
  );
}
