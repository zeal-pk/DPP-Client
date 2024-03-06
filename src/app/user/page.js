"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import NavBar from "@/components/navBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Home() {
  let [customerDetails, setCustomerDetails] = useState([]);

  const Fun = async () => {
    let token = localStorage.getItem("access_token");
    const response = await axios.get(
      "http://dpp-server-app.azurewebsites.net/",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setCustomerDetails(response.data);
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
