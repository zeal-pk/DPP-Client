"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import NavBar from "@/components/navBar";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import BackButton from "../../../../components/backButton.js";

export default function UpdateCustomer({ params }) {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let router = useRouter();
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
  let [prodObjArr, setProdObjArr] = useState([]);
  let [products, setProducts] = useState([]);

  async function handleGetCustomerData() {
    let token = localStorage.getItem("access_token");
    let prods = [];
    let prodObjArr = [];
    try {
      const response = await axios
        .get(`${serverUrl}/getCustomer/${custId}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          // setCustomerDetails(response.data.name);
          return response.data;
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
        prods.push(response.products[i].id);
        prodObjArr.push(response.products[i]);
      }
      setProducts(prods);
      setProdObjArr(prodObjArr);
    } catch (error) {
      if (error.response.status == 403) {
        router.push("/error");
      }
    }
  }

  async function handleUpdateCustomer(newCustomerData) {
    let token = localStorage.getItem("access_token");
    try {
      const response = await axios
        .post(`${serverUrl}/updateCustomer/${customerId}`, newCustomerData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
      router.push("/admin/customerList");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  useEffect(() => {
    handleGetCustomerData();
  }, []);

  return (
    <div className="main">
      <NavBar />
      <BackButton />
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
              let value = e.target.value;
              let prod = value.split(",");
              setProducts(prod);
            }}
          />
        </section>
        <section className="addCustomer-button-section">
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={async () => {
              let token = localStorage.getItem("access_token");
              let productArray = products;
              let prods = [];
              let unavailableProd;
              for (let i = 0; i < productArray.length; i++) {
                let prod = await axios.get(
                  `${serverUrl}/getProduct/${productArray[i]}`,
                  {
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  }
                );
                if (!prod.data.id) {
                  alert(`Product ID "${productArray[i]}" does not exist`);
                  unavailableProd = productArray[i];
                } else {
                  prods.push({ id: prod.data.id, name: prod.data.name });
                }
              }
              if (unavailableProd) {
                alert(`Product "${unavailableProd}" does not exist`);
              } else {
                if (
                  logoUrl.match(
                    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                  ) != null
                ) {
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
                  console.log(newCustomerData);
                  handleUpdateCustomer(newCustomerData);
                } else {
                  alert("Please enter valid URL");
                }
              }
            }}
          >
            Update Customer
          </Button>
        </section>
      </div>
    </div>
  );
}
