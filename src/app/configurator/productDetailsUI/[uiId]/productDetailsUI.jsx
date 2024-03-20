"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navBar";
import axios from "axios";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useForm, useFieldArray } from "react-hook-form";
import {
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  Bar,
  Button,
} from "@ui5/webcomponents-react";
import { Mode } from "@mui/icons-material";
import BackButton from "@/components/backButton";
import LoadingPage from "@/app/loading";

const charts = [
  {
    value: "Pie Chart",
    label: "Pie Chart",
  },
  {
    value: "Line Chart",
    label: "Line Chart",
  },
  {
    value: "Bar Chart",
    label: "Bar Chart",
  },
  {
    value: "Scatter Chart",
    label: "Scatter Chart",
  },
];

export default function AddProductsSection({ params }) {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let router = useRouter();
  let [loadPage, setLoadPage] = useState(false);

  let [fullData, setFullData] = useState({});
  let [tabDetails, setTabDetails] = useState([]);
  let [tabName, setTabName] = useState();
  let [fieldName, setFieldName] = useState();
  let [chartType, setChartType] = useState();
  let [xAxis, setXAxis] = useState();
  let [yAxis, setYAxis] = useState();
  let [subTabArray, setSubTabArray] = useState([]);
  let [selectedTabIndex, setSelectedTabIndex] = useState();
  let [combinedIndex, setCombinedIndex] = useState();
  let [id, setId] = useState();

  let [tab1, setTab1] = useState("Tab 1");
  let [tab2, setTab2] = useState("Tab 2");
  let [tab3, setTab3] = useState("Tab 3");
  let [tab4, setTab4] = useState("Tab 4");
  let [tab5, setTab5] = useState("Tab 5");
  let [tab6, setTab6] = useState("Tab 6");
  let [tab7, setTab7] = useState("Tab 7");
  let [tab8, setTab8] = useState("Tab 8");
  let [tab9, setTab9] = useState("Tab 9");
  let [tab10, setTab10] = useState("Tab 10");

  let [tab1SubTab1, setTab1SubTab1] = useState("Sub Tab 1-1");
  let [tab1SubTab2, setTab1SubTab2] = useState("Sub Tab 1-2");
  let [tab1SubTab3, setTab1SubTab3] = useState("Sub Tab 1-3");
  let [tab1SubTab4, setTab1SubTab4] = useState("Sub Tab 1-4");
  let [tab1SubTab5, setTab1SubTab5] = useState("Sub Tab 1-5");
  let [tab1SubTab6, setTab1SubTab6] = useState("Sub Tab 1-6");
  let [tab1SubTab7, setTab1SubTab7] = useState("Sub Tab 1-7");
  let [tab1SubTab8, setTab1SubTab8] = useState("Sub Tab 1-8");
  let [tab1SubTab9, setTab1SubTab9] = useState("Sub Tab 1-9");
  let [tab1SubTab10, setTab1SubTab10] = useState("Sub Tab 1-10");

  let [tab2SubTab1, setTab2SubTab1] = useState("Sub Tab 2-1");
  let [tab2SubTab2, setTab2SubTab2] = useState("Sub Tab 2-2");
  let [tab2SubTab3, setTab2SubTab3] = useState("Sub Tab 2-3");
  let [tab2SubTab4, setTab2SubTab4] = useState("Sub Tab 2-4");
  let [tab2SubTab5, setTab2SubTab5] = useState("Sub Tab 2-5");
  let [tab2SubTab6, setTab2SubTab6] = useState("Sub Tab 2-6");
  let [tab2SubTab7, setTab2SubTab7] = useState("Sub Tab 2-7");
  let [tab2SubTab8, setTab2SubTab8] = useState("Sub Tab 2-8");
  let [tab2SubTab9, setTab2SubTab9] = useState("Sub Tab 2-9");
  let [tab2SubTab10, setTab2SubTab10] = useState("Sub Tab 2-10");

  let [tab3SubTab1, setTab3SubTab1] = useState("Sub Tab 3-1");
  let [tab3SubTab2, setTab3SubTab2] = useState("Sub Tab 3-2");
  let [tab3SubTab3, setTab3SubTab3] = useState("Sub Tab 3-3");
  let [tab3SubTab4, setTab3SubTab4] = useState("Sub Tab 3-4");
  let [tab3SubTab5, setTab3SubTab5] = useState("Sub Tab 3-5");
  let [tab3SubTab6, setTab3SubTab6] = useState("Sub Tab 3-6");
  let [tab3SubTab7, setTab3SubTab7] = useState("Sub Tab 3-7");
  let [tab3SubTab8, setTab3SubTab8] = useState("Sub Tab 3-8");
  let [tab3SubTab9, setTab3SubTab9] = useState("Sub Tab 3-9");
  let [tab3SubTab10, setTab3SubTab10] = useState("Sub Tab 3-10");

  let [tab4SubTab1, setTab4SubTab1] = useState("Sub Tab 4-1");
  let [tab4SubTab2, setTab4SubTab2] = useState("Sub Tab 4-2");
  let [tab4SubTab3, setTab4SubTab3] = useState("Sub Tab 4-3");
  let [tab4SubTab4, setTab4SubTab4] = useState("Sub Tab 4-4");
  let [tab4SubTab5, setTab4SubTab5] = useState("Sub Tab 4-5");
  let [tab4SubTab6, setTab4SubTab6] = useState("Sub Tab 4-6");
  let [tab4SubTab7, setTab4SubTab7] = useState("Sub Tab 4-7");
  let [tab4SubTab8, setTab4SubTab8] = useState("Sub Tab 4-8");
  let [tab4SubTab9, setTab4SubTab9] = useState("Sub Tab 4-9");
  let [tab4SubTab10, setTab4SubTab10] = useState("Sub Tab 4-10");

  let [tab5SubTab1, setTab5SubTab1] = useState("Sub Tab 5-1");
  let [tab5SubTab2, setTab5SubTab2] = useState("Sub Tab 5-2");
  let [tab5SubTab3, setTab5SubTab3] = useState("Sub Tab 5-3");
  let [tab5SubTab4, setTab5SubTab4] = useState("Sub Tab 5-4");
  let [tab5SubTab5, setTab5SubTab5] = useState("Sub Tab 5-5");
  let [tab5SubTab6, setTab5SubTab6] = useState("Sub Tab 5-6");
  let [tab5SubTab7, setTab5SubTab7] = useState("Sub Tab 5-7");
  let [tab5SubTab8, setTab5SubTab8] = useState("Sub Tab 5-8");
  let [tab5SubTab9, setTab5SubTab9] = useState("Sub Tab 5-9");
  let [tab5SubTab10, setTab5SubTab10] = useState("Sub Tab 5-10");

  let [tab6SubTab1, setTab6SubTab1] = useState("Sub Tab 6-1");
  let [tab6SubTab2, setTab6SubTab2] = useState("Sub Tab 6-2");
  let [tab6SubTab3, setTab6SubTab3] = useState("Sub Tab 6-3");
  let [tab6SubTab4, setTab6SubTab4] = useState("Sub Tab 6-4");
  let [tab6SubTab5, setTab6SubTab5] = useState("Sub Tab 6-5");
  let [tab6SubTab6, setTab6SubTab6] = useState("Sub Tab 6-6");
  let [tab6SubTab7, setTab6SubTab7] = useState("Sub Tab 6-7");
  let [tab6SubTab8, setTab6SubTab8] = useState("Sub Tab 6-8");
  let [tab6SubTab9, setTab6SubTab9] = useState("Sub Tab 6-9");
  let [tab6SubTab10, setTab6SubTab10] = useState("Sub Tab 6-10");

  let [tab7SubTab1, setTab7SubTab1] = useState("Sub Tab 7-1");
  let [tab7SubTab2, setTab7SubTab2] = useState("Sub Tab 7-2");
  let [tab7SubTab3, setTab7SubTab3] = useState("Sub Tab 7-3");
  let [tab7SubTab4, setTab7SubTab4] = useState("Sub Tab 7-4");
  let [tab7SubTab5, setTab7SubTab5] = useState("Sub Tab 7-5");
  let [tab7SubTab6, setTab7SubTab6] = useState("Sub Tab 7-6");
  let [tab7SubTab7, setTab7SubTab7] = useState("Sub Tab 7-7");
  let [tab7SubTab8, setTab7SubTab8] = useState("Sub Tab 7-8");
  let [tab7SubTab9, setTab7SubTab9] = useState("Sub Tab 7-9");
  let [tab7SubTab10, setTab7SubTab10] = useState("Sub Tab 7-10");

  let [tab8SubTab1, setTab8SubTab1] = useState("Sub Tab 8-1");
  let [tab8SubTab2, setTab8SubTab2] = useState("Sub Tab 8-2");
  let [tab8SubTab3, setTab8SubTab3] = useState("Sub Tab 8-3");
  let [tab8SubTab4, setTab8SubTab4] = useState("Sub Tab 8-4");
  let [tab8SubTab5, setTab8SubTab5] = useState("Sub Tab 8-5");
  let [tab8SubTab6, setTab8SubTab6] = useState("Sub Tab 8-6");
  let [tab8SubTab7, setTab8SubTab7] = useState("Sub Tab 8-7");
  let [tab8SubTab8, setTab8SubTab8] = useState("Sub Tab 8-8");
  let [tab8SubTab9, setTab8SubTab9] = useState("Sub Tab 8-9");
  let [tab8SubTab10, setTab8SubTab10] = useState("Sub Tab 8-10");

  let [tab9SubTab1, setTab9SubTab1] = useState("Sub Tab 9-1");
  let [tab9SubTab2, setTab9SubTab2] = useState("Sub Tab 9-2");
  let [tab9SubTab3, setTab9SubTab3] = useState("Sub Tab 9-3");
  let [tab9SubTab4, setTab9SubTab4] = useState("Sub Tab 9-4");
  let [tab9SubTab5, setTab9SubTab5] = useState("Sub Tab 9-5");
  let [tab9SubTab6, setTab9SubTab6] = useState("Sub Tab 9-6");
  let [tab9SubTab7, setTab9SubTab7] = useState("Sub Tab 9-7");
  let [tab9SubTab8, setTab9SubTab8] = useState("Sub Tab 9-8");
  let [tab9SubTab9, setTab9SubTab9] = useState("Sub Tab 9-9");
  let [tab9SubTab10, setTab9SubTab10] = useState("Sub Tab 9-10");

  let [tab10SubTab1, setTab10SubTab1] = useState("Sub Tab 10-1");
  let [tab10SubTab2, setTab10SubTab2] = useState("Sub Tab 10-2");
  let [tab10SubTab3, setTab10SubTab3] = useState("Sub Tab 10-3");
  let [tab10SubTab4, setTab10SubTab4] = useState("Sub Tab 10-4");
  let [tab10SubTab5, setTab10SubTab5] = useState("Sub Tab 10-5");
  let [tab10SubTab6, setTab10SubTab6] = useState("Sub Tab 10-6");
  let [tab10SubTab7, setTab10SubTab7] = useState("Sub Tab 10-7");
  let [tab10SubTab8, setTab10SubTab8] = useState("Sub Tab 10-8");
  let [tab10SubTab9, setTab10SubTab9] = useState("Sub Tab 10-9");
  let [tab10SubTab10, setTab10SubTab10] = useState("Sub Tab 10-10");

  let [tab1SubTab1Fields, setTab1SubTab1Fields] = useState([]);
  let [tab1SubTab2Fields, setTab1SubTab2Fields] = useState([]);
  let [tab1SubTab3Fields, setTab1SubTab3Fields] = useState([]);
  let [tab1SubTab4Fields, setTab1SubTab4Fields] = useState([]);
  let [tab1SubTab5Fields, setTab1SubTab5Fields] = useState([]);
  let [tab1SubTab6Fields, setTab1SubTab6Fields] = useState([]);
  let [tab1SubTab7Fields, setTab1SubTab7Fields] = useState([]);
  let [tab1SubTab8Fields, setTab1SubTab8Fields] = useState([]);
  let [tab1SubTab9Fields, setTab1SubTab9Fields] = useState([]);
  let [tab1SubTab10Fields, setTab1SubTab10Fields] = useState([]);

  let [tab2SubTab1Fields, setTab2SubTab1Fields] = useState([]);
  let [tab2SubTab2Fields, setTab2SubTab2Fields] = useState([]);
  let [tab2SubTab3Fields, setTab2SubTab3Fields] = useState([]);
  let [tab2SubTab4Fields, setTab2SubTab4Fields] = useState([]);
  let [tab2SubTab5Fields, setTab2SubTab5Fields] = useState([]);
  let [tab2SubTab6Fields, setTab2SubTab6Fields] = useState([]);
  let [tab2SubTab7Fields, setTab2SubTab7Fields] = useState([]);
  let [tab2SubTab8Fields, setTab2SubTab8Fields] = useState([]);
  let [tab2SubTab9Fields, setTab2SubTab9Fields] = useState([]);
  let [tab2SubTab10Fields, setTab2SubTab10Fields] = useState([]);

  let [tab3SubTab1Fields, setTab3SubTab1Fields] = useState([]);
  let [tab3SubTab2Fields, setTab3SubTab2Fields] = useState([]);
  let [tab3SubTab3Fields, setTab3SubTab3Fields] = useState([]);
  let [tab3SubTab4Fields, setTab3SubTab4Fields] = useState([]);
  let [tab3SubTab5Fields, setTab3SubTab5Fields] = useState([]);
  let [tab3SubTab6Fields, setTab3SubTab6Fields] = useState([]);
  let [tab3SubTab7Fields, setTab3SubTab7Fields] = useState([]);
  let [tab3SubTab8Fields, setTab3SubTab8Fields] = useState([]);
  let [tab3SubTab9Fields, setTab3SubTab9Fields] = useState([]);
  let [tab3SubTab10Fields, setTab3SubTab10Fields] = useState([]);

  let [tab4SubTab1Fields, setTab4SubTab1Fields] = useState([]);
  let [tab4SubTab2Fields, setTab4SubTab2Fields] = useState([]);
  let [tab4SubTab3Fields, setTab4SubTab3Fields] = useState([]);
  let [tab4SubTab4Fields, setTab4SubTab4Fields] = useState([]);
  let [tab4SubTab5Fields, setTab4SubTab5Fields] = useState([]);
  let [tab4SubTab6Fields, setTab4SubTab6Fields] = useState([]);
  let [tab4SubTab7Fields, setTab4SubTab7Fields] = useState([]);
  let [tab4SubTab8Fields, setTab4SubTab8Fields] = useState([]);
  let [tab4SubTab9Fields, setTab4SubTab9Fields] = useState([]);
  let [tab4SubTab10Fields, setTab4SubTab10Fields] = useState([]);

  let [tab5SubTab1Fields, setTab5SubTab1Fields] = useState([]);
  let [tab5SubTab2Fields, setTab5SubTab2Fields] = useState([]);
  let [tab5SubTab3Fields, setTab5SubTab3Fields] = useState([]);
  let [tab5SubTab4Fields, setTab5SubTab4Fields] = useState([]);
  let [tab5SubTab5Fields, setTab5SubTab5Fields] = useState([]);
  let [tab5SubTab6Fields, setTab5SubTab6Fields] = useState([]);
  let [tab5SubTab7Fields, setTab5SubTab7Fields] = useState([]);
  let [tab5SubTab8Fields, setTab5SubTab8Fields] = useState([]);
  let [tab5SubTab9Fields, setTab5SubTab9Fields] = useState([]);
  let [tab5SubTab10Fields, setTab5SubTab10Fields] = useState([]);

  let [tab6SubTab1Fields, setTab6SubTab1Fields] = useState([]);
  let [tab6SubTab2Fields, setTab6SubTab2Fields] = useState([]);
  let [tab6SubTab3Fields, setTab6SubTab3Fields] = useState([]);
  let [tab6SubTab4Fields, setTab6SubTab4Fields] = useState([]);
  let [tab6SubTab5Fields, setTab6SubTab5Fields] = useState([]);
  let [tab6SubTab6Fields, setTab6SubTab6Fields] = useState([]);
  let [tab6SubTab7Fields, setTab6SubTab7Fields] = useState([]);
  let [tab6SubTab8Fields, setTab6SubTab8Fields] = useState([]);
  let [tab6SubTab9Fields, setTab6SubTab9Fields] = useState([]);
  let [tab6SubTab10Fields, setTab6SubTab10Fields] = useState([]);

  let [tab7SubTab1Fields, setTab7SubTab1Fields] = useState([]);
  let [tab7SubTab2Fields, setTab7SubTab2Fields] = useState([]);
  let [tab7SubTab3Fields, setTab7SubTab3Fields] = useState([]);
  let [tab7SubTab4Fields, setTab7SubTab4Fields] = useState([]);
  let [tab7SubTab5Fields, setTab7SubTab5Fields] = useState([]);
  let [tab7SubTab6Fields, setTab7SubTab6Fields] = useState([]);
  let [tab7SubTab7Fields, setTab7SubTab7Fields] = useState([]);
  let [tab7SubTab8Fields, setTab7SubTab8Fields] = useState([]);
  let [tab7SubTab9Fields, setTab7SubTab9Fields] = useState([]);
  let [tab7SubTab10Fields, setTab7SubTab10Fields] = useState([]);

  let [tab8SubTab1Fields, setTab8SubTab1Fields] = useState([]);
  let [tab8SubTab2Fields, setTab8SubTab2Fields] = useState([]);
  let [tab8SubTab3Fields, setTab8SubTab3Fields] = useState([]);
  let [tab8SubTab4Fields, setTab8SubTab4Fields] = useState([]);
  let [tab8SubTab5Fields, setTab8SubTab5Fields] = useState([]);
  let [tab8SubTab6Fields, setTab8SubTab6Fields] = useState([]);
  let [tab8SubTab7Fields, setTab8SubTab7Fields] = useState([]);
  let [tab8SubTab8Fields, setTab8SubTab8Fields] = useState([]);
  let [tab8SubTab9Fields, setTab8SubTab9Fields] = useState([]);
  let [tab8SubTab10Fields, setTab8SubTab10Fields] = useState([]);

  let [tab9SubTab1Fields, setTab9SubTab1Fields] = useState([]);
  let [tab9SubTab2Fields, setTab9SubTab2Fields] = useState([]);
  let [tab9SubTab3Fields, setTab9SubTab3Fields] = useState([]);
  let [tab9SubTab4Fields, setTab9SubTab4Fields] = useState([]);
  let [tab9SubTab5Fields, setTab9SubTab5Fields] = useState([]);
  let [tab9SubTab6Fields, setTab9SubTab6Fields] = useState([]);
  let [tab9SubTab7Fields, setTab9SubTab7Fields] = useState([]);
  let [tab9SubTab8Fields, setTab9SubTab8Fields] = useState([]);
  let [tab9SubTab9Fields, setTab9SubTab9Fields] = useState([]);
  let [tab9SubTab10Fields, setTab9SubTab10Fields] = useState([]);

  let [tab10SubTab1Fields, setTab10SubTab1Fields] = useState([]);
  let [tab10SubTab2Fields, setTab10SubTab2Fields] = useState([]);
  let [tab10SubTab3Fields, setTab10SubTab3Fields] = useState([]);
  let [tab10SubTab4Fields, setTab10SubTab4Fields] = useState([]);
  let [tab10SubTab5Fields, setTab10SubTab5Fields] = useState([]);
  let [tab10SubTab6Fields, setTab10SubTab6Fields] = useState([]);
  let [tab10SubTab7Fields, setTab10SubTab7Fields] = useState([]);
  let [tab10SubTab8Fields, setTab10SubTab8Fields] = useState([]);
  let [tab10SubTab9Fields, setTab10SubTab9Fields] = useState([]);
  let [tab10SubTab10Fields, setTab10SubTab10Fields] = useState([]);

  let [tab1SubTab1Type, setTab1SubTab1Type] = useState([]);
  let [tab1SubTab2Type, setTab1SubTab2Type] = useState([]);
  let [tab1SubTab3Type, setTab1SubTab3Type] = useState([]);
  let [tab1SubTab4Type, setTab1SubTab4Type] = useState([]);
  let [tab1SubTab5Type, setTab1SubTab5Type] = useState([]);
  let [tab1SubTab6Type, setTab1SubTab6Type] = useState([]);
  let [tab1SubTab7Type, setTab1SubTab7Type] = useState([]);
  let [tab1SubTab8Type, setTab1SubTab8Type] = useState([]);
  let [tab1SubTab9Type, setTab1SubTab9Type] = useState([]);
  let [tab1SubTab10Type, setTab1SubTab10Type] = useState([]);

  let [tab2SubTab1Type, setTab2SubTab1Type] = useState([]);
  let [tab2SubTab2Type, setTab2SubTab2Type] = useState([]);
  let [tab2SubTab3Type, setTab2SubTab3Type] = useState([]);
  let [tab2SubTab4Type, setTab2SubTab4Type] = useState([]);
  let [tab2SubTab5Type, setTab2SubTab5Type] = useState([]);
  let [tab2SubTab6Type, setTab2SubTab6Type] = useState([]);
  let [tab2SubTab7Type, setTab2SubTab7Type] = useState([]);
  let [tab2SubTab8Type, setTab2SubTab8Type] = useState([]);
  let [tab2SubTab9Type, setTab2SubTab9Type] = useState([]);
  let [tab2SubTab10Type, setTab2SubTab10Type] = useState([]);

  let [tab3SubTab1Type, setTab3SubTab1Type] = useState([]);
  let [tab3SubTab2Type, setTab3SubTab2Type] = useState([]);
  let [tab3SubTab3Type, setTab3SubTab3Type] = useState([]);
  let [tab3SubTab4Type, setTab3SubTab4Type] = useState([]);
  let [tab3SubTab5Type, setTab3SubTab5Type] = useState([]);
  let [tab3SubTab6Type, setTab3SubTab6Type] = useState([]);
  let [tab3SubTab7Type, setTab3SubTab7Type] = useState([]);
  let [tab3SubTab8Type, setTab3SubTab8Type] = useState([]);
  let [tab3SubTab9Type, setTab3SubTab9Type] = useState([]);
  let [tab3SubTab10Type, setTab3SubTab10Type] = useState([]);

  let [tab4SubTab1Type, setTab4SubTab1Type] = useState([]);
  let [tab4SubTab2Type, setTab4SubTab2Type] = useState([]);
  let [tab4SubTab3Type, setTab4SubTab3Type] = useState([]);
  let [tab4SubTab4Type, setTab4SubTab4Type] = useState([]);
  let [tab4SubTab5Type, setTab4SubTab5Type] = useState([]);
  let [tab4SubTab6Type, setTab4SubTab6Type] = useState([]);
  let [tab4SubTab7Type, setTab4SubTab7Type] = useState([]);
  let [tab4SubTab8Type, setTab4SubTab8Type] = useState([]);
  let [tab4SubTab9Type, setTab4SubTab9Type] = useState([]);
  let [tab4SubTab10Type, setTab4SubTab10Type] = useState([]);

  let [tab5SubTab1Type, setTab5SubTab1Type] = useState([]);
  let [tab5SubTab2Type, setTab5SubTab2Type] = useState([]);
  let [tab5SubTab3Type, setTab5SubTab3Type] = useState([]);
  let [tab5SubTab4Type, setTab5SubTab4Type] = useState([]);
  let [tab5SubTab5Type, setTab5SubTab5Type] = useState([]);
  let [tab5SubTab6Type, setTab5SubTab6Type] = useState([]);
  let [tab5SubTab7Type, setTab5SubTab7Type] = useState([]);
  let [tab5SubTab8Type, setTab5SubTab8Type] = useState([]);
  let [tab5SubTab9Type, setTab5SubTab9Type] = useState([]);
  let [tab5SubTab10Type, setTab5SubTab10Type] = useState([]);

  let [tab6SubTab1Type, setTab6SubTab1Type] = useState([]);
  let [tab6SubTab2Type, setTab6SubTab2Type] = useState([]);
  let [tab6SubTab3Type, setTab6SubTab3Type] = useState([]);
  let [tab6SubTab4Type, setTab6SubTab4Type] = useState([]);
  let [tab6SubTab5Type, setTab6SubTab5Type] = useState([]);
  let [tab6SubTab6Type, setTab6SubTab6Type] = useState([]);
  let [tab6SubTab7Type, setTab6SubTab7Type] = useState([]);
  let [tab6SubTab8Type, setTab6SubTab8Type] = useState([]);
  let [tab6SubTab9Type, setTab6SubTab9Type] = useState([]);
  let [tab6SubTab10Type, setTab6SubTab10Type] = useState([]);

  let [tab7SubTab1Type, setTab7SubTab1Type] = useState([]);
  let [tab7SubTab2Type, setTab7SubTab2Type] = useState([]);
  let [tab7SubTab3Type, setTab7SubTab3Type] = useState([]);
  let [tab7SubTab4Type, setTab7SubTab4Type] = useState([]);
  let [tab7SubTab5Type, setTab7SubTab5Type] = useState([]);
  let [tab7SubTab6Type, setTab7SubTab6Type] = useState([]);
  let [tab7SubTab7Type, setTab7SubTab7Type] = useState([]);
  let [tab7SubTab8Type, setTab7SubTab8Type] = useState([]);
  let [tab7SubTab9Type, setTab7SubTab9Type] = useState([]);
  let [tab7SubTab10Type, setTab7SubTab10Type] = useState([]);

  let [tab8SubTab1Type, setTab8SubTab1Type] = useState([]);
  let [tab8SubTab2Type, setTab8SubTab2Type] = useState([]);
  let [tab8SubTab3Type, setTab8SubTab3Type] = useState([]);
  let [tab8SubTab4Type, setTab8SubTab4Type] = useState([]);
  let [tab8SubTab5Type, setTab8SubTab5Type] = useState([]);
  let [tab8SubTab6Type, setTab8SubTab6Type] = useState([]);
  let [tab8SubTab7Type, setTab8SubTab7Type] = useState([]);
  let [tab8SubTab8Type, setTab8SubTab8Type] = useState([]);
  let [tab8SubTab9Type, setTab8SubTab9Type] = useState([]);
  let [tab8SubTab10Type, setTab8SubTab10Type] = useState([]);

  let [tab9SubTab1Type, setTab9SubTab1Type] = useState([]);
  let [tab9SubTab2Type, setTab9SubTab2Type] = useState([]);
  let [tab9SubTab3Type, setTab9SubTab3Type] = useState([]);
  let [tab9SubTab4Type, setTab9SubTab4Type] = useState([]);
  let [tab9SubTab5Type, setTab9SubTab5Type] = useState([]);
  let [tab9SubTab6Type, setTab9SubTab6Type] = useState([]);
  let [tab9SubTab7Type, setTab9SubTab7Type] = useState([]);
  let [tab9SubTab8Type, setTab9SubTab8Type] = useState([]);
  let [tab9SubTab9Type, setTab9SubTab9Type] = useState([]);
  let [tab9SubTab10Type, setTab9SubTab10Type] = useState([]);

  let [tab10SubTab1Type, setTab10SubTab1Type] = useState([]);
  let [tab10SubTab2Type, setTab10SubTab2Type] = useState([]);
  let [tab10SubTab3Type, setTab10SubTab3Type] = useState([]);
  let [tab10SubTab4Type, setTab10SubTab4Type] = useState([]);
  let [tab10SubTab5Type, setTab10SubTab5Type] = useState([]);
  let [tab10SubTab6Type, setTab10SubTab6Type] = useState([]);
  let [tab10SubTab7Type, setTab10SubTab7Type] = useState([]);
  let [tab10SubTab8Type, setTab10SubTab8Type] = useState([]);
  let [tab10SubTab9Type, setTab10SubTab9Type] = useState([]);
  let [tab10SubTab10Type, setTab10SubTab10Type] = useState([]);


  function pageLoading(val) {
    setLoadPage(val);
    // setTimeout(() => {
    //   setLoadPage(false);
    // }, 60000);
  }

  let dataStruct = {
    templateId: "",
    [tab1]: {
      [tab1SubTab1]: {
        subTabType: tab1SubTab1Type,
        Fields: tab1SubTab1Fields,
      },
      [tab1SubTab2]: {
        subTabType: tab1SubTab2Type,
        Fields: tab1SubTab2Fields,
      },
      [tab1SubTab3]: {
        subTabType: tab1SubTab3Type,
        Fields: tab1SubTab3Fields,
      },
      [tab1SubTab4]: {
        subTabType: tab1SubTab4Type,
        Fields: tab1SubTab4Fields,
      },
      [tab1SubTab5]: {
        subTabType: tab1SubTab5Type,
        Fields: tab1SubTab5Fields,
      },
      [tab1SubTab6]: {
        subTabType: tab1SubTab6Type,
        Fields: tab1SubTab6Fields,
      },
      [tab1SubTab7]: {
        subTabType: tab1SubTab7Type,
        Fields: tab1SubTab7Fields,
      },
      [tab1SubTab8]: {
        subTabType: tab1SubTab8Type,
        Fields: tab1SubTab8Fields,
      },
      [tab1SubTab9]: {
        subTabType: tab1SubTab9Type,
        Fields: tab1SubTab9Fields,
      },
      [tab1SubTab10]: {
        subTabType: tab1SubTab10Type,
        Fields: tab1SubTab10Fields,
      },
    },
    [tab2]: {
      [tab2SubTab1]: {
        subTabType: tab2SubTab1Type,
        Fields: tab2SubTab1Fields,
      },
      [tab2SubTab2]: {
        subTabType: tab2SubTab2Type,
        Fields: tab2SubTab2Fields,
      },
      [tab2SubTab3]: {
        subTabType: tab2SubTab3Type,
        Fields: tab2SubTab3Fields,
      },
      [tab2SubTab4]: {
        subTabType: tab2SubTab4Type,
        Fields: tab2SubTab4Fields,
      },
      [tab2SubTab5]: {
        subTabType: tab2SubTab5Type,
        Fields: tab2SubTab5Fields,
      },
      [tab2SubTab6]: {
        subTabType: tab2SubTab6Type,
        Fields: tab2SubTab6Fields,
      },
      [tab2SubTab7]: {
        subTabType: tab2SubTab7Type,
        Fields: tab2SubTab7Fields,
      },
      [tab2SubTab8]: {
        subTabType: tab2SubTab8Type,
        Fields: tab2SubTab8Fields,
      },
      [tab2SubTab9]: {
        subTabType: tab2SubTab9Type,
        Fields: tab2SubTab9Fields,
      },
      [tab2SubTab10]: {
        subTabType: tab2SubTab10Type,
        Fields: tab2SubTab10Fields,
      },
    },
    [tab3]: {
      [tab3SubTab1]: {
        subTabType: tab3SubTab1Type,
        Fields: tab3SubTab1Fields,
      },
      [tab3SubTab2]: {
        subTabType: tab3SubTab2Type,
        Fields: tab3SubTab2Fields,
      },
      [tab3SubTab3]: {
        subTabType: tab3SubTab3Type,
        Fields: tab3SubTab3Fields,
      },
      [tab3SubTab4]: {
        subTabType: tab3SubTab4Type,
        Fields: tab3SubTab4Fields,
      },
      [tab3SubTab5]: {
        subTabType: tab3SubTab5Type,
        Fields: tab3SubTab5Fields,
      },
      [tab3SubTab6]: {
        subTabType: tab3SubTab6Type,
        Fields: tab3SubTab6Fields,
      },
      [tab3SubTab7]: {
        subTabType: tab3SubTab7Type,
        Fields: tab3SubTab7Fields,
      },
      [tab3SubTab8]: {
        subTabType: tab3SubTab8Type,
        Fields: tab3SubTab8Fields,
      },
      [tab3SubTab9]: {
        subTabType: tab3SubTab9Type,
        Fields: tab3SubTab9Fields,
      },
      [tab3SubTab10]: {
        subTabType: tab3SubTab10Type,
        Fields: tab3SubTab10Fields,
      },
    },
    [tab4]: {
      [tab4SubTab1]: {
        subTabType: tab4SubTab1Type,
        Fields: tab4SubTab1Fields,
      },
      [tab4SubTab2]: {
        subTabType: tab4SubTab2Type,
        Fields: tab4SubTab2Fields,
      },
      [tab4SubTab3]: {
        subTabType: tab4SubTab3Type,
        Fields: tab4SubTab3Fields,
      },
      [tab4SubTab4]: {
        subTabType: tab4SubTab4Type,
        Fields: tab4SubTab4Fields,
      },
      [tab4SubTab5]: {
        subTabType: tab4SubTab5Type,
        Fields: tab4SubTab5Fields,
      },
      [tab4SubTab6]: {
        subTabType: tab4SubTab6Type,
        Fields: tab4SubTab6Fields,
      },
      [tab4SubTab7]: {
        subTabType: tab4SubTab7Type,
        Fields: tab4SubTab7Fields,
      },
      [tab4SubTab8]: {
        subTabType: tab4SubTab8Type,
        Fields: tab4SubTab8Fields,
      },
      [tab4SubTab9]: {
        subTabType: tab4SubTab9Type,
        Fields: tab4SubTab9Fields,
      },
      [tab4SubTab10]: {
        subTabType: tab4SubTab10Type,
        Fields: tab4SubTab10Fields,
      },
    },
    [tab5]: {
      [tab5SubTab1]: {
        subTabType: tab5SubTab1Type,
        Fields: tab5SubTab1Fields,
      },
      [tab5SubTab2]: {
        subTabType: tab5SubTab2Type,
        Fields: tab5SubTab2Fields,
      },
      [tab5SubTab3]: {
        subTabType: tab5SubTab3Type,
        Fields: tab5SubTab3Fields,
      },
      [tab5SubTab4]: {
        subTabType: tab5SubTab4Type,
        Fields: tab5SubTab4Fields,
      },
      [tab5SubTab5]: {
        subTabType: tab5SubTab5Type,
        Fields: tab5SubTab5Fields,
      },
      [tab5SubTab6]: {
        subTabType: tab5SubTab6Type,
        Fields: tab5SubTab6Fields,
      },
      [tab5SubTab7]: {
        subTabType: tab5SubTab7Type,
        Fields: tab5SubTab7Fields,
      },
      [tab5SubTab8]: {
        subTabType: tab5SubTab8Type,
        Fields: tab5SubTab8Fields,
      },
      [tab5SubTab9]: {
        subTabType: tab5SubTab9Type,
        Fields: tab5SubTab9Fields,
      },
      [tab5SubTab10]: {
        subTabType: tab5SubTab10Type,
        Fields: tab5SubTab10Fields,
      },
    },
    [tab6]: {
      [tab6SubTab1]: {
        subTabType: tab6SubTab1Type,
        Fields: tab6SubTab1Fields,
      },
      [tab6SubTab2]: {
        subTabType: tab6SubTab2Type,
        Fields: tab6SubTab2Fields,
      },
      [tab6SubTab3]: {
        subTabType: tab6SubTab3Type,
        Fields: tab6SubTab3Fields,
      },
      [tab6SubTab4]: {
        subTabType: tab6SubTab4Type,
        Fields: tab6SubTab4Fields,
      },
      [tab6SubTab5]: {
        subTabType: tab6SubTab5Type,
        Fields: tab6SubTab5Fields,
      },
      [tab6SubTab6]: {
        subTabType: tab6SubTab6Type,
        Fields: tab6SubTab6Fields,
      },
      [tab6SubTab7]: {
        subTabType: tab6SubTab7Type,
        Fields: tab6SubTab7Fields,
      },
      [tab6SubTab8]: {
        subTabType: tab6SubTab8Type,
        Fields: tab6SubTab8Fields,
      },
      [tab6SubTab9]: {
        subTabType: tab6SubTab9Type,
        Fields: tab6SubTab9Fields,
      },
      [tab6SubTab10]: {
        subTabType: tab6SubTab10Type,
        Fields: tab6SubTab10Fields,
      },
    },
    [tab7]: {
      [tab7SubTab1]: {
        subTabType: tab7SubTab1Type,
        Fields: tab7SubTab1Fields,
      },
      [tab7SubTab2]: {
        subTabType: tab7SubTab2Type,
        Fields: tab7SubTab2Fields,
      },
      [tab7SubTab3]: {
        subTabType: tab7SubTab3Type,
        Fields: tab7SubTab3Fields,
      },
      [tab7SubTab4]: {
        subTabType: tab7SubTab4Type,
        Fields: tab7SubTab4Fields,
      },
      [tab7SubTab5]: {
        subTabType: tab7SubTab5Type,
        Fields: tab7SubTab5Fields,
      },
      [tab7SubTab6]: {
        subTabType: tab7SubTab6Type,
        Fields: tab7SubTab6Fields,
      },
      [tab7SubTab7]: {
        subTabType: tab7SubTab7Type,
        Fields: tab7SubTab7Fields,
      },
      [tab7SubTab8]: {
        subTabType: tab7SubTab8Type,
        Fields: tab7SubTab8Fields,
      },
      [tab7SubTab9]: {
        subTabType: tab7SubTab9Type,
        Fields: tab7SubTab9Fields,
      },
      [tab7SubTab10]: {
        subTabType: tab7SubTab10Type,
        Fields: tab7SubTab10Fields,
      },
    },
    [tab8]: {
      [tab8SubTab1]: {
        subTabType: tab8SubTab1Type,
        Fields: tab8SubTab1Fields,
      },
      [tab8SubTab2]: {
        subTabType: tab8SubTab2Type,
        Fields: tab8SubTab2Fields,
      },
      [tab8SubTab3]: {
        subTabType: tab8SubTab3Type,
        Fields: tab8SubTab3Fields,
      },
      [tab8SubTab4]: {
        subTabType: tab8SubTab4Type,
        Fields: tab8SubTab4Fields,
      },
      [tab8SubTab5]: {
        subTabType: tab8SubTab5Type,
        Fields: tab8SubTab5Fields,
      },
      [tab8SubTab6]: {
        subTabType: tab8SubTab6Type,
        Fields: tab8SubTab6Fields,
      },
      [tab8SubTab7]: {
        subTabType: tab8SubTab7Type,
        Fields: tab8SubTab7Fields,
      },
      [tab8SubTab8]: {
        subTabType: tab8SubTab8Type,
        Fields: tab8SubTab8Fields,
      },
      [tab8SubTab9]: {
        subTabType: tab8SubTab9Type,
        Fields: tab8SubTab9Fields,
      },
      [tab8SubTab10]: {
        subTabType: tab8SubTab10Type,
        Fields: tab8SubTab10Fields,
      },
    },
    [tab9]: {
      [tab9SubTab1]: {
        subTabType: tab9SubTab1Type,
        Fields: tab9SubTab1Fields,
      },
      [tab9SubTab2]: {
        subTabType: tab9SubTab2Type,
        Fields: tab9SubTab2Fields,
      },
      [tab9SubTab3]: {
        subTabType: tab9SubTab3Type,
        Fields: tab9SubTab3Fields,
      },
      [tab9SubTab4]: {
        subTabType: tab9SubTab4Type,
        Fields: tab9SubTab4Fields,
      },
      [tab9SubTab5]: {
        subTabType: tab9SubTab5Type,
        Fields: tab9SubTab5Fields,
      },
      [tab9SubTab6]: {
        subTabType: tab9SubTab6Type,
        Fields: tab9SubTab6Fields,
      },
      [tab9SubTab7]: {
        subTabType: tab9SubTab7Type,
        Fields: tab9SubTab7Fields,
      },
      [tab9SubTab8]: {
        subTabType: tab9SubTab8Type,
        Fields: tab9SubTab8Fields,
      },
      [tab9SubTab9]: {
        subTabType: tab9SubTab9Type,
        Fields: tab9SubTab9Fields,
      },
      [tab9SubTab10]: {
        subTabType: tab9SubTab10Type,
        Fields: tab9SubTab10Fields,
      },
    },
    [tab10]: {
      [tab10SubTab1]: {
        subTabType: tab10SubTab1Type,
        Fields: tab10SubTab1Fields,
      },
      [tab10SubTab2]: {
        subTabType: tab10SubTab2Type,
        Fields: tab10SubTab2Fields,
      },
      [tab10SubTab3]: {
        subTabType: tab10SubTab3Type,
        Fields: tab10SubTab3Fields,
      },
      [tab10SubTab4]: {
        subTabType: tab10SubTab4Type,
        Fields: tab10SubTab4Fields,
      },
      [tab10SubTab5]: {
        subTabType: tab10SubTab5Type,
        Fields: tab10SubTab5Fields,
      },
      [tab10SubTab6]: {
        subTabType: tab10SubTab6Type,
        Fields: tab10SubTab6Fields,
      },
      [tab10SubTab7]: {
        subTabType: tab10SubTab7Type,
        Fields: tab10SubTab7Fields,
      },
      [tab10SubTab8]: {
        subTabType: tab10SubTab8Type,
        Fields: tab10SubTab8Fields,
      },
      [tab10SubTab9]: {
        subTabType: tab10SubTab9Type,
        Fields: tab10SubTab9Fields,
      },
      [tab10SubTab10]: {
        subTabType: tab10SubTab10Type,
        Fields: tab10SubTab10Fields,
      },
    },
  }

  // MUI Modal Code - START
  const [openTab, setOpenTab] = useState(false);
  const handleOpenTab = () => setOpenTab(true);
  const handleCloseTab = () => {
    setOpenTab(false);
    setSubTabArray([]);
  };
  const [openSubTab, setOpenSubTab] = useState(false);
  const handleOpenSubTab = () => setOpenSubTab(true);
  const handleCloseSubTab = () => {
    setOpenSubTab(false);
    setSubTabArray([]);
  };
  const [openFieldSelection, setOpenFieldSelection] = useState(false);
  const handleOpenFieldSelection = () => setOpenFieldSelection(true);
  const handleCloseFieldSelection = () => {
    setOpenFieldSelection(false);
  };
  const [openAddField, setOpenAddField] = useState(false);
  const handleOpenAddField = () => setOpenAddField(true);
  const handleCloseAddField = () => setOpenAddField(false);

  const [openAddChart, setOpenAddChart] = useState(false);
  const handleOpenAddChart = () => setOpenAddChart(true);
  const handleCloseAddChart = () => setOpenAddChart(false);

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

  // MUI Radio Group Code - START
  let [value, setValue] = useState();

  const handleChange = (event) => {
    if (id == `${tab1.replace(/\s/g, "")}-${tab1SubTab1.replace(/\s/g, "")}`) {
      setTab1SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab2.replace(/\s/g, "")}`
    ) {
      setTab1SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab3.replace(/\s/g, "")}`
    ) {
      setTab1SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab4.replace(/\s/g, "")}`
    ) {
      setTab1SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab5.replace(/\s/g, "")}`
    ) {
      setTab1SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab1.replace(/\s/g, "")}`
    ) {
      setTab2SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab2.replace(/\s/g, "")}`
    ) {
      setTab2SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab3.replace(/\s/g, "")}`
    ) {
      setTab2SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab4.replace(/\s/g, "")}`
    ) {
      setTab2SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab5.replace(/\s/g, "")}`
    ) {
      setTab2SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab1.replace(/\s/g, "")}`
    ) {
      setTab3SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab2.replace(/\s/g, "")}`
    ) {
      setTab3SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab3.replace(/\s/g, "")}`
    ) {
      setTab3SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab4.replace(/\s/g, "")}`
    ) {
      setTab3SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab5.replace(/\s/g, "")}`
    ) {
      setTab3SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab1.replace(/\s/g, "")}`
    ) {
      setTab4SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab2.replace(/\s/g, "")}`
    ) {
      setTab4SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab3.replace(/\s/g, "")}`
    ) {
      setTab4SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab4.replace(/\s/g, "")}`
    ) {
      setTab4SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab5.replace(/\s/g, "")}`
    ) {
      setTab4SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab1.replace(/\s/g, "")}`
    ) {
      setTab5SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab2.replace(/\s/g, "")}`
    ) {
      setTab5SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab3.replace(/\s/g, "")}`
    ) {
      setTab5SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab4.replace(/\s/g, "")}`
    ) {
      setTab5SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab5.replace(/\s/g, "")}`
    ) {
      setTab5SubTab5Type(event.target.value);
      setValue(event.target.value);
    }
  };
  // MUI Radio Group Code - END

  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  

    // Disable toggle code - START
  const [disabledStates, setDisabledStates] = useState(
    Object.keys(dataStruct).reduce((acc, key) => {
      if (key !== "_id" && key !== "templateId") {
        acc[key] = false; // Assuming all TextFields are enabled initially
      }
      return acc;
    }, {})
  );

  const handleSwitchChange = (key) => () => {
    setDisabledStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key], // Toggle the disabled state for the TextField
    }));
  };

  useEffect(() => {
    setDisabledStates(Object.keys(dataStruct).reduce((acc, key) => {
      if (key !== "_id" && key !== "templateId") {
        acc[key] = false; // Assuming all TextFields are enabled initially
      }
      return acc;
    }, {}))
  }, [tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9, tab10])
  // Disable toggle code - End

  async function handlePostUIData(data) {
    let path = window.location.pathname;
    let pathArr = path.split("/");
    let id = pathArr[3];
    let token = localStorage.getItem("access_token");
    try {
      let response = await axios.post(
        `${serverUrl}/postProductDetailsUI/${id}`,
        data
      );
      
      if (response.status == 200) {
        alert("UI Configuration Successful")
        router.push("/configurator");
      }
    } catch (error) {
      alert(error, "Please try again later");
    }
  }

  function RenderInputFields(field) {
    return (
      <div key={field}>
        <p>{field}</p>
        <TextField />
      </div>
    );
  }
  function RenderChartFields(field) {
    return (
      <div key={field.xAxis}>
        <p>Chart Type: {field.chartType}</p>
        <p>X-Axis: {field.xAxis}</p>
        <p>Y-Axis: {field.yAxis}</p>
      </div>
    );
  }
  function RenderOtherFields(field) {
    return (
      <div key={field}>
        <p>Sub Tab Type: {field}</p>
      </div>
    );
  }

  function MapFields(id) {
    if (id == `${tab1.replace(/\s/g, "")}-${tab1SubTab1.replace(/\s/g, "")}`) {
      if (tab1SubTab1Type == "inputFields") {
        return tab1SubTab1Fields.map((field) => RenderInputFields(field));
      } else if (tab1SubTab1Type == "chart") {
        return tab1SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab1SubTab1Type == "document" ||
        tab1SubTab1Type == "tracability" ||
        tab1SubTab1Type == "chainOfCustody"
      ) {
        return tab1SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab2Type == "inputFields") {
        return tab1SubTab2Fields.map((field) => RenderInputFields(field));
      } else if (tab1SubTab2Type == "chart") {
        return tab1SubTab2Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab3Type == "inputFields") {
        return tab1SubTab3Fields.map((field) => RenderInputFields(field));
      } else if (tab1SubTab3Type == "chart") {
        return tab1SubTab3Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab3Type == "inputFields") {
        return tab1SubTab4Fields.map((field) => RenderInputFields(field));
      } else if (tab1SubTab4Type == "chart") {
        return tab1SubTab4Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab5Type == "inputFields") {
        return tab1SubTab5Fields.map((field) => RenderInputFields(field));
      } else if (tab1SubTab3Type == "chart") {
        return tab1SubTab5Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab1Type == "inputFields") {
        return tab2SubTab1Fields.map((field) => RenderInputFields(field));
      } else if (tab2SubTab1Type == "chart") {
        return tab1SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab2SubTab1Type == "document" ||
        tab2SubTab1Type == "tracability" ||
        tab2SubTab1Type == "chainOfCustody"
      ) {
        return tab2SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab2Type == "inputFields") {
        return tab2SubTab2Fields.map((field) => RenderInputFields(field));
      } else if (tab2SubTab2Type == "chart") {
        return tab2SubTab2Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab3Type == "inputFields") {
        return tab2SubTab3Fields.map((field) => RenderInputFields(field));
      } else if (tab2SubTab3Type == "chart") {
        return tab2SubTab3Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab3Type == "inputFields") {
        return tab2SubTab4Fields.map((field) => RenderInputFields(field));
      } else if (tab2SubTab4Type == "chart") {
        return tab2SubTab4Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab5Type == "inputFields") {
        return tab2SubTab5Fields.map((field) => RenderInputFields(field));
      } else if (tab1SubTab3Type == "chart") {
        return tab2SubTab5Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab1Type == "inputFields") {
        return tab3SubTab1Fields.map((field) => RenderInputFields(field));
      } else if (tab3SubTab1Type == "chart") {
        return tab3SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab3SubTab1Type == "document" ||
        tab3SubTab1Type == "tracability" ||
        tab3SubTab1Type == "chainOfCustody"
      ) {
        return tab3SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab2Type == "inputFields") {
        return tab3SubTab2Fields.map((field) => RenderInputFields(field));
      } else if (tab3SubTab2Type == "chart") {
        return tab3SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab3SubTab2Type == "document" ||
        tab3SubTab2Type == "tracability" ||
        tab3SubTab2Type == "chainOfCustody"
      ) {
        return tab3SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab3Type == "inputFields") {
        return tab3SubTab3Fields.map((field) => RenderInputFields(field));
      } else if (tab3SubTab3Type == "chart") {
        return tab3SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab3SubTab3Type == "document" ||
        tab3SubTab3Type == "tracability" ||
        tab3SubTab3Type == "chainOfCustody"
      ) {
        return tab3SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab4Type == "inputFields") {
        return tab3SubTab4Fields.map((field) => RenderInputFields(field));
      } else if (tab3SubTab4Type == "chart") {
        return tab3SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab3SubTab4Type == "document" ||
        tab3SubTab4Type == "tracability" ||
        tab3SubTab4Type == "chainOfCustody"
      ) {
        return tab3SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab5Type == "inputFields") {
        return tab3SubTab5Fields.map((field) => RenderInputFields(field));
      } else if (tab3SubTab5Type == "chart") {
        return tab3SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab3SubTab5Type == "document" ||
        tab3SubTab5Type == "tracability" ||
        tab3SubTab5Type == "chainOfCustody"
      ) {
        return tab3SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab1Type == "inputFields") {
        return tab4SubTab1Fields.map((field) => RenderInputFields(field));
      } else if (tab4SubTab1Type == "chart") {
        return tab4SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab4SubTab1Type == "document" ||
        tab4SubTab1Type == "tracability" ||
        tab4SubTab1Type == "chainOfCustody"
      ) {
        return tab4SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab2Type == "inputFields") {
        return tab4SubTab2Fields.map((field) => RenderInputFields(field));
      } else if (tab4SubTab2Type == "chart") {
        return tab4SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab4SubTab2Type == "document" ||
        tab4SubTab2Type == "tracability" ||
        tab4SubTab2Type == "chainOfCustody"
      ) {
        return tab4SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab3Type == "inputFields") {
        return tab4SubTab3Fields.map((field) => RenderInputFields(field));
      } else if (tab4SubTab3Type == "chart") {
        return tab4SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab4SubTab3Type == "document" ||
        tab4SubTab3Type == "tracability" ||
        tab4SubTab3Type == "chainOfCustody"
      ) {
        return tab4SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab4Type == "inputFields") {
        return tab4SubTab4Fields.map((field) => RenderInputFields(field));
      } else if (tab4SubTab4Type == "chart") {
        return tab4SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab4SubTab4Type == "document" ||
        tab4SubTab4Type == "tracability" ||
        tab4SubTab4Type == "chainOfCustody"
      ) {
        return tab4SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab5Type == "inputFields") {
        return tab4SubTab5Fields.map((field) => RenderInputFields(field));
      } else if (tab4SubTab5Type == "chart") {
        return tab4SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab4SubTab5Type == "document" ||
        tab4SubTab5Type == "tracability" ||
        tab4SubTab5Type == "chainOfCustody"
      ) {
        return tab4SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab1Type == "inputFields") {
        return tab5SubTab1Fields.map((field) => RenderInputFields(field));
      } else if (tab5SubTab1Type == "chart") {
        return tab5SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab5SubTab1Type == "document" ||
        tab5SubTab1Type == "tracability" ||
        tab5SubTab1Type == "chainOfCustody"
      ) {
        return tab5SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab2Type == "inputFields") {
        return tab5SubTab2Fields.map((field) => RenderInputFields(field));
      } else if (tab5SubTab2Type == "chart") {
        return tab5SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab5SubTab2Type == "document" ||
        tab5SubTab2Type == "tracability" ||
        tab5SubTab2Type == "chainOfCustody"
      ) {
        return tab5SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab3Type == "inputFields") {
        return tab5SubTab3Fields.map((field) => RenderInputFields(field));
      } else if (tab5SubTab3Type == "chart") {
        return tab5SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab5SubTab3Type == "document" ||
        tab5SubTab3Type == "tracability" ||
        tab5SubTab3Type == "chainOfCustody"
      ) {
        return tab5SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab4Type == "inputFields") {
        return tab5SubTab4Fields.map((field) => RenderInputFields(field));
      } else if (tab5SubTab4Type == "chart") {
        return tab5SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab5SubTab4Type == "document" ||
        tab5SubTab4Type == "tracability" ||
        tab5SubTab4Type == "chainOfCustody"
      ) {
        return tab5SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab5Type == "inputFields") {
        return tab5SubTab5Fields.map((field) => RenderInputFields(field));
      } else if (tab5SubTab5Type == "chart") {
        return tab5SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab5SubTab5Type == "document" ||
        tab5SubTab5Type == "tracability" ||
        tab5SubTab5Type == "chainOfCustody"
      ) {
        return tab5SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    }
  }

  function ShowUIElements(dataStruct) {
    return Object.keys(dataStruct).map((key, index) => {
      let tabIndex = index;
      if (key != "_id" && key != "templateId") {
        if (disabledStates[key] == false) {
          return (
            <ObjectPageSection
              aria-label={key}
              key={index}
              style={{
                display: disabledStates[key] == true ? "none" : "block",
              }}
              id={key.replace(/\s/g, "")}
              titleText={key}
            >
              {Object.keys(dataStruct[key]).map((child, index) => {
                let subTabindex = index;
                let id = `${key.replace(/\s/g, "")}-${child.replace(
                  /\s/g,
                  ""
                )}`;
                return (
                  <ObjectPageSubSection
                    key={index}
                    aria-label="Product Conformity"
                    id={id}
                    titleText={child}
                  >
                    <div>
                      {MapFields(id)}
                      <Button
                        onClick={() => {
                          handleOpenFieldSelection();
                          let indices = `${tabIndex}-${subTabindex}`;
                          let ci = indices.replace(/\s/g, "");
                          setCombinedIndex(ci);
                          setId(id);
                          if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab1Fields([]);
                            setTab1SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab2Fields([]);
                            setTab1SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab3Fields([]);
                            setTab1SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab4Fields([]);
                            setTab1SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab5Fields([]);
                            setTab1SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab6Fields([]);
                            setTab1SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab7Fields([]);
                            setTab1SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab8Fields([]);
                            setTab1SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab9Fields([]);
                            setTab1SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab10Fields([]);
                            setTab1SubTab10Type([]);
                          }
                           else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab1Fields([]);
                            setTab2SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab2Fields([]);
                            setTab2SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab3Fields([]);
                            setTab2SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab4Fields([]);
                            setTab2SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab5Fields([]);
                            setTab2SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab6Fields([]);
                            setTab2SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab7Fields([]);
                            setTab2SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab8Fields([]);
                            setTab2SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab9Fields([]);
                            setTab2SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab10Fields([]);
                            setTab2SubTab10Type([]);
                          } 

                          else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab1Fields([]);
                            setTab3SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab2Fields([]);
                            setTab3SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab3Fields([]);
                            setTab3SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab4Fields([]);
                            setTab3SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab5Fields([]);
                            setTab3SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab6Fields([]);
                            setTab3SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab7Fields([]);
                            setTab3SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab8Fields([]);
                            setTab3SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab9Fields([]);
                            setTab3SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab10Fields([]);
                            setTab3SubTab10Type([]);
                          } 
                          
                          else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab1Fields([]);
                            setTab4SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab2Fields([]);
                            setTab4SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab3Fields([]);
                            setTab4SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab4Fields([]);
                            setTab4SubTab4Type();
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab5Fields([]);
                            setTab4SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab6Fields([]);
                            setTab4SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab7Fields([]);
                            setTab4SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab8Fields([]);
                            setTab4SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab9Fields([]);
                            setTab4SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab10Fields([]);
                            setTab4SubTab10Type([]);
                          } 
                          
                          else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab1Fields([]);
                            setTab5SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab2Fields([]);
                            setTab5SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab3Fields([]);
                            setTab5SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab4Fields([]);
                            setTab5SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab5Fields([]);
                            setTab5SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab6Fields([]);
                            setTab5SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab7Fields([]);
                            setTab5SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab8Fields([]);
                            setTab5SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab9Fields([]);
                            setTab5SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab10Fields([]);
                            setTab5SubTab10Type([]);
                          }

                          else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab1Fields([]);
                            setTab6SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab2Fields([]);
                            setTab6SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab3Fields([]);
                            setTab6SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab4Fields([]);
                            setTab6SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab5Fields([]);
                            setTab6SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab6Fields([]);
                            setTab6SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab7Fields([]);
                            setTab6SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab8Fields([]);
                            setTab6SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab9Fields([]);
                            setTab6SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab6.replace(/\s/g, "")}-${tab6SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab6SubTab10Fields([]);
                            setTab6SubTab10Type([]);
                          }

                          else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab1Fields([]);
                            setTab7SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab2Fields([]);
                            setTab7SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab3Fields([]);
                            setTab7SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab4Fields([]);
                            setTab7SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab5Fields([]);
                            setTab7SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab6Fields([]);
                            setTab7SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab7Fields([]);
                            setTab7SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab8Fields([]);
                            setTab7SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab9Fields([]);
                            setTab7SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab7.replace(/\s/g, "")}-${tab7SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab7SubTab10Fields([]);
                            setTab7SubTab10Type([]);
                          } 

                          else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab1Fields([]);
                            setTab8SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab2Fields([]);
                            setTab8SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab3Fields([]);
                            setTab8SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab4Fields([]);
                            setTab8SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab5Fields([]);
                            setTab8SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab6Fields([]);
                            setTab8SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab7Fields([]);
                            setTab8SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab8Fields([]);
                            setTab8SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab9Fields([]);
                            setTab8SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab8.replace(/\s/g, "")}-${tab8SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab8SubTab10Fields([]);
                            setTab8SubTab10Type([]);
                          }

                          else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab1Fields([]);
                            setTab9SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab2Fields([]);
                            setTab9SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab3Fields([]);
                            setTab9SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab4Fields([]);
                            setTab9SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab5Fields([]);
                            setTab9SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab6Fields([]);
                            setTab9SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab7Fields([]);
                            setTab9SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab8Fields([]);
                            setTab9SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab9Fields([]);
                            setTab9SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab9.replace(/\s/g, "")}-${tab9SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab9SubTab10Fields([]);
                            setTab9SubTab10Type([]);
                          }

                          else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab1Fields([]);
                            setTab10SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab2Fields([]);
                            setTab10SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab3Fields([]);
                            setTab10SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab4Fields([]);
                            setTab10SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab5Fields([]);
                            setTab10SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab6Fields([]);
                            setTab10SubTab6Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab7Fields([]);
                            setTab10SubTab7Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab8Fields([]);
                            setTab10SubTab8Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab9.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab9Fields([]);
                            setTab10SubTab9Type([]);
                          } else if (
                            id ==
                            `${tab10.replace(/\s/g, "")}-${tab10SubTab10.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab10SubTab10Fields([]);
                            setTab10SubTab10Type([]);
                          }
                        }}
                      >
                        Select Sub Tab Type
                      </Button>
                      <Button
                        onClick={() => {
                          if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab1Fields([]);
                            setTab1SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab2Fields([]);
                            setTab1SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab3Fields([]);
                            setTab1SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab4Fields([]);
                            setTab1SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab5Fields([]);
                            setTab1SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab1Fields([]);
                            setTab2SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab2Fields([]);
                            setTab2SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab3Fields([]);
                            setTab2SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab4Fields([]);
                            setTab2SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab5Fields([]);
                            setTab2SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab1Fields([]);
                            setTab3SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab2Fields([]);
                            setTab3SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab3Fields([]);
                            setTab3SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab4Fields([]);
                            setTab3SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab3.replace(/\s/g, "")}-${tab3SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab3SubTab5Fields([]);
                            setTab3SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab1Fields([]);
                            setTab4SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab2Fields([]);
                            setTab4SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab3Fields([]);
                            setTab4SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab4Fields([]);
                            setTab4SubTab4Type();
                          } else if (
                            id ==
                            `${tab4.replace(/\s/g, "")}-${tab4SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab4SubTab5Fields([]);
                            setTab4SubTab5Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab1.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab1Fields([]);
                            setTab5SubTab1Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab2.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab2Fields([]);
                            setTab5SubTab2Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab3.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab3Fields([]);
                            setTab5SubTab3Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab4.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab4Fields([]);
                            setTab5SubTab4Type([]);
                          } else if (
                            id ==
                            `${tab5.replace(/\s/g, "")}-${tab5SubTab5.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab5SubTab5Fields([]);
                            setTab5SubTab5Type([]);
                          }
                        }}
                      >
                        Reset Tab
                      </Button>
                    </div>
                  </ObjectPageSubSection>
                );
              })}
            </ObjectPageSection>
          );
        }
      }
    });
  }

  function SubTab(child) {
    setSubTabArray((existing) => [...existing, child]);
  }



  async function VerifyToken() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");
    
    if (token && role == "configurator") {
      pageLoading(true)
      try {
        await axios.get(
          `${serverUrl}/routVerification`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        pageLoading(false)
      } catch (error) {
        if (error.response.status !== 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  }

  useEffect(() => {
    VerifyToken();
  }, []);

  {
    /* ----------------------- Main Page Render ----------------------- */
  }
  return (
    <div className="main">
      {loadPage ? <LoadingPage /> : <>
      <form>
        <ObjectPage
          footer={
            <Bar
              endContent={
                <>
                  <BackButton />
                  <Button
                    design="Emphasized"
                    onClick={() => {
                      handleOpenTab();
                    }}
                  >
                    Edit Lables
                  </Button>

                  <Button
                    design="Emphasized"
                    onClick={() => handlePostUIData(dataStruct)}
                  >
                    Submit
                  </Button>
                </>
              }
            />
          }
          headerContent={<NavBar />}
        >
          {/* Destructrues and displays the entire page */}
          {ShowUIElements(dataStruct)}
        </ObjectPage>
      </form>
      </> }
      {/* ----------------------- Tab Lable Change Modal ----------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openTab}
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
            {Object.keys(dataStruct).map((key, index) => {
              let k = key.replace(/\s/g, "");
              if (key != "_id" && key != "templateId") {
                return (
                  <div key={index}>
                    <TextField
                      id={key}
                      variant="outlined"
                      placeholder={key}
                      disabled={disabledStates[key]}
                      onChange={(e) => {
                        if (index == 1) {
                          setTab1(e.target.value);
                        } else if (index == 2) {
                          setTab2(e.target.value);
                        } else if (index == 3) {
                          setTab3(e.target.value);
                        } else if (index == 4) {
                          setTab4(e.target.value);
                        } else if (index == 5) {
                          setTab5(e.target.value);
                        } else if (index == 6) {
                          setTab6(e.target.value);
                        } else if (index == 7) {
                          setTab7(e.target.value);
                        } else if (index == 8) {
                          setTab8(e.target.value);
                        } else if (index == 9) {
                          setTab9(e.target.value);
                        } else if (index == 10) {
                          setTab10(e.target.value);
                        }
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => {
                        {
                          Object.keys(dataStruct[key]).map((child) => {
                            setOpenTab(false);
                            setOpenSubTab(true);
                            SubTab(child);
                            setSelectedTabIndex(index);
                          });
                        }
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </Button>

                    <Switch
                      defaultChecked={!disabledStates[key]}
                      onChange={handleSwitchChange(key)}
                    />
                  </div>
                );
              }
            })}
            <Button onClick={handleCloseTab}>Close</Button>
          </Box>
        </Fade>
      </Modal>

      {/* ----------------------- Sub Tab Lable Change Modal ----------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSubTab}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openSubTab}>
          <Box sx={style}>
            {subTabArray.map((subTab, index) => {
              return (
                <TextField
                  id={subTab}
                  key={index}
                  variant="outlined"
                  placeholder={subTab}
                  // disabled={disabled}
                  onChange={(e) => {
                    if (selectedTabIndex == 1 && index == 0) {
                      setTab1SubTab1(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 1) {
                      setTab1SubTab2(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 2) {
                      setTab1SubTab3(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 3) {
                      setTab1SubTab4(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 4) {
                      setTab1SubTab5(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 5) {
                      setTab1SubTab6(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 6) {
                      setTab1SubTab7(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 7) {
                      setTab1SubTab8(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 8) {
                      setTab1SubTab9(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 9) {
                      setTab1SubTab10(e.target.value);
                    }
                    else if (selectedTabIndex == 2 && index == 0) {
                      setTab2SubTab1(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 1) {
                      setTab2SubTab2(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 2) {
                      setTab2SubTab3(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 3) {
                      setTab2SubTab4(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 4) {
                      setTab2SubTab5(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 5) {
                      setTab2SubTab6(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 6) {
                      setTab2SubTab7(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 7) {
                      setTab2SubTab8(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 8) {
                      setTab2SubTab9(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 9) {
                      setTab2SubTab10(e.target.value);
                    }
                    else if (selectedTabIndex == 3 && index == 0) {
                      setTab3SubTab1(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 1) {
                      setTab3SubTab2(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 2) {
                      setTab3SubTab3(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 3) {
                      setTab3SubTab4(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 4) {
                      setTab3SubTab5(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 5) {
                      setTab3SubTab6(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 6) {
                      setTab3SubTab7(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 7) {
                      setTab3SubTab8(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 8) {
                      setTab3SubTab9(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 9) {
                      setTab3SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 4 && index == 0) {
                      setTab4SubTab1(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 1) {
                      setTab4SubTab2(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 2) {
                      setTab4SubTab3(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 3) {
                      setTab4SubTab4(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 4) {
                      setTab4SubTab5(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 5) {
                      setTab4SubTab6(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 6) {
                      setTab4SubTab7(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 7) {
                      setTab4SubTab8(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 8) {
                      setTab4SubTab9(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 9) {
                      setTab4SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 5 && index == 0) {
                      setTab5SubTab1(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 1) {
                      setTab5SubTab2(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 2) {
                      setTab5SubTab3(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 3) {
                      setTab5SubTab4(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 4) {
                      setTab5SubTab5(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 5) {
                      setTab5SubTab6(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 6) {
                      setTab5SubTab7(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 7) {
                      setTab5SubTab8(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 8) {
                      setTab5SubTab9(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 9) {
                      setTab5SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 6 && index == 0) {
                      setTab6SubTab1(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 1) {
                      setTab6SubTab2(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 2) {
                      setTab6SubTab3(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 3) {
                      setTab6SubTab4(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 4) {
                      setTab6SubTab5(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 5) {
                      setTab6SubTab6(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 6) {
                      setTab6SubTab7(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 7) {
                      setTab6SubTab8(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 8) {
                      setTab6SubTab9(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 9) {
                      setTab6SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 7 && index == 0) {
                      setTab7SubTab1(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 1) {
                      setTab7SubTab2(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 2) {
                      setTab7SubTab3(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 3) {
                      setTab7SubTab4(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 4) {
                      setTab7SubTab5(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 5) {
                      setTab7SubTab6(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 6) {
                      setTab7SubTab7(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 7) {
                      setTab7SubTab8(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 8) {
                      setTab7SubTab9(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 9) {
                      setTab7SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 8 && index == 0) {
                      setTab8SubTab1(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 1) {
                      setTab8SubTab2(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 2) {
                      setTab8SubTab3(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 3) {
                      setTab8SubTab4(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 4) {
                      setTab8SubTab5(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 5) {
                      setTab8SubTab6(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 6) {
                      setTab8SubTab7(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 7) {
                      setTab8SubTab8(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 8) {
                      setTab8SubTab9(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 9) {
                      setTab8SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 9 && index == 0) {
                      setTab9SubTab1(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 1) {
                      setTab9SubTab2(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 2) {
                      setTab9SubTab3(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 3) {
                      setTab9SubTab4(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 4) {
                      setTab9SubTab5(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 5) {
                      setTab9SubTab6(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 6) {
                      setTab9SubTab7(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 7) {
                      setTab9SubTab8(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 8) {
                      setTab9SubTab9(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 9) {
                      setTab9SubTab10(e.target.value);
                    } 
                    else if (selectedTabIndex == 10 && index == 0) {
                      setTab10SubTab1(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 1) {
                      setTab10SubTab2(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 2) {
                      setTab10SubTab3(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 3) {
                      setTab10SubTab4(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 4) {
                      setTab10SubTab5(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 5) {
                      setTab10SubTab6(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 6) {
                      setTab10SubTab7(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 7) {
                      setTab10SubTab8(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 8) {
                      setTab10SubTab9(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 9) {
                      setTab10SubTab10(e.target.value);
                    } 
                  }}
                />
              );
            })}
            <Button
              onClick={() => {
                setOpenSubTab(false);
                setOpenTab(true);
                setSubTabArray([]);
              }}
            >
              back
            </Button>
            <Button onClick={handleCloseSubTab}>Close</Button>
          </Box>
        </Fade>
      </Modal>

      {/* ----------------------- Add Fields Modal ----------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openFieldSelection}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openFieldSelection}>
          <Box sx={style}>
            <div>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Select SubTab Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="inputFields"
                    control={<Radio />}
                    label="Input Fields"
                  />
                  <FormControlLabel
                    value="chart"
                    control={<Radio />}
                    label="Chart"
                  />
                  <FormControlLabel
                    value="document"
                    control={<Radio />}
                    label="Document"
                  />
                  <FormControlLabel
                    value="tracability"
                    control={<Radio />}
                    label="Tracability"
                  />
                  <FormControlLabel
                    value="chainOfCustody"
                    control={<Radio />}
                    label="Chain Of Custody"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <Button
              onClick={() => {
                if (value == "inputFields") {
                  handleCloseFieldSelection();
                  handleOpenAddField();
                } else if (value == "chart") {
                  handleCloseFieldSelection();
                  handleOpenAddChart();
                } else if (
                  value == "document" ||
                  value == "tracability" ||
                  value == "chainOfCustody"
                ) {
                  if (combinedIndex == "1-0") {
                    setTab1SubTab1Fields(() => [value]);
                  } else if (combinedIndex == "1-1") {
                    setTab1SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "1-2") {
                    setTab1SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "1-3") {
                    setTab1SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "1-4") {
                    setTab1SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "2-0") {
                    setTab2SubTab1Fields(() => [value]);
                  } else if (combinedIndex == "2-1") {
                    setTab2SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "2-2") {
                    setTab2SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "2-3") {
                    setTab2SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "2-4") {
                    setTab2SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "3-0") {
                    setTab3SubTab1Fields(() => [value]);
                  } else if (combinedIndex == "3-1") {
                    setTab3SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "3-2") {
                    setTab3SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "3-3") {
                    setTab3SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "3-4") {
                    setTab3SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "4-0") {
                    setTab4SubTab1Fields(() => [value]);
                  } else if (combinedIndex == "4-1") {
                    setTab4SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "4-2") {
                    setTab4SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "4-3") {
                    setTab4SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "4-4") {
                    setTab4SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "5-0") {
                    setTab5SubTab1Fields(() => [value]);
                  } else if (combinedIndex == "5-1") {
                    setTab5SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "5-2") {
                    setTab5SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "5-3") {
                    setTab5SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "5-4") {
                    setTab5SubTab5Fields(() => [value]);
                  }

                  handleCloseFieldSelection();
                }
              }}
            >
              Select
            </Button>
            <Button onClick={handleCloseFieldSelection}>Close</Button>
          </Box>
        </Fade>
      </Modal>

      {/* ----------------------- Add Input Field Modal ----------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAddField}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openAddField}>
          <Box sx={style}>
            <>
              <Typography>Enter Field Name</Typography>
              <TextField
                className="modalInputField"
                size="small"
                onChange={(e) => setFieldName(e.target.value)}
              />
              <div className="modalButtonsDiv">
                <Button
                  onClick={() => {
                    if (combinedIndex == "1-0") {
                      setTab1SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-1") {
                      setTab1SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-2") {
                      setTab1SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-3") {
                      setTab1SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-4") {
                      setTab1SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-5") {
                      setTab1SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-6") {
                      setTab1SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-7") {
                      setTab1SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-8") {
                      setTab1SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "1-9") {
                      setTab1SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 
                    
                    else if (combinedIndex == "2-0") {
                      setTab2SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-1") {
                      setTab2SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-2") {
                      setTab2SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-3") {
                      setTab2SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-4") {
                      setTab2SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-5") {
                      setTab2SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-6") {
                      setTab2SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-7") {
                      setTab2SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-8") {
                      setTab2SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "2-9") {
                      setTab2SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 
                    
                    else if (combinedIndex == "3-0") {
                      setTab3SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-1") {
                      setTab3SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-2") {
                      setTab3SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-3") {
                      setTab3SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-4") {
                      setTab3SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-5") {
                      setTab3SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-6") {
                      setTab3SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-7") {
                      setTab3SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-8") {
                      setTab3SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "3-9") {
                      setTab3SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    }
                    
                    else if (combinedIndex == "4-0") {
                      setTab4SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-1") {
                      setTab4SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-2") {
                      setTab4SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-3") {
                      setTab4SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-4") {
                      setTab4SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-5") {
                      setTab4SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-6") {
                      setTab4SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-7") {
                      setTab4SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-8") {
                      setTab4SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "4-9") {
                      setTab4SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 
                    
                    else if (combinedIndex == "5-0") {
                      setTab5SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-1") {
                      setTab5SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-2") {
                      setTab5SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-3") {
                      setTab5SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-4") {
                      setTab5SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-5") {
                      setTab5SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-6") {
                      setTab5SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-7") {
                      setTab5SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-8") {
                      setTab5SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-9") {
                      setTab5SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    }

                      else if (combinedIndex == "5-0") {
                      setTab5SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-1") {
                      setTab5SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-2") {
                      setTab5SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-3") {
                      setTab5SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-4") {
                      setTab5SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-5") {
                      setTab5SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-6") {
                      setTab5SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-7") {
                      setTab5SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-8") {
                      setTab5SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "5-9") {
                      setTab5SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 

                    else if (combinedIndex == "6-0") {
                      setTab6SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-1") {
                      setTab6SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-2") {
                      setTab6SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-3") {
                      setTab6SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-4") {
                      setTab6SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-5") {
                      setTab6SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-6") {
                      setTab6SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-7") {
                      setTab6SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-8") {
                      setTab6SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "6-9") {
                      setTab6SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 

                    else if (combinedIndex == "7-0") {
                      setTab7SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-1") {
                      setTab7SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-2") {
                      setTab7SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-3") {
                      setTab7SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-4") {
                      setTab7SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-5") {
                      setTab7SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-6") {
                      setTab7SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-7") {
                      setTab7SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-8") {
                      setTab7SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "7-9") {
                      setTab7SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 

                    else if (combinedIndex == "8-0") {
                      setTab8SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-1") {
                      setTab8SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-2") {
                      setTab8SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-3") {
                      setTab8SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-4") {
                      setTab8SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-5") {
                      setTab8SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-6") {
                      setTab8SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-7") {
                      setTab8SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-8") {
                      setTab8SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "8-9") {
                      setTab8SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 

                    else if (combinedIndex == "9-0") {
                      setTab9SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-1") {
                      setTab9SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-2") {
                      setTab9SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-3") {
                      setTab9SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-4") {
                      setTab9SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-5") {
                      setTab9SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-6") {
                      setTab9SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-7") {
                      setTab9SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-8") {
                      setTab9SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "9-9") {
                      setTab9SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 

                    else if (combinedIndex == "10-0") {
                      setTab10SubTab1Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-1") {
                      setTab10SubTab2Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-2") {
                      setTab10SubTab3Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-3") {
                      setTab10SubTab4Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-4") {
                      setTab10SubTab5Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-5") {
                      setTab10SubTab6Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-6") {
                      setTab10SubTab7Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-7") {
                      setTab10SubTab8Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-8") {
                      setTab10SubTab9Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } else if (combinedIndex == "10-9") {
                      setTab10SubTab10Fields((existingFields) => [
                        ...existingFields,
                        fieldName,
                      ]);
                    } 
                  }}
                >
                  Add Field
                </Button>
                <Button onClick={handleCloseAddField}>Close</Button>
              </div>
            </>
          </Box>
        </Fade>
      </Modal>

      {/* ----------------------- Add Chart Field Modal ----------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAddChart}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openAddChart}>
          <Box sx={style}>
            <div>
              <Typography>Chart Type</Typography>
              <TextField
                id="outlined-select-currency"
                select
                // defaultValue="Select"
                helperText="Please select Chart Type"
                onChange={(e) => setChartType(e.target.value)}
              >
                {charts.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Typography>Enter X-Axis</Typography>
              <TextField
                className="modalInputField"
                onChange={(e) => setXAxis(e.target.value)}
              />
              <Typography>Enter Y-Axis</Typography>
              <TextField
                className="modalInputField"
                onChange={(e) => setYAxis(e.target.value)}
              />

              <div className="modalButtonsDiv">
                <Button
                  onClick={() => {
                    let chartLable = {
                      chartType: chartType,
                      xAxis: xAxis,
                      yAxis: yAxis,
                    };

                    if (combinedIndex == "1-0") {
                      setTab1SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-1") {
                      setTab1SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-2") {
                      setTab1SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-3") {
                      setTab1SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-4") {
                      setTab1SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-5") {
                      setTab1SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-6") {
                      setTab1SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-7") {
                      setTab1SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-8") {
                      setTab1SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "1-9") {
                      setTab1SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 
                    
                    else if (combinedIndex == "2-0") {
                      setTab2SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-1") {
                      setTab2SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-2") {
                      setTab2SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-3") {
                      setTab2SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-4") {
                      setTab2SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-5") {
                      setTab2SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-6") {
                      setTab2SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-7") {
                      setTab2SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-8") {
                      setTab2SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "2-9") {
                      setTab2SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 
                    
                    else if (combinedIndex == "3-0") {
                      setTab3SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-1") {
                      setTab3SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-2") {
                      setTab3SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-3") {
                      setTab3SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-4") {
                      setTab3SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-5") {
                      setTab3SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-6") {
                      setTab3SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-7") {
                      setTab3SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-8") {
                      setTab3SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "3-9") {
                      setTab3SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    }
                    
                    else if (combinedIndex == "4-0") {
                      setTab4SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-1") {
                      setTab4SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-2") {
                      setTab4SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-3") {
                      setTab4SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-4") {
                      setTab4SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-5") {
                      setTab4SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-6") {
                      setTab4SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-7") {
                      setTab4SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-8") {
                      setTab4SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "4-9") {
                      setTab4SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 
                    
                    else if (combinedIndex == "5-0") {
                      setTab5SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-1") {
                      setTab5SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-2") {
                      setTab5SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-3") {
                      setTab5SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-4") {
                      setTab5SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-5") {
                      setTab5SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-6") {
                      setTab5SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-7") {
                      setTab5SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-8") {
                      setTab5SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-9") {
                      setTab5SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    }

                      else if (combinedIndex == "5-0") {
                      setTab5SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-1") {
                      setTab5SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-2") {
                      setTab5SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-3") {
                      setTab5SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-4") {
                      setTab5SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-5") {
                      setTab5SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-6") {
                      setTab5SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-7") {
                      setTab5SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-8") {
                      setTab5SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "5-9") {
                      setTab5SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 

                    else if (combinedIndex == "6-0") {
                      setTab6SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-1") {
                      setTab6SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-2") {
                      setTab6SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-3") {
                      setTab6SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-4") {
                      setTab6SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-5") {
                      setTab6SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-6") {
                      setTab6SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-7") {
                      setTab6SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-8") {
                      setTab6SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "6-9") {
                      setTab6SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 

                    else if (combinedIndex == "7-0") {
                      setTab7SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-1") {
                      setTab7SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-2") {
                      setTab7SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-3") {
                      setTab7SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-4") {
                      setTab7SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-5") {
                      setTab7SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-6") {
                      setTab7SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-7") {
                      setTab7SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-8") {
                      setTab7SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "7-9") {
                      setTab7SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 

                    else if (combinedIndex == "8-0") {
                      setTab8SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-1") {
                      setTab8SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-2") {
                      setTab8SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-3") {
                      setTab8SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-4") {
                      setTab8SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-5") {
                      setTab8SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-6") {
                      setTab8SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-7") {
                      setTab8SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-8") {
                      setTab8SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "8-9") {
                      setTab8SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 

                    else if (combinedIndex == "9-0") {
                      setTab9SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-1") {
                      setTab9SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-2") {
                      setTab9SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-3") {
                      setTab9SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-4") {
                      setTab9SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-5") {
                      setTab9SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-6") {
                      setTab9SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-7") {
                      setTab9SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-8") {
                      setTab9SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "9-9") {
                      setTab9SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 

                    else if (combinedIndex == "10-0") {
                      setTab10SubTab1Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-1") {
                      setTab10SubTab2Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-2") {
                      setTab10SubTab3Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-3") {
                      setTab10SubTab4Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-4") {
                      setTab10SubTab5Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-5") {
                      setTab10SubTab6Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-6") {
                      setTab10SubTab7Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-7") {
                      setTab10SubTab8Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-8") {
                      setTab10SubTab9Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } else if (combinedIndex == "10-9") {
                      setTab10SubTab10Fields((existingFields) => [
                        ...existingFields,
                        chartLable,
                      ]);
                    } 
                  }}
                >
                  Add Field
                </Button>
                <Button onClick={handleCloseAddChart}>Close</Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
