import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className="navbar flex h-24   bg-primary-main p-4">
      <div className="navbar__content flex justify-between items-center w-full px-4 py-2">
        <div className="navbar__content-image ">
          <img
            className=" xs:max-w-[80px] sm:max-w-[100px]"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="navbar__content-links flex text-white ">
          <a className="mx-1 sm:mx-4" href="#features">
            Features
          </a>
          <a className="mx-1 sm:mx-4" href="#team">
            Team
          </a>
          <a className="mx-1 sm:mx-4" href="#team">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
