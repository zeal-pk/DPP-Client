import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";

export default function Recyclability(data) {
  let [recyclable, setRecyclable] = useState("");
  let [nonRecyclable, setNonRecyclable] = useState("");
  useEffect(() => {
    let obj = [];
    let recyclable = 0;
    let nonRecyclable = 0;

    for (let i = 0; i < data.composition.length; i++) {
      obj.push({ comp: data.composition[i], recycle: data.recyclable[i] });
    }

    for (let i = 0; i < obj.length; i++) {
      if (obj[i].recycle == true) {
        recyclable = Number(recyclable) + Number(obj[i].comp);
      }
    }

    nonRecyclable = 100 - Number(recyclable) + "%";
    recyclable = recyclable + "%";
    setRecyclable(recyclable);
    setNonRecyclable(nonRecyclable);
  }, [data]);
  return (
    <div className="materialComposition-card">
      <div className="materialComposition-chart-card-text">
        <p>
          The product is {recyclable} recyclable and {nonRecyclable}{" "}
          non-recyclable
        </p>
        <div className="materialComposition-chart-card-text2">
          <div
            className="progress recyclability-bar-div"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-success" style={{ width: recyclable }}>
              {recyclable} Recyclable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
