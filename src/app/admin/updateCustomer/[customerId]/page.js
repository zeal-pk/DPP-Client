"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/navBar";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";

export default function UpdateCustomer({ params }) {
  let custId = params.customerId;
  let [customerDetails, setCustomerDetails] = useState("-");
  let [customerName, setCustomerName] = useState("-");
  let [customerId, setCustomerId] = useState("-");
  let [logoUrl, setLogoUrl] = useState("-");
  let [descreption, setDescription] = useState("-");
  let [addressL1, setAddressL1] = useState("-");
  let [addressL2, setAddressL2] = useState("-");
  let [city, setCity] = useState("-");
  let [state, setState] = useState("-");
  let [country, setCountry] = useState("-");
  let [products, setProducts] = useState("-");

  async function handleGetCustomerData() {
    let prods = [];
    const response = await axios
      .get(`http://localhost:9000/getCustomer/${custId}`)
      .then((response) => {
        setCustomerDetails(response.data.name);
        // console.log(response.data);
        return response.data;
        // setCustomerName(customerDetails.name);
        // setCustomerId(customerDetails.id);
        // setLogoUrl(customerDetails.logoUrl);
        // setDescription(customerDetails.descreption);
        // setAddressL1(customerDetails.addressL1);
        // setAddressL2(customerDetails.addressL1);
        // setCity(customerDetails.city);
        // setState(customerDetails.state);
        // setCountry(customerDetails.country);
        // setProducts(customerDetails.products);
      });
    setCustomerName(response.name);
    setCustomerId(response.id);
    setLogoUrl(response.logoUrl);
    setDescription(response.descreption);
    setAddressL1(response.addressL1);
    setAddressL2(response.addressL2);
    setCity(response.city);
    setState(response.state);
    setCountry(response.country);

    for (let i = 0; i < response.products.length; i++) {
      prods.push(response.products[i].productId);
    }
    setProducts(prods);
  }

  async function handleUpdateCustomer(newCustomerData) {
    const response = await axios
      .post(
        `http://localhost:9000/updateCustomer/${customerId}`,
        newCustomerData
      )
      .then((response) => {
        console.log(response.data);
      });
    console.log(response);
  }

  useEffect(() => {
    handleGetCustomerData();
  }, []);

  return (
    <div className="main">
      <NavBar />
      <div className="addCustomer-form-div">
        <h4>Update Customer Details</h4>
        <section className="addCustomer-form-section">
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Customer ID"
            variant="standard"
            value={customerId}
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Customer Name"
            variant="standard"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />

          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Logo URL"
            variant="standard"
            value={logoUrl}
            onChange={(e) => {
              setLogoUrl(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Descreption"
            variant="standard"
            value={descreption}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Address Line 1"
            variant="standard"
            value={addressL1}
            onChange={(e) => {
              setAddressL1(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Address Line 2"
            variant="standard"
            value={addressL2}
            onChange={(e) => {
              setAddressL2(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="City"
            variant="standard"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="State"
            variant="standard"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Country"
            variant="standard"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Products"
            variant="standard"
            value={products}
            onChange={(e) => {
              setProducts(e.target.value);
            }}
          />
        </section>
        <section className="addCustomer-button-section">
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => {
              let productArray = products.split(",");
              let prods = [];
              for (let i = 0; i < productArray.length; i++) {
                let prod = { productId: productArray[i], templateId: "" };
                prods.push(prod);
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
                products: prods,
              };
              // console.log(newCustomerData);
              handleUpdateCustomer(newCustomerData);
            }}
          >
            Update Customer
          </Button>
        </section>
      </div>
    </div>
  );
}
