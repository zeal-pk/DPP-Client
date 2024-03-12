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
import Select from "react-select";
import { Country, State, City } from "country-state-city";

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
        // city: city,
        // state: state,
        // country: country,
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
            // alert("Customer Data Submitted");
            // router.push("/admin");
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

  // useEffect(() => {

  // }, [values]);
  // Country-State-City Code - END

  async function handleAddCustomer(newCustomerData) {
    let token = localStorage.getItem("access_token");
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
          "https://dpp-server-app.azurewebsites.net/routVerification"
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

          {/* <div>
            <p className="addCustomerInputLable">Country</p>
            <Select
              id="country"
              name="country"
              label="country"
              placeholder="Country"
              options={updatedCountries}
              value={values.country}
              onChange={(value) => {
                setValues({ country: value, state: null, city: null }, false);
                setCountry(value.name);
              }}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">State</p>
            <Select
              id="state"
              name="state"
              placeholder="State"
              options={updatedStates(
                values.country ? values.country.value : null
              )}
              value={values.state}
              onChange={(value) => {
                setValues({ state: value, city: null }, false);
                setState(value.name);
              }}
            />
          </div>

          <div>
            <p className="addCustomerInputLable">City</p>
            <Select
              id="city"
              name="city"
              placeholder="City"
              options={updatedCities(
                values.country ? values.country.value : null,
                values.state ? values.state.value : null
              )}
              value={values.city}
              onChange={(value) => {
                setValues({ city: value }, false);
                setFieldValue("city", value);
                setCity(value.name);
              }}
            />
          </div> */}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
