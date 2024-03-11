"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

async function handleAddCustomer(newCustomerData) {
  let token = localStorage.getItem("access_token");
  const response = await axios
    .post(
      "https://dpp-server-app.azurewebsites.net/postCustomer",
      newCustomerData,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    });
  console.log(response);
}

export default function AddCustomer() {
  let [customerName, setCustomerName] = useState("");
  let [customerId, setCustomerId] = useState("");
  let [logoUrl, setLogoUrl] = useState("");
  let [descreption, setDescription] = useState("");
  let [addressL1, setAddressL1] = useState("");
  let [addressL2, setAddressL2] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [country, setCountry] = useState("");
  let [productString, setProductString] = useState("");
  // let [products, setProducts] = useState([]);
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
            label="Address Line 1"
            variant="standard"
            onChange={(e) => {
              setAddressL1(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Address Line 2"
            variant="standard"
            onChange={(e) => {
              setAddressL2(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="City"
            variant="standard"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="State"
            variant="standard"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Country"
            variant="standard"
            onChange={(e) => {
              setCountry(e.target.value);
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
              let products = [];
              for (let i = 0; i < productArray.length; i++) {
                let prod = { productId: productArray[i], templateId: "" };
                products.push(prod);
              }
              let newCustomerData = {
                id: customerId,
                name: customerName,
                logoUrl: logoUrl,
                descreption: descreption,
                addressL1: addressL1,
                addressL2: addressL2,
                city: city,
                state: state,
                country: country,
                products: products,
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
