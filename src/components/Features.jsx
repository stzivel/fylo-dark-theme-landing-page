import React from "react";
import icon_security from "../images/icon-security.svg";
import icon_access from "../images/icon-access-anywhere.svg";
import icon_collaboration from "../images/icon-collaboration.svg";
import icon_file from "../images/icon-any-file.svg";

function Features() {
  return (
    <div className="features bg-primary-main py-16  ">
      <div className="features__container  flex flex-col md:grid grid-cols-2  mx-auto   w-[80%] md:w-[100%] max-w-[950px]  ">
        <div className="features__container-contentA flex flex-col justify-between items-center text-white text-center p-16 ">
          <img className="max-w-[86px]" src={icon_access} alt="" />
          <h1 className="text-xl font-bold">Access your files, anywhere</h1>
          <p className="text-sm ">
            {" "}
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div className="features__container-contentB flex flex-col justify-between items-center text-white text-center p-16">
          <img className="max-w-[86px]" src={icon_security} alt="" />
          <h1 className="text-xl font-bold">Security you can trust</h1>
          <p className="text-sm   ">
            {" "}
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div className="features__container-contentC flex flex-col justify-between items-center text-white  text-center p-16">
          <img className="max-w-[86px]" src={icon_collaboration} alt="" />
          <h1 className="text-xl font-bold"> Real-time collaboration</h1>
          <p className="text-sm   ">
            {" "}
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div className="features__container-contentD  flex flex-col justify-between items-center text-white text-center p-16">
          <img className="max-w-[86px]" src={icon_file} alt="" />
          <h1 className="text-xl font-bold">Store any type of file</h1>
          <p className="text-sm   ">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
