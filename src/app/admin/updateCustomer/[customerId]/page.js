"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import NavBar from "@/components/navBar";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import BackButton from "../../../../components/backButton.js";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../../../db/countries.js";

// export default function UpdateCustomer({ params }) {
//   let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
//   let router = useRouter();
//   let custId = params.customerId;
//   let [loadPage, setLoadPage] = useState(false);
//   let [alert, setAlert] = useState(false);
//   let [alertMessage, setAlertMessage] = useState();
//   let [alertSeverity, setAlertSeverity] = useState();

//   let [customerDetails, setCustomerDetails] = useState("-");
//   let [customerName, setCustomerName] = useState("-");
//   let [customerId, setCustomerId] = useState("-");
//   let [logoUrl, setLogoUrl] = useState("-");
//   let [descreption, setDescription] = useState("-");
//   let [addressL1, setAddressL1] = useState("-");
//   let [addressL2, setAddressL2] = useState("-");
//   let [city, setCity] = useState("-");
//   let [state, setState] = useState("-");
//   let [country, setCountry] = useState("-");
//   let [prodObjArr, setProdObjArr] = useState([]);
//   let [allProducts, setAllProducts] = useState([]);
//   let [products, setProducts] = useState([]);

//   const [countryId, setCountryId] = useState(0);
//   let [countryCode, setCountryCode] = useState("");
//   const [stateid, setstateid] = useState(0);
//   let [stateCode, setStateCode] = useState("");

//   function errAlert(errData) {
//     setLoadPage(false);
//     let message = errData.message;
//     let severity = errData.severity;
//     setAlert(true);
//     setAlertMessage(message);
//     setAlertSeverity(severity);

//     setTimeout(() => {
//       setAlert(false);
//     }, 3000);
//   }

//   async function handleGetCustomerData() {
//     let token = localStorage.getItem("access_token");
//     let prods = [];
//     let prodObjArr = [];
//     try {
//       const response = await axios
//         .get(`${serverUrl}/getCustomer/${custId}`, {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         })
//         .then((response) => {
//           return response.data;
//         });
//       setCustomerName(response.name);
//       setCustomerId(response.id);
//       setLogoUrl(response.logoUrl);
//       setDescription(response.descreption);
//       setAddressL1(response.addressL1);
//       setAddressL2(response.addressL2);
//       setCity(response.city);
//       setState(response.state);
//       setCountry(response.country);

//       for (let i = 0; i < response.products.length; i++) {
//         prods.push(response.products[i].id);
//         prodObjArr.push(response.products[i]);
//         console.log(prodObjArr);
//       }
//       setProducts(prods);
//       setProdObjArr(prodObjArr);
//     } catch (error) {
//       if (error.status == 403) {
//         router.push("/error");
//       } else {
//         let errData = {
//           message: error.message,
//           severity: "error",
//         };
//         errAlert(errData);
//       }
//     }
//   }

//   async function handleUpdateCustomer(newCustomerData) {
//     let token = localStorage.getItem("access_token");
//     try {
//       const response = await axios
//         .post(`${serverUrl}/updateCustomer/${customerId}`, newCustomerData, {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         })
//         .then((response) => {
//           console.log(response.data);
//         });
//       let alertData = {
//         message: `Customer: ${customerId} Updated Successfully`,
//         severity: "error",
//       };
//       errAlert(errData);
//       router.push("/admin/customerList");
//     } catch (error) {
//       let errData = {
//         message: error.message,
//         severity: "error",
//       };
//       errAlert(errData);
//     }

//     try {
//       await axios
//         .get(`${serverUrl}/getAllProducts`, {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         })
//         .then((response) => {
//           console.log(response);
//           let data = response.data;
//           for (let i = 0; i < data.length; i++) {
//             let prod = { id: data[i].id, name: data[i].name };
//             setAllProducts((existingProds) => [...existingProds, prod]);
//             // setAllProducts(prod);
//           }
//         });
//     } catch (error) {
//       if (error.status == 403) {
//         router.push("/error");
//       } else {
//         let errData = {
//           message: error.message,
//           severity: "error",
//         };
//         errAlert(errData);
//       }
//     }
//   }

//   useEffect(() => {
//     handleGetCustomerData();
//   }, []);

