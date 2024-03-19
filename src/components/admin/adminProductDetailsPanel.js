import React, { useState, useRef } from "react";
import GeneralProductDetails from "../user/generalProductDetails";
import MaterialCompositionChart from "../user/materialCompositionChart";
import MaterialOrigin from "../user/materialOrigin";
import Recyclability from "../user/recyclability";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import {
  ThemeProvider,
  ObjectPage,
  DynamicPageHeader,
  FlexBox,
  Label,
  DynamicPageTitle,
  ObjectPageSection,
  ObjectPageSubSection,
  Text,
} from "@ui5/webcomponents-react";

let additionalData = {
  grp1: {
    Name: "Lokesh Kanna",
    role: "FullStack Developer",
  },
  grp2: {
    Name: "Premanand",
    role: "SAP Developer",
    position: "Contract",
  },
  grp3: {
    Name: "Narendhran",
    role: "SAP Consultant",
    company: "Slash Labs",
  },
};

export default function AdminProductDetails(data) {
  const additionslT = (data) => {
    return Object.keys(data).map((key) => {
      return Object.keys(data[key]).map((child) => {
        return (
          <CardContent
            className="materialComposition-chart-card-content"
            key={key}
          >
            {child}: {data[key][child]}
          </CardContent>
        );
      });
    });
  };

  let customerDetials = data.custDetails;
  let productDetails = data.prodDetails;
  let productProperties = data.prodProperties;
  let rawMaterials = data.rawMaterials;
  let rawMaterialComposition = data.rawMaterialComposition;
  let manufacturerStatement = data.manufacturerStatement;
  let recyclability = data.recyclability;

  let customerName = customerDetials.name;
  let customerLogo = customerDetials.logoUrl;
  let customerDescription = customerDetials.descreption;
  let addressL1 = customerDetials.addressL1;
  let addressL2 = customerDetials.addressL2;
  let city = customerDetials.city;
  let country = customerDetials.country;
  // let productName = productDetails.name;
  return (
    <ThemeProvider>
      <ObjectPage
        headerContent={
          <DynamicPageHeader>
            <FlexBox alignItems="Center" wrap="Wrap">
              <FlexBox direction="Column">
                <Text>{customerDescription}</Text>
              </FlexBox>
              <FlexBox direction="Column" style={{ padding: "10px" }}>
                <Text>Address:</Text>
                <Label>
                  {addressL1}, {addressL2}
                </Label>
                <Label>
                  {city}, {country}
                </Label>
              </FlexBox>
            </FlexBox>
          </DynamicPageHeader>
        }
        headerContentPinnable
        headerTitle={
          <DynamicPageTitle
            header={customerName}
            showSubHeaderRight
            // subHeader={productName}
          ></DynamicPageTitle>
        }
        image={customerLogo}
        imageShapeCircle
        onPinnedStateChange={function _a() {}}
        onSelectedSectionChange={function _a() {}}
        onToggleHeaderContent={function _a() {}}
        selectedSectionId="goals"
        showHideHeaderButton
        style={{
          height: "550px",
        }}
      >
        <ObjectPageSection
          aria-label="General Product Details"
          id="general-product-details"
          titleText="General Product Details"
        >
          <Button variant="outlined">Add Tab</Button>
          <ObjectPageSubSection
            aria-label="Dimensions"
            id="general-product-details-Dimensions"
            titleText="Dimensions"
          >
            <GeneralProductDetails productProperties={productProperties} />
          </ObjectPageSubSection>
        </ObjectPageSection>

        <ObjectPageSection
          aria-label="Material Composition"
          id="material-composition"
          titleText="Material Composition"
        >
          <ObjectPageSubSection
            aria-label="Material Composition Information"
            id="material-composition-information"
            titleText="Material Composition"
          >
            <MaterialCompositionChart
              rawMaterials={rawMaterials}
              composition={rawMaterialComposition}
            />
          </ObjectPageSubSection>

          <ObjectPageSubSection
            aria-label="material origin Details"
            id="material-origin-details"
            titleText="Material Origin"
          >
            <MaterialOrigin manufacturerStatement={manufacturerStatement} />
          </ObjectPageSubSection>

          <ObjectPageSubSection
            aria-label="Recycability"
            id="recycability"
            titleText="Recycability"
          >
            <Recyclability
              composition={rawMaterialComposition}
              recyclable={recyclability}
            />
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection
          aria-label="Material Composition"
          id="additional-data"
          titleText="Additional Data"
        >
          <ObjectPageSubSection
            aria-label="Recycability"
            id="additional-data-info"
            titleText="Additional Data"
          >
            {additionslT(additionalData)}
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
    </ThemeProvider>
  );
}
