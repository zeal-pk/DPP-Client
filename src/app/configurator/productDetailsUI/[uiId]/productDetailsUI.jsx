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
import Alert from "@mui/material/Alert";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button as MUIButton } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import Stack from '@mui/material/Stack';
import Sheet from "@mui/joy/Sheet";
import List from "@mui/joy/List";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  Bar,
  Button,
} from "@ui5/webcomponents-react";
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
  let [alert, setAlert] = useState(false);
  let [alertMessage, setAlertMessage] = useState();
  let [alertSeverity, setAlertSeverity] = useState();

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

  let [ttab1, setTtab1] = useState("Tab 1");
  let [ttab2, setTtab2] = useState("Tab 2");
  let [ttab3, setTtab3] = useState("Tab 3");
  let [ttab4, setTtab4] = useState("Tab 4");
  let [ttab5, setTtab5] = useState("Tab 5");
  let [ttab6, setTtab6] = useState("Tab 6");
  let [ttab7, setTtab7] = useState("Tab 7");
  let [ttab8, setTtab8] = useState("Tab 8");
  let [ttab9, setTtab9] = useState("Tab 9");
  let [ttab10, setTtab10] = useState("Tab 10");

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

  let [tab1SubTtab1, setTab1SubTtab1] = useState("Sub Tab 1-1");
  let [tab1SubTtab2, setTab1SubTtab2] = useState("Sub Tab 1-2");
  let [tab1SubTtab3, setTab1SubTtab3] = useState("Sub Tab 1-3");
  let [tab1SubTtab4, setTab1SubTtab4] = useState("Sub Tab 1-4");
  let [tab1SubTtab5, setTab1SubTtab5] = useState("Sub Tab 1-5");
  let [tab1SubTtab6, setTab1SubTtab6] = useState("Sub Tab 1-6");
  let [tab1SubTtab7, setTab1SubTtab7] = useState("Sub Tab 1-7");
  let [tab1SubTtab8, setTab1SubTtab8] = useState("Sub Tab 1-8");
  let [tab1SubTtab9, setTab1SubTtab9] = useState("Sub Tab 1-9");
  let [tab1SubTtab10, setTab1SubTtab10] = useState("Sub Tab 1-10");

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

  let [tab2SubTtab1, setTab2SubTtab1] = useState("Sub Tab 2-1");
  let [tab2SubTtab2, setTab2SubTtab2] = useState("Sub Tab 2-2");
  let [tab2SubTtab3, setTab2SubTtab3] = useState("Sub Tab 2-3");
  let [tab2SubTtab4, setTab2SubTtab4] = useState("Sub Tab 2-4");
  let [tab2SubTtab5, setTab2SubTtab5] = useState("Sub Tab 2-5");
  let [tab2SubTtab6, setTab2SubTtab6] = useState("Sub Tab 2-6");
  let [tab2SubTtab7, setTab2SubTtab7] = useState("Sub Tab 2-7");
  let [tab2SubTtab8, setTab2SubTtab8] = useState("Sub Tab 2-8");
  let [tab2SubTtab9, setTab2SubTtab9] = useState("Sub Tab 2-9");
  let [tab2SubTtab10, setTab2SubTtab10] = useState("Sub Tab 2-10");

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

  let [tab3SubTtab1, setTab3SubTtab1] = useState("Sub Tab 3-1");
  let [tab3SubTtab2, setTab3SubTtab2] = useState("Sub Tab 3-2");
  let [tab3SubTtab3, setTab3SubTtab3] = useState("Sub Tab 3-3");
  let [tab3SubTtab4, setTab3SubTtab4] = useState("Sub Tab 3-4");
  let [tab3SubTtab5, setTab3SubTtab5] = useState("Sub Tab 3-5");
  let [tab3SubTtab6, setTab3SubTtab6] = useState("Sub Tab 3-6");
  let [tab3SubTtab7, setTab3SubTtab7] = useState("Sub Tab 3-7");
  let [tab3SubTtab8, setTab3SubTtab8] = useState("Sub Tab 3-8");
  let [tab3SubTtab9, setTab3SubTtab9] = useState("Sub Tab 3-9");
  let [tab3SubTtab10, setTab3SubTtab10] = useState("Sub Tab 3-10");

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

  let [tab4SubTtab1, setTab4SubTtab1] = useState("Sub Tab 4-1");
  let [tab4SubTtab2, setTab4SubTtab2] = useState("Sub Tab 4-2");
  let [tab4SubTtab3, setTab4SubTtab3] = useState("Sub Tab 4-3");
  let [tab4SubTtab4, setTab4SubTtab4] = useState("Sub Tab 4-4");
  let [tab4SubTtab5, setTab4SubTtab5] = useState("Sub Tab 4-5");
  let [tab4SubTtab6, setTab4SubTtab6] = useState("Sub Tab 4-6");
  let [tab4SubTtab7, setTab4SubTtab7] = useState("Sub Tab 4-7");
  let [tab4SubTtab8, setTab4SubTtab8] = useState("Sub Tab 4-8");
  let [tab4SubTtab9, setTab4SubTtab9] = useState("Sub Tab 4-9");
  let [tab4SubTtab10, setTab4SubTtab10] = useState("Sub Tab 4-10");

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

  let [tab5SubTtab1, setTab5SubTtab1] = useState("Sub Tab 5-1");
  let [tab5SubTtab2, setTab5SubTtab2] = useState("Sub Tab 5-2");
  let [tab5SubTtab3, setTab5SubTtab3] = useState("Sub Tab 5-3");
  let [tab5SubTtab4, setTab5SubTtab4] = useState("Sub Tab 5-4");
  let [tab5SubTtab5, setTab5SubTtab5] = useState("Sub Tab 5-5");
  let [tab5SubTtab6, setTab5SubTtab6] = useState("Sub Tab 5-6");
  let [tab5SubTtab7, setTab5SubTtab7] = useState("Sub Tab 5-7");
  let [tab5SubTtab8, setTab5SubTtab8] = useState("Sub Tab 5-8");
  let [tab5SubTtab9, setTab5SubTtab9] = useState("Sub Tab 5-9");
  let [tab5SubTtab10, setTab5SubTtab10] = useState("Sub Tab 5-10");

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

  let [tab6SubTtab1, setTab6SubTtab1] = useState("Sub Tab 6-1");
  let [tab6SubTtab2, setTab6SubTtab2] = useState("Sub Tab 6-2");
  let [tab6SubTtab3, setTab6SubTtab3] = useState("Sub Tab 6-3");
  let [tab6SubTtab4, setTab6SubTtab4] = useState("Sub Tab 6-4");
  let [tab6SubTtab5, setTab6SubTtab5] = useState("Sub Tab 6-5");
  let [tab6SubTtab6, setTab6SubTtab6] = useState("Sub Tab 6-6");
  let [tab6SubTtab7, setTab6SubTtab7] = useState("Sub Tab 6-7");
  let [tab6SubTtab8, setTab6SubTtab8] = useState("Sub Tab 6-8");
  let [tab6SubTtab9, setTab6SubTtab9] = useState("Sub Tab 6-9");
  let [tab6SubTtab10, setTab6SubTtab10] = useState("Sub Tab 6-10");

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

  let [tab7SubTtab1, setTab7SubTtab1] = useState("Sub Tab 7-1");
  let [tab7SubTtab2, setTab7SubTtab2] = useState("Sub Tab 7-2");
  let [tab7SubTtab3, setTab7SubTtab3] = useState("Sub Tab 7-3");
  let [tab7SubTtab4, setTab7SubTtab4] = useState("Sub Tab 7-4");
  let [tab7SubTtab5, setTab7SubTtab5] = useState("Sub Tab 7-5");
  let [tab7SubTtab6, setTab7SubTtab6] = useState("Sub Tab 7-6");
  let [tab7SubTtab7, setTab7SubTtab7] = useState("Sub Tab 7-7");
  let [tab7SubTtab8, setTab7SubTtab8] = useState("Sub Tab 7-8");
  let [tab7SubTtab9, setTab7SubTtab9] = useState("Sub Tab 7-9");
  let [tab7SubTtab10, setTab7SubTtab10] = useState("Sub Tab 7-10");

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

  let [tab8SubTtab1, setTab8SubTtab1] = useState("Sub Tab 8-1");
  let [tab8SubTtab2, setTab8SubTtab2] = useState("Sub Tab 8-2");
  let [tab8SubTtab3, setTab8SubTtab3] = useState("Sub Tab 8-3");
  let [tab8SubTtab4, setTab8SubTtab4] = useState("Sub Tab 8-4");
  let [tab8SubTtab5, setTab8SubTtab5] = useState("Sub Tab 8-5");
  let [tab8SubTtab6, setTab8SubTtab6] = useState("Sub Tab 8-6");
  let [tab8SubTtab7, setTab8SubTtab7] = useState("Sub Tab 8-7");
  let [tab8SubTtab8, setTab8SubTtab8] = useState("Sub Tab 8-8");
  let [tab8SubTtab9, setTab8SubTtab9] = useState("Sub Tab 8-9");
  let [tab8SubTtab10, setTab8SubTtab10] = useState("Sub Tab 8-10");

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

  let [tab9SubTtab1, setTab9SubTtab1] = useState("Sub Tab 9-1");
  let [tab9SubTtab2, setTab9SubTtab2] = useState("Sub Tab 9-2");
  let [tab9SubTtab3, setTab9SubTtab3] = useState("Sub Tab 9-3");
  let [tab9SubTtab4, setTab9SubTtab4] = useState("Sub Tab 9-4");
  let [tab9SubTtab5, setTab9SubTtab5] = useState("Sub Tab 9-5");
  let [tab9SubTtab6, setTab9SubTtab6] = useState("Sub Tab 9-6");
  let [tab9SubTtab7, setTab9SubTtab7] = useState("Sub Tab 9-7");
  let [tab9SubTtab8, setTab9SubTtab8] = useState("Sub Tab 9-8");
  let [tab9SubTtab9, setTab9SubTtab9] = useState("Sub Tab 9-9");
  let [tab9SubTtab10, setTab9SubTtab10] = useState("Sub Tab 9-10");

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

  let [tab10SubTtab1, setTab10SubTtab1] = useState("Sub Tab 10-1");
  let [tab10SubTtab2, setTab10SubTtab2] = useState("Sub Tab 10-2");
  let [tab10SubTtab3, setTab10SubTtab3] = useState("Sub Tab 10-3");
  let [tab10SubTtab4, setTab10SubTtab4] = useState("Sub Tab 10-4");
  let [tab10SubTtab5, setTab10SubTtab5] = useState("Sub Tab 10-5");
  let [tab10SubTtab6, setTab10SubTtab6] = useState("Sub Tab 10-6");
  let [tab10SubTtab7, setTab10SubTtab7] = useState("Sub Tab 10-7");
  let [tab10SubTtab8, setTab10SubTtab8] = useState("Sub Tab 10-8");
  let [tab10SubTtab9, setTab10SubTtab9] = useState("Sub Tab 10-9");
  let [tab10SubTtab10, setTab10SubTtab10] = useState("Sub Tab 10-10");

  let [tab1SubTab1Fields, setTab1SubTab1Fields] = useState([
    "test",
    "hello",
    "world",
  ]);
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

  let fields = [
    "Field 1",
    "Field 2",
    "Field 3",
    "Field 4",
    "Field 5",
    "Field 6",
    "Field 7",
    "Field 8",
    "Field 9",
    "Field 10",
    "Field 11",
    "Field 12",
    "Field 13",
    "Field 14",
    "Field 15",
    "Field 16",
    "Field 17",
    "Field 18",
    "Field 19",
    "Field 20",
  ];

  function errAlert(errData) {
    let message = errData.message;
    let severity = errData.severity;
    setAlert(true);
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  function pageLoading(val) {
    setLoadPage(val);
  }

  function saveTabs() {
    let tabArray = [
      ttab1,
      ttab2,
      ttab3,
      ttab4,
      ttab5,
      ttab6,
      ttab7,
      ttab8,
      ttab9,
      ttab10,
    ];
    const duplicatesTabs = tabArray.filter(
      (item, index) => tabArray.indexOf(item) !== index
    );

    if (!duplicatesTabs[0]) {
      console.log("No Duplicates");
      setTab1(ttab1);
      setTab2(ttab2);
      setTab3(ttab3);
      setTab4(ttab4);
      setTab5(ttab5);
      setTab6(ttab6);
      setTab7(ttab7);
      setTab8(ttab8);
      setTab9(ttab9);
      setTab10(ttab10);
    } else {
      let errData = {
        message: "Tab names must be unique",
        severity: "error",
      };
      errAlert(errData);
    }
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
  };

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
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: 400,
    transform: "translate(-50%, -50%)",
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
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab6.replace(/\s/g, "")}`
    ) {
      setTab1SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab7.replace(/\s/g, "")}`
    ) {
      setTab1SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab8.replace(/\s/g, "")}`
    ) {
      setTab1SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab9.replace(/\s/g, "")}`
    ) {
      setTab1SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab10.replace(/\s/g, "")}`
    ) {
      setTab1SubTab10Type(event.target.value);
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
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab6.replace(/\s/g, "")}`
    ) {
      setTab2SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab7.replace(/\s/g, "")}`
    ) {
      setTab2SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab8.replace(/\s/g, "")}`
    ) {
      setTab2SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab9.replace(/\s/g, "")}`
    ) {
      setTab2SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab10.replace(/\s/g, "")}`
    ) {
      setTab2SubTab10Type(event.target.value);
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
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab6.replace(/\s/g, "")}`
    ) {
      setTab3SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab7.replace(/\s/g, "")}`
    ) {
      setTab3SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab8.replace(/\s/g, "")}`
    ) {
      setTab3SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab9.replace(/\s/g, "")}`
    ) {
      setTab3SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab10.replace(/\s/g, "")}`
    ) {
      setTab3SubTab10Type(event.target.value);
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
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab6.replace(/\s/g, "")}`
    ) {
      setTab4SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab7.replace(/\s/g, "")}`
    ) {
      setTab4SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab8.replace(/\s/g, "")}`
    ) {
      setTab4SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab9.replace(/\s/g, "")}`
    ) {
      setTab4SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab10.replace(/\s/g, "")}`
    ) {
      setTab4SubTab10Type(event.target.value);
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
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab6.replace(/\s/g, "")}`
    ) {
      setTab5SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab7.replace(/\s/g, "")}`
    ) {
      setTab5SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab8.replace(/\s/g, "")}`
    ) {
      setTab5SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab9.replace(/\s/g, "")}`
    ) {
      setTab5SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab10.replace(/\s/g, "")}`
    ) {
      setTab5SubTab10Type(event.target.value);
      console.log(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab1.replace(/\s/g, "")}`
    ) {
      setTab6SubTab1Type(event.target.value);
      console.log(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab2.replace(/\s/g, "")}`
    ) {
      setTab6SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab3.replace(/\s/g, "")}`
    ) {
      setTab6SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab4.replace(/\s/g, "")}`
    ) {
      setTab6SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab5.replace(/\s/g, "")}`
    ) {
      setTab6SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab6.replace(/\s/g, "")}`
    ) {
      setTab6SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab7.replace(/\s/g, "")}`
    ) {
      setTab6SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab8.replace(/\s/g, "")}`
    ) {
      setTab6SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab9.replace(/\s/g, "")}`
    ) {
      setTab6SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab10.replace(/\s/g, "")}`
    ) {
      setTab6SubTab10Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab1.replace(/\s/g, "")}`
    ) {
      setTab7SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab2.replace(/\s/g, "")}`
    ) {
      setTab7SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab3.replace(/\s/g, "")}`
    ) {
      setTab7SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab4.replace(/\s/g, "")}`
    ) {
      setTab7SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab5.replace(/\s/g, "")}`
    ) {
      setTab7SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab6.replace(/\s/g, "")}`
    ) {
      setTab7SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab7.replace(/\s/g, "")}`
    ) {
      setTab7SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab8.replace(/\s/g, "")}`
    ) {
      setTab7SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab9.replace(/\s/g, "")}`
    ) {
      setTab7SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab10.replace(/\s/g, "")}`
    ) {
      setTab7SubTab10Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab1.replace(/\s/g, "")}`
    ) {
      setTab8SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab2.replace(/\s/g, "")}`
    ) {
      setTab8SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab3.replace(/\s/g, "")}`
    ) {
      setTab8SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab4.replace(/\s/g, "")}`
    ) {
      setTab8SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab5.replace(/\s/g, "")}`
    ) {
      setTab8SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab6.replace(/\s/g, "")}`
    ) {
      setTab8SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab7.replace(/\s/g, "")}`
    ) {
      setTab8SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab8.replace(/\s/g, "")}`
    ) {
      setTab8SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab9.replace(/\s/g, "")}`
    ) {
      setTab8SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab10.replace(/\s/g, "")}`
    ) {
      setTab8SubTab10Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab1.replace(/\s/g, "")}`
    ) {
      setTab9SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab2.replace(/\s/g, "")}`
    ) {
      setTab9SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab3.replace(/\s/g, "")}`
    ) {
      setTab9SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab4.replace(/\s/g, "")}`
    ) {
      setTab9SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab5.replace(/\s/g, "")}`
    ) {
      setTab9SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab6.replace(/\s/g, "")}`
    ) {
      setTab9SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab7.replace(/\s/g, "")}`
    ) {
      setTab9SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab8.replace(/\s/g, "")}`
    ) {
      setTab9SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab9.replace(/\s/g, "")}`
    ) {
      setTab9SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab10.replace(/\s/g, "")}`
    ) {
      setTab9SubTab10Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab1.replace(/\s/g, "")}`
    ) {
      setTab10SubTab1Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab2.replace(/\s/g, "")}`
    ) {
      setTab10SubTab2Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab3.replace(/\s/g, "")}`
    ) {
      setTab10SubTab3Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab4.replace(/\s/g, "")}`
    ) {
      setTab10SubTab4Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab5.replace(/\s/g, "")}`
    ) {
      setTab10SubTab5Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab6.replace(/\s/g, "")}`
    ) {
      setTab10SubTab6Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab7.replace(/\s/g, "")}`
    ) {
      setTab10SubTab7Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab8.replace(/\s/g, "")}`
    ) {
      setTab10SubTab8Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab9.replace(/\s/g, "")}`
    ) {
      setTab10SubTab9Type(event.target.value);
      setValue(event.target.value);
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab10.replace(/\s/g, "")}`
    ) {
      setTab10SubTab10Type(event.target.value);
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
        alert("UI Configuration Successful");
        router.push("/configurator");
      }
    } catch (error) {
      let errData = {
        message: `${error}, Please try again later`,
        severity: "error",
      };
      errAlert(errData);
    }
  }

  function RenderChartFields(field) {
    return (
      <div key={field.xAxis}>
        <p>Sub Tab Type: <b>Chart View</b></p>
        <p>Chart Type: <b>{field.chartType}</b></p>
        <p>X-Axis: <b>{field.xAxis}</b></p>
        <p>Y-Axis: <b>{field.yAxis}</b></p>
      </div>
    );
  }
  function RenderOtherFields(field) {
    return (
      <div key={field}>
        <p>Sub Tab Type: <b>{field}</b></p>
      </div>
    );
  }

  function MapFields(id) {
    if (id == `${tab1.replace(/\s/g, "")}-${tab1SubTab1.replace(/\s/g, "")}`) {
      if (tab1SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  console.log(tab1SubTab1Fields);
                  let x = tab1SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  console.log(tab1SubTab1Fields);
                  let x = tab1SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  console.log(tab1SubTab1Fields);
                  let x = tab1SubTab2Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab2Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  console.log(tab1SubTab1Fields);
                  let x = tab1SubTab2Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab2Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab2Type == "chart") {
        return tab1SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab1SubTab2Type == "document" ||
        tab1SubTab2Type == "tracability" ||
        tab1SubTab2Type == "chainOfCustody"
      ) {
        return tab1SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab3Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab3Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab3Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab3Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}

              
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab3Type == "chart") {
        return tab1SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab1SubTab3Type == "document" ||
        tab1SubTab3Type == "tracability" ||
        tab1SubTab3Type == "chainOfCustody"
      ) {
        return tab1SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
            <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>

              {fields.map((item, index) => (
                <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab4Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab4Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab4Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab4Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab4Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab4Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab4Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab4Type == "chart") {
        return tab1SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab1SubTab4Type == "document" ||
        tab1SubTab4Type == "tracability" ||
        tab1SubTab4Type == "chainOfCustody"
      ) {
        return tab1SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab5Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab5Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab5Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab5Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
              
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab3Type == "chart") {
        return tab1SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab1SubTab5Type == "document" ||
        tab1SubTab5Type == "tracability" ||
        tab1SubTab5Type == "chainOfCustody"
      ) {
        return tab1SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab1SubTab6Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab1SubTab6Fields];
                  newFieldValues[index] = e.target.value;
                  setTab1SubTab6Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab1SubTab6Type == "chart") {
        return tab1SubTab6Fields.map((field) => RenderChartFields(field));
      } else if (
        tab1SubTab6Type == "document" ||
        tab1SubTab6Type == "tracability" ||
        tab1SubTab6Type == "chainOfCustody"
      ) {
        return tab1SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab1SubTab7Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab1SubTab7Fields];
                  newFieldValues[index] = e.target.value;
                  setTab1SubTab7Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}

            
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab1SubTab7Type == "chart") {
        return tab1SubTab7Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab1SubTab8Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab1SubTab8Fields];
                  newFieldValues[index] = e.target.value;
                  setTab1SubTab8Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}

            
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab1SubTab8Type == "chart") {
        return tab1SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}

              
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab9Type == "chart") {
        return tab1SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab1.replace(/\s/g, "")}-${tab1SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab1SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab1SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab1SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab1SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab1SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab1SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}

              
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab10Type == "chart") {
        return tab1SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab1SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab1SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab2Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab2Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab2Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab2Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab2SubTab2Type == "chart") {
        return tab2SubTab2Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab3Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab3Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab3Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab3Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab2SubTab3Type == "chart") {
        return tab2SubTab3Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab4Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab4Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab4Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab4Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab4Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab4Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab4Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab2SubTab4Type == "chart") {
        return tab2SubTab4Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab5Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab5Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab5Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab5Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab1SubTab3Type == "chart") {
        return tab2SubTab5Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab2SubTab6Type == "chart") {
        return tab2SubTab6Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab2SubTab7Type == "chart") {
        return tab2SubTab7Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab2SubTab8Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab2SubTab8Fields];
                  newFieldValues[index] = e.target.value;
                  setTab2SubTab8Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab2SubTab8Type == "chart") {
        return tab2SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab2SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab2SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab2SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab2SubTab9Type == "chart") {
        return tab2SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab2.replace(/\s/g, "")}-${tab2SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab2SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab2SubTab10Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab2SubTab10Fields];
                  newFieldValues[index] = e.target.value;
                  setTab2SubTab10Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab2SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab2SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab2SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab2SubTab10Type == "chart") {
        return tab2SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab2SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab1Type == "inputFields") {
        return (
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab3SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab3SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab3SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab3SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab3SubTab2Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab3SubTab2Fields];
                  newFieldValues[index] = e.target.value;
                  setTab3SubTab2Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab2Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab2Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab2Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab2Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab3Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab3Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab3Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab3Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab4Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab4Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab4Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab4Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab4Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab4Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab4Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab5Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab5Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab5Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab5Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab6Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab6Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab6Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab6Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab3SubTab6Type == "chart") {
        return tab3SubTab6Fields.map((field) => RenderChartFields(field));
      } else {
        return tab3SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab7Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab7Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab7Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab7Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab3SubTab7Type == "chart") {
        return tab3SubTab7Fields.map((field) => RenderChartFields(field));
      } else {
        return tab3SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab8Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab8Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab8Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab8Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab3SubTab8Type == "chart") {
        return tab3SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab3SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab3SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab3SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab3SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab9Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab9Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab9Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab9Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab3SubTab9Type == "chart") {
        return tab3SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab3SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab3.replace(/\s/g, "")}-${tab3SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab3SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab3SubTab10Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab3SubTab10Fields];
                  newFieldValues[index] = e.target.value;
                  setTab3SubTab10Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab10Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab3SubTab10Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab3SubTab10Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab3SubTab10Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab3SubTab10Type == "chart") {
        return tab3SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab3SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab4SubTab1Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab4SubTab1Fields];
                  newFieldValues[index] = e.target.value;
                  setTab4SubTab1Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab1Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab1Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab1Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab1Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab2Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab2Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab2Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab2Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab3Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab3Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab3Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab3Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab4SubTab4Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab4SubTab4Fields];
                  newFieldValues[index] = e.target.value;
                  setTab4SubTab4Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab4Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab4Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab4Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab4Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab5Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab5Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab5Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab5Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab6Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab6Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab6Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab6Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab4SubTab6Type == "chart") {
        return tab4SubTab6Fields.map((field) => RenderChartFields(field));
      } else {
        return tab4SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab7Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab7Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab7Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab7Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab4SubTab7Type == "chart") {
        return tab4SubTab7Fields.map((field) => RenderChartFields(field));
      } else {
        return tab4SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab8Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab8Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab8Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab8Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab4SubTab8Type == "chart") {
        return tab4SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab4SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab9Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab9Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab9Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab9Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab4SubTab9Type == "chart") {
        return tab4SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab4SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab4.replace(/\s/g, "")}-${tab4SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab4SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab4SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab4SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab4SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab10Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab4SubTab10Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab4SubTab10Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab4SubTab10Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab4SubTab10Type == "chart") {
        return tab4SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab4SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab5SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab5SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab5SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab1Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab1Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab1Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab1Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab5SubTab2Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab5SubTab2Fields];
                  newFieldValues[index] = e.target.value;
                  setTab5SubTab2Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab2Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab2Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab2Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab2Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab5SubTab3Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab5SubTab3Fields];
                  newFieldValues[index] = e.target.value;
                  setTab5SubTab3Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab3Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab3Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab3Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab3Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab5SubTab4Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab5SubTab4Fields];
                  newFieldValues[index] = e.target.value;
                  setTab5SubTab4Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab4Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab4Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab4Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab4Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
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
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab5SubTab5Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab5SubTab5Fields];
                  newFieldValues[index] = e.target.value;
                  setTab5SubTab5Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab5Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab5Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab5Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab5Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab5SubTab5Type == "chart") {
        return tab5SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab5SubTab5Type == "document" ||
        tab5SubTab5Type == "tracability" ||
        tab5SubTab5Type == "chainOfCustody"
      ) {
        return tab5SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab6Type == "inputFields") {
        return (
          <div style={{ height: 300, width: "100%", marginBottom: "10px" }}>
          <p>Sub Tab Type: <b>Data Input</b></p>
           <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab5SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab5SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab5SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab6Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab6Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab6Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab6Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </div>
        );
      } else if (tab5SubTab6Type == "chart") {
        return tab5SubTab6Fields.map((field) => RenderChartFields(field));
      } else {
        return tab5SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab7Type == "inputFields") {
        return (
          <div style={{ height: 300, width: "100%", marginBottom: "10px" }}>
          <p>Sub Tab Type: <b>Data Input</b></p>
            <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab5SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab5SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab5SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab7Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab7Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab7Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab7Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </div>
        );
      } else if (tab5SubTab7Type == "chart") {
        return tab5SubTab7Fields.map((field) => RenderChartFields(field));
      } else {
        return tab5SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab8Type == "inputFields") {
        return (
          <div style={{ height: 300, width: "100%", marginBottom: "10px" }}>
          <p>Sub Tab Type: <b>Data Input</b></p>
            <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab5SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab5SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab5SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab8Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab8Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab8Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab8Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </div>
        );
      } else if (tab5SubTab8Type == "chart") {
        return tab5SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab5SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab9Type == "inputFields") {
        return (
          <div style={{ height: 300, width: "100%", marginBottom: "10px" }}>

          <p>Sub Tab Type: <b>Data Input</b></p>
            <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab5SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab5SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab5SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab9Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab9Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab9Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab9Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </div>
        );
      } else if (tab5SubTab9Type == "chart") {
        return tab5SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab5SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab5.replace(/\s/g, "")}-${tab5SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab5SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab5SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab5SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab5SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab10Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab5SubTab10Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab5SubTab10Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab5SubTab10Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab5SubTab10Type == "chart") {
        return tab5SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab5SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab1Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab6SubTab1Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab1Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab6SubTab1Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab1Type == "chart") {
        return tab6SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab1Type == "document" ||
        tab6SubTab1Type == "tracability" ||
        tab6SubTab1Type == "chainOfCustody"
      ) {
        return tab6SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab2Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab2Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab6SubTab2Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab2Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab6SubTab2Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab2Type == "chart") {
        return tab6SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab2Type == "document" ||
        tab6SubTab2Type == "tracability" ||
        tab6SubTab2Type == "chainOfCustody"
      ) {
        return tab6SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab3Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab6SubTab3Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab3Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab6SubTab3Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab3Type == "chart") {
        return tab6SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab3Type == "document" ||
        tab6SubTab3Type == "tracability" ||
        tab6SubTab3Type == "chainOfCustody"
      ) {
        return tab6SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab6SubTab4Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab6SubTab4Fields];
                  newFieldValues[index] = e.target.value;
                  setTab6SubTab4Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab4Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab6SubTab4Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab4Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab6SubTab4Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab6SubTab4Type == "chart") {
        return tab6SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab4Type == "document" ||
        tab6SubTab4Type == "tracability" ||
        tab6SubTab4Type == "chainOfCustody"
      ) {
        return tab6SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab5Fields.splice(index, 1)
                let inc = parseInt(index) + 1
                let toMove = x.toString()
                tab6SubTab5Fields.splice(inc, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowDownwardIcon /></MUIButton>
              <MUIButton color="inherit" onClick={() => {
                let x = tab6SubTab5Fields.splice(index, 1)
                let dec = parseInt(index) - 1
                let toMove = x.toString()
                tab6SubTab5Fields.splice(dec, 0, toMove)
                handlePostUIData(dataStruct)
              }}><ArrowUpwardIcon /></MUIButton>
              </Stack>
              </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab5Type == "chart") {
        return tab6SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab5Type == "document" ||
        tab6SubTab5Type == "tracability" ||
        tab6SubTab5Type == "chainOfCustody"
      ) {
        return tab6SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div  style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab6SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab6SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab6Type == "chart") {
        return tab6SubTab6Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab5Type == "document" ||
        tab6SubTab5Type == "tracability" ||
        tab6SubTab5Type == "chainOfCustody"
      ) {
        return tab6SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab6SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab6SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab7Type == "chart") {
        return tab6SubTab7Fields.map((field) => RenderChartFields(field));
      } else if (
        tab6SubTab5Type == "document" ||
        tab6SubTab5Type == "tracability" ||
        tab6SubTab5Type == "chainOfCustody"
      ) {
        return tab6SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab6SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab6SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab8Type == "chart") {
        return tab6SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab6SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab6SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab6SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab9Type == "chart") {
        return tab6SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab6SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab6.replace(/\s/g, "")}-${tab6SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab6SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab6SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab6SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab6SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab6SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab6SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab6SubTab10Type == "chart") {
        return tab6SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab6SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab1Type == "chart") {
        return tab7SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab1Type == "document" ||
        tab7SubTab1Type == "tracability" ||
        tab7SubTab1Type == "chainOfCustody"
      ) {
        return tab7SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab2Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab7SubTab2Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab7SubTab2Fields];
                  newFieldValues[index] = e.target.value;
                  setTab7SubTab2Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab2Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab2Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab2Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab2Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab7SubTab2Type == "chart") {
        return tab7SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab2Type == "document" ||
        tab7SubTab2Type == "tracability" ||
        tab7SubTab2Type == "chainOfCustody"
      ) {
        return tab7SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab3Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab3Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab3Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab3Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab3Type == "chart") {
        return tab7SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab3Type == "document" ||
        tab7SubTab3Type == "tracability" ||
        tab7SubTab3Type == "chainOfCustody"
      ) {
        return tab7SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab4Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab4Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab4Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab4Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab4Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab4Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab4Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
                
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab4Type == "chart") {
        return tab7SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab4Type == "document" ||
        tab7SubTab4Type == "tracability" ||
        tab7SubTab4Type == "chainOfCustody"
      ) {
        return tab7SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab5Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab5Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab5Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab5Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab5Type == "chart") {
        return tab7SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab5Type == "document" ||
        tab7SubTab5Type == "tracability" ||
        tab7SubTab5Type == "chainOfCustody"
      ) {
        return tab7SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab6Type == "chart") {
        return tab7SubTab6Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab5Type == "document" ||
        tab7SubTab5Type == "tracability" ||
        tab7SubTab5Type == "chainOfCustody"
      ) {
        return tab7SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab7Type == "chart") {
        return tab7SubTab7Fields.map((field) => RenderChartFields(field));
      } else if (
        tab7SubTab5Type == "document" ||
        tab7SubTab5Type == "tracability" ||
        tab7SubTab5Type == "chainOfCustody"
      ) {
        return tab7SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab8Type == "chart") {
        return tab7SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab7SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab7SubTab9Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab7SubTab9Fields];
                  newFieldValues[index] = e.target.value;
                  setTab7SubTab9Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab7SubTab9Type == "chart") {
        return tab7SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab7SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab7.replace(/\s/g, "")}-${tab7SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab7SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab7SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab7SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab7SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab7SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab7SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab7SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab7SubTab10Type == "chart") {
        return tab7SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab7SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab1Type == "chart") {
        return tab8SubTab1Fields.map((field) => RenderChartFields(field));
      } else {
        return tab8SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab2Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab2Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab2Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab2Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab2Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab2Type == "chart") {
        return tab8SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab8SubTab2Type == "document" ||
        tab8SubTab2Type == "tracability" ||
        tab8SubTab2Type == "chainOfCustody"
      ) {
        return tab8SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab3Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab3Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab3Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab3Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab3Type == "chart") {
        return tab8SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab8SubTab3Type == "document" ||
        tab8SubTab3Type == "tracability" ||
        tab8SubTab3Type == "chainOfCustody"
      ) {
        return tab8SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab8SubTab4Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab8SubTab4Fields];
                  newFieldValues[index] = e.target.value;
                  setTab8SubTab4Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab4Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab4Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab4Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab4Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab8SubTab4Type == "chart") {
        return tab8SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab8SubTab4Type == "document" ||
        tab8SubTab4Type == "tracability" ||
        tab8SubTab4Type == "chainOfCustody"
      ) {
        return tab8SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab5Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab5Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab5Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab5Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab5Type == "chart") {
        return tab8SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab8SubTab5Type == "document" ||
        tab8SubTab5Type == "tracability" ||
        tab8SubTab5Type == "chainOfCustody"
      ) {
        return tab8SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab6Type == "inputFields") {
        return (
          <div style={{ height: 300, width: "100%", marginBottom: "10px" }}>
          <p>Sub Tab Type: <b>Data Input</b></p>
            <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </div>
        );
      } else if (tab8SubTab6Type == "chart") {
        return tab8SubTab6Fields.map((field) => RenderChartFields(field));
      } else if (
        tab8SubTab5Type == "document" ||
        tab8SubTab5Type == "tracability" ||
        tab8SubTab5Type == "chainOfCustody"
      ) {
        return tab8SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab7Type == "chart") {
        return tab8SubTab7Fields.map((field) => RenderChartFields(field));
      } else if (
        tab8SubTab5Type == "document" ||
        tab8SubTab5Type == "tracability" ||
        tab8SubTab5Type == "chainOfCustody"
      ) {
        return tab8SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab8Type == "chart") {
        return tab8SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab8SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab9Type == "chart") {
        return tab8SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab8SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab8.replace(/\s/g, "")}-${tab8SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab8SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab8SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab8SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab8SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab8SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab8SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab8SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab8SubTab10Type == "chart") {
        return tab8SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab8SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab1Type == "chart") {
        return tab9SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab1Type == "document" ||
        tab9SubTab1Type == "tracability" ||
        tab9SubTab1Type == "chainOfCustody"
      ) {
        return tab9SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab2Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab2Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab2Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab2Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab2Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab2Type == "chart") {
        return tab9SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab2Type == "document" ||
        tab9SubTab2Type == "tracability" ||
        tab9SubTab2Type == "chainOfCustody"
      ) {
        return tab9SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab3Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab3Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab3Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab3Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab3Type == "chart") {
        return tab9SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab3Type == "document" ||
        tab9SubTab3Type == "tracability" ||
        tab9SubTab3Type == "chainOfCustody"
      ) {
        return tab9SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
          variant="outlined"
          sx={{
            width: "auto",
            maxHeight: 300,
            overflow: "auto",
            borderRadius: "sm",
          }}
        >
          <List>
            {fields.map((item, index) => (
               <div style={{display: "flex"}}>
              <TextField
                key={index}
                id={index}
                size="small"
                placeholder={item}
                value={tab9SubTab4Fields[index]}
                onChange={(e) => {
                  const newFieldValues = [...tab9SubTab4Fields];
                  newFieldValues[index] = e.target.value;
                  setTab9SubTab4Fields(newFieldValues);
                }}
              />
              <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab4Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab4Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab4Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab4Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
            ))}
          </List>
          {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
              Save
            </Button> */}
        </Sheet>
        </>
        );
      } else if (tab9SubTab4Type == "chart") {
        return tab9SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab4Type == "document" ||
        tab9SubTab4Type == "tracability" ||
        tab9SubTab4Type == "chainOfCustody"
      ) {
        return tab9SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab5Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab5Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab5Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab5Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab5Type == "chart") {
        return tab9SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab5Type == "document" ||
        tab9SubTab5Type == "tracability" ||
        tab9SubTab5Type == "chainOfCustody"
      ) {
        return tab9SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab6Type == "chart") {
        return tab9SubTab6Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab5Type == "document" ||
        tab9SubTab5Type == "tracability" ||
        tab9SubTab5Type == "chainOfCustody"
      ) {
        return tab9SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab7Type == "chart") {
        return tab9SubTab7Fields.map((field) => RenderChartFields(field));
      } else if (
        tab9SubTab5Type == "document" ||
        tab9SubTab5Type == "tracability" ||
        tab9SubTab5Type == "chainOfCustody"
      ) {
        return tab9SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab8Type == "chart") {
        return tab9SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab9SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab9Type == "chart") {
        return tab9SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab9SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab9.replace(/\s/g, "")}-${tab9SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab9SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
           <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab9SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab9SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab9SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab9SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab9SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab9SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab9SubTab10Type == "chart") {
        return tab9SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab9SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab1.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab1Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab1Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab1Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab1Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab1Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab1Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab1Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab1Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab1Type == "chart") {
        return tab10SubTab1Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab1Type == "document" ||
        tab10SubTab1Type == "tracability" ||
        tab10SubTab1Type == "chainOfCustody"
      ) {
        return tab10SubTab1Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab2.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab2Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab2Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab2Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab2Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab2Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab2Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab2Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab2Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab2Type == "chart") {
        return tab10SubTab2Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab2Type == "document" ||
        tab10SubTab2Type == "tracability" ||
        tab10SubTab2Type == "chainOfCustody"
      ) {
        return tab10SubTab2Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab3.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab3Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab3Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab3Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab3Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab3Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab3Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab3Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab3Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab3Type == "chart") {
        return tab10SubTab3Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab3Type == "document" ||
        tab10SubTab3Type == "tracability" ||
        tab10SubTab3Type == "chainOfCustody"
      ) {
        return tab10SubTab3Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab4.replace(/\s/g, "")}`
    ) {
      if (tab6SubTab4Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab4Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab4Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab4Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab4Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab4Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab4Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab4Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab4Type == "chart") {
        return tab10SubTab4Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab4Type == "document" ||
        tab10SubTab4Type == "tracability" ||
        tab10SubTab4Type == "chainOfCustody"
      ) {
        return tab10SubTab4Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab5.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab5Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab5Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab5Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab5Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab5Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab5Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab5Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab5Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab5Type == "chart") {
        return tab10SubTab5Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab5Type == "document" ||
        tab10SubTab5Type == "tracability" ||
        tab10SubTab5Type == "chainOfCustody"
      ) {
        return tab10SubTab5Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab6.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab6Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab6Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab6Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab6Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab6Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab6Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab6Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab6Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab6Type == "chart") {
        return tab10SubTab6Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab5Type == "document" ||
        tab10SubTab5Type == "tracability" ||
        tab10SubTab5Type == "chainOfCustody"
      ) {
        return tab10SubTab6Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab7.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab7Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab7Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab7Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab7Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab7Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab7Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab7Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab7Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab7Type == "chart") {
        return tab10SubTab7Fields.map((field) => RenderChartFields(field));
      } else if (
        tab10SubTab5Type == "document" ||
        tab10SubTab5Type == "tracability" ||
        tab10SubTab5Type == "chainOfCustody"
      ) {
        return tab10SubTab7Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab8.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab8Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab8Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab8Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab8Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab8Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab8Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab8Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab8Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab8Type == "chart") {
        return tab10SubTab8Fields.map((field) => RenderChartFields(field));
      } else {
        return tab10SubTab8Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab9.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab9Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: 300,
              overflow: "auto",
              borderRadius: "sm",
            }}
          >
            <List>
              {fields.map((item, index) => (
                 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab9Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab9Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab9Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab9Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab9Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab9Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab9Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>
              ))}
            </List>
            {/* <Button onClick={() => console.log(tab1SubTab1Fields)}>
                Save
              </Button> */}
          </Sheet>
          </>
        );
      } else if (tab10SubTab9Type == "chart") {
        return tab10SubTab9Fields.map((field) => RenderChartFields(field));
      } else {
        return tab10SubTab9Fields.map((field) => RenderOtherFields(field));
      }
    } else if (
      id == `${tab10.replace(/\s/g, "")}-${tab10SubTab10.replace(/\s/g, "")}`
    ) {
      if (tab10SubTab10Type == "inputFields") {
        return (
          <>
          <p>Sub Tab Type: <b>Data Input</b></p>
          <Sheet
             variant="outlined"
             sx={{
               width: "auto",
               maxHeight: 300,
               overflow: "auto",
               borderRadius: "sm",
             }}
           >
            <List>
              <div>
              {fields.map((item, index) => (
 <div style={{display: "flex"}}>
                <TextField
                  key={index}
                  id={index}
                  size="small"
                  placeholder={item}
                  value={tab10SubTab10Fields[index]}
                  onChange={(e) => {
                    const newFieldValues = [...tab10SubTab10Fields];
                    newFieldValues[index] = e.target.value;
                    setTab10SubTab10Fields(newFieldValues);
                  }}
                />
                <Stack direction="row" size="small" spacing={0}>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab10Fields.splice(index, 1)
                  let inc = parseInt(index) + 1
                  let toMove = x.toString()
                  tab10SubTab10Fields.splice(inc, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowDownwardIcon /></MUIButton>
                <MUIButton color="inherit" onClick={() => {
                  let x = tab10SubTab10Fields.splice(index, 1)
                  let dec = parseInt(index) - 1
                  let toMove = x.toString()
                  tab10SubTab10Fields.splice(dec, 0, toMove)
                  handlePostUIData(dataStruct)
                }}><ArrowUpwardIcon /></MUIButton>
                </Stack>
                </div>

              ))}
              </div>
            </List>

          </Sheet>
          </>
        );
      } else if (tab10SubTab10Type == "chart") {
        return tab10SubTab10Fields.map((field) => RenderChartFields(field));
      } else {
        return tab10SubTab10Fields.map((field) => RenderOtherFields(field));
      }
    }
  }

  function ShowUIElements(dataStruct) {
    return Object.keys(dataStruct).map((key, index) => {
      let tabIndex = index;
      if (key != "_id" && key != "templateId") {
        if (disabledStates[key] == false || !disabledStates[key]) {
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
                          } else if (
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
                          } else if (
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
                          } else if (
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
                          } else if (
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
                          } else if (
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
                            `${tab10.replace(
                              /\s/g,
                              ""
                            )}-${tab10SubTab10.replace(/\s/g, "")}`
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
                            setTab1SubTab1Type("");
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
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab6Fields([]);
                            setTab1SubTab6Type([]);
                          } 
                          else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab7.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab7Fields([]);
                            setTab1SubTab7Type([]);
                          } 
                          else if (
                            id ==
                            `${tab1.replace(/\s/g, "")}-${tab1SubTab8.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab1SubTab8Fields([]);
                            setTab1SubTab8Type([]);
                          } 
                          else if (
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
                            `${tab2.replace(/\s/g, "")}-${tab2SubTab6.replace(
                              /\s/g,
                              ""
                            )}`
                          ) {
                            setTab2SubTab6Fields([]);
                            setTab2SubTab6Type([]);
                          } 
                          else if (
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
      pageLoading(true);
      try {
        await axios.get(`${serverUrl}/routVerification`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        pageLoading(false);
      } catch (error) {
        if (error.response.status !== 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
  }

  async function existingUI() {
    let path = window.location.pathname;
    let pathArr = path.split("/");
    let id = pathArr[3];

    try {
      let response = await axios.get(`${serverUrl}/getProductDetailsUI/${id}`);

      let data = response.data;

      if (data) {
        Object.keys(data).map((key, index) => {
          let tabIndex = index;
          if (key != "_id" && key != "templateId") {
            if (index == 2) {
              setTab1(key);
              setTtab1(key);
            } else if (index == 3) {
              setTab2(key);
              setTtab2(key);
            } else if (index == 4) {
              setTab3(key);
              setTtab3(key);
            } else if (index == 5) {
              setTab4(key);
              setTtab4(key);
            } else if (index == 6) {
              setTab5(key);
              setTtab5(key);
            } else if (index == 7) {
              setTab6(key);
              setTtab6(key);
            } else if (index == 8) {
              setTab7(key);
              setTtab7(key);
            } else if (index == 9) {
              setTab8(key);
              setTtab8(key);
            } else if (index == 10) {
              setTab9(key);
              setTtab9(key);
            } else if (index == 11) {
              setTab10(key);
              setTtab10(key);
            }
          }
          if (key != "_id" && key != "templateId") {
            Object.keys(data[key]).map((child, index) => {
              let type = data[key][child].subTabType;
              let fields = data[key][child].Fields;
              let subTabIndex = index;
              let ci = `${tabIndex}-${subTabIndex}`;
              if (ci == "2-0") {
                setTab1SubTab1(child);
                setTab1SubTtab1(child);
                setTab1SubTab1Fields(fields);
                setTab1SubTab1Type(type);
              } else if (ci == "2-1") {
                setTab1SubTab2(child);
                setTab1SubTtab2(child);
                setTab1SubTab2Fields(fields);
                setTab1SubTab2Type(type);
              } else if (ci == "2-2") {
                setTab1SubTab3(child);
                setTab1SubTtab3(child);
                setTab1SubTab3Fields(fields);
                setTab1SubTab3Type(type);
              } else if (ci == "2-3") {
                setTab1SubTab4(child);
                setTab1SubTtab4(child);
                setTab1SubTab4Fields(fields);
                setTab1SubTab4Type(type);
              } else if (ci == "2-4") {
                setTab1SubTab5(child);
                setTab1SubTtab5(child);
                setTab1SubTab5Fields(fields);
                setTab1SubTab5Type(type);
              } else if (ci == "2-5") {
                setTab1SubTab6(child);
                setTab1SubTtab6(child);
                setTab1SubTab6Fields(fields);
                setTab1SubTab6Type(type);
              } else if (ci == "2-6") {
                setTab1SubTab7(child);
                setTab1SubTtab7(child);
                setTab1SubTab7Fields(fields);
                setTab1SubTab7Type(type);
              } else if (ci == "2-7") {
                setTab1SubTab8(child);
                setTab1SubTtab8(child);
                setTab1SubTab8Fields(fields);
                setTab1SubTab8Type(type);
              } else if (ci == "2-8") {
                setTab1SubTab9(child);
                setTab1SubTtab9(child);
                setTab1SubTab9Fields(fields);
                setTab1SubTab9Type(type);
              } else if (ci == "2-9") {
                setTab1SubTab10(child);
                setTab1SubTtab10(child);
                setTab1SubTab10Fields(fields);
                setTab1SubTab10Type(type);
              } else if (ci == "3-0") {
                setTab2SubTab1(child);
                setTab2SubTtab1(child);
                setTab2SubTab1Fields(fields);
                setTab2SubTab1Type(type);
              } else if (ci == "3-1") {
                setTab2SubTab2(child);
                setTab2SubTtab2(child);
                setTab2SubTab2Fields(fields);
                setTab2SubTab2Type(type);
              } else if (ci == "3-2") {
                setTab2SubTab3(child);
                setTab2SubTtab3(child);
                setTab2SubTab3Fields(fields);
                setTab2SubTab3Type(type);
              } else if (ci == "3-3") {
                setTab2SubTab4(child);
                setTab2SubTtab4(child);
                setTab2SubTab4Fields(fields);
                setTab2SubTab4Type(type);
              } else if (ci == "3-4") {
                setTab2SubTab5(child);
                setTab2SubTtab5(child);
                setTab2SubTab5Fields(fields);
                setTab2SubTab5Type(type);
              } else if (ci == "3-5") {
                setTab2SubTab6(child);
                setTab2SubTtab6(child);
                setTab2SubTab6Fields(fields);
                setTab2SubTab6Type(type);
              } else if (ci == "3-6") {
                setTab2SubTab7(child);
                setTab2SubTtab7(child);
                setTab2SubTab7Fields(fields);
                setTab2SubTab7Type(type);
              } else if (ci == "3-7") {
                setTab2SubTab8(child);
                setTab2SubTtab8(child);
                setTab2SubTab8Fields(fields);
                setTab2SubTab8Type(type);
              } else if (ci == "3-8") {
                setTab2SubTab9(child);
                setTab2SubTtab9(child);
                setTab2SubTab9Fields(fields);
                setTab2SubTab9Type(type);
              } else if (ci == "3-9") {
                setTab2SubTab10(child);
                setTab2SubTtab10(child);
                setTab2SubTab10Fields(fields);
                setTab2SubTab10Type(type);
              } else if (ci == "4-0") {
                setTab3SubTab1(child);
                setTab3SubTtab1(child);
                setTab3SubTab1Fields(fields);
                setTab3SubTab1Type(type);
              } else if (ci == "4-1") {
                setTab3SubTab2(child);
                setTab3SubTtab2(child);
                setTab3SubTab2Fields(fields);
                setTab3SubTab2Type(type);
              } else if (ci == "4-2") {
                setTab3SubTab3(child);
                setTab3SubTtab3(child);
                setTab3SubTab3Fields(fields);
                setTab3SubTab3Type(type);
              } else if (ci == "4-3") {
                setTab3SubTab4(child);
                setTab3SubTtab4(child);
                setTab3SubTab4Fields(fields);
                setTab3SubTab4Type(type);
              } else if (ci == "4-4") {
                setTab3SubTab5(child);
                setTab3SubTtab5(child);
                setTab3SubTab5Fields(fields);
                setTab3SubTab5Type(type);
              } else if (ci == "4-5") {
                setTab3SubTab6(child);
                setTab3SubTtab6(child);
                setTab3SubTab6Fields(fields);
                setTab3SubTab6Type(type);
              } else if (ci == "4-6") {
                setTab3SubTab7(child);
                setTab3SubTtab7(child);
                setTab3SubTab7Fields(fields);
                setTab3SubTab7Type(type);
              } else if (ci == "4-7") {
                setTab3SubTab8(child);
                setTab3SubTtab8(child);
                setTab3SubTab8Fields(fields);
                setTab3SubTab8Type(type);
              } else if (ci == "4-8") {
                setTab3SubTab9(child);
                setTab3SubTtab9(child);
                setTab3SubTab9Fields(fields);
                setTab3SubTab9Type(type);
              } else if (ci == "4-9") {
                setTab3SubTab10(child);
                setTab3SubTtab10(child);
                setTab3SubTab10Fields(fields);
                setTab3SubTab10Type(type);
              } else if (ci == "5-0") {
                setTab4SubTab1(child);
                setTab4SubTtab1(child);
                setTab4SubTab1Fields(fields);
                setTab4SubTab1Type(type);
              } else if (ci == "5-1") {
                setTab4SubTab2(child);
                setTab4SubTtab2(child);
                setTab4SubTab2Fields(fields);
                setTab4SubTab2Type(type);
              } else if (ci == "5-2") {
                setTab4SubTab3(child);
                setTab4SubTtab3(child);
                setTab4SubTab3Fields(fields);
                setTab4SubTab3Type(type);
              } else if (ci == "5-3") {
                setTab4SubTab4(child);
                setTab4SubTtab4(child);
                setTab4SubTab4Fields(fields);
                setTab4SubTab4Type(type);
              } else if (ci == "5-4") {
                setTab4SubTab5(child);
                setTab4SubTtab5(child);
                setTab4SubTab5Fields(fields);
                setTab4SubTab5Type(type);
              } else if (ci == "5-5") {
                setTab4SubTab6(child);
                setTab4SubTtab6(child);
                setTab4SubTab6Fields(fields);
                setTab4SubTab6Type(type);
              } else if (ci == "5-6") {
                setTab4SubTab7(child);
                setTab4SubTtab7(child);
                setTab4SubTab7Fields(fields);
                setTab4SubTab7Type(type);
              } else if (ci == "5-7") {
                setTab4SubTab8(child);
                setTab4SubTtab8(child);
                setTab4SubTab8Fields(fields);
                setTab4SubTab8Type(type);
              } else if (ci == "5-8") {
                setTab4SubTab9(child);
                setTab4SubTtab9(child);
                setTab4SubTab9Fields(fields);
                setTab4SubTab9Type(type);
              } else if (ci == "5-9") {
                setTab4SubTab10(child);
                setTab4SubTtab10(child);
                setTab4SubTab10Fields(fields);
                setTab4SubTab10Type(type);
              } else if (ci == "6-0") {
                setTab5SubTab1(child);
                setTab5SubTtab1(child);
                setTab5SubTab1Fields(fields);
                setTab5SubTab1Type(type);
              } else if (ci == "6-1") {
                setTab5SubTab2(child);
                setTab5SubTtab2(child);
                setTab5SubTab2Fields(fields);
                setTab5SubTab2Type(type);
              } else if (ci == "6-2") {
                setTab5SubTab3(child);
                setTab5SubTtab3(child);
                setTab5SubTab3Fields(fields);
                setTab5SubTab3Type(type);
              } else if (ci == "6-3") {
                setTab5SubTab4(child);
                setTab5SubTtab4(child);
                setTab5SubTab4Fields(fields);
                setTab5SubTab4Type(type);
              } else if (ci == "6-4") {
                setTab5SubTab5(child);
                setTab5SubTtab5(child);
                setTab5SubTab5Fields(fields);
                setTab5SubTab5Type(type);
              } else if (ci == "6-5") {
                setTab5SubTab6(child);
                setTab5SubTtab6(child);
                setTab5SubTab6Fields(fields);
                setTab5SubTab6Type(type);
              } else if (ci == "6-6") {
                setTab5SubTab7(child);
                setTab5SubTtab7(child);
                setTab5SubTab7Fields(fields);
                setTab5SubTab7Type(type);
              } else if (ci == "6-7") {
                setTab5SubTab8(child);
                setTab5SubTtab8(child);
                setTab5SubTab8Fields(fields);
                setTab5SubTab8Type(type);
              } else if (ci == "6-8") {
                setTab5SubTab9(child);
                setTab5SubTtab9(child);
                setTab5SubTab9Fields(fields);
                setTab5SubTab9Type(type);
              } else if (ci == "6-9") {
                setTab5SubTab10(child);
                setTab5SubTtab10(child);
                setTab5SubTab10Fields(fields);
                setTab5SubTab10Type(type);
              } else if (ci == "7-0") {
                setTab6SubTab1(child);
                setTab6SubTtab1(child);
                setTab6SubTab1Fields(fields);
                setTab6SubTab1Type(type);
              } else if (ci == "7-1") {
                setTab6SubTab2(child);
                setTab6SubTtab2(child);
                setTab6SubTab2Fields(fields);
                setTab6SubTab2Type(type);
              } else if (ci == "7-2") {
                setTab6SubTab3(child);
                setTab6SubTtab3(child);
                setTab6SubTab3Fields(fields);
                setTab6SubTab3Type(type);
              } else if (ci == "7-3") {
                setTab6SubTab4(child);
                setTab6SubTtab4(child);
                setTab6SubTab4Fields(fields);
                setTab6SubTab4Type(type);
              } else if (ci == "7-4") {
                setTab6SubTab5(child);
                setTab6SubTtab5(child);
                setTab6SubTab5Fields(fields);
                setTab6SubTab5Type(type);
              } else if (ci == "7-5") {
                setTab6SubTab6(child);
                setTab6SubTtab6(child);
                setTab6SubTab6Fields(fields);
                setTab6SubTab6Type(type);
              } else if (ci == "7-6") {
                setTab6SubTab7(child);
                setTab6SubTtab7(child);
                setTab6SubTab7Fields(fields);
                setTab6SubTab7Type(type);
              } else if (ci == "7-7") {
                setTab6SubTab8(child);
                setTab6SubTtab8(child);
                setTab6SubTab8Fields(fields);
                setTab6SubTab8Type(type);
              } else if (ci == "7-8") {
                setTab6SubTab9(child);
                setTab6SubTtab9(child);
                setTab6SubTab9Fields(fields);
                setTab6SubTab9Type(type);
              } else if (ci == "7-9") {
                setTab6SubTab10(child);
                setTab6SubTtab10(child);
                setTab6SubTab10Fields(fields);
                setTab6SubTab10Type(type);
              } else if (ci == "8-0") {
                setTab7SubTab1(child);
                setTab7SubTtab1(child);
                setTab7SubTab1Fields(fields);
                setTab7SubTab1Type(type);
              } else if (ci == "8-1") {
                setTab7SubTab2(child);
                setTab7SubTtab2(child);
                setTab7SubTab2Fields(fields);
                setTab7SubTab2Type(type);
              } else if (ci == "8-2") {
                setTab7SubTab3(child);
                setTab7SubTtab3(child);
                setTab7SubTab3Fields(fields);
                setTab7SubTab3Type(type);
              } else if (ci == "8-3") {
                setTab7SubTab4(child);
                setTab7SubTtab4(child);
                setTab7SubTab4Fields(fields);
                setTab7SubTab4Type(type);
              } else if (ci == "8-4") {
                setTab7SubTab5(child);
                setTab7SubTtab5(child);
                setTab7SubTab5Fields(fields);
                setTab7SubTab5Type(type);
              } else if (ci == "8-5") {
                setTab7SubTab6(child);
                setTab7SubTtab6(child);
                setTab7SubTab6Fields(fields);
                setTab7SubTab6Type(type);
              } else if (ci == "8-6") {
                setTab7SubTab7(child);
                setTab7SubTtab7(child);
                setTab7SubTab7Fields(fields);
                setTab7SubTab7Type(type);
              } else if (ci == "8-7") {
                setTab7SubTab8(child);
                setTab7SubTtab8(child);
                setTab7SubTab8Fields(fields);
                setTab7SubTab8Type(type);
              } else if (ci == "8-8") {
                setTab7SubTab9(child);
                setTab7SubTtab9(child);
                setTab7SubTab9Fields(fields);
                setTab7SubTab9Type(type);
              } else if (ci == "8-9") {
                setTab7SubTab10(child);
                setTab7SubTtab10(child);
                setTab7SubTab10Fields(fields);
                setTab7SubTab10Type(type);
              } else if (ci == "9-0") {
                setTab8SubTab1(child);
                setTab8SubTtab1(child);
                setTab8SubTab1Fields(fields);
                setTab8SubTab1Type(type);
              } else if (ci == "9-1") {
                setTab8SubTab2(child);
                setTab8SubTtab2(child);
                setTab8SubTab2Fields(fields);
                setTab8SubTab2Type(type);
              } else if (ci == "9-2") {
                setTab8SubTab3(child);
                setTab8SubTtab3(child);
                setTab8SubTab3Fields(fields);
                setTab8SubTab3Type(type);
              } else if (ci == "9-3") {
                setTab8SubTab4(child);
                setTab8SubTtab4(child);
                setTab8SubTab4Fields(fields);
                setTab8SubTab4Type(type);
              } else if (ci == "9-4") {
                setTab8SubTab5(child);
                setTab8SubTtab5(child);
                setTab8SubTab5Fields(fields);
                setTab8SubTab5Type(type);
              } else if (ci == "9-5") {
                setTab8SubTab6(child);
                setTab8SubTtab6(child);
                setTab8SubTab6Fields(fields);
                setTab8SubTab6Type(type);
              } else if (ci == "9-6") {
                setTab8SubTab7(child);
                setTab8SubTtab7(child);
                setTab8SubTab7Fields(fields);
                setTab8SubTab7Type(type);
              } else if (ci == "9-7") {
                setTab8SubTab8(child);
                setTab8SubTtab8(child);
                setTab8SubTab8Fields(fields);
                setTab8SubTab8Type(type);
              } else if (ci == "9-8") {
                setTab8SubTab9(child);
                setTab8SubTtab9(child);
                setTab8SubTab9Fields(fields);
                setTab8SubTab9Type(type);
              } else if (ci == "9-9") {
                setTab8SubTab10(child);
                setTab8SubTtab10(child);
                setTab8SubTab10Fields(fields);
                setTab8SubTab10Type(type);
              } else if (ci == "10-0") {
                setTab9SubTab1(child);
                setTab9SubTtab1(child);
                setTab9SubTab1Fields(fields);
                setTab9SubTab1Type(type);
              } else if (ci == "10-1") {
                setTab9SubTab2(child);
                setTab9SubTtab2(child);
                setTab9SubTab2Fields(fields);
                setTab9SubTab2Type(type);
              } else if (ci == "10-2") {
                setTab9SubTab3(child);
                setTab9SubTtab3(child);
                setTab9SubTab3Fields(fields);
                setTab9SubTab3Type(type);
              } else if (ci == "10-3") {
                setTab9SubTab4(child);
                setTab9SubTtab4(child);
                setTab9SubTab4Fields(fields);
                setTab9SubTab4Type(type);
              } else if (ci == "10-4") {
                setTab9SubTab5(child);
                setTab9SubTtab5(child);
                setTab9SubTab5Fields(fields);
                setTab9SubTab5Type(type);
              } else if (ci == "10-5") {
                setTab9SubTab6(child);
                setTab9SubTtab6(child);
                setTab9SubTab6Fields(fields);
                setTab9SubTab6Type(type);
              } else if (ci == "10-6") {
                setTab9SubTab7(child);
                setTab9SubTtab7(child);
                setTab9SubTab7Fields(fields);
                setTab9SubTab7Type(type);
              } else if (ci == "10-7") {
                setTab9SubTab8(child);
                setTab9SubTtab8(child);
                setTab9SubTab8Fields(fields);
                setTab9SubTab8Type(type);
              } else if (ci == "10-8") {
                setTab9SubTab9(child);
                setTab9SubTtab9(child);
                setTab9SubTab9Fields(fields);
                setTab9SubTab9Type(type);
              } else if (ci == "10-9") {
                setTab9SubTab10(child);
                setTab9SubTtab10(child);
                setTab9SubTab10Fields(fields);
                setTab9SubTab10Type(type);
              } else if (ci == "11-0") {
                setTab10SubTab1(child);
                setTab10SubTtab1(child);
                setTab10SubTab1Fields(fields);
                setTab10SubTab1Type(type);
              } else if (ci == "11-1") {
                setTab10SubTab2(child);
                setTab10SubTtab2(child);
                setTab10SubTab2Fields(fields);
                setTab10SubTab2Type(type);
              } else if (ci == "11-2") {
                setTab10SubTab3(child);
                setTab10SubTtab3(child);
                setTab10SubTab3Fields(fields);
                setTab10SubTab3Type(type);
              } else if (ci == "11-3") {
                setTab10SubTab4(child);
                setTab10SubTtab4(child);
                setTab10SubTab4Fields(fields);
                setTab10SubTab4Type(type);
              } else if (ci == "11-4") {
                setTab10SubTab5(child);
                setTab10SubTtab5(child);
                setTab10SubTab5Fields(fields);
                setTab10SubTab5Type(type);
              } else if (ci == "11-5") {
                setTab10SubTab6(child);
                setTab10SubTtab6(child);
                setTab10SubTab6Fields(fields);
                setTab10SubTab6Type(type);
              } else if (ci == "11-6") {
                setTab10SubTab7(child);
                setTab10SubTtab7(child);
                setTab10SubTab7Fields(fields);
                setTab10SubTab7Type(type);
              } else if (ci == "11-7") {
                setTab10SubTab8(child);
                setTab10SubTtab8(child);
                setTab10SubTab8Fields(fields);
                setTab10SubTab8Type(type);
              } else if (ci == "11-8") {
                setTab10SubTab9(child);
                setTab10SubTtab9(child);
                setTab10SubTab9Fields(fields);
                setTab10SubTab9Type(type);
              } else if (ci == "11-9") {
                setTab10SubTab10(child);
                setTab10SubTtab10(child);
                setTab10SubTab10Fields(fields);
                setTab10SubTab10Type(type);
              }
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    existingUI();
  }, []);

  {
    /* ----------------------- Main Page Render ----------------------- */
  }
  return (
    <div className="main">
      {loadPage ? (
        <LoadingPage />
      ) : (
        <>
          <form>
            <ObjectPage
              footer={
                <Bar
                  endContent={
                    <div style={{ display: "flex", gap: "10px" }}>
                      <MUIButton
                        variant="contained"
                        onClick={() => {
                          handleOpenTab();
                        }}
                      >
                        Edit Lables
                      </MUIButton>

                      <MUIButton
                        variant="contained"
                        onClick={() => handlePostUIData(dataStruct)}
                      >
                        Submit
                      </MUIButton>
                    </div>
                  }
                  startContent={
                    <>
                      <MUIButton
                        variant="contained"
                        onClick={() => router.back()}
                      >
                        Back
                      </MUIButton>
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
        </>
      )}
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
                  <div key={index} style={{ display: "flex", gap: "10px" }}>
                    <TextField
                      id={key}
                      variant="outlined"
                      placeholder={key}
                      disabled={disabledStates[key]}
                      size="small"
                      onChange={(e) => {
                        if (index == 1) {
                          setTtab1(e.target.value);
                        } else if (index == 2) {
                          setTtab2(e.target.value);
                        } else if (index == 3) {
                          setTtab3(e.target.value);
                        } else if (index == 4) {
                          setTtab4(e.target.value);
                        } else if (index == 5) {
                          setTtab5(e.target.value);
                        } else if (index == 6) {
                          setTtab6(e.target.value);
                        } else if (index == 7) {
                          setTtab7(e.target.value);
                        } else if (index == 8) {
                          setTtab8(e.target.value);
                        } else if (index == 9) {
                          setTtab9(e.target.value);
                        } else if (index == 10) {
                          setTtab10(e.target.value);
                        }
                      }}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      disabled={disabledStates[key]}
                      onClick={() => {
                        saveTabs();
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
            {alert ? (
              <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
                {alertMessage}
              </Alert>
            ) : (
              <></>
            )}
            <Button onClick={handleCloseTab}>Close</Button>
            <Button
              onClick={() => {
                saveTabs();
              }}
            >
              Save Tabs
            </Button>
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
                  size="small"
                  // disabled={disabled}
                  onChange={(e) => {
                    if (selectedTabIndex == 1 && index == 0) {
                      setTab1SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 1) {
                      setTab1SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 2) {
                      setTab1SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 3) {
                      setTab1SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 4) {
                      setTab1SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 5) {
                      setTab1SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 6) {
                      setTab1SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 7) {
                      setTab1SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 8) {
                      setTab1SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 1 && index == 9) {
                      setTab1SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 0) {
                      setTab2SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 1) {
                      setTab2SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 2) {
                      setTab2SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 3) {
                      setTab2SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 4) {
                      setTab2SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 5) {
                      setTab2SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 6) {
                      setTab2SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 7) {
                      setTab2SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 8) {
                      setTab2SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 9) {
                      setTab2SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 0) {
                      setTab3SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 1) {
                      setTab3SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 2) {
                      setTab3SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 3) {
                      setTab3SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 4) {
                      setTab3SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 5) {
                      setTab3SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 6) {
                      setTab3SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 7) {
                      setTab3SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 8) {
                      setTab3SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 9) {
                      setTab3SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 0) {
                      setTab4SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 1) {
                      setTab4SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 2) {
                      setTab4SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 3) {
                      setTab4SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 4) {
                      setTab4SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 5) {
                      setTab4SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 6) {
                      setTab4SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 7) {
                      setTab4SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 8) {
                      setTab4SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 9) {
                      setTab4SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 0) {
                      setTab5SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 1) {
                      setTab5SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 2) {
                      setTab5SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 3) {
                      setTab5SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 4) {
                      setTab5SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 5) {
                      setTab5SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 6) {
                      setTab5SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 7) {
                      setTab5SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 8) {
                      setTab5SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 9) {
                      setTab5SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 0) {
                      setTab6SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 1) {
                      setTab6SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 2) {
                      setTab6SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 3) {
                      setTab6SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 4) {
                      setTab6SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 5) {
                      setTab6SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 6) {
                      setTab6SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 7) {
                      setTab6SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 8) {
                      setTab6SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 6 && index == 9) {
                      setTab6SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 0) {
                      setTab7SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 1) {
                      setTab7SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 2) {
                      setTab7SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 3) {
                      setTab7SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 4) {
                      setTab7SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 5) {
                      setTab7SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 6) {
                      setTab7SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 7) {
                      setTab7SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 8) {
                      setTab7SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 7 && index == 9) {
                      setTab7SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 0) {
                      setTab8SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 1) {
                      setTab8SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 2) {
                      setTab8SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 3) {
                      setTab8SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 4) {
                      setTab8SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 5) {
                      setTab8SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 6) {
                      setTab8SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 7) {
                      setTab8SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 8) {
                      setTab8SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 8 && index == 9) {
                      setTab8SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 0) {
                      setTab9SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 1) {
                      setTab9SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 2) {
                      setTab9SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 3) {
                      setTab9SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 4) {
                      setTab9SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 5) {
                      setTab9SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 6) {
                      setTab9SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 7) {
                      setTab9SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 8) {
                      setTab9SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 9 && index == 9) {
                      setTab9SubTtab10(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 0) {
                      setTab10SubTtab1(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 1) {
                      setTab10SubTtab2(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 2) {
                      setTab10SubTtab3(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 3) {
                      setTab10SubTtab4(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 4) {
                      setTab10SubTtab5(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 5) {
                      setTab10SubTtab6(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 6) {
                      setTab10SubTtab7(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 7) {
                      setTab10SubTtab8(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 8) {
                      setTab10SubTtab9(e.target.value);
                    } else if (selectedTabIndex == 10 && index == 9) {
                      setTab10SubTtab10(e.target.value);
                    }
                  }}
                />
              );
            })}
            {alert ? (
              <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
                {alertMessage}
              </Alert>
            ) : (
              <></>
            )}
            <Button
              onClick={() => {
                handleCloseSubTab();
                handleOpenTab();
              }}
            >
              back
            </Button>
            <Button
              onClick={() => {
                handleCloseSubTab();
              }}
            >
              Close
            </Button>

            <Button
              onClick={() => {
                let subTabArray = [
                  tab1SubTtab1,
                  tab1SubTtab2,
                  tab1SubTtab3,
                  tab1SubTtab4,
                  tab1SubTtab5,
                  tab1SubTtab6,
                  tab1SubTtab7,
                  tab1SubTtab8,
                  tab1SubTtab9,
                  tab1SubTtab10,

                  tab2SubTtab1,
                  tab2SubTtab2,
                  tab2SubTtab3,
                  tab2SubTtab4,
                  tab2SubTtab5,
                  tab2SubTtab6,
                  tab2SubTtab7,
                  tab2SubTtab8,
                  tab2SubTtab9,
                  tab2SubTtab10,

                  tab3SubTtab1,
                  tab3SubTtab2,
                  tab3SubTtab3,
                  tab3SubTtab4,
                  tab3SubTtab5,
                  tab3SubTtab6,
                  tab3SubTtab7,
                  tab3SubTtab8,
                  tab3SubTtab9,
                  tab3SubTtab10,

                  tab4SubTtab1,
                  tab4SubTtab2,
                  tab4SubTtab3,
                  tab4SubTtab4,
                  tab4SubTtab5,
                  tab4SubTtab6,
                  tab4SubTtab7,
                  tab4SubTtab8,
                  tab4SubTtab9,
                  tab4SubTtab10,

                  tab5SubTtab1,
                  tab5SubTtab2,
                  tab5SubTtab3,
                  tab5SubTtab4,
                  tab5SubTtab5,
                  tab5SubTtab6,
                  tab5SubTtab7,
                  tab5SubTtab8,
                  tab5SubTtab9,
                  tab5SubTtab10,

                  tab6SubTtab1,
                  tab6SubTtab2,
                  tab6SubTtab3,
                  tab6SubTtab4,
                  tab6SubTtab5,
                  tab6SubTtab6,
                  tab6SubTtab7,
                  tab6SubTtab8,
                  tab6SubTtab9,
                  tab6SubTtab10,

                  tab7SubTtab1,
                  tab7SubTtab2,
                  tab7SubTtab3,
                  tab7SubTtab4,
                  tab7SubTtab5,
                  tab7SubTtab6,
                  tab7SubTtab7,
                  tab7SubTtab8,
                  tab7SubTtab9,
                  tab7SubTtab10,

                  tab8SubTtab1,
                  tab8SubTtab2,
                  tab8SubTtab3,
                  tab8SubTtab4,
                  tab8SubTtab5,
                  tab8SubTtab6,
                  tab8SubTtab7,
                  tab8SubTtab8,
                  tab8SubTtab9,
                  tab8SubTtab10,

                  tab9SubTtab1,
                  tab9SubTtab2,
                  tab9SubTtab3,
                  tab9SubTtab4,
                  tab9SubTtab5,
                  tab9SubTtab6,
                  tab9SubTtab7,
                  tab9SubTtab8,
                  tab9SubTtab9,
                  tab9SubTtab10,

                  tab10SubTtab1,
                  tab10SubTtab2,
                  tab10SubTtab3,
                  tab10SubTtab4,
                  tab10SubTtab5,
                  tab10SubTtab6,
                  tab10SubTtab7,
                  tab10SubTtab8,
                  tab10SubTtab9,
                  tab10SubTtab10,
                ];
                const duplicatesSubTabs = subTabArray.filter(
                  (item, index) => subTabArray.indexOf(item) !== index
                );

                let allSubTabs = [];

                if (!duplicatesSubTabs[0]) {
                  setOpenSubTab(false);
                  setOpenTab(true);
                  setSubTabArray([]);

                  setTab1SubTab1(tab1SubTtab1);
                  setTab1SubTab2(tab1SubTtab2);
                  setTab1SubTab3(tab1SubTtab3);
                  setTab1SubTab4(tab1SubTtab4);
                  setTab1SubTab5(tab1SubTtab5);
                  setTab1SubTab6(tab1SubTtab6);
                  setTab1SubTab7(tab1SubTtab7);
                  setTab1SubTab8(tab1SubTtab8);
                  setTab1SubTab9(tab1SubTtab9);
                  setTab1SubTab10(tab1SubTtab10);

                  setTab2SubTab1(tab2SubTtab1);
                  setTab2SubTab2(tab2SubTtab2);
                  setTab2SubTab3(tab2SubTtab3);
                  setTab2SubTab4(tab2SubTtab4);
                  setTab2SubTab5(tab2SubTtab5);
                  setTab2SubTab6(tab2SubTtab6);
                  setTab2SubTab7(tab2SubTtab7);
                  setTab2SubTab8(tab2SubTtab8);
                  setTab2SubTab9(tab2SubTtab9);
                  setTab2SubTab10(tab2SubTtab10);

                  setTab2SubTab1(tab2SubTtab1);
                  setTab2SubTab2(tab2SubTtab2);
                  setTab2SubTab3(tab2SubTtab3);
                  setTab2SubTab4(tab2SubTtab4);
                  setTab2SubTab5(tab2SubTtab5);
                  setTab2SubTab6(tab2SubTtab6);
                  setTab2SubTab7(tab2SubTtab7);
                  setTab2SubTab8(tab2SubTtab8);
                  setTab2SubTab9(tab2SubTtab9);
                  setTab2SubTab10(tab2SubTtab10);

                  setTab3SubTab1(tab3SubTtab1);
                  setTab3SubTab2(tab3SubTtab2);
                  setTab3SubTab3(tab3SubTtab3);
                  setTab3SubTab4(tab3SubTtab4);
                  setTab3SubTab5(tab3SubTtab5);
                  setTab3SubTab6(tab3SubTtab6);
                  setTab3SubTab7(tab3SubTtab7);
                  setTab3SubTab8(tab3SubTtab8);
                  setTab3SubTab9(tab3SubTtab9);
                  setTab3SubTab10(tab3SubTtab10);

                  setTab4SubTab1(tab4SubTtab1);
                  setTab4SubTab2(tab4SubTtab2);
                  setTab4SubTab3(tab4SubTtab3);
                  setTab4SubTab4(tab4SubTtab4);
                  setTab4SubTab5(tab4SubTtab5);
                  setTab4SubTab6(tab4SubTtab6);
                  setTab4SubTab7(tab4SubTtab7);
                  setTab4SubTab8(tab4SubTtab8);
                  setTab4SubTab9(tab4SubTtab9);
                  setTab4SubTab10(tab4SubTtab10);

                  setTab5SubTab1(tab5SubTtab1);
                  setTab5SubTab2(tab5SubTtab2);
                  setTab5SubTab3(tab5SubTtab3);
                  setTab5SubTab4(tab5SubTtab4);
                  setTab5SubTab5(tab5SubTtab5);
                  setTab5SubTab6(tab5SubTtab6);
                  setTab5SubTab7(tab5SubTtab7);
                  setTab5SubTab8(tab5SubTtab8);
                  setTab5SubTab9(tab5SubTtab9);
                  setTab5SubTab10(tab5SubTtab10);

                  setTab6SubTab1(tab6SubTtab1);
                  setTab6SubTab2(tab6SubTtab2);
                  setTab6SubTab3(tab6SubTtab3);
                  setTab6SubTab4(tab6SubTtab4);
                  setTab6SubTab5(tab6SubTtab5);
                  setTab6SubTab6(tab6SubTtab6);
                  setTab6SubTab7(tab6SubTtab7);
                  setTab6SubTab8(tab6SubTtab8);
                  setTab6SubTab9(tab6SubTtab9);
                  setTab6SubTab10(tab6SubTtab10);

                  setTab7SubTab1(tab7SubTtab1);
                  setTab7SubTab2(tab7SubTtab2);
                  setTab7SubTab3(tab7SubTtab3);
                  setTab7SubTab4(tab7SubTtab4);
                  setTab7SubTab5(tab7SubTtab5);
                  setTab7SubTab6(tab7SubTtab6);
                  setTab7SubTab7(tab7SubTtab7);
                  setTab7SubTab8(tab7SubTtab8);
                  setTab7SubTab9(tab7SubTtab9);
                  setTab7SubTab10(tab7SubTtab10);

                  setTab8SubTab1(tab8SubTtab1);
                  setTab8SubTab2(tab8SubTtab2);
                  setTab8SubTab3(tab8SubTtab3);
                  setTab8SubTab4(tab8SubTtab4);
                  setTab8SubTab5(tab8SubTtab5);
                  setTab8SubTab6(tab8SubTtab6);
                  setTab8SubTab7(tab8SubTtab7);
                  setTab8SubTab8(tab8SubTtab8);
                  setTab8SubTab9(tab8SubTtab9);
                  setTab8SubTab10(tab8SubTtab10);

                  setTab9SubTab1(tab9SubTtab1);
                  setTab9SubTab2(tab9SubTtab2);
                  setTab9SubTab3(tab9SubTtab3);
                  setTab9SubTab4(tab9SubTtab4);
                  setTab9SubTab5(tab9SubTtab5);
                  setTab9SubTab6(tab9SubTtab6);
                  setTab9SubTab7(tab9SubTtab7);
                  setTab9SubTab8(tab9SubTtab8);
                  setTab9SubTab9(tab9SubTtab9);
                  setTab9SubTab10(tab9SubTtab10);

                  setTab10SubTab1(tab10SubTtab1);
                  setTab10SubTab2(tab10SubTtab2);
                  setTab10SubTab3(tab10SubTtab3);
                  setTab10SubTab4(tab10SubTtab4);
                  setTab10SubTab5(tab10SubTtab5);
                  setTab10SubTab6(tab10SubTtab6);
                  setTab10SubTab7(tab10SubTtab7);
                  setTab10SubTab8(tab10SubTtab8);
                  setTab10SubTab9(tab10SubTtab9);
                  setTab10SubTab10(tab10SubTtab10);
                } else {
                  let errData = {
                    message: "Sub Tab names must be unique",
                    severity: "error",
                    tabIndex: duplicatesSubTabs,
                  };
                  errAlert(errData);
                  // console.log(duplicatesSubTabs);
                  // console.log(allSubTabs);
                }
              }}
            >
              Save Sub Tabs
            </Button>
          </Box>
        </Fade>
      </Modal>

      {/* ----------------------- Select Field Type Modal ----------------------- */}
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
                  setTab1SubTab1Type("inputFields");
                  handleCloseFieldSelection();
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
                  } else if (combinedIndex == "1-5") {
                    setTab1SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "1-6") {
                    setTab1SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "1-7") {
                    setTab1SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "1-8") {
                    setTab1SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "1-9") {
                    setTab1SubTab10Fields(() => [value]);
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
                  } else if (combinedIndex == "2-5") {
                    setTab2SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "2-6") {
                    setTab2SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "2-7") {
                    setTab2SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "2-8") {
                    setTab2SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "2-9") {
                    setTab2SubTab10Fields(() => [value]);
                  } else if (combinedIndex == "3-0") {
                    setTab3SubTab1Fields(() => [value]);
                  } else if (combinedIndex == "3-1") {
                    setTab3SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "3-2") {
                    setTab3SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "3-3") {
                    setTab3SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "1-4") {
                    setTab2SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "3-5") {
                    setTab3SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "3-6") {
                    setTab3SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "3-7") {
                    setTab3SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "3-8") {
                    setTab3SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "3-9") {
                    setTab3SubTab10Fields(() => [value]);
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
                  } else if (combinedIndex == "4-5") {
                    setTab4SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "4-6") {
                    setTab4SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "4-7") {
                    setTab4SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "4-8") {
                    setTab4SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "4-9") {
                    setTab4SubTab10Fields(() => [value]);
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
                  } else if (combinedIndex == "5-5") {
                    setTab5SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "5-6") {
                    setTab5SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "5-7") {
                    setTab5SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "5-8") {
                    setTab5SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "5-9") {
                    setTab5SubTab10Fields(() => [value]);
                  } else if (combinedIndex == "6-1") {
                    setTab6SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "6-2") {
                    setTab6SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "6-3") {
                    setTab6SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "6-4") {
                    setTab6SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "6-5") {
                    setTab6SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "6-6") {
                    setTab6SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "6-7") {
                    setTab6SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "6-8") {
                    setTab6SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "6-9") {
                    setTab6SubTab10Fields(() => [value]);
                  } else if (combinedIndex == "7-1") {
                    setTab7SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "7-2") {
                    setTab7SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "7-3") {
                    setTab7SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "7-4") {
                    setTab7SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "7-5") {
                    setTab7SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "7-6") {
                    setTab7SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "7-7") {
                    setTab7SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "7-8") {
                    setTab7SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "7-9") {
                    setTab7SubTab10Fields(() => [value]);
                  } else if (combinedIndex == "8-1") {
                    setTab8SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "8-2") {
                    setTab8SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "8-3") {
                    setTab8SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "8-4") {
                    setTab8SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "8-5") {
                    setTab8SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "8-6") {
                    setTab8SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "8-7") {
                    setTab8SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "8-8") {
                    setTab8SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "8-9") {
                    setTab8SubTab10Fields(() => [value]);
                  } else if (combinedIndex == "9-1") {
                    setTab9SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "9-2") {
                    setTab9SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "9-3") {
                    setTab9SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "9-4") {
                    setTab9SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "9-5") {
                    setTab9SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "9-6") {
                    setTab9SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "9-7") {
                    setTab9SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "9-8") {
                    setTab9SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "9-9") {
                    setTab9SubTab10Fields(() => [value]);
                  } else if (combinedIndex == "10-1") {
                    setTab10SubTab2Fields(() => [value]);
                  } else if (combinedIndex == "10-2") {
                    setTab10SubTab3Fields(() => [value]);
                  } else if (combinedIndex == "10-3") {
                    setTab10SubTab4Fields(() => [value]);
                  } else if (combinedIndex == "10-4") {
                    setTab10SubTab5Fields(() => [value]);
                  } else if (combinedIndex == "10-5") {
                    setTab10SubTab6Fields(() => [value]);
                  } else if (combinedIndex == "10-6") {
                    setTab10SubTab7Fields(() => [value]);
                  } else if (combinedIndex == "10-7") {
                    setTab10SubTab8Fields(() => [value]);
                  } else if (combinedIndex == "10-8") {
                    setTab10SubTab9Fields(() => [value]);
                  } else if (combinedIndex == "10-9") {
                    setTab10SubTab10Fields(() => [value]);
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
                    } else if (combinedIndex == "2-0") {
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
                    } else if (combinedIndex == "3-0") {
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
                    } else if (combinedIndex == "4-0") {
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
                    } else if (combinedIndex == "5-0") {
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
                    } else if (combinedIndex == "5-0") {
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
                    } else if (combinedIndex == "6-0") {
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
                    } else if (combinedIndex == "7-0") {
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
                    } else if (combinedIndex == "8-0") {
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
                    } else if (combinedIndex == "9-0") {
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
                    } else if (combinedIndex == "10-0") {
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
                    handleCloseAddChart();
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
