"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import Link from "next/link";
import axios from "axios";
import NavBar from "@/components/navBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BackButton from "@/components/backButton";

export default function Home() {
  let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let router = useRouter();
  let [customerDetails, setCustomerDetails] = useState([]);

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    let role = localStorage.getItem("current_user_role");
    if (token && role == "user") {
      try {
        const response = await axios.get(`${serverUrl}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCustomerDetails(response.data);
      } catch (error) {
        if (error.response.status == 403) {
          router.push("/error");
        }
      }
    } else {
      router.push("/error");
    }
    // if (response.status !== 200) {
    //   router.push("/error.js");
    // }
    // console.log(response);
  };
  useEffect(() => {
    Fun();
  }, []);

  return (
    <div className="main">
      <NavBar />
      <h3 className="pageTitle">Customer List</h3>
      {/* --------------------------------- Customer List Section - START */}
      <section className="customerList-scroll">
        <section className="customerList-scroll-content">
          <section className="customerList-section">
            {customerDetails.map((customerDetail) => (
              <Link
                className="customerList-link"
                href={`/user/customerDetails/${customerDetail.id}`}
                key={customerDetail.id}
              >
                <Card
                  sx={{
                    minWidth: 200,
                    maxWidth: 350,
                    minHeight: 200,
                    maxHeight: 200,
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      ID: {customerDetail.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {customerDetail.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {customerDetail.businessType}
                    </Typography>
                    <Typography variant="body2">
                      {customerDetail.descreption}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </section>
        </section>
      </section>
      {/* --------------------------------- Customer List Section - END */}
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="main">
//       <NavBar />
//       <div className="grid h-screen px-4 bg-gray place-content-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Work In Progress
//           </h1>

//           <BackButton />
//         </div>
//       </div>
//     </div>
//   );
// }
