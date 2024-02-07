"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

async function handleAddCustomer(newCustomerData) {
  const response = await axios
    .post("http://localhost:9000/postCustomer", newCustomerData)
    .then((response) => {
      console.log(response.data);
    });
  console.log(response);
}

export default function AddCustomer() {
  let [customerName, setCustomerName] = useState("");
  let [customerId, setCustomerId] = useState("");
  let [customerType, setCustomerType] = useState("");
  let [logoUrl, setLogoUrl] = useState("");
  let [descreption, setDescription] = useState("");
  let [productString, setProductString] = useState("");
  let [products, setProducts] = useState([]);
  return (
    <div className="main">
      <NavBar />
      <div className="addCustomer-form-div">
        <h4>Please provide the customer deatils below</h4>
        <section className="addCustomer-form-section">
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Customer ID"
            variant="standard"
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Customer Name"
            variant="standard"
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Business Type"
            variant="standard"
            onChange={(e) => {
              setCustomerType(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Logo URL"
            variant="standard"
            onChange={(e) => {
              setLogoUrl(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Descreption"
            variant="standard"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Products"
            variant="standard"
            onChange={(e) => {
              setProductString(e.target.value);
            }}
          />
        </section>
        <section className="addCustomer-button-section">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              let productArray = productString.split(",");
              let newCustomerData = {
                customerId: customerId,
                customerName: customerName,
                businessType: customerType,
                logoUrl: logoUrl,
                descreption: descreption,
                products: productArray,
              };
              // console.log(newCustomerData);
              handleAddCustomer(newCustomerData);
            }}
          >
            Add Customer
          </Button>
        </section>
      </div>
    </div>
  );
}
