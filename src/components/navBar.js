import * as React from "react";
import zealLogo from "../Assets/ZealLogo.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
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
            <p>Nav Item 1</p>
            <p>Nav Item 2</p>
            <p>Nav Item 3</p>
            <p>Nav Item 4</p>
            <p>Nav Item 5</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
