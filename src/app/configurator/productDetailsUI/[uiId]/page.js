"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ThemeProvider,
  ObjectPage,
  Form,
  FormItem,
  FormGroup,
  ObjectPageSection,
  ObjectPageSubSection,
  Label,
} from "@ui5/webcomponents-react";
import { Directions } from "@mui/icons-material";

export default function AddProducts({ params }) {
  let UIID = params.uiId;
  let [fieldName, setFieldName] = useState();
  let [tabDetails, setTabDetails] = useState([]);
  let [tabName, setTabName] = useState("");
  let [subTabName, setSubTabName] = useState("");
  let [ui, setUI] = useState({});
  let [l1Keys, setL1Keys] = useState([]);

  // MUI Modal Code - START
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openTab, setOpenTab] = React.useState(false);
  const handleOpenTab = () => setOpenTab(true);
  const handleCloseTab = () => setOpenTab(false);

  const style = {
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
  // MUI Modal Code - END

  // react-hook-form code  - START
  const form = useForm();
  //   {
  //   defaultValues: {
  //     productName: "",
  //     productSerialNumber: "",
  //     batteryType: "",
  //     batteryModel: "",
  //     addtionalField: [
  //       {
  //         field: "",
  //         value: "",
  //       },
  //     ],
  //   },
  // }

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "addtionalField",
    control,
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  // react-hook-form  - END

  const getUiData = async () => {
    let uiData = await axios
      .get(`http://localhost:9000/getUiTemplate/${UIID}`)
      .then((response) => {
        setUI(response.data);
      });
  };

  useEffect(() => {
    getUiData();
  }, []);

  const screenUI = (json) => {
    return Object.keys(json).map((key) => {
      if (key != "_id" && key != "template_ID") {
        console.log(json[key]);
        return (
          <ObjectPageSection aria-label={key} id={key} titleText={key}>
            {Object.keys(json[key]).map((child) => {
              let id1 = key.replace(/\s/g, "");
              let id2 = child.replace(/\s/g, "");
              let id = `${id1}-${id2}`;
              return (
                <ObjectPageSubSection
                  aria-label="Product Conformity"
                  id={id}
                  titleText={child}
                >
                  <Form
                    columnsL={3}
                    columnsM={2}
                    columnsXL={3}
                    labelSpanL={6}
                    labelSpanM={6}
                    labelSpanXL={6}
                    style={{
                      alignItems: "baseline",
                    }}
                  >
                    {Object.keys(json[key][child]).map((subchild) => {
                      return (
                        <FormItem label={subchild}>
                          <TextField
                            className="formInputField"
                            variant="outlined"
                            size="small"
                            {...register(`${subchild}`)}
                          />
                        </FormItem>
                      );
                    })}
                  </Form>
                </ObjectPageSubSection>
              );
            })}
          </ObjectPageSection>
        );
      }
    });
  };

  return (
    <div className="main">
      <NavBar />

      <ThemeProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ObjectPage>
            {screenUI(ui)}

            {tabDetails.map((tabDetail) => {
              // let subID = `${tabDetail.tabName}-${tabDetail.subTabName}`;
              return (
                <ObjectPageSection
                  aria-label={tabDetail.tabName}
                  id={tabDetail.tabName}
                  titleText={tabDetail.tabName}
                >
                  <ObjectPageSubSection
                    aria-label={tabDetail.subTabName}
                    id=""
                    titleText={tabDetail.subTabName}
                  >
                    {fields.map((field, index) => {
                      return (
                        <Box>
                          <label for={field.field}>{field.field}: </label>
                          <TextField
                            id={field.field}
                            variant="outlined"
                            {...register(`additionalValue.${index}.value`)}
                          />
                          <Button onClick={() => remove(index)}>
                            <DeleteIcon />
                            {console.log(field)}
                          </Button>
                        </Box>
                      );
                    })}
                    <div>
                      <Button variant="outlined" onClick={handleOpen}>
                        Add Field
                      </Button>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,
                          },
                        }}
                      >
                        <Fade in={open}>
                          <Box sx={style}>
                            <Typography
                              id="transition-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Please Enter Field Name
                            </Typography>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              label="Field Lable"
                              onChange={(e) => {
                                setFieldName(e.target.value);
                              }}
                            />
                            <Button
                              onClick={() => {
                                append({ field: fieldName });
                              }}
                            >
                              Save
                            </Button>
                          </Box>
                        </Fade>
                      </Modal>
                    </div>
                  </ObjectPageSubSection>
                </ObjectPageSection>
              );
            })}

            <div>
              <Button variant="contained" onClick={handleOpenTab}>
                Add Tab
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openTab}
                onClose={handleCloseTab}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={openTab}>
                  <Box sx={style}>
                    <p>Tab Name</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="Tab Name"
                      onChange={(e) => {
                        setTabName(e.target.value);
                      }}
                    />
                    <p>Sub Tab Name</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="Sub Tab Name"
                      onChange={(e) => {
                        setSubTabName(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        let newTabDetials = {
                          tabName: tabName,
                          subTabName: subTabName,
                        };
                        setTabDetails((existingDetails) => [
                          ...existingDetails,
                          newTabDetials,
                        ]);
                        setOpen(false);
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </ObjectPage>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </ThemeProvider>
    </div>
  );
}
