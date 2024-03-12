"use client";
import { useRouter } from "next/navigation.js";
import { Button } from "@mui/material";
import NavBar from "@/components/navBar";

export default function Error() {
  let router = useRouter();
  return (
    <div className="main">
      <NavBar />
      <div className="grid h-screen px-4 bg-gray place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">403</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unauthroized!
          </p>

          <p className="mt-4 text-gray-500">
            You must be logged in to access the page
          </p>

          <Button
            variant="contained"
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