//   return (
//     <div className="main">
//       <NavBar />
//       {alert ? (
//         <Alert severity={alertSeverity} style={{ marginTop: "10px" }}>
//           {alertMessage}
//         </Alert>
//       ) : (
//         <></>
//       )}
//       <BackButton />
//       <div className="addCustomer-form-div">
//         <h4>Update Customer Details</h4>
//         <section className="addCustomer-form-section">
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Customer ID"
//             variant="standard"
//             value={customerId}
//             onChange={(e) => {
//               setCustomerId(e.target.value);
//             }}
//             disabled
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Customer Name"
//             variant="standard"
//             value={customerName}
//             onChange={(e) => {
//               setCustomerName(e.target.value);
//             }}
//           />

//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Logo URL"
//             variant="standard"
//             value={logoUrl}
//             onChange={(e) => {
//               setLogoUrl(e.target.value);
//             }}
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Descreption"
//             variant="standard"
//             value={descreption}
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Address Line 1"
//             variant="standard"
//             value={addressL1}
//             onChange={(e) => {
//               setAddressL1(e.target.value);
//             }}
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Address Line 2"
//             variant="standard"
//             value={addressL2}
//             onChange={(e) => {
//               setAddressL2(e.target.value);
//             }}
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="City"
//             variant="standard"
//             value={city}
//             onChange={(e) => {
//               setCity(e.target.value);
//             }}
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="State"
//             variant="standard"
//             value={state}
//             onChange={(e) => {
//               setState(e.target.value);
//             }}
//           />
//           <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Country"
//             variant="standard"
//             value={country}
//             onChange={(e) => {
//               setCountry(e.target.value);
//             }}
//           />

//           {/* <TextField
//             className="addCustomer-form-div-input"
//             id="standard-basic"
//             label="Products"
//             variant="standard"
//             value={products}
//             onChange={(e) => {
//               let value = e.target.value;
//               let prod = value.split(",");
//               setProducts(prod);
//             }}
//           /> */}
//           <div>
//             <Autocomplete
//               multiple
//               id="tags-standard"
//               options={prodObjArr}
//               getOptionLabel={(option) => option}
//               defaultValue={[prodObjArr[1]]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="standard"
//                   label="Multiple values"
//                   placeholder="Favorites"
//                 />
//               )}
//             />
//           </div>
//         </section>
//         <section className="addCustomer-button-section">
//           <Button
//             variant="contained"
//             startIcon={<EditIcon />}
//             // onClick={async () => {
//             //   let token = localStorage.getItem("access_token");
//             //   let productArray = products;
//             //   let prods = [];
//             //   let unavailableProd;
//             //   for (let i = 0; i < productArray.length; i++) {
//             //     let prod = await axios.get(
//             //       `${serverUrl}/getProduct/${productArray[i]}`,
//             //       {
//             //         headers: {
//             //           Authorization: "Bearer " + token,
//             //         },
//             //       }
//             //     );
//             //     if (!prod.data.id) {
//             //       alert(`Product ID "${productArray[i]}" does not exist`);
//             //       unavailableProd = productArray[i];
//             //     } else {
//             //       prods.push({ id: prod.data.id, name: prod.data.name });
//             //     }
//             //   }
//             //   if (unavailableProd) {
//             //     alert(`Product "${unavailableProd}" does not exist`);
//             //   } else {
//             //     if (
//             //       logoUrl.match(
//             //         /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
//             //       ) != null
//             //     ) {
//             //       let newCustomerData = {
//             //         id: customerId,
//             //         name: customerName,
//             //         logoUrl: logoUrl,
//             //         descreption: descreption,
//             //         addressL1: addressL1,
//             //         addressL2: addressL2,
//             //         city: city,
//             //         state: state,
//             //         country: country,
//             //         products: prods,
//             //       };
//             //       console.log(newCustomerData);
//             //       handleUpdateCustomer(newCustomerData);
//             //     } else {
//             //       alert("Please enter valid URL");
//             //     }
//             //   }
//             // }}
//             onClick={() => {
//               let data = countries.filter((cntry) => cntry.name == country);
//               // setCountryId(data[0].isoCode);
//               if (data != []) {
//                 console.log(data);
//               }
//             }}
//           >
//             Update Customer
//           </Button>
//         </section>
//       </div>
//     </div>
//   );
// }

export default function UpdateCustomer() {
  return (
    <div className="main">
      <NavBar />
      <div className="grid h-screen px-4 bg-gray place-content-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Work In Progress
          </h1>

          <BackButton />
        </div>
      </div>
    </div>
  );
}
