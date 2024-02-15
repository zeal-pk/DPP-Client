import React, { useState, useRef } from "react";
import GeneralProductDetails from "./generalProductDetails";
import MaterialCompositionChart from "./materialCompositionChart";
import MaterialOrigin from "./materialOrigin";
import Recyclability from "./recyclability";
import {
  ThemeProvider,
  ObjectPage,
  Bar,
  DynamicPageHeader,
  FlexBox,
  Link,
  Label,
  DynamicPageTitle,
  Button,
  ObjectPageSection,
  Form,
  FormItem,
  FormGroup,
  ObjectPageSubSection,
  Text,
} from "@ui5/webcomponents-react";

export default function ProductDetails(data) {
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
  let productName = productDetails.name;
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
                <Label>{addressL1},</Label>
                <Label>{addressL2},</Label>
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
            subHeader={productName}
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
      </ObjectPage>
    </ThemeProvider>
  );
}
