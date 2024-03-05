"use client";
import * as React from "react";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useForm, useFieldArray } from "react-hook-form";
import NavBar from "@/components/navBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ThemeProvider,
  ObjectPage,
  Form,
  FormItem,
  FormGroup,
  ObjectPageSection,
  ObjectPageSubSection,
  Label,
} from "@ui5/webcomponents-react";

export default function AddProducts() {
  let [fieldName, setFieldName] = useState();
  let [tabDetails, setTabDetails] = useState([]);
  let [tabName, setTabName] = useState("");
  let [subTabName, setSubTabName] = useState("");

  // MUI Modal Code - START
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openTab, setOpenTab] = React.useState(false);
  const handleOpenTab = () => setOpenTab(true);
  const handleCloseTab = () => setOpenTab(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  // MUI Modal Code - END

  // react-hook-form code  - START
  const form = useForm();
  //   {
  //   defaultValues: {
  //     productName: "",
  //     productSerialNumber: "",
  //     batteryType: "",
  //     batteryModel: "",
  //     addtionalField: [
  //       {
  //         field: "",
  //         value: "",
  //       },
  //     ],
  //   },
  // }

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "addtionalField",
    control,
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  // react-hook-form  - END

  return (
    <div className="main">
      <NavBar />

      <ThemeProvider>
        <form onSubmit={handleSubmit(onSubmit)} noValidation>
          <ObjectPage>
            {/* ------------------------------------ PRODUCT DETAILS - START ------------------------------------ */}
            <ObjectPageSection
              aria-label="Product Details"
              id="productDetails"
              titleText="Product Details"
            >
              {/* ------------------------------------ Product Information ------------------------------------ */}
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
                  <FormItem label="Product Name">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("productName", {
                        required: "User Name is Required",
                      })}
                    />
                    <p>{errors.productName?.message}</p>
                  </FormItem>

                  <FormItem label="Serial Number">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("productSerialNumber")}
                    />
                  </FormItem>
                  <FormItem label="Battery Type">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryType")}
                    />
                  </FormItem>
                  <FormItem label="Battery Model">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryModel")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Manufacturer Information ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "manufacturerName"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Manufacturing Site">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("manufacturedDate")}
                    />
                  </FormItem>
                  <FormItem label="Manufactured Date">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryType")}
                    />
                  </FormItem>
                  <FormItem label="Importer Name">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("importerName")}
                    />
                  </FormItem>
                  <FormItem label="Entry Date">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("entryDate")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Product Conformity ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "EuDeclarationConformity"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Standard 1">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("standard1")}
                    />
                  </FormItem>
                  <FormItem label="Standard 2">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("standard2")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Product Characteristics ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "rawMaterialCategory"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Feed Stock Type">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("feedStockType")}
                    />
                  </FormItem>
                  <FormItem label="Fossil Plastic">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("fossilPlastic")}
                    />
                  </FormItem>
                  <FormItem label="Bio Plastic">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("bioPlastic")}
                    />
                  </FormItem>
                  <FormItem label="Reused Plastic">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("reusedPlastic")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Product Performance ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "ecoLabel"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Repairability">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("repairability")}
                    />
                  </FormItem>
                  <FormItem label="Energy Performance">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("energyPerformance")}
                    />
                  </FormItem>
                  <FormItem label="Sustainability Score">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("sustainabilityScore")}
                    />
                  </FormItem>
                  <FormItem label="Plant Score">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("plantScore")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {/* ------------------------------------ PRODUCT DETAILS - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ Tracability - START ------------------------------------ */}
            <ObjectPageSection
              aria-label="Tracability"
              id="tracability"
              titleText="Tracability"
            >
              <ObjectPageSubSection
                aria-label="Chain of Custody"
                id="tracability-chainOfCustody"
                titleText="Chain of Custody"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormItem label="Product Name">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("productName", {
                        required: "User Name is Required",
                      })}
                    />
                    <p>{errors.productName?.message}</p>
                  </FormItem>

                  <FormItem label="Serial Number">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("productSerialNumber")}
                    />
                  </FormItem>
                  <FormItem label="Battery Type">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryType")}
                    />
                  </FormItem>
                  <FormItem label="Battery Model">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("batteryModel")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {/* ------------------------------------ Tracability - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ PRODUCT SPECIFICATION - Start ------------------------------------ */}
            <ObjectPageSection
              aria-label="Specifications"
              id="specifications"
              titleText="Specifications"
            >
              {/* ------------------------------------ Procuct Specification ------------------------------------ */}
              <ObjectPageSubSection
                aria-label="Product Specificationsy"
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "weight"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Rated Capacity">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("ratedCapacity")}
                    />
                  </FormItem>
                  <FormItem label="Minimum Average Duration">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("minimumAverageDuration")}
                    />
                  </FormItem>
                  <FormItem label="Expected Lifetime">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("expectedLifetime")}
                    />
                  </FormItem>
                  <FormItem label="Capacity Fade">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("capacityFade")}
                    />
                  </FormItem>
                  <FormItem label="Internal Resistance Increase">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("internalResistanceIncrease")}
                    />
                  </FormItem>
                  <FormItem label="Energy Efficiency">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("energyEfficiency")}
                    />
                  </FormItem>
                  <FormItem label="Energy Fade">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("energyFade")}
                    />
                  </FormItem>
                  <FormItem label="Charge Throughput">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("chargeThroughput")}
                    />
                  </FormItem>
                  <FormItem label="Internal Resistance">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("internalResistance")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Performance Specification ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "power"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Energy Roundtrip Efficiency">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("energyRoundtripEfficiency")}
                    />
                  </FormItem>
                  <FormItem label="Charge Rate">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("chargeRate")}
                    />
                  </FormItem>
                  <FormItem label="Discharge Rate">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("dischargeRate")}
                    />
                  </FormItem>
                  <FormItem label="Power-Energy Ratio">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("powerEnergyRatio")}
                    />
                  </FormItem>
                  <FormItem label="Internal Resistance Increase">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("internalResistanceIncrease")}
                    />
                  </FormItem>
                  <FormItem label="Depth of Discharge">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("depthOfDischarge")}
                    />
                  </FormItem>
                  <FormItem label="Power Capability">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("powerCapability")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {/* ------------------------------------ PRODUCT SPECIFICATION - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ COMPOSITION - Start ------------------------------------ */}
            <ObjectPageSection
              aria-label="Composition"
              id="composition"
              titleText="Composition"
            >
              {/* ------------------------------------ Procuct Specification ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register(
                        "recycledContent"
                        // {
                        //   required: "User Name is Required",
                        // }
                      )}
                    />
                    {/* <p>{errors.productName?.message}</p> */}
                  </FormItem>

                  <FormItem label="Renewable Content">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("enewableContent")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Performance Specification ------------------------------------ */}
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
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("caseComposition1")}
                      />
                    </FormItem>

                    <FormItem label="Composition2">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("caseComposition2")}
                      />
                    </FormItem>
                  </FormGroup>

                  <FormGroup titleText="Cathode">
                    <FormItem label="Composition1">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("cathodeComposition2")}
                      />
                    </FormItem>
                    <FormItem label="Composition2">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("cathodeComposition2")}
                      />
                    </FormItem>
                  </FormGroup>

                  <FormGroup titleText="Anode">
                    <FormItem label="Composition1">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("anodeComposition2")}
                      />
                    </FormItem>

                    <FormItem label="Composition2">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("anodeComposition2")}
                      />
                    </FormItem>
                  </FormGroup>

                  <FormGroup titleText="Electrolyte">
                    <FormItem label="Composition1">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("electrolyteComposition2")}
                      />
                    </FormItem>

                    <FormItem label="Composition2">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("electrolyteComposition2")}
                      />
                    </FormItem>
                  </FormGroup>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Hazardous Substances ------------------------------------ */}
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
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("sub1Substance")}
                      />
                    </FormItem>

                    <FormItem label="Percentage">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("sub1Percentage")}
                      />
                    </FormItem>
                  </FormGroup>

                  <FormGroup titleText="Substance 2">
                    <FormItem label="Substance">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("sub2Substance")}
                      />
                    </FormItem>

                    <FormItem label="Percentage">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("sub2Percentage")}
                      />
                    </FormItem>
                  </FormGroup>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Critical Raw Material ------------------------------------ */}
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
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("mat1Material")}
                      />
                    </FormItem>

                    <FormItem label="Percentage">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("mat1Percentage")}
                      />
                    </FormItem>
                  </FormGroup>

                  <FormGroup titleText="Material 2">
                    <FormItem label="Material">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("mat2Material")}
                      />
                    </FormItem>

                    <FormItem label="Percentage">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...register("mat2Percentage")}
                      />
                    </FormItem>
                  </FormGroup>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {/* ------------------------------------ COMPOSITION - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ DESIGN AND SERVICE - START ------------------------------------ */}
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
            {/* ------------------------------------ DESIGN AND SERVICE - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ USAGE HISTORY - START ------------------------------------ */}
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
            {/* ------------------------------------ USAGE HISTORY - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ SUSTAINABILITY - START ------------------------------------ */}
            <ObjectPageSection
              aria-label="Sustainability"
              id="sustainability"
              titleText="Sustainability"
            >
              {/* ------------------------------------ Footprint ------------------------------------ */}
              <ObjectPageSubSection
                aria-label="Footprint"
                id="sustainability-footprint"
                titleText="Footprint"
              >
                <Form
                  columnsL={4}
                  columnsXL={4}
                  style={{
                    alignItems: "baseline",
                  }}
                >
                  <FormItem label="Carbon Footprint">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("carbonFootprint")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ Circularity Index ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("repairabilityIndex")}
                    />
                  </FormItem>
                  <FormItem label="Reuse Index">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("reuseIndex")}
                    />
                  </FormItem>
                  <FormItem label="recycleIndex">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("repairabilityIndex")}
                    />
                  </FormItem>
                  <FormItem label="Environment and Socail Impact Index">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("environmentandSocailImpactIndex")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
              {/* ------------------------------------ PEF / LCA ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("pef/lcaDetails")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {/* ------------------------------------ SUSTAINABILITY - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ CERTIFICATIONS - START ------------------------------------ */}
            <ObjectPageSection
              aria-label="Certifications"
              id="certifications"
              titleText="Certifications"
            >
              {/* ------------------------------------ Footprint ------------------------------------ */}
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("euDeclarationOfConformityID")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {/* ------------------------------------ CERTIFICATION - END ------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------ LABLES - START ------------------------------------ */}
            <ObjectPageSection
              aria-label="Lables"
              id="lables"
              titleText="Lables"
            >
              {/* ------------------------------------ Footprint ------------------------------------ */}
              <ObjectPageSubSection
                aria-label="Labels"
                id="lables-labels"
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
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("separateCollectionSymbol")}
                    />
                  </FormItem>
                  <FormItem label="Cadmium And Lead Symbols">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      {...register("cadmiumAndLeadSymbols")}
                    />
                  </FormItem>
                </Form>
              </ObjectPageSubSection>
            </ObjectPageSection>
            {tabDetails.map((tabDetail) => {
              // let subID = `${tabDetail.tabName}-${tabDetail.subTabName}`;
              return (
                <ObjectPageSection
                  aria-label={tabDetail.tabName}
                  id={tabDetail.tabName}
                  titleText={tabDetail.tabName}
                  key={tabDetail.tabName}
                >
                  <ObjectPageSubSection
                    aria-label={tabDetail.subTabName}
                    id=""
                    titleText={tabDetail.subTabName}
                  >
                    {fields.map((field, index) => {
                      return (
                        <Box key={index}>
                          <label for={field.field}>{field.field}: </label>
                          <TextField
                            id={field.field}
                            variant="outlined"
                            {...register(`additionalValue.${index}.value`)}
                          />
                          <Button onClick={() => remove(index)}>
                            <DeleteIcon />
                            {console.log(field)}
                          </Button>
                        </Box>
                      );
                    })}
                    <div>
                      <Button variant="outlined" onClick={handleOpen}>
                        Add Field
                      </Button>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,
                          },
                        }}
                      >
                        <Fade in={open}>
                          <Box sx={style}>
                            <Typography
                              id="transition-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Please Enter Field Name
                            </Typography>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              label="Field Lable"
                              onChange={(e) => {
                                setFieldName(e.target.value);
                              }}
                            />
                            <Button
                              onClick={() => {
                                append({ field: fieldName });
                              }}
                            >
                              Save
                            </Button>
                          </Box>
                        </Fade>
                      </Modal>
                    </div>
                  </ObjectPageSubSection>
                </ObjectPageSection>
              );
            })}

            <div>
              <Button variant="contained" onClick={handleOpenTab}>
                Add Tab
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openTab}
                onClose={handleCloseTab}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={openTab}>
                  <Box sx={style}>
                    <p>Tab Name</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="Tab Name"
                      onChange={(e) => {
                        setTabName(e.target.value);
                      }}
                    />
                    <p>Sub Tab Name</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      label="Sub Tab Name"
                      onChange={(e) => {
                        setSubTabName(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        let newTabDetials = {
                          tabName: tabName,
                          subTabName: subTabName,
                        };
                        setTabDetails((existingDetails) => [
                          ...existingDetails,
                          newTabDetials,
                        ]);
                        setOpen(false);
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </ObjectPage>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </ThemeProvider>
    </div>
  );
}
