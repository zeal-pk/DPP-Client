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
import MenuItem from '@mui/material/MenuItem';
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

const charts = [
  {
    value: 'Pie Chart',
    label: 'Pie Chart',
  },
  {
    value: 'Line Chart',
    label: 'Line Chart',
  },
  {
    value: 'Bar Chart',
    label: 'Bar Chart',
  },
  {
    value: 'Scatter Chart',
    label: 'Scatter Chart',
  },
];


export default function AddProductsSection({ params }) {
  let router = useRouter()


  let [fullData, setFullData] = useState({});
  let [tabDetails, setTabDetails] = useState([]);
  let [tabName, setTabName] = useState();
  let [fieldName, setFieldName] = useState();
  let [chartType, setChartType] = useState();
  let [xAxis, setXAxis] = useState();
  let [yAxis, setYAxis] = useState();
  let [disabled, setDisabled] = useState(false);
  let [subTabArray, setSubTabArray] = useState([]);
  let [selectedTabIndex, setSelectedTabIndex] = useState();
  let [combinedIndex, setCombinedIndex] = useState();
  let [id, setId] = useState();

  let [tab1, setTab1] = useState("Tab 1");
  let [tab2, setTab2] = useState("Tab 2");
  let [tab3, setTab3] = useState("Tab 3");
  let [tab4, setTab4] = useState("Tab 4");
  let [tab5, setTab5] = useState("Tab 5");

  let [tab1SubTab1, setTab1SubTab1] = useState("Sub Tab 1-1");
  let [tab1SubTab2, setTab1SubTab2] = useState("Sub Tab 1-2");
  let [tab1SubTab3, setTab1SubTab3] = useState("Sub Tab 1-3");
  let [tab1SubTab4, setTab1SubTab4] = useState("Sub Tab 1-4");
  let [tab1SubTab5, setTab1SubTab5] = useState("Sub Tab 1-5");

  let [tab2SubTab1, setTab2SubTab1] = useState("Sub Tab 2-1");
  let [tab2SubTab2, setTab2SubTab2] = useState("Sub Tab 2-2");
  let [tab2SubTab3, setTab2SubTab3] = useState("Sub Tab 2-3");
  let [tab2SubTab4, setTab2SubTab4] = useState("Sub Tab 2-4");
  let [tab2SubTab5, setTab2SubTab5] = useState("Sub Tab 2-5");

  let [tab3SubTab1, setTab3SubTab1] = useState("Sub Tab 3-1");
  let [tab3SubTab2, setTab3SubTab2] = useState("Sub Tab 3-2");
  let [tab3SubTab3, setTab3SubTab3] = useState("Sub Tab 3-3");
  let [tab3SubTab4, setTab3SubTab4] = useState("Sub Tab 3-4");
  let [tab3SubTab5, setTab3SubTab5] = useState("Sub Tab 3-5");

  let [tab4SubTab1, setTab4SubTab1] = useState("Sub Tab 4-1");
  let [tab4SubTab2, setTab4SubTab2] = useState("Sub Tab 4-2");
  let [tab4SubTab3, setTab4SubTab3] = useState("Sub Tab 4-3");
  let [tab4SubTab4, setTab4SubTab4] = useState("Sub Tab 4-4");
  let [tab4SubTab5, setTab4SubTab5] = useState("Sub Tab 4-5");

  let [tab5SubTab1, setTab5SubTab1] = useState("Sub Tab 5-1");
  let [tab5SubTab2, setTab5SubTab2] = useState("Sub Tab 5-2");
  let [tab5SubTab3, setTab5SubTab3] = useState("Sub Tab 5-3");
  let [tab5SubTab4, setTab5SubTab4] = useState("Sub Tab 5-4");
  let [tab5SubTab5, setTab5SubTab5] = useState("Sub Tab 5-5");

  let [tab1SubTab1Fields, setTab1SubTab1Fields] = useState([]);
  let [tab1SubTab2Fields, setTab1SubTab2Fields] = useState([]);
  let [tab1SubTab3Fields, setTab1SubTab3Fields] = useState([]);
  let [tab1SubTab4Fields, setTab1SubTab4Fields] = useState([]);
  let [tab1SubTab5Fields, setTab1SubTab5Fields] = useState([]);

  let [tab2SubTab1Fields, setTab2SubTab1Fields] = useState([]);
  let [tab2SubTab2Fields, setTab2SubTab2Fields] = useState([]);
  let [tab2SubTab3Fields, setTab2SubTab3Fields] = useState([]);
  let [tab2SubTab4Fields, setTab2SubTab4Fields] = useState([]);
  let [tab2SubTab5Fields, setTab2SubTab5Fields] = useState([]);

  let [tab3SubTab1Fields, setTab3SubTab1Fields] = useState([]);
  let [tab3SubTab2Fields, setTab3SubTab2Fields] = useState([]);
  let [tab3SubTab3Fields, setTab3SubTab3Fields] = useState([]);
  let [tab3SubTab4Fields, setTab3SubTab4Fields] = useState([]);
  let [tab3SubTab5Fields, setTab3SubTab5Fields] = useState([]);

  let [tab4SubTab1Fields, setTab4SubTab1Fields] = useState([]);
  let [tab4SubTab2Fields, setTab4SubTab2Fields] = useState([]);
  let [tab4SubTab3Fields, setTab4SubTab3Fields] = useState([]);
  let [tab4SubTab4Fields, setTab4SubTab4Fields] = useState([]);
  let [tab4SubTab5Fields, setTab4SubTab5Fields] = useState([]);

  let [tab5SubTab1Fields, setTab5SubTab1Fields] = useState([]);
  let [tab5SubTab2Fields, setTab5SubTab2Fields] = useState([]);
  let [tab5SubTab3Fields, setTab5SubTab3Fields] = useState([]);
  let [tab5SubTab4Fields, setTab5SubTab4Fields] = useState([]);
  let [tab5SubTab5Fields, setTab5SubTab5Fields] = useState([]);

  let [tab1SubTab1Type, setTab1SubTab1Type] = useState([]);
  let [tab1SubTab2Type, setTab1SubTab2Type] = useState([]);
  let [tab1SubTab3Type, setTab1SubTab3Type] = useState([]);
  let [tab1SubTab4Type, setTab1SubTab4Type] = useState([]);
  let [tab1SubTab5Type, setTab1SubTab5Type] = useState([]);

  let [tab2SubTab1Type, setTab2SubTab1Type] = useState([]);
  let [tab2SubTab2Type, setTab2SubTab2Type] = useState([]);
  let [tab2SubTab3Type, setTab2SubTab3Type] = useState([]);
  let [tab2SubTab4Type, setTab2SubTab4Type] = useState([]);
  let [tab2SubTab5Type, setTab2SubTab5Type] = useState([]);

  let [tab3SubTab1Type, setTab3SubTab1Type] = useState([]);
  let [tab3SubTab2Type, setTab3SubTab2Type] = useState([]);
  let [tab3SubTab3Type, setTab3SubTab3Type] = useState([]);
  let [tab3SubTab4Type, setTab3SubTab4Type] = useState([]);
  let [tab3SubTab5Type, setTab3SubTab5Type] = useState([]);

  let [tab4SubTab1Type, setTab4SubTab1Type] = useState([]);
  let [tab4SubTab2Type, setTab4SubTab2Type] = useState([]);
  let [tab4SubTab3Type, setTab4SubTab3Type] = useState([]);
  let [tab4SubTab4Type, setTab4SubTab4Type] = useState([]);
  let [tab4SubTab5Type, setTab4SubTab5Type] = useState([]);

  let [tab5SubTab1Type, setTab5SubTab1Type] = useState([]);
  let [tab5SubTab2Type, setTab5SubTab2Type] = useState([]);
  let [tab5SubTab3Type, setTab5SubTab3Type] = useState([]);
  let [tab5SubTab4Type, setTab5SubTab4Type] = useState([]);
  let [tab5SubTab5Type, setTab5SubTab5Type] = useState([]);

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
    },
  };

  async function handlePostUIData(data) {
    let path = window.location.pathname;
  let pathArr = path.split("/");
  let id = pathArr[3];
    let token = localStorage.getItem("access_token");
    try {
      // let response = await axios.post(`https://dpp-server-app.azurewebsites.net/postProductDetailsUI/${id}`, data);
      let response = await axios.post(`http://localhost:9000/postProductDetailsUI/${id}`, data);
      // router.push("/configurator")
    } catch (error) {
      alert(error, "Please try again later")
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
      if (key != "_id" && key != "template_ID") {
        return (
          <ObjectPageSection
            aria-label={key}
            key={index}
            id={key.replace(/\s/g, "")}
            titleText={key}
          >
            {Object.keys(dataStruct[key]).map((child, index) => {
              let subTabindex = index;
              let id = `${key.replace(/\s/g, "")}-${child.replace(/\s/g, "")}`;
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
    });
  }

  function SubTab(child) {
    setSubTabArray((existing) => [...existing, child]);
  }

  

  async function VerifyToken() {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");

    if (token && role == "configurator") {
    try {
      await axios.get(
        "https://dpp-server-app.azurewebsites.net/routVerification", {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      if (error.response.status !== 403) {
        router.push("/error");
      }
    }} else {
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

                  <Button design="Emphasized" onClick={() => handlePostUIData(dataStruct)}>
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
              if (key != "_id" && key != "template_ID") {
                return (
                  <div key={index}>
                    <TextField
                      id={key}
                      variant="outlined"
                      placeholder={key}
                      disabled={disabled}
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
                      defaultChecked
                      onChange={() => {
                        disabled == false
                          ? setDisabled(true)
                          : setDisabled(false);
                      }}
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
                  disabled={disabled}
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
                    } else if (selectedTabIndex == 2 && index == 0) {
                      setTab2SubTab1(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 1) {
                      setTab2SubTab2(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 2) {
                      setTab2SubTab3(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 3) {
                      setTab2SubTab4(e.target.value);
                    } else if (selectedTabIndex == 2 && index == 4) {
                      setTab2SubTab5(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 0) {
                      setTab3SubTab1(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 1) {
                      setTab3SubTab2(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 2) {
                      setTab3SubTab3(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 3) {
                      setTab3SubTab4(e.target.value);
                    } else if (selectedTabIndex == 3 && index == 4) {
                      setTab3SubTab5(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 0) {
                      setTab4SubTab1(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 1) {
                      setTab4SubTab2(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 2) {
                      setTab4SubTab3(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 3) {
                      setTab4SubTab4(e.target.value);
                    } else if (selectedTabIndex == 4 && index == 4) {
                      setTab4SubTab5(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 0) {
                      setTab5SubTab1(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 1) {
                      setTab5SubTab2(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 2) {
                      setTab5SubTab3(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 3) {
                      setTab5SubTab4(e.target.value);
                    } else if (selectedTabIndex == 5 && index == 4) {
                      setTab5SubTab5(e.target.value);
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
              <TextField className="modalInputField" size="small" onChange={(e) => setFieldName(e.target.value)} />
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
                  } else if (combinedIndex == "2-0") {
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
                  } else if (combinedIndex == "3-0") {
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
                  } else if (combinedIndex == "4-0") {
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
                  } else if (combinedIndex == "5-0") {
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
              <TextField className="modalInputField" onChange={(e) => setXAxis(e.target.value)} />
              <Typography>Enter Y-Axis</Typography>
              <TextField className="modalInputField" onChange={(e) => setYAxis(e.target.value)} />

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
