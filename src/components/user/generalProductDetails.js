import React from "react";
import Input from "@mui/joy/Input";

export default function GeneralProductDetails(data) {
  return (
    <React.Fragment>
      <div className="productDetails-div">
        <div className="right-panel-scroll-content-input-div">
          <p>Length: </p>
          <Input
            sx={{ width: 300 }}
            value={data.productProperties.length}
            disabled
          />
        </div>

        <div className="right-panel-scroll-content-input-div">
          <p>Width: </p>
          <Input
            sx={{ width: 300 }}
            value={data.productProperties.width}
            disabled
          />
        </div>

        <div className="right-panel-scroll-content-input-div">
          <p>Height: </p>
          <Input
            sx={{ width: 300 }}
            value={data.productProperties.height}
            disabled
          />
        </div>

        <div className="right-panel-scroll-content-input-div">
          <p>Weight: </p>
          <Input
            sx={{ width: 300 }}
            value={data.productProperties.weight}
            disabled
          />
        </div>
      </div>
    </React.Fragment>
  );
}
