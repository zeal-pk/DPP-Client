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
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ThemeProvider,
  ObjectPage,
  Form,
  FormItem,
  ObjectPageSection,
  ObjectPageSubSection,
} from "@ui5/webcomponents-react";

export default function AddProducts({ params }) {
  let UIID = params.uiId;
  let [count, setCount] = useState(0);
  let [fieldName, setFieldName] = useState();
  let [tabDetails, setTabDetails] = useState([]);
  let [addTab1, setAddTab1] = useState();
  let [addSubTab1, setAddSubTab1] = useState();
  let [addSubTab1Fields, setAddSubTab1Fields] = useState([]);
  let [addTab2, setAddTab2] = useState();
  let [addSubTab2, setAddSubTab2] = useState();
  let [addSubTab2Fields, setAddSubTab2Fields] = useState([]);
  let [tabName, setTabName] = useState([]);
  let [subTabName, setSubTabName] = useState([]);
  let [ui, setUI] = useState({});

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

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { remove } = useFieldArray({
    name: "addtionalField",
    control,
  });

  const onSubmit = (data) => {
    // console.log("Form Submitted", data);
    let dataStruct = {
      template_ID: "Battery",
      Information: {
        "Product Data": {
          "Product Name": "",
          "Serial Number": "",
          "Battery Type": "",
          "Battery Model": "",
        },
        "Manufacturer Data": {
          Manufacturer: "",
          "Manufacturing Site": "",
          "Manufactured Date": "",
          Importer: "",
          "Entry Date": "",
        },
        "Product Conformity": {
          "EU Declaration Of Conformity": "Compliance",
          "Standard 1": "",
          "Standard 2": "",
        },
        "Product Characteristics": {
          "Raw Material Category": "",
          "Feedstock Type": "",
          "Fossil Plastic": "",
          "Bio Plastic": "",
          "Reused Plastic": "",
        },
        "Product Performance Scores": {
          "Eco Label": "",
          "Repairability Score": "",
          "Energy Performance": "",
          "Sustainability Score": "",
          "Plant Score": "",
        },
      },
      Tracability: {
        "Chain Of Custody": {},
      },
      Specifications: {
        "Product Specification": {
          Weight: "",
          "Rated Capacity": "",
          "Minimum Average Duration": "",
          "Expected Lifetime": "",
          "Capacity Fade": "",
          "Internal Resistance Increase": "",
          "Energy Efficiency": "",
          "Energy Fade": "",
          "Charge Throughput": "",
          "Internal Resistance": "",
        },
        "Performance Specifications": {
          Power: "",
          "Internal Resistance": "",
          "Energy Roundtrip Efficiency": "",
          "Charge Rate": "",
          "Discharge Rate": "",
          "Power Energy Ratio": "",
          "Depth Of Discharge": "",
          "Power Capability": "",
        },
      },
      Composition: {
        Recyclability: {
          "Recycled Content": "",
          "Renewable Content": "",
        },
        "Outer Case Composition": {
          "Composition 1": "",
          "composition 2": "",
          "composition 3": "",
          "composition 4": "",
          "composition 5": "",
        },
        "Cathode Composition": {
          "Composition 1": "",
          "composition 2": "",
          "composition 3": "",
          "composition 4": "",
          "composition 5": "",
        },
        "Anode Composition": {
          "Composition 1": "",
          "composition 2": "",
          "composition 3": "",
          "composition 4": "",
          "composition 5": "",
        },
        "Electrolyte Composition": {
          "Composition 1": "",
          "composition 2": "",
          "composition 3": "",
          "composition 4": "",
          "composition 5": "",
        },
        "Hazardous Substance": {
          "Substance 1": {
            Substance: "",
            Percentage: "",
          },
          "Substance 2": {
            Substance: "",
            Percentage: "",
          },
        },
        "Critical Raw Materials": {
          "Material 1": {
            Material: "",
            Percentage: "",
          },
          "Material 2": {
            Material: "",
            Percentage: "",
          },
        },
      },
      "Design And Service": {
        "Disposal Scheme": {},
        "Return Scheme": {},
        "Collection Scheme": {},
        "Part Details": {},
      },
      "Usage History": {},
      "Repair Reuse": {},
      "End Of Life": {},
      Sustainability: {
        "Carbon Footprint": "",
        "Circularity Indicator": {
          "Repairability Index": "",
          "Reuse Index": "",
          "Recycle Index": "",
          "Environment And Socia Impact Index": "",
        },
        "PEF / LCA Details": {
          "Document Link": "",
        },
      },
      Certification: {
        "EU Declaration Of Conformity ID": "",
        "Test Results": "",
      },
      Labels: {
        "Separate Collection Symbol": "",
        "Cadmium And Lead Symbols": "",
      },
      [addTab1]: {
        [addSubTab1]: {
          Fields: addSubTab1Fields,
        },
      },
      [addTab2]: {
        [addSubTab2]: {
          Fields: addSubTab2Fields,
        },
      },
      // [tabName]: {
      //   [subTabName]: {
      //     Fields: data.addtionalField.map((field) => field.field),
      //   },
      // },
    };
    console.log(dataStruct);
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
        return (
          <ObjectPageSection
            aria-label={key}
            id={key.replace(/\s/g, "")}
            titleText={key}
          >
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
                      let title = `${subchild}`;
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

            {tabDetails.map((tabDetail, index) => {
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
                    {index == 0
                      ? addSubTab1Fields.map((field, index) => {
                          return (
                            <Box>
                              <label for={field.field}>{field}: </label>
                              <TextField
                                id={field.field}
                                variant="outlined"
                                {...register(`additionalValue.${index}.value`)}
                              />
                              <Button onClick={() => remove(index)}>
                                <DeleteIcon />
                              </Button>
                            </Box>
                          );
                        })
                      : addSubTab2Fields.map((field, index) => {
                          return (
                            <Box>
                              <label for={field.field}>{field}: </label>
                              <TextField
                                id={field.field}
                                variant="outlined"
                                {...register(`additionalValue.${index}.value`)}
                              />
                              <Button onClick={() => remove(index)}>
                                <DeleteIcon />
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
                                // append({ field: fieldName });
                                if (count == 1) {
                                  setAddSubTab1Fields((existingFields) => [
                                    ...existingFields,
                                    fieldName,
                                  ]);
                                } else if (count == 2) {
                                  setAddSubTab2Fields((existingFields) => [
                                    ...existingFields,
                                    fieldName,
                                  ]);
                                }
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

                        if (count == 0) {
                          setAddTab1(tabName);
                          setAddSubTab1(subTabName);
                          setTabDetails((existingDetails) => [
                            ...existingDetails,
                            newTabDetials,
                          ]);
                          setCount(count + 1);
                        } else if (count == 1) {
                          setAddTab2(tabName);
                          setAddSubTab2(subTabName);
                          setTabDetails((existingDetails) => [
                            ...existingDetails,
                            newTabDetials,
                          ]);
                          setCount(count + 1);
                        } else {
                          alert("Can't add more Tabs");
                        }
                        setOpen(false);
                        // console.log(count);
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
