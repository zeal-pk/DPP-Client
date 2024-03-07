import * as React from "react";
import { useRouter } from "next/navigation";
import zealLogo from "../assets/ZealLogo.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";
import BackButton from "../components/backButton.js";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image
              src={zealLogo}
              alt="Logo"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <div className="nav-itmes-div">
            <BackButton />
            <Button
              variant="contained"
              onClick={() => {
                localStorage.clear();
                router.push("/");
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
