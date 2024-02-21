"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
// import Button from "@mui/material/Button";
import {
  ThemeProvider,
  ObjectPage,
  DynamicPageHeader,
  FlexBox,
  Label,
  Bar,
  Link,
  Breadcrumbs,
  BreadcrumbsItem,
  MessageStrip,
  ObjectStatus,
  Form,
  FormItem,
  FormGroup,
  DynamicPageTitle,
  ObjectPageSection,
  ObjectPageSubSection,
  Text,
  Button,
} from "@ui5/webcomponents-react";

async function handleAddProduct(newProductData) {
  let token = localStorage.getItem("access_token");
  const response = await axios
    .post("http://localhost:9000/postProduct", newProductData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
    });
  console.log(response);
}

export default function AddProduct() {
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [features, setFeatures] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [keywords, setKeywords] = useState("");
  let [url, setUrl] = useState([]);
  let [category, setCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);

  return (
    // <div className="main">
    //
    //   <div className="addCustomer-form-div">
    //     <h4>Please provide the customer deatils below</h4>
    //     <section className="addCustomer-form-section">
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="Product ID"
    //         variant="standard"
    //         onChange={(e) => {
    //           setId(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="Product Name"
    //         variant="standard"
    //         onChange={(e) => {
    //           setName(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="Description"
    //         variant="standard"
    //         onChange={(e) => {
    //           setDescription(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="Price"
    //         variant="standard"
    //         onChange={(e) => {
    //           setPrice(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="Features"
    //         variant="standard"
    //         onChange={(e) => {
    //           setFeatures(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="Keywords"
    //         variant="standard"
    //         onChange={(e) => {
    //           setKeywords(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="url"
    //         variant="standard"
    //         onChange={(e) => {
    //           setUrl(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="category"
    //         variant="standard"
    //         onChange={(e) => {
    //           setCategory(e.target.value);
    //         }}
    //       />
    //       <TextField
    //         className="addCustomer-form-div-input"
    //         id="standard-basic"
    //         label="subCategory"
    //         variant="standard"
    //         onChange={(e) => {
    //           setSubCategory(e.target.value);
    //         }}
    //       />
    //     </section>
    //     <section className="addCustomer-button-section">
    //       <Button
    //         variant="contained"
    //         startIcon={<AddIcon />}
    //         onClick={() => {
    //           let newProductData = {
    //             id: id,
    //             name: name,
    //             features: features,
    //             description: description,
    //             price: price,
    //             keywords: keywords,
    //             url: url,
    //             category: category,
    //             subCategory: subCategory,
    //           };
    //           // console.log(newCustomerData);
    //           handleAddProduct(newProductData);
    //         }}
    //       >
    //         Add Product
    //       </Button>
    //     </section>
    //   </div>
    // </div>
    <div className="main">
      <NavBar />

      <ThemeProvider>
        <ObjectPage>
          <ObjectPageSection
            aria-label="Personal"
            id="personal"
            titleText="Personal"
          >
            <ObjectPageSubSection
              actions={
                <>
                  <Button design="Emphasized" style={{ minWidth: "120px" }}>
                    Custom Action
                  </Button>
                  <Button
                    design="Transparent"
                    icon="action-settings"
                    tooltip="settings"
                  />
                  <Button
                    design="Transparent"
                    icon="download"
                    tooltip="download"
                  />
                </>
              }
              aria-label="Connect"
              id="personal-connect"
              titleText="Connect"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormGroup titleText="Phone Numbers">
                  <FormItem label="Home">
                    <Text>+1 234-567-8901</Text>
                  </FormItem>
                  <FormItem label="">
                    <Text>+1 234-567-5555</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Social Accounts">
                  <FormItem label="LinkedIn">
                    <Text>/DeniseSmith</Text>
                  </FormItem>
                  <FormItem label="Twitter">
                    <Text>@DeniseSmith</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Addresses">
                  <FormItem label="Home Address">
                    <Text>2096 Mission Street</Text>
                  </FormItem>
                  <FormItem label="Mailing Address">
                    <Text>PO Box 32114</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Mailing Address">
                  <FormItem label="Work">
                    <Text>DeniseSmith@sap.com</Text>
                  </FormItem>
                </FormGroup>
              </Form>
            </ObjectPageSubSection>
            <ObjectPageSubSection
              aria-label="Payment Information"
              id="personal-payment-information"
              titleText="Payment Information"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormGroup titleText="Salary">
                  <FormItem label="Bank Transfer">
                    <Text>Money Bank, Inc.</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Payment method for Expenses">
                  <FormItem label="Extra Travel Expenses">
                    <Text>Cash 100 USD</Text>
                  </FormItem>
                </FormGroup>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>
          <ObjectPageSection
            aria-label="Employment"
            id="employment"
            titleText="Employment"
          >
            <ObjectPageSubSection
              aria-label="Job Information"
              id="employment-job-information"
              titleText="Job Information"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Job Classification">
                  <FlexBox direction="Column">
                    <Text>Senior UI Developer</Text>
                    <Label>(UIDEV-SR)</Label>
                  </FlexBox>
                </FormItem>
                <FormItem label="Job Title">
                  <Text>Developer</Text>
                </FormItem>
                <FormItem label="Employee Class">
                  <Text>Employee</Text>
                </FormItem>
                <FormItem label="Manager">
                  <FlexBox direction="Column">
                    <Text>Dan Smith</Text>
                    <Label>Development Manager</Label>
                  </FlexBox>
                </FormItem>
                <FormItem label="Pay Grade">
                  <Text>Salary Grade 18 (GR-14)</Text>
                </FormItem>
                <FormItem label="FTE">
                  <Text>1</Text>
                </FormItem>
              </Form>
            </ObjectPageSubSection>
            <ObjectPageSubSection
              aria-label="Employee Details"
              id="employment-employee-details"
              titleText="Employee Details"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Start Date">
                  <Text>Jan 01, 2018</Text>
                </FormItem>
                <FormItem label="End Date">
                  <Text>Dec 31, 9999</Text>
                </FormItem>
                <FormItem label="Payroll Start Date">
                  <Text>Jan 01, 2018</Text>
                </FormItem>
                <FormItem label="Benefits Start Date">
                  <Text>Jul 01, 2018</Text>
                </FormItem>
                <FormItem label="Company Car Eligibility">
                  <Text>Jan 01, 2021</Text>
                </FormItem>
                <FormItem label="Equity Start Date">
                  <Text>Jul 01, 2018</Text>
                </FormItem>
              </Form>
            </ObjectPageSubSection>
            <ObjectPageSubSection
              aria-label="Job Relationship"
              id="employment-job-relationship"
              titleText="Job Relationship"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Manager">
                  <Text>John Doe</Text>
                </FormItem>
                <FormItem label="Scrum Master">
                  <Text>Michael Adams</Text>
                </FormItem>
                <FormItem label="Product Owner">
                  <Text>John Miller</Text>
                </FormItem>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>
        </ObjectPage>
      </ThemeProvider>
    </div>
  );
}
