import React from "react";
import CardContent from "@mui/material/CardContent";

export default function MaterialOrigin(data) {
  return (
    <div className="materialComposition-card">
      <div className="materialComposition-chart-card-text">
        <h4>Material Origin</h4>
        <div className="materialComposition-chart-card-text2">
          <CardContent className="materialComposition-chart-card-content">
            {data.manufacturerStatement}
          </CardContent>
        </div>
      </div>
    </div>
  );
}
