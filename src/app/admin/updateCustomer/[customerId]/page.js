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
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { countries } from "../../../../db/countries.js";
import { states } from "../../../../db/states.js";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

export default function UpdateCustomer({ params }) {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let router = useRouter();
  let custId = params.customerId;
  let [loadPage, setLoadPage] = useState(false);
  let [alert, setAlert] = useState(false);
  let [alertMessage, setAlertMessage] = useState();
  let [alertSeverity, setAlertSeverity] = useState();

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
  let [allProducts, setAllProducts] = useState([]);
  let [products, setProducts] = useState([]);
  let [selectedStates, setSelectedStates] = useState([]);

  const [countryid, setCountryid] = useState(0);
  let [countryCode, setCountryCode] = useState("");
  const [stateid, setstateid] = useState(0);
  let [stateCode, setStateCode] = useState("");
  // let [states, setStates] = useState([]);

  function errAlert(errData) {
    setLoadPage(false);
    let message = errData.message;
    let severity = errData.severity;
    setAlert(true);
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  let [submitting, setSubmitting] = useState(false);
  let [submitStatus, setSubmitStatus] = useState({
    color: "primary",
    message: "Update Customer",
  });

  useEffect(() => {
    setTimeout(() => {
      setSubmitStatus({ color: "primary", message: "Update Customer" });
    }, 5000);
  }, [submitting]);

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
        prods.push(response.products[i].name);
        prodObjArr.push(response.products[i]);
      }
      setProducts(prods);
      setProdObjArr(prodObjArr);
      console.log(products);
    } catch (error) {
      if (error.status == 403) {
        router.push("/error");
      } else {
        let errData = {
          message: error.message,
          severity: "error",
        };
        errAlert(errData);
      }
    }

    try {
      await axios
        .get(`${serverUrl}/getAllProducts`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          let data = response.data;
          for (let i = 0; i < data.length; i++) {
            let prod = { id: data[i].id, name: data[i].name };
            setAllProducts((existingProds) => [...existingProds, prod]);
          }
        });
    } catch (error) {
      if (error.status == 403) {
        router.push("/error");
      } else {
        let errData = {
          message: error.message,
          severity: "error",
        };
        errAlert(errData);
      }
    }
  }

  async function handleUpdateCustomer(newCustomerData) {
    let token = localStorage.getItem("access_token");
    try {
      setSubmitting(true);
      const response = await axios.post(
        `${serverUrl}/updateCustomer/${customerId}`,
        newCustomerData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status == 200) {
        setSubmitting(false);
        setSubmitStatus({ color: "success", message: "Successful" });
        let alertData = {
          message: `Customer: ${customerId} Updated Successfully`,
          severity: "success",
        };
        errAlert(alertData);
        router.push("/admin/customerList");
      }
    } catch (error) {
      setSubmitting(false);
      setSubmitStatus({ color: "error", message: error });
      let errData = {
        message: error.message,
        severity: "error",
      };
      errAlert(errData);
    }
  }

  function filterStates() {
    let ctry = countries.filter((ctr) => ctr.label == country);
    // let code = ctry[0][0].code;
    // setCountryCode(ctry.code);
    // console.log(ctry[0].code);

    let result = states.filter((state) => {
      // return state.countryCode == countryCode;
      if (state.countryCode == ctry.code) {
        console.log({ state: state });
      }
    });
    // setSelectedStates(result);
    // console.log(result);
  }

  // useEffect(() => {
  //   filterStates();
  // }, [state]);

  // useEffect(() => {
  //   console.log(states);
  // }, [states]);

  useEffect(() => {
    handleGetCustomerData();
  }, []);

  return (
    <div className="main">
      <NavBar />
      {alert ? (
        <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
          {alertMessage}
        </Alert>
      ) : (
        <></>
      )}
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
            disabled
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

          {/* <div>
            <p className="addCustomerInputLable">
              Country <span style={{ color: "red" }}>*</span>
            </p>
            <CountrySelect
              // defaultValue={country}
              value={countries.find((v) => console.log(v)) || {}}
              onChange={(e) => {
                setCountryid(e.id);
                setCountry(e.name);
                setCountryCode(e.iso3);
              }}
              placeHolder="Select Country"
            />
            <p className="addCustomerInputLable">
              State <span style={{ color: "red" }}>*</span>
            </p>
            <StateSelect
              countryid={countryid}
              onChange={(e) => {
                setstateid(e.id);
                setState(e.name);
                setStateCode(e.state_code);
              }}
              placeHolder="Select State"
            />
            <p className="addCustomerInputLable">
              City <span style={{ color: "red" }}>*</span>
            </p>
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e) => {
                setCity(e.name);
              }}
              placeHolder="Select City"
            />
          </div> */}

          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) =>
              typeof option === "object" && option.label ? option.label : ""
            }
            value={countries.find((v) => v.label == country) || {}}
            onInputChange={(event, newValue) => {
              setCountry(newValue);
            }}
            renderInput={(params) => (
              <TextField
                className="addCustomer-form-div-input"
                variant="standard"
                {...params}
                label="Country"
              />
            )}
          />

          {/* <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={selectedStates}
            autoHighlight
            getOptionLabel={(option) =>
              typeof option === "object" && option.label ? option.label : ""
            }
            defaultValue={
              selectedStates.find((v) => console.log(v.label == state)) || {}
            }
            onInputChange={(event, newValue) => {
              setState(newValue);
              // setStateCode(newValue.code);
            }}
            renderInput={(params) => (
              <TextField
                className="addCustomer-form-div-input"
                variant="standard"
                {...params}
                label="State"
              />
            )}
          /> */}

          <Autocomplete
            multiple
            id="tags-standard"
            options={allProducts}
            getOptionLabel={(option) =>
              typeof option === "object" && option.name ? option.name : option
            }
            value={products}
            onChange={(event, newValue) => {
              setProducts(newValue);
            }}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                className="addCustomer-form-div-input"
                {...params}
                variant="standard"
                label="Products"
                placeholder="+ Products"
              />
            )}
          />
        </section>

        <section className="addCustomer-button-section">
          {submitting == true ? (
            <Button variant="text">
              <CircularProgress color="primary" />
            </Button>
          ) : (
            <Button
              variant="contained"
              color={submitStatus.color}
              startIcon={
                submitStatus.color === "success" ? (
                  <DoneIcon />
                ) : submitStatus.color === "error" ? (
                  <CloseIcon />
                ) : null
              }
              onClick={() => {
                let newCustData = {
                  id: custId,
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
                handleUpdateCustomer(newCustData);
              }}
            >
              {submitStatus.message}
            </Button>
          )}
        </section>
      </div>
    </div>
  );
}
