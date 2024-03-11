"use client";
import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react/dist/components/ThemeProvider/index.js";
import AddProductsSection from "./productDetailsUI.jsx";

export default function AddProductsUI({ params }) {
  return (
    <ThemeProvider>
      <AddProductsSection />
    </ThemeProvider>
  );
}
