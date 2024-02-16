import * as React from "react";
import { useRouter } from "next/navigation";
import zealLogo from "../Assets/ZealLogo.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";

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
