"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import BackButton from "../../../components/backButton.js";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function AddCustomer() {
  let router = useRouter();

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

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: async (values) => {
      let newCustomerData = {
        customerName: customerName,
        customerId: customerId,
        logoUrl: logoUrl,
        descreption: descreption,
        addressL1: addressL1,
        addressL2: addressL2,
        city: city,
        state: state,
        country: country,
      };
      try {
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
            if (response.status == 200) {
              alert("Customer Data Submitted");
              router.push("/admin");
            } else {
              alert("There was an error. Please Try again later");
            }
          });
      } catch (error) {
        if (error.response.status == 403) {
          router.push("/error");
        }
      }
    },
  });

  // Country-State-City Code - START
  // const countries = Country.getAllCountries();

  // const updatedCountries = countries.map((country) => ({
  //   label: country.name,
  //   value: country.isoCode,
  //   ...country,
  // }));
  // const updatedStates = (countryId) =>
  //   State.getStatesOfCountry(countryId).map((state) => ({
  //     label: state.name,
  //     value: state.isoCode,
  //     ...state,
  //   }));
  // const updatedCities = (countryId, stateId) =>
  //   City.getCitiesOfState("IN", stateId).map((city) => ({
  //     label: city.name,
  //     value: city.id,
  //     ...city,
  //   }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  // useEffect(() => {}, [values]);
  // Country-State-City Code - END

  async function handleAddCustomer(newCustomerData) {
    try {
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
    } catch (error) {
      if (error.response.status == 403) {
        router.push("/error");
      }
    }
  }
  async function VerifyToken() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
      try {
        await axios.get(
          "https://dpp-server-app.azurewebsites.net/routVerification",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      } catch (error) {
        if (error.response.status == 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  }

  useEffect(() => {
    VerifyToken();
  }, []);

  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <div className="main">
      <NavBar />
      <BackButton />
      <form className="addCustomerForm" onSubmit={handleSubmit}>
        <div className="addCustomerInputDiv">
          <h3>Please Enter Customer Details</h3>
          <div>
            <p className="addCustomerInputLable">Customer Name</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              placeholder="Customer Name"
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Customer ID</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              placeholder="Customer ID"
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Logo URL</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              placeholder="Logo URL"
              onChange={(e) => setLogoUrl(e.target.value)}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Description</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Address Line 1</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              placeholder="Address Line 1"
              onChange={(e) => setAddressL1(e.target.value)}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Address Line 2</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              placeholder="Address Line 2"
              onChange={(e) => setAddressL2(e.target.value)}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Country</p>
            <CountrySelect
              onChange={(e) => {
                setCountryid(e.id);
              }}
              placeHolder="Select Country"
            />
            <p className="addCustomerInputLable">State</p>
            <StateSelect
              countryid={countryid}
              onChange={(e) => {
                setstateid(e.id);
              }}
              placeHolder="Select State"
            />
            <p className="addCustomerInputLable">City</p>
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e) => {
                console.log(e);
              }}
              placeHolder="Select City"
            />
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
