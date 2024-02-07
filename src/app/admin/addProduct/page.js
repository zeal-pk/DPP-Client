"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

async function handleAddProduct(newProductData) {
  const response = await axios
    .post("http://localhost:9000/postProduct", newProductData)
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
    <div className="main">
      <NavBar />
      <div className="addCustomer-form-div">
        <h4>Please provide the customer deatils below</h4>
        <section className="addCustomer-form-section">
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Product ID"
            variant="standard"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Product Name"
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Description"
            variant="standard"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Price"
            variant="standard"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Features"
            variant="standard"
            onChange={(e) => {
              setFeatures(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="Keywords"
            variant="standard"
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="url"
            variant="standard"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="category"
            variant="standard"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <TextField
            className="addCustomer-form-div-input"
            id="standard-basic"
            label="subCategory"
            variant="standard"
            onChange={(e) => {
              setSubCategory(e.target.value);
            }}
          />
        </section>
        <section className="addCustomer-button-section">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              let newProductData = {
                id: id,
                name: name,
                features: features,
                description: description,
                price: price,
                keywords: keywords,
                url: url,
                category: category,
                subCategory: subCategory,
              };
              // console.log(newCustomerData);
              handleAddProduct(newProductData);
            }}
          >
            Add Product
          </Button>
        </section>
      </div>
    </div>
  );
}
