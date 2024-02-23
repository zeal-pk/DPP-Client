"use client";
import * as React from "react";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ThemeProvider,
  ObjectPage,
  Form,
  FormItem,
  FormGroup,
  ObjectPageSection,
  ObjectPageSubSection,
} from "@ui5/webcomponents-react";

export default function AddProducts() {
  let [fieldName, setFieldName] = useState();

  // MUI Modal Code - START
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  //     {
  //   defaultValues: {
  //     productName: "",
  //     productSerialNumber: "",
  //     batteryType: "",
  //     batteryModel: "",
  //     additionalData: [
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

  return (
    <div className="main">
      <NavBar />

      <ThemeProvider>
        <form onSubmit={handleSubmit(onSubmit)} noValidation>
          <ObjectPage>
            <ObjectPageSection
              aria-label="Product Details"
              id="productDetails"
              titleText="Product Details"
            >
              <ObjectPageSubSection
                aria-label="Product Information"
                id="productDetails-productInformation"
                titleText="Product Information"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormItem label="Product Name">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("productName", {
                        required: "User Name is Required",
                      })}
                    />
                    <p>{errors.productName?.message}</p>
                  </FormItem>

                  <FormItem label="Serial Number">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("productSerialNumber")}
                    />
                  </FormItem>
                  <FormItem label="Battery Type">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryType")}
                    />
                  </FormItem>
                  <FormItem label="Battery Model">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryModel")}
                    />
                  </FormItem>

                  {fields.map((field, index) => {
                    return (
                      <FormItem label={field.field} key={field.id}>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          {...register(`additionalValue.${index}.value`)}
                        />
                        <Button onClick={() => remove(index)}>
                          <DeleteIcon />
                        </Button>
                      </FormItem>
                      //   console.log(field)
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
                              setOpen(false);
                            }}
                          >
                            Save
                          </Button>
                        </Box>
                      </Fade>
                    </Modal>
                  </div>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
          </ObjectPage>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </ThemeProvider>
      {/* <DevTool control={control} /> */}
    </div>
  );
}
