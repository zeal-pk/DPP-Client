"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import { useFormik } from "formik";
import BackButton from "../../../../components/backButton.js";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function AddCustomer() {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let router = useRouter();

  let [name, setCustomerName] = useState("");
  let [id, setId] = useState();
  let [logoUrl, setLogoUrl] = useState("");
  let [descreption, setDescription] = useState("");
  let [addressL1, setAddressL1] = useState("");
  let [addressL2, setAddressL2] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [country, setCountry] = useState("");
  let [countryCode, setCountryCode] = useState("");
  let [stateCode, setStateCode] = useState("");
  let [allProducts, setAllProducts] = useState([]);
  let [productString, setProductString] = useState();
  let [products, setProducts] = useState([]);

  async function handleAddCustomer(newCustomerData) {
    if (!id) {
      alert("Please Generate Customer ID");
    } else {
      try {
        let token = localStorage.getItem("access_token");
        const response = await axios
          .post(`${serverUrl}/postCustomer`, newCustomerData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.message == "This Customer Data Already Exist") {
              alert("This Customer Data Already Exist");
            } else if (response.status == 200) {
              alert("Customer Data Submitted");
              router.push("/admin/customerList");
            } else {
              alert("There was an error. Please Try again later");
              router.push("/admin/customerList");
            }
          });
      } catch (error) {
        if (error.message == "Network Error") {
          alert("Network Error, please try later");
        } else if (error.response.status == 403) {
          console.log(error);
          router.push("/error");
        }
      }
    }
  }

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: async (values) => {
      let newCustomerData = {
        name: name,
        id: id,
        logoUrl: logoUrl,
        descreption: descreption,
        addressL1: addressL1,
        addressL2: addressL2,
        city: city,
        state: state,
        country: country,
        products: products,
      };
      handleAddCustomer(newCustomerData);
    },
  });

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  async function getAllProducts() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "admin") {
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

            console.log(allProducts);
          });
      } catch (error) {
        if (error.message == "Network Error") {
          alert(error);
        } else if (error.response.status == 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  }

  useEffect(() => {
    let path = window.location.pathname;
    let arr = path.split("/");
    let id = arr[3];
    setId(id);
    getAllProducts();
  }, []);

  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <div className="main">
      <NavBar />
      <BackButton />
      <form className="addCustomerForm" onSubmit={handleSubmit}>
        <div className="addCustomerInputDiv">
          <div>
            <p className="addCustomerInputLable">Customer ID</p>
            <TextField
              fullWidth
              id="fullWidth"
              size="small"
              value={id}
              disabled
            />
          </div>
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
                setCountry(e.name);
                setCountryCode(e.iso3);
              }}
              placeHolder="Select Country"
            />
            <p className="addCustomerInputLable">State</p>
            <StateSelect
              countryid={countryid}
              onChange={(e) => {
                setstateid(e.id);
                setState(e.name);
                setStateCode(e.state_code);
              }}
              placeHolder="Select State"
            />
            <p className="addCustomerInputLable">City</p>
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e) => {
                setCity(e.name);
              }}
              placeHolder="Select City"
            />
          </div>

          <div>
            <p className="addCustomerInputLable">Products</p>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={allProducts}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Add Products"
                />
              )}
              onChange={(event, newProd) => {
                setProducts(newProd);
              }}
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
