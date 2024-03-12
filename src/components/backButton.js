import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  let router = useRouter();
  return (
    <Button variant="text" onClick={() => router.back()}>
      <ArrowBackIcon />
    </Button>
  );
}
