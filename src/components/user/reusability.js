import React from "react";
import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";

export default function Reusability(data) {
  let [totalMaterial, setTotalMaterial] = useState();
  let [reusable, setReusable] = useState();
  let [nonReusable, setNonReusable] = useState();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="materialComposition-card">
      <div className="materialComposition-chart-card-text">
        <h4>Reusability</h4>
        <div className="materialComposition-chart-card-text2">
          <CardContent className="materialComposition-chart-card-content">
            {/* {console.log(rawMaterial.reusable)} */}
          </CardContent>
        </div>
      </div>
    </div>
  );
}
