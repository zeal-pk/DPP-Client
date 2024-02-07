"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import NavBar from "@/components/navBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Home() {
  // const router = useRouter();
  let [customerDetails, setCustomerDetails] = useState([]);

  const Fun = async () => {
    const response = await axios.get("http://localhost:9000/");
    console.log(response.data);
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
      <section className="customerList-section">
        {customerDetails.map((customerDetail) => (
          <Link
            className="customerList-link"
            href={`/user/customerDetails/${customerDetail.id}`}
          >
            <Card sx={{ maxWidth: 350 }}>
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
      {/* --------------------------------- Customer List Section - END */}
    </div>
  );
}
