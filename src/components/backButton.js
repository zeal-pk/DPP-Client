import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function BackButton() {
  let router = useRouter();
  return (
    <Button variant="contained" onClick={() => router.back()}>
      Back
    </Button>
  );
}
