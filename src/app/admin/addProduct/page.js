"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
// import Button from "@mui/material/Button";
import { batteryDataStructrue } from "@/database/batteryDataStructure";

import {
  ThemeProvider,
  ObjectPage,
  DynamicPageHeader,
  FlexBox,
  Label,
  Bar,
  Link,
  Breadcrumbs,
  BreadcrumbsItem,
  MessageStrip,
  ObjectStatus,
  Form,
  FormItem,
  FormGroup,
  DynamicPageTitle,
  ObjectPageSection,
  ObjectPageSubSection,
  Text,
  Button,
} from "@ui5/webcomponents-react";

async function handleAddProduct(newProductData) {
  let token = localStorage.getItem("access_token");
  const response = await axios
    .post("http://localhost:9000/postProduct", newProductData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
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

      <ThemeProvider>
        <ObjectPage>
          <ObjectPageSection
            aria-label="Product Details"
            id="productDetails"
            titleText="Product Details"
          >
            <ObjectPageSubSection
              aria-label="Product Information"
              id="productDetails-productInformation"
              titleText="Product Information"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                {console.log(batteryDataStructrue)}

                <FormItem label="Product Name">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Serial Number">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Battery Type">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Battery Model">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Manufacturer Information"
              id="productDetails-manufacturer-information"
              titleText="Manufacturer Information"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Manufacturer Name">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Manufacturing Site">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Manufactured Dates">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Importer Name">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Entry Date">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Product Conformity"
              id="productDetails-product-conformity"
              titleText="Product Conformity"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="EU Declaration Of Conformity">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Standard 1">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Standard 2">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Standard 3">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Standard 4">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Product Characteristics"
              id="productDetails-product-characteristics"
              titleText="Product Characteristics"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Raw Material Category">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Feed Stock Type">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Fossil Plastic">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Bio Plastic">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Reused Plastic">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Product Performance"
              id="productDetails-product-performance"
              titleText="Product Performance"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Eco Label">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Repairability">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Energy Performance">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Sustainability Score">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Plant Score">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="Tracability"
            id="tracability"
            titleText="Tracability"
          >
            <ObjectPageSubSection
              aria-label="Chain of Custody"
              id="tracability-chainOfCustody"
              titleText="Chain of Custody"
            ></ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="Specifications"
            id="specifications"
            titleText="Specifications"
          >
            <ObjectPageSubSection
              aria-label="Product Specifications"
              id="specifications-productSpecifications"
              titleText="Product Specifications"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Weight">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Rated Capacity">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Minimum Average Duration">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Expected Lifetime">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Capacity Fade">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Internal Resistance Increase">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Energy Efficiency">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Energy Fade">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Charge Throughput">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Internal resistance">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Performance Specification"
              id="specifications-performance-specification"
              titleText="Performance Specification"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Power">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Internal resistance">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Energy Roundtrip Efficiency">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Charge Rate">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Discharge Rate">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Power-Energy Ratio">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Depth of Discharge">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Power Capability">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="composition"
            id="composition"
            titleText="Composition"
          >
            <ObjectPageSubSection
              aria-label="Recyclability"
              id="composition-recyclability"
              titleText="Recyclability"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Recycled Content">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Renewable Content">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Chemistry"
              id="composition-chemistry"
              titleText="Chemistry"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormGroup titleText="Outer Case">
                  <FormItem label="Composition 1">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Composition 2">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Cathode">
                  <FormItem label="Composition 1">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Composition 2">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Anode">
                  <FormItem label="Composition 1">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Composition 2">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Electrolyte">
                  <FormItem label="Composition 1">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Composition 2">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Hazardous Substance"
              id="composition-hazardous-substance"
              titleText="Hazardous Substance"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormGroup titleText="Substance 1">
                  <FormItem label="Substance">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Percentage">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Substance 2">
                  <FormItem label="Substance">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Percentage">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Critical Raw Materials"
              id="composition-criticalRawMaterials"
              titleText="Critical Raw Materials"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormGroup titleText="Material 1">
                  <FormItem label="Material">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Percentage">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Material 2">
                  <FormItem label="Material">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Percentage">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Material 3">
                  <FormItem label="Material">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Percentage">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Material 4">
                  <FormItem label="Material">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                  <FormItem label="Percentage">
                    <TextField id="outlined-basic" variant="outlined" />
                  </FormItem>
                </FormGroup>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="Design and Service"
            id="designAndService"
            titleText="Design and Service"
          >
            <ObjectPageSubSection
              aria-label="Disposal Scheme"
              id="designAndService-disposalScheme"
              titleText="Disposal Scheme"
            ></ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Return Scheme"
              id="designAndService-returnScheme"
              titleText="Disposal Scheme"
            ></ObjectPageSubSection>
            <ObjectPageSubSection
              aria-label="Collection Scheme"
              id="designAndService-collectionScheme"
              titleText="Collection Scheme"
            ></ObjectPageSubSection>
            <ObjectPageSubSection
              aria-label="Part Details"
              id="designAndService-partDetails"
              titleText="Part Details"
            ></ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="Usage History"
            id="usageHistory"
            titleText="Usage History"
          >
            <ObjectPageSubSection
              aria-label="History"
              id="usageHistory-history"
              titleText="History"
            ></ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Repair And Reuse"
              id="designAndService-repairReuse"
              titleText="Repair And Reuse"
            ></ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="Sustainability"
            id="sustainability"
            titleText="Sustainability"
          >
            <ObjectPageSubSection
              aria-label="Footprint"
              id="sustainability-footprint"
              titleText="FootPrint"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Carbon Footprint">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>

            <ObjectPageSubSection
              aria-label="Circularity Index"
              id="sustainability-circularityIndex"
              titleText="Circularity Index"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Repairability Index">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Reuse Index">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Recycle Index">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Environment and Socail Impact Index">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>
            <ObjectPageSubSection
              aria-label="PEF / LCA"
              id="sustainability-pefLca"
              titleText="PEF / LCA"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="PEF/LCA Details">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection
            aria-label="Certification"
            id="certification"
            titleText="Certification"
          >
            <ObjectPageSubSection
              aria-label="Certification"
              id="certification-certification"
              titleText="Certification"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="EU Declaration Of Conformity ID">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Test Result">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>

          <ObjectPageSection aria-label="Labels" id="labels" titleText="Labels">
            <ObjectPageSubSection
              aria-label="Labels"
              id="labels-labels"
              titleText="Labels"
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: "baseline",
                }}
              >
                <FormItem label="Separate Collection Symbol">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
                <FormItem label="Cadmium And Lead Symbols">
                  <TextField id="outlined-basic" variant="outlined" />
                </FormItem>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>
        </ObjectPage>
      </ThemeProvider>
    </div>
  );
}
