import React from "react";
import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MaterialCompositionChart(data) {
  let [matName, setMatName] = useState([]);
  let [matComp, setMatComp] = useState([]);
  let [compSentense, setCompSentense] = useState([
    "Iron0",
    "Chromium0",
    "Nickel0",
  ]);

  let chartData = {
    labels: matName,
    datasets: [
      {
        label: "% of Material",
        data: matComp,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    setMatName(data.rawMaterials);
    setMatComp(data.composition);
  }, [data]);

  return (
    <React.Fragment>
      <div className="materialComposition-card-chart">
        <div className="materialComposition-chart-card-text">
          <div className="materialComposition-chart-card-text2">
            <CardContent className="materialComposition-chart-card-content">
              {matName.map((name) => {
                return <p>{name}</p>;
              })}
            </CardContent>
            <CardContent className="materialComposition-chart-card-content">
              {matComp.map((comp) => {
                return <p>{comp + "%"}</p>;
              })}
            </CardContent>
          </div>
        </div>
        <Pie data={chartData} />
      </div>
    </React.Fragment>
  );
}
