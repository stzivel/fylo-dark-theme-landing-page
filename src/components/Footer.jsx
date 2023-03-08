import React from "react";
import logo from "../images/logo.svg";
import icon_phone from "../images/icon-phone.svg";
import icon_email from "../images/icon-email.svg";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import EarlyAccess from "./EarlyAccess";

function Footer() {
  return (
    <div className="footer bg-primary-footer p-24 lg:p-32 w-full  relative  ">
      <EarlyAccess />

      <div className="footer__container lg:flex-row flex flex-col  justify-between items-start lg:items-center text-white  mt-40 lg:pt-12 ">
        <div className="footer__container-text flex flex-col space-y-4 lg:max-w-[30%] ">
          <img className="max-w-[100px]" src={logo} alt="" />
          <p className="text-sm">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="footer__container-contact flex flex-col justify-between lg:items-start mt-2 ">
          <div className="footer__container-contact-phone flex justify-between items-center space-x-2">
            <img className="max-w-[15px]" src={icon_phone} alt="" />
            <p>+1-543-123-4567</p>
          </div>

          <div className="footer__container-contact-mail flex justify-between items-center space-x-2">
            <img className="max-w-[15px]" src={icon_email} alt="" />
            <p> example@fylo.com</p>
          </div>
        </div>

        <div className="footer__container-linksA flex flex-col mt-2">
          <h1>
            <a href="#aboutus">About Us</a>
          </h1>
          <h1>
            <a href="#jobs">Jobs</a>
          </h1>
          <h1>
            <a href="#press">Press</a>
          </h1>
          <h1>
            <a href="#blog">Blog</a>
          </h1>
        </div>

        <div className="footer__container-linksB flex flex-col mt-2">
          <h1>
            <a href="#aboutus">Contact Us</a>
          </h1>
          <h1>
            <a href="#terms">Terms</a>
          </h1>
          <h1>
            <a href="#privacy">Privacy</a>
          </h1>
        </div>

        <div className="footer__container-links-social flex text-white mt-2">
          <CiFacebook size={27} />
          <CiTwitter size={27} />
          <CiInstagram size={27} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
