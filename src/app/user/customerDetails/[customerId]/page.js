"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/navBar";
import { inputData } from "../../../../database/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import ProductDetails from "@/components/user/productDetailsPanel";

export default function CustomerDetials({ params }) {
  let customerId = params.customerId;
  let [customerDetail, setCustomerDetail] = useState([]);
  let [productDetails, setProductDetails] = useState([]);
  let [selectedProduct, setSelectedProduct] = useState({});
  let [selectedProductProperties, setSelectedProductProperties] = useState([]);
  let [selectedProductRawMaterials, setSelectedProductRawMaterials] = useState(
    []
  );
  let [selectedProductRawMaterialsName, setSelectedProductRawMaterialsName] =
    useState([]);
  let [
    selectedProductRawMaterialsComposition,
    setSelectedProductRawMaterialsComposition,
  ] = useState([]);
  let [
    selectedProductRawMaterialsManufacturerStatement,
    setSelectedProductRawMaterialsManufacturerStatement,
  ] = useState([]);
  let [
    selectedProductRawMaterialsRecyclable,
    setSelectedProductRawMaterialsRecyclable,
  ] = useState([]);

  // Function to get the selected customer detials and product details
  const getDetails = async () => {
    let token = localStorage.getItem("access_token");
    await axios
      .get(`http://localhost:9000/getCustomer/${customerId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setCustomerDetail(res.data);
      });
    await axios
      .get(`http://localhost:9000/getProducts/${customerId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setProductDetails(res.data);
        setSelectedProduct(res.data[0]);
      });
  };
  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    let name = [];
    let comp = [];
    let state = [];
    let recyclable = [];
    for (let i = 0; i < selectedProductRawMaterials.length; i++) {
      name.push(selectedProductRawMaterials[i].material);
      comp.push(selectedProductRawMaterials[i].composition);
      state.push(selectedProductRawMaterials[i].manufacturerStatement);
      recyclable.push(selectedProductRawMaterials[i].recyclable);
    }
    setSelectedProductRawMaterialsName(name);
    setSelectedProductRawMaterialsComposition(comp);
    setSelectedProductRawMaterialsManufacturerStatement(state);
    setSelectedProductRawMaterialsRecyclable(recyclable);
  }, [selectedProductRawMaterials]);

  return (
    <div className="main">
      <NavBar />
      <div className="productDetials-div">
        {/* ------------------------------Left Plane section - START */}
        <section className="left-panel">
          {/* ----------------------------------- Left Plane Logo and Title - START */}
          <section className="left-panel-title">
            <img
              src={customerDetail.logoUrl}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <h3>{customerDetail.name}</h3>
          </section>
          {/* ----------------------------------- Left Plane Logo and Title - END */}

          {/* ----------------------------------- Left Plane Scroll Section - START */}
          <section className="left-panel-scroll">
            <section className="left-panel-scroll-content">
              {productDetails.map((product) => (
                <Button
                  variant="text"
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedProductProperties(product.properties);
                    setSelectedProductRawMaterials(product.rawMaterial);
                  }}
                >
                  <Card sx={{ minWidth: 200, maxWidth: 200, maxHeight: 170 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="80"
                        image={product.imageUrl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {product.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Button>
              ))}
            </section>
          </section>
          {/* ----------------------------------- Left Plane Logo and Title - END */}
        </section>
        {/* ----------------------------------- Left Plane section - END */}

        {/* ------------------------------Right Plane section - START */}
        <section className="right-panel">
          <ProductDetails
            custDetails={customerDetail}
            prodDetails={selectedProduct}
            prodProperties={selectedProductProperties}
            rawMaterials={selectedProductRawMaterialsName}
            rawMaterialComposition={selectedProductRawMaterialsComposition}
            manufacturerStatement={
              selectedProductRawMaterialsManufacturerStatement
            }
            recyclability={selectedProductRawMaterialsRecyclable}
          />
          {/* ------------------------------Right Plane scroll section - END */}
        </section>
        {/* ------------------------------Right Plane section - END */}
      </div>
    </div>
  );
}
